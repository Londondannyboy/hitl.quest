"""
HITL.quest AI Agent
CopilotKit + Pydantic AI integration for Human-in-the-Loop agency
"""
from textwrap import dedent
from typing import Optional, List
from pydantic import BaseModel, Field
from pydantic_ai import Agent, RunContext
from pydantic_ai.ag_ui import StateDeps
from pydantic_ai.models.google import GoogleModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import StreamingResponse
import os
import sys
import json
import uuid
import time
import asyncio

from dotenv import load_dotenv
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# =====
# User Context Cache (for CopilotKit instructions parsing)
# =====
_cached_user_context: dict = {}

def extract_user_from_instructions(instructions: str) -> dict:
    """Extract user info from CopilotKit instructions text or Hume system prompt."""
    result = {"user_id": None, "name": None, "email": None}

    if not instructions:
        return result

    import re

    # Try multiple formats for user ID
    id_match = re.search(r'User ID:\s*([a-f0-9-]+)', instructions, re.IGNORECASE)
    if id_match:
        result["user_id"] = id_match.group(1)

    # Try multiple formats for name (HeroVoice uses "- Name:" format)
    name_patterns = [
        r'User Name:\s*([^\n]+)',      # CopilotKit format
        r'-\s*Name:\s*([^\n]+)',        # HeroVoice format
        r'Name:\s*([^\n]+)',            # Simple format
        r'first name \(([^)]+)\)',      # "first name (Dan)" format
    ]
    for pattern in name_patterns:
        name_match = re.search(pattern, instructions, re.IGNORECASE)
        if name_match:
            result["name"] = name_match.group(1).strip()
            break

    # Try multiple formats for email
    email_patterns = [
        r'User Email:\s*([^\n]+)',     # CopilotKit format
        r'-\s*Email:\s*([^\n]+)',       # HeroVoice format
        r'Email:\s*([^\s\n]+)',         # Simple format
    ]
    for pattern in email_patterns:
        email_match = re.search(pattern, instructions, re.IGNORECASE)
        if email_match:
            result["email"] = email_match.group(1).strip()
            break

    # Cache if we found any user info
    if result["user_id"] or result["name"]:
        global _cached_user_context
        _cached_user_context = result
        print(f"[Agent] Cached user from instructions: {result}", file=sys.stderr)

    return result

def get_effective_user_name(state_user) -> Optional[str]:
    """Get user name from state or cached instructions."""
    if state_user and (state_user.firstName or state_user.name):
        return state_user.firstName or state_user.name
    if _cached_user_context.get("name"):
        return _cached_user_context["name"]
    return None


# =====
# HITL Services Data
# =====
HITL_SERVICES = [
    {
        "name": "AI Customer Service",
        "description": "Chat and email support that handles routine queries instantly, escalates complex issues to humans with full context.",
        "benefits": [
            "24/7 availability with instant response",
            "Handle 10x more tickets without hiring",
            "Seamless escalation to human agents",
            "Full context preservation during handoff",
            "AI learns from human decisions"
        ],
        "tech_stack": ["CopilotKit", "AG-UI", "Zep Memory"],
        "use_cases": ["E-commerce support", "SaaS helpdesk", "Financial services", "Healthcare inquiries"]
    },
    {
        "name": "Voice Call Systems",
        "description": "AI voice agents with emotional intelligence that detect when to transfer to humans. Natural, empathetic conversations.",
        "benefits": [
            "Emotional awareness through Hume AI",
            "Natural conversation flow",
            "Sentiment-based escalation",
            "Call transfer with full context",
            "Reduces wait times dramatically"
        ],
        "tech_stack": ["Hume AI EVI", "Pydantic AI", "WebRTC"],
        "use_cases": ["Call centers", "Appointment booking", "Technical support", "Customer callbacks"]
    },
    {
        "name": "Document Processing",
        "description": "AI extracts and validates data, flags uncertain items for human review. 10x faster with human-level accuracy.",
        "benefits": [
            "Automated data extraction",
            "Confidence scoring for review routing",
            "Human review for edge cases",
            "Compliance audit trails",
            "Structured, validated output"
        ],
        "tech_stack": ["Pydantic AI", "Structured Output", "Classification Models"],
        "use_cases": ["Invoice processing", "Contract analysis", "Medical records", "Insurance claims"]
    },
    {
        "name": "Content Moderation",
        "description": "AI filters obvious violations, surfaces edge cases for human judgment. Scale moderation without sacrificing quality.",
        "benefits": [
            "99%+ clear cases handled by AI",
            "Nuanced decisions by humans",
            "Consistent policy enforcement",
            "Reduced moderator burnout",
            "Continuous learning from decisions"
        ],
        "tech_stack": ["Classification AI", "Human Review Queues", "Feedback Loops"],
        "use_cases": ["Social platforms", "Marketplaces", "Comment sections", "User uploads"]
    },
    {
        "name": "Decision Support",
        "description": "AI analyzes data and suggests actions, humans approve or override. Augment expertise, don't replace it.",
        "benefits": [
            "Data-driven recommendations",
            "Human final authority",
            "Explainable AI suggestions",
            "Continuous model improvement",
            "Risk flagging and alerts"
        ],
        "tech_stack": ["Analytics AI", "Workflow Engines", "Approval Systems"],
        "use_cases": ["Loan approvals", "Hiring decisions", "Medical diagnosis assist", "Trading signals"]
    }
]

