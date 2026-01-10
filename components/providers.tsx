'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { CopilotKit, useCoAgent } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { authClient } from '@/lib/auth/client';
import '@copilotkit/react-ui/styles.css';

// Debug flag - set to true to enable console logging
const DEBUG_COPILOTKIT = true;

function debugLog(message: string, data?: any) {
  if (DEBUG_COPILOTKIT) {
    console.log(`[CopilotKit Debug] ${message}`, data || '');
  }
}

// Type matching the agent's AppState in agent.py
type AgentState = {
  user?: {
    id?: string;
    name?: string;
    firstName?: string;
    email?: string;
  };
  interested_services: string[];
  company_type?: string;
  use_case?: string;
  current_page?: string;
};

// Get page context from pathname
function getPageContext(pathname: string): string {
  if (pathname.includes('customer-service')) return 'customer-service';
  if (pathname.includes('voice') || pathname.includes('call')) return 'voice';
  if (pathname.includes('document')) return 'document-processing';
  if (pathname.includes('moderation')) return 'content-moderation';
  if (pathname.includes('contact')) return 'contact';
  if (pathname.includes('profile')) return 'profile';
  return 'homepage';
}

// Get initial message based on page
function getInitialMessage(pathname: string, firstName: string | null): string {
  const name = firstName ? `Hi ${firstName}!` : 'Hi there!';

  if (pathname.includes('contact')) {
    return `${name} I see you're interested in working with us. I can help you understand our services and prepare for a conversation. What challenges are you looking to solve?`;
  }
  if (pathname.includes('profile')) {
    return `${name} This is your dashboard. I can help you explore our HITL services or answer questions about how we work. What would you like to know?`;
  }

  return `${name} I'm the HITL.quest assistant. I can help you understand:

- What Human-in-the-Loop AI means
- Our services (customer service, voice, documents, moderation)
- Our tech stack (CopilotKit, Hume, Pydantic AI)
- How we can help your business

What would you like to explore?`;
}

// Component that syncs user state to agent - optimized to prevent re-render loops
function UserStateSync() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || undefined;
  const pathname = usePathname();
  const currentPage = getPageContext(pathname);

  // Track previous values to prevent unnecessary updates
  const prevStateRef = useRef<string>('');

  debugLog('UserStateSync render', { user: user?.name, currentPage });

  const { state, setState } = useCoAgent<AgentState>({
    name: 'hitl_agent',
    initialState: {
      user: undefined,
      interested_services: [],
      company_type: undefined,
      use_case: undefined,
      current_page: 'homepage',
    },
  });

  debugLog('useCoAgent state', state);

  // Memoize the state update to prevent unnecessary re-renders
  const updateState = useCallback(() => {
    const stateKey = `${user?.id || ''}-${user?.name || ''}-${currentPage}`;

    // Only update if state actually changed
    if (stateKey !== prevStateRef.current) {
      prevStateRef.current = stateKey;
      const newState = {
        user: user ? {
          id: user.id,
          name: user.name || undefined,
          firstName: firstName,
          email: user.email || undefined,
        } : undefined,
        interested_services: [],
        company_type: undefined,
        use_case: undefined,
        current_page: currentPage,
      };
      debugLog('Updating agent state', newState);
      setState(newState);
    }
  }, [user?.id, user?.name, user?.email, firstName, currentPage, setState]);

  // Update agent state when user session or page changes
  useEffect(() => {
    updateState();
  }, [updateState]);

  return null;
}

function CopilotWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;
  const pathname = usePathname();

  debugLog('CopilotWrapper render', {
    runtimeUrl: '/api/copilotkit',
    agent: 'hitl_agent',
    user: user?.name,
    pathname
  });

  return (
    <CopilotKit
      runtimeUrl="/api/copilotkit"
      agent="hitl_agent"
    >
      {/* Sync user state to agent */}
      <UserStateSync />
      <CopilotSidebar
        labels={{
          title: "HITL Assistant",
          initial: getInitialMessage(pathname, firstName),
        }}
        defaultOpen={false}
      >
        {children}
      </CopilotSidebar>
    </CopilotKit>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient as any}
      redirectTo="/"
      social={{ providers: ['google'] }}
    >
      <CopilotWrapper>{children}</CopilotWrapper>
    </NeonAuthUIProvider>
  );
}
