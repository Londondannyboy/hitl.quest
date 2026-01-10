'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

export function DebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const pathname = usePathname();

  // Get page context (same logic as providers.tsx)
  const getPageContext = (path: string): string => {
    if (path.includes('customer-service')) return 'customer-service';
    if (path.includes('voice') || path.includes('call')) return 'voice';
    if (path.includes('document')) return 'document-processing';
    if (path.includes('moderation')) return 'content-moderation';
    if (path.includes('contact')) return 'contact';
    if (path.includes('profile') || path.includes('dashboard')) return 'profile';
    return 'homepage';
  };

  const currentPage = getPageContext(pathname);
  const firstName = user?.name?.split(' ')[0] || null;

  // Log context changes
  useEffect(() => {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] Page: ${currentPage}, User: ${firstName || 'Guest'}`;
    setLogs(prev => [...prev.slice(-19), logEntry]);

    // Also log to console for browser dev tools
    console.log('[Debug] Context:', {
      pathname,
      currentPage,
      user: user ? {
        id: user.id,
        name: user.name,
        firstName,
        email: user.email,
      } : null,
      timestamp,
    });
  }, [pathname, currentPage, user, firstName]);

  // Only show in development or if user adds ?debug to URL
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDev = process.env.NODE_ENV === 'development';
    const hasDebugParam = urlParams.has('debug');
    setShowDebug(isDev || hasDebugParam);
  }, []);

  if (!showDebug) return null;

  return (
    <>
      {/* Debug Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 z-[9999] bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1.5 rounded-lg text-xs font-mono shadow-lg"
      >
        {isOpen ? 'Hide Debug' : 'Debug'}
      </button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="fixed bottom-14 left-4 z-[9999] w-96 max-h-[60vh] bg-slate-900 border border-yellow-500/50 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-yellow-500 text-black px-3 py-2 font-mono text-sm font-bold flex justify-between items-center">
            <span>Debug Panel (BETA)</span>
            <button onClick={() => setLogs([])} className="text-xs bg-black/20 px-2 py-0.5 rounded">
              Clear
            </button>
          </div>

          <div className="p-3 space-y-3 overflow-y-auto max-h-[50vh]">
            {/* Current Context */}
            <div className="bg-slate-800 rounded p-2">
              <h4 className="text-yellow-400 text-xs font-bold mb-1">Current Context</h4>
              <div className="text-xs font-mono text-slate-300 space-y-1">
                <div><span className="text-slate-500">Page:</span> {currentPage}</div>
                <div><span className="text-slate-500">Path:</span> {pathname}</div>
              </div>
            </div>

            {/* User Info */}
            <div className="bg-slate-800 rounded p-2">
              <h4 className="text-yellow-400 text-xs font-bold mb-1">User Context</h4>
              <div className="text-xs font-mono text-slate-300 space-y-1">
                {user ? (
                  <>
                    <div><span className="text-slate-500">ID:</span> {user.id}</div>
                    <div><span className="text-slate-500">Name:</span> {user.name}</div>
                    <div><span className="text-slate-500">First:</span> {firstName}</div>
                    <div><span className="text-slate-500">Email:</span> {user.email}</div>
                  </>
                ) : (
                  <div className="text-slate-500">Not logged in</div>
                )}
              </div>
            </div>

            {/* Agent State (what CopilotKit sends) */}
            <div className="bg-slate-800 rounded p-2">
              <h4 className="text-yellow-400 text-xs font-bold mb-1">Agent State (Sent to LLM)</h4>
              <pre className="text-xs font-mono text-green-400 whitespace-pre-wrap">
{JSON.stringify({
  user: user ? {
    id: user.id,
    name: user.name,
    firstName,
    email: user.email,
  } : null,
  current_page: currentPage,
  interested_services: [],
  company_type: null,
  use_case: null,
}, null, 2)}
              </pre>
            </div>

            {/* Logs */}
            <div className="bg-slate-800 rounded p-2">
              <h4 className="text-yellow-400 text-xs font-bold mb-1">Event Log</h4>
              <div className="text-xs font-mono text-slate-400 space-y-0.5 max-h-32 overflow-y-auto">
                {logs.length === 0 ? (
                  <div className="text-slate-500">No events yet</div>
                ) : (
                  logs.map((log, i) => <div key={i}>{log}</div>)
                )}
              </div>
            </div>

            {/* Endpoints */}
            <div className="bg-slate-800 rounded p-2">
              <h4 className="text-yellow-400 text-xs font-bold mb-1">Endpoints</h4>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div><span className="text-slate-500">CopilotKit:</span> /api/copilotkit</div>
                <div><span className="text-slate-500">Agent:</span> Railway /agui/</div>
                <div><span className="text-slate-500">Hume CLM:</span> /chat/completions</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Beta Badge Component
export function BetaBadge() {
  return (
    <span className="fixed top-16 right-4 z-50 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
      BETA
    </span>
  );
}