TECH_STACK = {
    "copilotkit": {
        "name": "CopilotKit",
        "category": "AI UI Framework",
        "description": "Open-source framework for building AI-powered chat interfaces and copilots. Provides React components for chat, sidebars, and AI interactions.",
        "why_we_use": "Best-in-class developer experience for building conversational AI interfaces. Handles state, streaming, and tool calling seamlessly.",
        "url": "https://copilotkit.ai"
    },
    "ag_ui": {
        "name": "AG-UI Protocol",
        "category": "Agent Protocol",
        "description": "Agent protocol for connecting AI agents to frontend applications. Standardized communication between AI backends and UIs.",
        "why_we_use": "Enables our Pydantic AI agents to communicate with CopilotKit frontends using a standardized protocol.",
        "url": "https://ag-ui.com"
    },
    "pydantic_ai": {
        "name": "Pydantic AI",
        "category": "Agent Framework",
        "description": "Python framework for building AI agents with structured, validated outputs using Pydantic models.",
        "why_we_use": "Type-safe, structured AI outputs. Perfect for document processing and data extraction where accuracy matters.",
        "url": "https://pydantic.dev"
    },
    "hume": {
        "name": "Hume AI",
        "category": "Emotional Voice AI",
        "description": "Voice AI with emotional intelligence. EVI (Empathic Voice Interface) understands and responds to emotional cues.",
        "why_we_use": "Essential for voice systems where emotional awareness determines when to escalate to humans. Natural, empathetic conversations.",
        "url": "https://hume.ai"
    },
    "zep": {
        "name": "Zep",
        "category": "Memory Layer",
        "description": "Long-term memory for AI assistants. Stores conversation history and user facts in a knowledge graph.",
        "why_we_use": "Enables our agents to remember user context across sessions. Critical for personalized HITL experiences.",
        "url": "https://getzep.com"
    },
    "nextjs": {
        "name": "Next.js",
        "category": "React Framework",
        "description": "The React framework for production. Server-side rendering, API routes, and optimized performance.",
        "why_we_use": "Industry-standard framework for production React applications. Excellent DX and performance.",
        "url": "https://nextjs.org"
    }
}

HITL_CONCEPTS = {
    "what_is_hitl": {
        "title": "What is Human-in-the-Loop?",
        "explanation": "Human-in-the-Loop (HITL) is an AI design philosophy where humans and machines collaborate. The AI handles high-volume, routine tasks while humans step in for complex situations, edge cases, or when empathy and judgment are needed.",
        "key_benefits": [
            "95%+ customer satisfaction (vs 60-70% for full automation)",
            "80% of volume handled by AI",
            "10x faster than manual processing",
            "Continuous improvement from human decisions",
            "Trust and accountability through human oversight"
        ]
    },
    "escalation": {
        "title": "How Escalation Works",
        "explanation": "Our systems use multiple signals to detect when human intervention is needed: confidence scores, sentiment analysis, complexity detection, and explicit user requests.",
        "key_points": [
            "AI assesses every interaction for complexity",
            "Low confidence triggers automatic escalation",
            "Negative sentiment detected via Hume AI",
            "Full context passed to human agent",
            "Customer never repeats themselves"
        ]
    },
    "continuous_learning": {
        "title": "Continuous Learning",
        "explanation": "Every human decision teaches the AI. When humans override or adjust AI suggestions, those decisions become training data.",
        "key_points": [
            "Human corrections improve AI models",
            "Feedback loops built into workflows",
            "Models retrained on production data",
            "Edge cases become future training examples",
            "System gets smarter over time"
        ]
    }
}


