export function Disclaimer() {
  return (
    <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto py-3 px-4">
        <div className="flex items-start gap-3 text-sm">
          <svg className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-slate-200">
            <span className="font-semibold text-white">Demo Site:</span>{' '}
            This website demonstrates human-in-the-loop AI capabilities using CopilotKit, Hume, and Pydantic AI.
            Try the chat assistant in the corner or the voice demo on the homepage.
          </p>
        </div>
      </div>
    </div>
  );
}
