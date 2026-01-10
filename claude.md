# HITL.quest - Development Guide

## Project Overview

**Site:** hitl.quest
**Purpose:** Human-in-the-Loop AI Agency - building AI systems with intelligent human oversight
**Stack:** CopilotKit + Pydantic AI + Hume Voice + AG-UI Protocol

---

## What is HITL.quest?

HITL.quest is an agency site that pitches and demonstrates human-in-the-loop AI solutions. The site itself is a working demo of our capabilities:

- **CopilotKit Chat** - AI assistant in the sidebar
- **Hume Voice** - Emotionally intelligent voice AI
- **Pydantic AI Agent** - Structured, tool-using backend
- **Neon Auth** - Google OAuth authentication
- **Zep Memory** - Persistent conversation memory

---

## Services We Offer

| Service | Description | Tech |
|---------|-------------|------|
| AI Customer Service | Chat/email with human escalation | CopilotKit, AG-UI |
| Voice Call Systems | Emotionally aware voice AI | Hume EVI |
| Document Processing | Extraction + human review | Pydantic AI |
| Content Moderation | AI filter + human judgment | Classification |
| Decision Support | AI suggestions + human approval | Analytics |

---

## Tech Stack

### Frontend (Vercel)
- Next.js 15 with App Router
- React 19
- Tailwind CSS 4
- @copilotkit/react-core, @copilotkit/react-ui
- @neondatabase/auth
- @humeai/voice-react
- @getzep/zep-cloud

### Backend (Railway)
- Python 3.11+
- Pydantic AI with AG-UI protocol
- Google Gemini 2.0 Flash
- FastAPI + Uvicorn

### Database (Neon)
- PostgreSQL with Neon Auth tables

---

## Key Files

| File | Purpose |
|------|---------|
| `/app/page.tsx` | Homepage with HITL pitch |
| `/app/layout.tsx` | Root layout with metadata |
| `/components/Navigation.tsx` | Header navigation |
| `/components/Footer.tsx` | Footer |
| `/components/HeroVoice.tsx` | Hume voice widget |
| `/components/providers.tsx` | CopilotKit + Auth setup |
| `/agent/src/agent.py` | Pydantic AI agent |
| `/app/contact/page.tsx` | Contact form |

---

## Environment Variables

### Vercel (Production)
```env
DATABASE_URL=postgresql://...
AGENT_URL=https://[railway-url]/agui/
NEON_AUTH_BASE_URL=https://...neon.tech
HUME_API_KEY=...
HUME_SECRET_KEY=...
NEXT_PUBLIC_HUME_CONFIG_ID=...
ZEP_API_KEY=...
```

### Railway (Agent)
```env
DATABASE_URL=postgresql://...
GOOGLE_API_KEY=...
```

---

## Agent Tools

The Pydantic AI agent has these tools:

| Tool | Purpose |
|------|---------|
| `get_services` | List all HITL services |
| `get_service_details` | Details on specific service |
| `get_tech_stack` | Our tech stack info |
| `explain_hitl` | What HITL means |
| `explain_escalation` | How escalation works |
| `get_next_steps` | Getting started process |
| `get_my_profile` | User profile info |

---

## Commands

### Development
```bash
npm run dev                    # Frontend at localhost:3000
cd agent && uv run uvicorn src.agent:app --reload --port 8000  # Agent
```

### Deploy
```bash
git push origin main           # Frontend auto-deploys via Vercel
cd agent && railway up         # Agent manual deploy
```

---

## Key Value Props

- **95%+ satisfaction** vs 60-70% for full automation
- **80% handled by AI** - humans only for complex cases
- **10x faster** than manual processing
- **Continuous learning** - AI improves from human decisions
- **Enterprise security** - SOC 2, GDPR ready

---

## Hume Voice Configuration

**Config ID:** Set in `NEXT_PUBLIC_HUME_CONFIG_ID`
**CLM Endpoint:** `https://[railway-url]/chat/completions`

The voice assistant uses dynamic system prompts based on:
- User name and email
- Current page context
- HITL service knowledge

---

## CopilotKit Configuration

- Agent name: `hitl_agent`
- Runtime URL: `/api/copilotkit`
- Sidebar title: "HITL Assistant"
- State includes: user, interested_services, current_page

---

## SEO

- Schema.org markup (WebSite, Service, Organization)
- OpenGraph and Twitter cards
- Sitemap and robots.txt
- Keywords: human in the loop, HITL, AI customer service, etc.

---

## Reference

- CopilotKit docs: https://docs.copilotkit.ai
- Hume AI docs: https://docs.hume.ai
- Pydantic AI docs: https://docs.pydantic.dev/latest/
- AG-UI protocol: https://ag-ui.com