# =====
# State Models
# =====
class UserProfile(BaseModel):
    id: Optional[str] = None
    name: Optional[str] = None
    firstName: Optional[str] = None
    email: Optional[str] = None


class AppState(BaseModel):
    user: Optional[UserProfile] = None
    # User's interest areas
    interested_services: list[str] = Field(default_factory=list)
    company_type: Optional[str] = None  # "startup", "enterprise", "agency"
    use_case: Optional[str] = None
    # Current page context from frontend
    current_page: Optional[str] = None


# =====
# Agent Definition
# =====
agent = Agent(
    model=GoogleModel('gemini-2.0-flash'),
    deps_type=StateDeps[AppState],
    system_prompt=dedent("""
        You are the AI assistant for HITL.quest - a Human-in-the-Loop AI agency.
        You help potential clients understand our services and the value of combining AI automation with human oversight.

        ## Your Personality
        - Professional but approachable
        - Knowledgeable about AI and HITL design
        - Enthusiastic about human-AI collaboration
        - Clear and jargon-free explanations

        ## Your Mission
        Help visitors understand:
        1. What Human-in-the-Loop means
        2. Our services (customer service AI, voice, documents, moderation)
        3. Our tech stack (CopilotKit, Hume, Pydantic AI, etc.)
        4. Why HITL is better than full automation OR full manual

        ## Key Value Propositions
        - 95%+ customer satisfaction (vs 60-70% for full automation)
        - 80% of volume handled by AI
        - 10x faster than manual processing
        - AI learns from human decisions
        - Enterprise security and compliance

        ## Available Tools - USE THEM
        | User asks about... | Use this tool |
        |-------------------|---------------|
        | Our services | get_services |
        | A specific service | get_service_details |
        | Tech stack / tools | get_tech_stack |
        | What HITL means | explain_hitl |
        | How escalation works | explain_escalation |
        | Their profile | get_my_profile |
        | Getting started | get_next_steps |

        ## Conversation Guidelines
        - Address logged-in users by name
        - Use bullet points for clarity
        - Keep responses concise (this is also used for voice)
        - Ask clarifying questions about their needs
        - Encourage them to reach out via /contact

        ## Meta: You ARE a HITL Demo
        Point out that this very conversation is an example of our work!
        The CopilotKit chat and Hume voice integration on this site demonstrate our capabilities.

        Remember: We build AI that knows when to ask for help. Be helpful and showcase our expertise!
    """)
)


# Page context descriptions
PAGE_CONTEXTS = {
    "customer-service": "User is exploring AI Customer Service solutions. Focus on chat/email automation, escalation, and 10x ticket handling.",
    "voice": "User is exploring Voice Call Systems. Focus on Hume AI, emotional intelligence, and seamless call transfer.",
    "document-processing": "User is exploring Document Processing. Focus on extraction, validation, human review for uncertain items.",
    "content-moderation": "User is exploring Content Moderation. Focus on AI filtering, human judgment for edge cases, scaling.",
    "contact": "User is on the Contact page. Help them articulate their needs and encourage form submission.",
    "homepage": "User is on the homepage. Give overview of HITL and help them explore services."
}

