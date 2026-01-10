'use client';

import { useState, useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { VoiceProvider, useVoice } from '@humeai/voice-react';
import { authClient } from '@/lib/auth/client';
import Link from 'next/link';

// Get page context from pathname for HITL demo
function getPageContext(pathname: string): string {
  if (pathname.includes('customer-service')) {
    return `The user is exploring AI CUSTOMER SERVICE solutions. Focus on:
- Chat and email automation with human escalation
- 24/7 availability with instant response
- Seamless handoff to human agents
- Context preservation during escalation
- Training AI from human decisions`;
  }
  if (pathname.includes('voice') || pathname.includes('call')) {
    return `The user is exploring VOICE CALL SYSTEMS. Focus on:
- AI voice agents with emotional intelligence
- Natural conversation flow
- Sentiment detection for escalation
- Call transfer with full context
- Hume AI for emotional awareness`;
  }
  if (pathname.includes('document')) {
    return `The user is exploring DOCUMENT PROCESSING. Focus on:
- Automated data extraction
- Human review for uncertain items
- 10x faster processing with accuracy
- Compliance and audit trails
- Pydantic AI for structured output`;
  }
  if (pathname.includes('moderation')) {
    return `The user is exploring CONTENT MODERATION. Focus on:
- AI filtering of obvious violations
- Edge cases routed to humans
- Scale without sacrificing quality
- Consistent policy enforcement
- Human judgment for nuanced decisions`;
  }
  if (pathname.includes('contact')) {
    return `The user is on the CONTACT page and interested in working with us. Be helpful and:
- Ask about their current challenges
- Understand their use case
- Explain our process briefly
- Encourage them to fill out the contact form`;
  }
  // Default homepage context
  return `The user is on the HOMEPAGE of HITL.quest. Help them understand:
- What Human-in-the-Loop AI means
- Benefits: 95%+ satisfaction, 80% automation, 10x faster
- Our services: customer service, voice, documents, moderation
- How escalation to humans works seamlessly
- Our tech stack: CopilotKit, AG-UI, Pydantic AI, Hume`;
}

function VoiceOrb() {
  const { connect, disconnect, status } = useVoice();
  const [isPending, setIsPending] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  const handleToggle = useCallback(async () => {
    // Require login
    if (!user) {
      return; // Should not happen as button is hidden for guests
    }

    if (status.value === 'connected') {
      disconnect();
    } else {
      setIsPending(true);
      try {
        const res = await fetch('/api/hume-token', { method: 'POST' });
        const { accessToken } = await res.json();

        const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID;
        if (!configId || !accessToken) {
          console.error('Missing Hume config or token');
          return;
        }

        // Get page-specific context
        const pageContext = getPageContext(pathname);

        // Build comprehensive system prompt for HITL agency
        const systemPrompt = `## CRITICAL IDENTITY
You are the VOICE ASSISTANT for HITL.quest - a Human-in-the-Loop AI agency.
You help potential clients understand our services and the value of combining AI automation with human oversight.
You are professional, knowledgeable, and passionate about building AI systems that work well with humans.

## USER INFORMATION
- Name: ${firstName || user.name}
- Email: ${user.email}
- User ID: ${user.id}

IMPORTANT: Address the user by their first name (${firstName || user.name}) in your responses.

## CURRENT PAGE CONTEXT
${pageContext}

## YOUR EXPERTISE (HITL AI SOLUTIONS)
- Human-in-the-Loop AI design philosophy
- AI customer service with human escalation
- Voice AI systems with emotional intelligence (using Hume)
- Document processing with human review
- Content moderation at scale
- Our tech stack: CopilotKit, AG-UI, Pydantic AI, Hume, Zep

## KEY VALUE PROPOSITIONS
- 95%+ customer satisfaction (vs 60-70% for full automation)
- 80% of volume handled by AI
- 10x faster than manual processing
- Seamless escalation - customers never repeat themselves
- AI learns from human decisions

## CONVERSATION RULES
1. Focus on HITL solutions and our agency services
2. Be professional, clear, and enthusiastic about AI+human collaboration
3. Keep responses SHORT for voice (2-3 sentences max)
4. Ask clarifying questions about their business needs
5. Reference the current page context when relevant
6. If asked about implementation, mention we work in phases
7. Encourage them to start a conversation with us

## THINGS TO MENTION
- We use CopilotKit for chat interfaces
- Hume AI for emotionally intelligent voice
- Pydantic AI for structured, reliable outputs
- We can deploy on their infrastructure if needed
- Enterprise security and compliance built-in

Remember: You represent a cutting-edge AI agency. Be helpful and showcase our expertise.`;

        await connect({
          auth: { type: 'accessToken', value: accessToken },
          configId: configId,
          sessionSettings: {
            type: 'session_settings',
            systemPrompt: systemPrompt,
          }
        });
      } catch (e) {
        console.error('Voice connect error:', e);
      } finally {
        setIsPending(false);
      }
    }
  }, [connect, disconnect, status.value, user, firstName, pathname]);

  const isConnected = status.value === 'connected';

  // If not logged in, show sign-in prompt
  if (!user) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center shadow-xl">
          <svg className="w-10 h-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <div className="text-center">
          <p className="text-white font-medium text-lg">Voice Demo</p>
          <Link
            href="/auth/sign-in"
            className="text-cyan-400 hover:text-cyan-300 text-sm underline"
          >
            Sign in to try voice AI
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={handleToggle}
        disabled={isPending}
        className={`
          relative w-24 h-24 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-2xl
          ${isConnected
            ? 'bg-gradient-to-br from-green-400 to-emerald-600'
            : isPending
              ? 'bg-gradient-to-br from-yellow-400 to-amber-600'
              : 'bg-gradient-to-br from-cyan-400 to-blue-600 animate-pulse'
          }
        `}
      >
        {/* Pulsing rings */}
        {!isConnected && !isPending && (
          <>
            <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-20" />
            <span className="absolute inset-[-8px] rounded-full animate-pulse bg-cyan-400/10" />
          </>
        )}

        {isConnected && (
          <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30" />
        )}

        {/* Icon */}
        {isConnected ? (
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <span className="w-1.5 h-8 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <span className="w-1.5 h-6 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
            <span className="w-1.5 h-9 bg-white rounded-full animate-pulse" style={{ animationDelay: '450ms' }} />
            <span className="w-1.5 h-5 bg-white rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
          </div>
        ) : isPending ? (
          <div className="w-8 h-8 border-3 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>

      <div className="text-center">
        <p className="text-white font-medium text-lg">
          {isConnected ? 'Listening...' : isPending ? 'Connecting...' : `Hi ${firstName}! Tap to talk`}
        </p>
        <p className="text-slate-300 text-sm">
          {isConnected ? 'Tap to end' : 'Ask about HITL solutions'}
        </p>
      </div>
    </div>
  );
}

export function HeroVoice() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-cyan-500/50 animate-pulse" />
        <div className="text-center">
          <p className="text-white font-medium text-lg">Voice Demo</p>
          <p className="text-slate-300 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <VoiceProvider onError={(err) => console.error('Hume error:', err)}>
      <VoiceOrb />
    </VoiceProvider>
  );
}
