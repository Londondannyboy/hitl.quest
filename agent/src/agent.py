"""
Yoga Teacher Insurance Agent
CopilotKit + Pydantic AI integration for insurance advice
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
# Insurance Data (Static for MVP, can move to DB later)
# =====
INSURANCE_PROVIDERS = [
    {
        "name": "Balens",
        "specialty": "Yoga and holistic therapies specialist",
        "public_liability": "£1m - £5m",
        "professional_indemnity": "£1m - £5m",
        "annual_cost_from": 60,
        "annual_cost_to": 150,
        "covers_aerial": True,
        "covers_hot_yoga": True,
        "covers_teacher_training": True,
        "website": "https://www.balens.co.uk",
        "highlights": ["Yoga specialist since 1960s", "Covers 350+ therapies", "Instant cover available"]
    },
    {
        "name": "BGI",
        "specialty": "Fitness and sports insurance",
        "public_liability": "£1m - £10m",
        "professional_indemnity": "£1m - £5m",
        "annual_cost_from": 55,
        "annual_cost_to": 180,
        "covers_aerial": True,
        "covers_hot_yoga": True,
        "covers_teacher_training": True,
        "website": "https://www.bgiuk.com",
        "highlights": ["Part of Hiscox group", "Online quote system", "Covers equipment"]
    },
    {
        "name": "Insure4Sport",
        "specialty": "Sports and fitness professionals",
        "public_liability": "£1m - £10m",
        "professional_indemnity": "£1m - £5m",
        "annual_cost_from": 50,
        "annual_cost_to": 160,
        "covers_aerial": True,
        "covers_hot_yoga": True,
        "covers_teacher_training": False,
        "website": "https://www.insure4sport.co.uk",
        "highlights": ["Quick online quotes", "Monthly payment option", "24/7 claims"]
    },
    {
        "name": "Sports Coach UK",
        "specialty": "Coaches and instructors",
        "public_liability": "£5m - £10m",
        "professional_indemnity": "£1m - £5m",
        "annual_cost_from": 65,
        "annual_cost_to": 140,
        "covers_aerial": False,
        "covers_hot_yoga": True,
        "covers_teacher_training": True,
        "website": "https://www.sportscoachuk.org",
        "highlights": ["Includes first aid cover", "Equipment cover available", "Multi-activity policies"]
    }
]

COVERAGE_TYPES = {
    "public_liability": {
        "name": "Public Liability Insurance",
        "description": "Covers you if a student or member of the public is injured during your class, or if you damage someone's property.",
        "required": True,
        "typical_amount": "£1m - £5m",
        "why_needed": "Most venues require this before you can teach. Covers legal costs if someone sues you for injury.",
        "examples": [
            "A student slips on a yoga mat and breaks their wrist",
            "You accidentally damage a mirror at the studio",
            "A student trips over your bag and injures themselves"
        ]
    },
    "professional_indemnity": {
        "name": "Professional Indemnity Insurance",
        "description": "Covers you if a student claims your instruction caused them harm or you gave negligent advice.",
        "required": True,
        "typical_amount": "£1m - £5m",
        "why_needed": "Protects you from claims that your teaching methods or advice caused injury.",
        "examples": [
            "A student claims your adjustment caused a back injury",
            "Someone alleges your breathing instruction caused them to faint",
            "A student says your advice worsened their condition"
        ]
    },
    "personal_accident": {
        "name": "Personal Accident Insurance",
        "description": "Covers YOUR injuries if you're hurt while teaching.",
        "required": False,
        "typical_amount": "Up to £50,000",
        "why_needed": "Provides income protection if you can't work due to injury.",
        "examples": [
            "You injure yourself demonstrating a pose",
            "You slip and hurt your back during class",
            "You're injured traveling to a class"
        ]
    },
    "equipment": {
        "name": "Equipment Insurance",
        "description": "Covers your yoga props, mats, speakers, and other teaching equipment.",
        "required": False,
        "typical_amount": "Up to £5,000",
        "why_needed": "Protects your investment in professional equipment.",
        "examples": [
            "Your yoga props are stolen from your car",
            "Your speaker system is damaged in transit",
            "Your bolsters are damaged by water leak at studio"
        ]
    }
}

YOGA_STYLES = {
    "aerial": {
        "name": "Aerial Yoga",
        "risk_level": "Higher",
        "insurance_notes": "Requires specialist cover. Not all insurers cover aerial. Check hammock/silk rigging is included.",
        "typical_premium_increase": "10-30%"
    },
    "hot_yoga": {
        "name": "Hot Yoga / Bikram",
        "risk_level": "Higher",
        "insurance_notes": "Higher risk due to heat. Ensure dehydration/heat-related incidents are covered.",
        "typical_premium_increase": "10-20%"
    },
    "vinyasa": {
        "name": "Vinyasa Flow",
        "risk_level": "Standard",
        "insurance_notes": "Standard coverage usually sufficient. Check adjustment/hands-on work is covered.",
        "typical_premium_increase": "0%"
    },
    "hatha": {
        "name": "Hatha Yoga",
        "risk_level": "Lower",
        "insurance_notes": "Generally lower risk. Most basic policies will cover this.",
        "typical_premium_increase": "0%"
    },
    "yin": {
        "name": "Yin Yoga",
        "risk_level": "Lower",
        "insurance_notes": "Passive style with lower injury risk. Standard cover usually fine.",
        "typical_premium_increase": "0%"
    },
    "prenatal": {
        "name": "Prenatal/Postnatal Yoga",
        "risk_level": "Higher",
        "insurance_notes": "Specialist cover required. Check pregnancy complications are included.",
        "typical_premium_increase": "15-25%"
    },
    "teacher_training": {
        "name": "Teacher Training",
        "risk_level": "Standard",
        "insurance_notes": "Not all policies cover running teacher training courses. Verify before signing up.",
        "typical_premium_increase": "10-20%"
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
    # User's preferences for personalized recommendations
    yoga_styles: list[str] = Field(default_factory=list)
    teaching_locations: list[str] = Field(default_factory=list)  # studio, home, outdoor, online
    student_count: Optional[str] = None  # "1-10", "11-50", "50+"
    has_existing_insurance: bool = False
    # Current page context from frontend
    current_page: Optional[str] = None  # e.g., "aerial-yoga-insurance", "homepage"


# =====
# Agent Definition
# =====
agent = Agent(
    model=GoogleModel('gemini-2.0-flash'),
    deps_type=StateDeps[AppState],
    system_prompt=dedent("""
        You are a friendly, knowledgeable yoga insurance advisor named Namaste (or just "your yoga insurance guide").
        You speak with a calm, supportive energy - like a trusted yoga teacher helping with practical matters.

        ## Your Personality
        - Warm and zen-like - use gentle, calming language
        - Clear and jargon-free - explain insurance in simple terms
        - Encouraging - help them feel confident about protecting their practice
        - Use occasional yoga/mindfulness references naturally (not forced)

        ## CRITICAL: PROFILE COMPLETION FIRST
        Before recommending ANY insurance providers, you MUST gather the user's teaching profile.
        This is like completing a yoga sequence - each step builds on the last.

        **The 5 Essential Questions (ask one at a time, conversationally):**

        1. **STYLES** - "What yoga styles do you teach?"
           Examples: Vinyasa, Hatha, Yin, Restorative, Aerial, Hot/Bikram, Prenatal, Meditation

        2. **LOCATIONS** - "Where do you teach your classes?"
           Examples: Studio, Gym, Private homes, Outdoors, Online, Corporate, Schools

        3. **EXPERIENCE** - "How long have you been teaching?"
           Examples: Training now, 0-2 years, 2-5 years, 5+ years

        4. **STUDENTS** - "How many students do you typically teach per class?"
           Examples: 1-1 private, Small groups (2-10), Medium (11-20), Large (20+)

        5. **CURRENT COVER** - "Do you currently have any yoga teacher insurance?"
           Yes/No and with whom if yes

        **Flow like a sun salutation:**
        - Ask ONE question at a time
        - Acknowledge their answer warmly
        - Build on what they share
        - Only recommend providers AFTER you understand their needs

        ## Your Expertise
        - UK yoga teacher insurance requirements
        - Coverage types: public liability, professional indemnity, equipment
        - Specialist needs for aerial, hot, prenatal yoga
        - Provider comparison and recommendations

        ## Available Tools - ALWAYS USE THEM
        | User needs... | Use this tool |
        |---------------|---------------|
        | Compare providers | compare_providers |
        | Explain coverage type | explain_coverage |
        | Style-specific requirements | get_style_requirements |
        | Specific provider details | get_provider_info |
        | Their profile/name | get_my_profile |
        | Quote preparation | get_quick_quote_checklist |

        ## Key Insurance Facts
        - Most venues REQUIRE insurance before you can teach
        - Public liability: £1m-£5m typical (£5m recommended)
        - Aerial/hot yoga needs SPECIALIST cover
        - Prenatal yoga requires pregnancy-specific coverage
        - Teacher training courses need explicit cover

        ## Conversation Style
        - Greet logged-in users by name (use get_my_profile)
        - Be encouraging about their yoga journey
        - Use bullet points for clarity
        - Include specific prices when available
        - End with a clear next step

        Remember: Complete profile first, recommend second. Namaste! 🧘
    """)
)


# Page context descriptions
PAGE_CONTEXTS = {
    "aerial-yoga-insurance": "The user is on the AERIAL YOGA INSURANCE page. Focus on hammock/silk equipment, fall risks, rigging liability, and specialist coverage requirements.",
    "hot-yoga-insurance": "The user is on the HOT YOGA INSURANCE page. Focus on heat-related risks, dehydration, Bikram requirements, and heated environment coverage.",
    "meditation-teacher-insurance": "The user is on the MEDITATION TEACHER INSURANCE page. Focus on mindfulness, breathwork, lower physical risk, and mental health considerations.",
    "yoga-studio-insurance": "The user is on the YOGA STUDIO INSURANCE page. Focus on business coverage, employer's liability, property insurance, and multi-teacher policies.",
    "public-liability-insurance": "The user is on the PUBLIC LIABILITY INSURANCE page. Focus on what PL covers, coverage amounts (£1m-£10m), and venue requirements.",
    "user-profile": "The user is on their PROFILE page. Help them complete their profile and explain how their choices affect insurance needs.",
    "pilates-instructor-insurance": "The user is on the PILATES INSTRUCTOR page. Focus on combined yoga-pilates coverage.",
    "compare-providers": "The user is on the COMPARE PROVIDERS page. Help them compare Balens, BGI, Insure4Sport, and others.",
    "insurance-costs": "The user is on the COSTS page. Focus on pricing, factors affecting cost, and value for money.",
    "homepage": "The user is on the HOMEPAGE. Give general guidance and help them find what they need.",
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
        yoga_styles = ", ".join(state.yoga_styles) if state.yoga_styles else "Not specified"
        locations = ", ".join(state.teaching_locations) if state.teaching_locations else "Not specified"

        return dedent(f"""
            ## CURRENT PAGE CONTEXT
            {page_context}

            ## CURRENT USER CONTEXT
            You are speaking with a logged-in user. Here is their information:
            - Name: {user.name or 'Unknown'}
            - First Name: {first_name or 'Unknown'}
            - Email: {user.email or 'Not provided'}
            - Yoga Styles They Teach: {yoga_styles}
            - Teaching Locations: {locations}
            - Student Count: {state.student_count or 'Not specified'}
            - Has Existing Insurance: {'Yes' if state.has_existing_insurance else 'No'}

            IMPORTANT INSTRUCTIONS:
            - ALWAYS address the user by their first name ({first_name}) in your responses
            - When they ask "what's my name", "who am I", or about their profile, tell them: "{user.name}"
            - Use their preferences to give personalized insurance recommendations
            - Reference the current page context when relevant
            - If they teach aerial or hot yoga, proactively mention specialist coverage requirements
        """)
    else:
        return dedent(f"""
            ## CURRENT PAGE CONTEXT
            {page_context}

            ## GUEST USER
            This user is not logged in. They can browse general insurance information.
            Encourage them to sign in for personalized recommendations.
        """)


# =====
# Tools
# =====
@agent.tool
def compare_providers(
    ctx: RunContext[StateDeps[AppState]],
    yoga_style: Optional[str] = None
) -> dict:
    """
    Compare UK yoga teacher insurance providers.
    Shows pricing, coverage levels, and key features.

    Args:
        yoga_style: Optional filter for providers that cover specific styles (e.g., "aerial", "hot_yoga")
    """
    providers = INSURANCE_PROVIDERS

    # Filter by yoga style if specified
    if yoga_style:
        style_lower = yoga_style.lower().replace(" ", "_")
        if style_lower == "aerial":
            providers = [p for p in providers if p["covers_aerial"]]
        elif style_lower in ["hot", "hot_yoga", "bikram"]:
            providers = [p for p in providers if p["covers_hot_yoga"]]
        elif style_lower in ["teacher_training", "teacher training", "ytt"]:
            providers = [p for p in providers if p["covers_teacher_training"]]

    return {
        "title": f"UK Yoga Insurance Providers" + (f" (covering {yoga_style})" if yoga_style else ""),
        "providers": providers,
        "note": "Prices are approximate and vary based on coverage level and yoga styles taught."
    }


@agent.tool
def explain_coverage(
    ctx: RunContext[StateDeps[AppState]],
    coverage_type: str
) -> dict:
    """
    Explain what a specific type of insurance coverage means for yoga teachers.

    Args:
        coverage_type: The type of coverage to explain (e.g., "public_liability", "professional_indemnity", "equipment")
    """
    # Normalize the input
    coverage_key = coverage_type.lower().replace(" ", "_")

    # Handle common variations
    if "liability" in coverage_key and "public" in coverage_key:
        coverage_key = "public_liability"
    elif "indemnity" in coverage_key or "professional" in coverage_key:
        coverage_key = "professional_indemnity"
    elif "accident" in coverage_key or "personal" in coverage_key:
        coverage_key = "personal_accident"
    elif "equipment" in coverage_key or "prop" in coverage_key:
        coverage_key = "equipment"

    if coverage_key in COVERAGE_TYPES:
        coverage = COVERAGE_TYPES[coverage_key]
        return {
            "coverage_type": coverage["name"],
            "description": coverage["description"],
            "required": coverage["required"],
            "typical_amount": coverage["typical_amount"],
            "why_needed": coverage["why_needed"],
            "examples": coverage["examples"]
        }
    else:
        return {
            "error": f"Unknown coverage type: {coverage_type}",
            "available_types": list(COVERAGE_TYPES.keys()),
            "suggestion": "Try: public_liability, professional_indemnity, personal_accident, or equipment"
        }


@agent.tool
def get_style_requirements(
    ctx: RunContext[StateDeps[AppState]],
    yoga_style: str
) -> dict:
    """
    Get insurance requirements and considerations for a specific yoga style.

    Args:
        yoga_style: The yoga style to check (e.g., "aerial", "hot_yoga", "vinyasa", "prenatal")
    """
    # Normalize the input
    style_key = yoga_style.lower().replace(" ", "_").replace("-", "_")

    # Handle common variations
    if "aerial" in style_key:
        style_key = "aerial"
    elif "hot" in style_key or "bikram" in style_key:
        style_key = "hot_yoga"
    elif "vinyasa" in style_key or "flow" in style_key:
        style_key = "vinyasa"
    elif "hatha" in style_key:
        style_key = "hatha"
    elif "yin" in style_key or "restorative" in style_key:
        style_key = "yin"
    elif "prenatal" in style_key or "postnatal" in style_key or "pregnancy" in style_key:
        style_key = "prenatal"
    elif "teacher" in style_key or "training" in style_key or "ytt" in style_key:
        style_key = "teacher_training"

    if style_key in YOGA_STYLES:
        style = YOGA_STYLES[style_key]
        # Also get providers that cover this style
        if style_key == "aerial":
            suitable_providers = [p["name"] for p in INSURANCE_PROVIDERS if p["covers_aerial"]]
        elif style_key == "hot_yoga":
            suitable_providers = [p["name"] for p in INSURANCE_PROVIDERS if p["covers_hot_yoga"]]
        elif style_key == "teacher_training":
            suitable_providers = [p["name"] for p in INSURANCE_PROVIDERS if p["covers_teacher_training"]]
        else:
            suitable_providers = [p["name"] for p in INSURANCE_PROVIDERS]

        return {
            "style": style["name"],
            "risk_level": style["risk_level"],
            "insurance_notes": style["insurance_notes"],
            "premium_impact": style["typical_premium_increase"],
            "suitable_providers": suitable_providers
        }
    else:
        return {
            "error": f"Unknown yoga style: {yoga_style}",
            "available_styles": list(YOGA_STYLES.keys()),
            "suggestion": "Try: aerial, hot_yoga, vinyasa, hatha, yin, prenatal, or teacher_training"
        }


@agent.tool
def get_provider_info(
    ctx: RunContext[StateDeps[AppState]],
    provider_name: str
) -> dict:
    """
    Get detailed information about a specific insurance provider.

    Args:
        provider_name: The name of the provider (e.g., "Balens", "BGI", "Insure4Sport")
    """
    provider_lower = provider_name.lower()

    for provider in INSURANCE_PROVIDERS:
        if provider_lower in provider["name"].lower():
            return {
                "provider": provider["name"],
                "specialty": provider["specialty"],
                "public_liability": provider["public_liability"],
                "professional_indemnity": provider["professional_indemnity"],
                "annual_cost": f"£{provider['annual_cost_from']} - £{provider['annual_cost_to']}",
                "covers_aerial": provider["covers_aerial"],
                "covers_hot_yoga": provider["covers_hot_yoga"],
                "covers_teacher_training": provider["covers_teacher_training"],
                "website": provider["website"],
                "highlights": provider["highlights"]
            }

    return {
        "error": f"Provider not found: {provider_name}",
        "available_providers": [p["name"] for p in INSURANCE_PROVIDERS],
        "suggestion": "Try: Balens, BGI, Insure4Sport, or Sports Coach UK"
    }


@agent.tool
def get_quick_quote_checklist(
    ctx: RunContext[StateDeps[AppState]]
) -> dict:
    """
    Get a checklist of information needed to get an insurance quote.
    Useful when preparing to contact insurers.
    """
    return {
        "title": "Information Needed for Insurance Quote",
        "checklist": [
            {"item": "Your qualifications", "detail": "Yoga teacher training certificate, accreditation body"},
            {"item": "Teaching experience", "detail": "How many years you've been teaching"},
            {"item": "Yoga styles taught", "detail": "Especially aerial, hot, prenatal - these affect pricing"},
            {"item": "Teaching locations", "detail": "Studio, gym, private homes, outdoors, online"},
            {"item": "Class sizes", "detail": "Average and maximum number of students"},
            {"item": "Annual turnover", "detail": "Approximate income from teaching (if known)"},
            {"item": "Claims history", "detail": "Any previous insurance claims"},
            {"item": "Additional activities", "detail": "Workshops, retreats, teacher training courses"}
        ],
        "tips": [
            "Get quotes from at least 2-3 providers to compare",
            "Ask specifically about aerial/hot yoga if you teach these",
            "Check if online teaching is included (important post-COVID)",
            "Ask about monthly payment options if budget is tight"
        ]
    }


@agent.tool
def get_my_profile(
    ctx: RunContext[StateDeps[AppState]]
) -> dict:
    """
    Get the current user's profile information.
    Returns user details from state or cached instructions.
    Use this when the user asks about their profile, name, or account.
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
            "message": "You're not currently logged in. Sign in to save your preferences and get personalized insurance recommendations.",
            "action": "Click 'Sign In' in the top navigation to create an account or log in."
        }

    return {
        "logged_in": True,
        "user_id": user_id,
        "name": name,
        "first_name": first_name,
        "email": email,
        "preferences": {
            "yoga_styles": state.yoga_styles if state else [],
            "teaching_locations": state.teaching_locations if state else [],
            "student_count": state.student_count if state else None,
            "has_existing_insurance": state.has_existing_insurance if state else False
        },
        "message": f"Hi {first_name}! Here's your profile information."
    }


# =====
# FastAPI App Setup
# =====
# Export agent as AG-UI app
ag_ui_app = agent.to_ag_ui(deps=StateDeps(AppState()))

# Main FastAPI app
main_app = FastAPI(title="Yoga Insurance Agent", description="AI assistant for yoga teacher insurance")

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
        "agent": "yoga-insurance-agent",
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
    model: Optional[str] = "yoga-insurance-agent"
    stream: Optional[bool] = True


async def stream_sse_response(content: str, msg_id: str):
    """Stream OpenAI-compatible SSE chunks for Hume EVI."""
    words = content.split(' ')
    for i, word in enumerate(words):
        chunk = {
            "id": msg_id,
            "object": "chat.completion.chunk",
            "created": int(time.time()),
            "model": "yoga-insurance-agent",
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
        return "Sorry, I couldn't process that request. Try asking about yoga teacher insurance!"


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
            "model": "yoga-insurance-agent",
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