# Dynamic instructions that inject user context from state
@agent.instructions
async def user_context_instructions(ctx: RunContext[StateDeps[AppState]]) -> str:
    """Inject user context into the system prompt dynamically."""
    state = ctx.deps.state
    user = state.user if state else None

    # Get page context
    current_page = state.current_page if state else None
    page_context = PAGE_CONTEXTS.get(current_page or "", PAGE_CONTEXTS["homepage"])

    # Build user context section
    if user and (user.name or user.firstName):
        first_name = user.firstName or (user.name.split()[0] if user.name else None)

        return dedent(f"""
            ## CURRENT PAGE CONTEXT
            {page_context}

            ## CURRENT USER CONTEXT
            You are speaking with a logged-in user:
            - Name: {user.name or 'Unknown'}
            - First Name: {first_name or 'Unknown'}
            - Email: {user.email or 'Not provided'}
            - Interested Services: {', '.join(state.interested_services) if state.interested_services else 'Not specified'}
            - Company Type: {state.company_type or 'Not specified'}
            - Use Case: {state.use_case or 'Not specified'}

            IMPORTANT INSTRUCTIONS:
            - ALWAYS address the user by their first name ({first_name}) in your responses
            - When they ask about their profile, tell them: "{user.name}"
            - Reference their interests when relevant
        """)
    else:
        return dedent(f"""
            ## CURRENT PAGE CONTEXT
            {page_context}

            ## GUEST USER
            This user is not logged in. They can browse general information.
            Encourage them to sign in for a personalized experience.
        """)


