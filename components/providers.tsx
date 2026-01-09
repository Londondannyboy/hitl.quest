'use client';

import { CopilotKit } from '@copilotkit/react-core';
import { CopilotSidebar } from '@copilotkit/react-ui';
import { NeonAuthUIProvider } from '@neondatabase/auth/react/ui';
import { authClient } from '@/lib/auth/client';
import '@copilotkit/react-ui/styles.css';

function CopilotWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || null;

  // Build personalized instructions for the agent
  const instructions = user
    ? `## USER CONTEXT
- Name: ${user.name}
- First Name: ${firstName}
- Email: ${user.email}
- User ID: ${user.id}

IMPORTANT: Address the user by their first name (${firstName}) in your responses.
When they ask "what's my name" or "who am I", tell them their name.
Personalize your insurance recommendations based on their profile.`
    : `## GUEST USER
This user is not logged in. They can still browse insurance information, but encourage them to sign in for personalized recommendations and to save their preferences.`;

  return (
    <CopilotKit runtimeUrl="/api/copilotkit" agent="yoga_agent">
      <CopilotSidebar
        labels={{
          title: "Insurance Advisor",
          initial: user
            ? `Hi ${firstName}! I'm your yoga teacher insurance advisor. I can help you understand what coverage you need, compare UK providers, and explain different insurance types.\n\nWhat would you like to know about yoga teacher insurance?`
            : "Hi! I'm your yoga teacher insurance advisor. I can help you understand what coverage you need, compare UK providers, and explain different insurance types.\n\nWhat would you like to know about yoga teacher insurance?",
        }}
        defaultOpen={false}
        instructions={instructions}
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