# =====
# Tools
# =====
@agent.tool
def get_services(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """
    Get an overview of all HITL services we offer.
    Use when the user wants to know what we do.
    """
    return {
        "title": "Our Human-in-the-Loop Services",
        "services": [
            {
                "name": s["name"],
                "description": s["description"],
                "tech_stack": s["tech_stack"]
            }
            for s in HITL_SERVICES
        ],
        "note": "Each service combines AI automation with intelligent human escalation for the best of both worlds."
    }


@agent.tool
def get_service_details(
    ctx: RunContext[StateDeps[AppState]],
    service_name: str
) -> dict:
    """
    Get detailed information about a specific service.

    Args:
        service_name: The service to get details for (e.g., "customer service", "voice", "document", "moderation", "decision")
    """
    service_lower = service_name.lower()

    for service in HITL_SERVICES:
        if any(keyword in service_lower for keyword in service["name"].lower().split()):
            return {
                "service": service["name"],
                "description": service["description"],
                "benefits": service["benefits"],
                "tech_stack": service["tech_stack"],
                "use_cases": service["use_cases"]
            }

    return {
        "error": f"Service not found: {service_name}",
        "available_services": [s["name"] for s in HITL_SERVICES],
        "suggestion": "Try: 'customer service', 'voice', 'document processing', 'content moderation', or 'decision support'"
    }


@agent.tool
def get_tech_stack(
    ctx: RunContext[StateDeps[AppState]],
    technology: Optional[str] = None
) -> dict:
    """
    Get information about our tech stack.

    Args:
        technology: Optional specific technology to learn about (e.g., "copilotkit", "hume", "pydantic")
    """
    if technology:
        tech_lower = technology.lower().replace(" ", "_").replace("-", "_")

        # Handle variations
        if "copilot" in tech_lower:
            tech_lower = "copilotkit"
        elif "ag" in tech_lower or "agui" in tech_lower:
            tech_lower = "ag_ui"
        elif "pydantic" in tech_lower:
            tech_lower = "pydantic_ai"
        elif "hume" in tech_lower:
            tech_lower = "hume"
        elif "zep" in tech_lower:
            tech_lower = "zep"
        elif "next" in tech_lower:
            tech_lower = "nextjs"

        if tech_lower in TECH_STACK:
            tech = TECH_STACK[tech_lower]
            return {
                "technology": tech["name"],
                "category": tech["category"],
                "description": tech["description"],
                "why_we_use": tech["why_we_use"],
                "url": tech["url"]
            }
        else:
            return {
                "error": f"Technology not found: {technology}",
                "available": list(TECH_STACK.keys())
            }

    # Return all tech stack
    return {
        "title": "Our Tech Stack",
        "technologies": [
            {
                "name": t["name"],
                "category": t["category"],
                "why_we_use": t["why_we_use"]
            }
            for t in TECH_STACK.values()
        ]
    }


@agent.tool
def explain_hitl(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """
    Explain what Human-in-the-Loop AI means.
    Use when the user asks about HITL concepts.
    """
    concept = HITL_CONCEPTS["what_is_hitl"]
    return {
        "title": concept["title"],
        "explanation": concept["explanation"],
        "key_benefits": concept["key_benefits"],
        "comparison": {
            "full_automation": {
                "satisfaction": "60-70%",
                "handles": "Simple queries only",
                "edge_cases": "Fails or frustrates"
            },
            "full_manual": {
                "satisfaction": "High but slow",
                "handles": "Everything",
                "edge_cases": "Expensive at scale"
            },
            "hitl": {
                "satisfaction": "95%+",
                "handles": "80% by AI, 20% by humans",
                "edge_cases": "Seamlessly escalated"
            }
        }
    }


@agent.tool
def explain_escalation(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """
    Explain how the escalation to humans works.
    Use when user asks about handoffs or escalation.
    """
    concept = HITL_CONCEPTS["escalation"]
    return {
        "title": concept["title"],
        "explanation": concept["explanation"],
        "how_it_works": concept["key_points"],
        "triggers": [
            "Low AI confidence score",
            "Negative sentiment detected",
            "Complex multi-step request",
            "User explicitly asks for human",
            "High-stakes decision required"
        ],
        "what_human_sees": [
            "Full conversation history",
            "AI analysis and suggestions",
            "Customer intent summary",
            "Recommended actions"
        ]
    }


@agent.tool
def get_next_steps(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """
    Get next steps for working with HITL.quest.
    Use when user wants to get started or asks about process.
    """
    return {
        "title": "Getting Started with HITL.quest",
        "steps": [
            {
                "step": 1,
                "title": "Discovery Call",
                "description": "We learn about your current processes, pain points, and goals."
            },
            {
                "step": 2,
                "title": "Solution Design",
                "description": "We design a custom HITL system for your specific needs."
            },
            {
                "step": 3,
                "title": "MVP Build",
                "description": "We build a minimum viable product to validate the approach."
            },
            {
                "step": 4,
                "title": "Deploy & Iterate",
                "description": "We deploy, monitor, and continuously improve based on real data."
            }
        ],
        "cta": "Ready to start? Fill out the contact form at /contact and we'll be in touch!"
    }


@agent.tool
def get_my_profile(ctx: RunContext[StateDeps[AppState]]) -> dict:
    """
    Get the current user's profile information.
    Use when user asks about their profile or account.
    """
    state = ctx.deps.state
    user = state.user if state else None

    # Try to get info from state first, then from cached instructions
    user_id = user.id if user and user.id else _cached_user_context.get("user_id")
    name = get_effective_user_name(user)
    first_name = user.firstName if user and user.firstName else (name.split()[0] if name else None)
    email = user.email if user and user.email else _cached_user_context.get("email")

    if not user_id and not name:
        return {
            "logged_in": False,
            "message": "You're not currently logged in. Sign in to save your preferences and get a personalized experience.",
            "action": "Click 'Sign In' in the navigation to create an account."
        }

    return {
        "logged_in": True,
        "user_id": user_id,
        "name": name,
        "first_name": first_name,
        "email": email,
        "interests": {
            "services": state.interested_services if state else [],
            "company_type": state.company_type if state else None,
            "use_case": state.use_case if state else None
        },
        "message": f"Hi {first_name}! Here's your profile information."
    }


# =====
# FastAPI App Setup
# =====
# Export agent as AG-UI app
ag_ui_app = agent.to_ag_ui(deps=StateDeps(AppState()))

# Main FastAPI app
main_app = FastAPI(title="HITL.quest Agent", description="AI assistant for Human-in-the-Loop agency")

# CORS middleware
main_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@main_app.get("/")
def root():
    """Health check endpoint."""
    return {
        "status": "ok",
        "agent": "hitl-quest-agent",
        "endpoints": [
            "/agui (AG-UI for CopilotKit)",
            "/chat/completions (CLM for Hume Voice)",
            "/health"
        ]
    }

@main_app.get("/health")
def health():
    """Health check for Railway."""
    return {"status": "healthy"}


# =====
# CLM Endpoint for Hume Voice
# =====
class ChatMessage(BaseModel):
    role: str
    content: str


class ChatCompletionRequest(BaseModel):
    messages: List[ChatMessage]
    model: Optional[str] = "hitl-quest-agent"
    stream: Optional[bool] = True


async def stream_sse_response(content: str, msg_id: str):
    """Stream OpenAI-compatible SSE chunks for Hume EVI."""
    words = content.split(' ')
    for i, word in enumerate(words):
        chunk = {
            "id": msg_id,
            "object": "chat.completion.chunk",
            "created": int(time.time()),
            "model": "hitl-quest-agent",
            "choices": [{
                "index": 0,
                "delta": {"content": word + (' ' if i < len(words) - 1 else '')},
                "finish_reason": None
            }]
        }
        yield f"data: {json.dumps(chunk)}\n\n"
        await asyncio.sleep(0.01)

    final = {
        "id": msg_id,
        "object": "chat.completion.chunk",
        "choices": [{"index": 0, "delta": {}, "finish_reason": "stop"}]
    }
    yield f"data: {json.dumps(final)}\n\n"
    yield "data: [DONE]\n\n"


async def run_agent_for_clm(user_message: str, system_prompt: str = None) -> str:
    """Run the Pydantic AI agent and return text response."""
    try:
        # Extract user context from system prompt if provided
        if system_prompt:
            extract_user_from_instructions(system_prompt)

        print(f"[CLM] Starting agent run for: {user_message[:50]}", file=sys.stderr)
        print(f"[CLM] Cached user context: {_cached_user_context}", file=sys.stderr)

        # Build state with cached user if available
        state = AppState()
        if _cached_user_context.get("name") or _cached_user_context.get("user_id"):
            state.user = UserProfile(
                id=_cached_user_context.get("user_id"),
                name=_cached_user_context.get("name"),
                firstName=_cached_user_context.get("name"),
                email=_cached_user_context.get("email")
            )
            print(f"[CLM] State user set: {state.user.name}", file=sys.stderr)

        deps = StateDeps(state)
        result = await agent.run(user_message, deps=deps)
        print(f"[CLM] Agent result type: {type(result)}", file=sys.stderr)

        # Pydantic AI returns result.output for the text response
        if hasattr(result, 'output') and result.output:
            return str(result.output)
        if hasattr(result, 'data') and result.data:
            return str(result.data)
        return str(result)
    except Exception as e:
        import traceback
        print(f"[CLM] Agent error: {e}", file=sys.stderr)
        print(f"[CLM] Traceback: {traceback.format_exc()}", file=sys.stderr)
        return "Sorry, I couldn't process that request. Try asking about our HITL services!"


@main_app.post("/chat/completions")
async def clm_endpoint(request: ChatCompletionRequest):
    """OpenAI-compatible endpoint for Hume CLM."""
    # Extract system prompt (contains user context from Hume)
    system_prompt = None
    for msg in request.messages:
        if msg.role == "system":
            system_prompt = msg.content
            print(f"[CLM] Found system prompt: {system_prompt[:100]}...", file=sys.stderr)
            break

    # Get user message (last non-system message)
    user_message = ""
    for msg in reversed(request.messages):
        if msg.role == "user":
            user_message = msg.content
            break
    print(f"[CLM] Query: {user_message[:80]}", file=sys.stderr)

    # Run agent with system prompt for user context
    response_text = await run_agent_for_clm(user_message, system_prompt)
    print(f"[CLM] Response: {response_text[:80]}", file=sys.stderr)

    if request.stream:
        msg_id = f"chatcmpl-{uuid.uuid4().hex[:8]}"
        return StreamingResponse(
            stream_sse_response(response_text, msg_id),
            media_type="text/event-stream"
        )
    else:
        return {
            "id": f"chatcmpl-{uuid.uuid4().hex[:8]}",
            "object": "chat.completion",
            "created": int(time.time()),
            "model": "hitl-quest-agent",
            "choices": [{
                "index": 0,
                "message": {"role": "assistant", "content": response_text},
                "finish_reason": "stop"
            }]
        }


# Mount AG-UI app for CopilotKit
main_app.mount("/agui", ag_ui_app)

# Export for uvicorn
app = main_app
