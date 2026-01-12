import { Metadata } from 'next'
import { HeroVoice } from '@/components/HeroVoice'

export const metadata: Metadata = {
  title: 'HITL Agency | Human-in-the-Loop AI Solutions | HITL.quest',
  description: 'HITL agency building intelligent AI systems with human oversight. Customer service automation, call response systems, and AI workflows with the human touch. Best-in-class HITL agency solutions.',
  alternates: {
    canonical: 'https://hitl.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Human-in-the-Loop AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Human-in-the-Loop (HITL) AI is an approach where humans work alongside AI systems to provide oversight, make critical decisions, and ensure quality. The AI handles routine tasks while humans step in for complex situations, edge cases, or when empathy and judgment are needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do I need human oversight in my AI systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI systems can make mistakes, especially in novel situations. Human oversight ensures quality, builds customer trust, handles edge cases appropriately, and provides the empathy that pure automation cannot. HITL systems typically achieve 95%+ customer satisfaction compared to 60-70% for fully automated systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What services does HITL.quest offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We build custom HITL solutions including AI-powered customer service with human escalation, intelligent call response systems, document processing with human review, content moderation systems, and AI-assisted decision support tools. We use cutting-edge AI frameworks and tools for emotional intelligence.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the AI handoff to humans work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our systems detect when human intervention is needed through confidence scoring, sentiment analysis, and complexity detection. The AI seamlessly escalates to a human agent with full context, allowing the human to take over without the customer repeating themselves. Agents can also train the AI in real-time.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-purple-950"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
          {/* Glow effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* HITL Agency Logo */}
          <img
            src="https://placehold.co/200x80/1e293b/38bdf8?text=HITL+Agency"
            alt="HITL agency - Human-in-the-Loop AI Solutions"
            className="mx-auto mb-6 rounded-lg"
            width={200}
            height={80}
          />
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-200">AI + Human Intelligence</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            HITL Agency:
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">Human-in-the-Loop AI</span>
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            We build AI systems that know when to ask for help
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Customer service automation, intelligent call response, and AI workflows with <strong>seamless human oversight</strong>. <strong>HITL agency</strong> delivers the best of both worlds.
          </p>

          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-200 mb-10">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Customer Service</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Call Response</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Voice AI</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Document Processing</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Content Moderation</span>
          </div>

          {/* Voice Assistant Demo */}
          <HeroVoice />
          <p className="text-sm text-slate-400 mt-4">Try our voice AI demo - experience the future of customer interaction</p>
        </div>
      </section>

      {/* What is HITL Section */}
      <section id="what-is-hitl" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What is HITL Agency?
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg">
              HITL is an AI design philosophy where humans and machines work together.
              The AI handles the volume, humans handle the nuance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* The Problem */}
            <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 rounded-2xl p-8 border border-red-500/30">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-300 mb-4">Fully Automated AI</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Fails on edge cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No empathy or nuance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Frustrates customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>60-70% satisfaction</span>
                </li>
              </ul>
            </div>

            {/* HITL Solution */}
            <div className="bg-gradient-to-br from-green-900/20 to-green-800/10 rounded-2xl p-8 border border-green-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                RECOMMENDED
              </div>
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-4">Human-in-the-Loop</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>AI handles 80% of volume</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Humans handle complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Seamless escalation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>95%+ satisfaction</span>
                </li>
              </ul>
            </div>

            {/* Manual Only */}
            <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 rounded-2xl p-8 border border-yellow-500/30">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-300 mb-4">Fully Manual</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">~</span>
                  <span>High quality service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">~</span>
                  <span>Doesn&apos;t scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">~</span>
                  <span>Long wait times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">~</span>
                  <span>Expensive at volume</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What HITL Agency Builds
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Custom HITL solutions powered by cutting-edge AI with elegant human escalation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Customer Service</h3>
              <p className="text-sm text-slate-400 mb-4">
                Chat and email support that handles routine queries instantly, escalates complex issues to humans with full context.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Chat</span>
                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded">Email</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Voice Call Systems</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI voice agents with emotional intelligence that detect when to transfer to humans. Natural, empathetic conversations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">Voice AI</span>
                <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">Emotional</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Document Processing</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI extracts and validates data, flags uncertain items for human review. 10x faster with human-level accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">Extraction</span>
                <span className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded">Structured</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-colors">
                <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Content Moderation</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI filters obvious violations, surfaces edge cases for human judgment. Scale moderation without sacrificing quality.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded">Classification</span>
                <span className="text-xs px-2 py-1 bg-orange-500/20 text-orange-300 rounded">Queues</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Decision Support</h3>
              <p className="text-sm text-slate-400 mb-4">
                AI analyzes data and suggests actions, humans approve or override. Augment expertise, don&apos;t replace it.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">Analytics</span>
                <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded">Workflows</span>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-pink-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
                <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-sm text-slate-400 mb-4">
                Your unique workflows deserve custom AI. We design bespoke HITL systems for your specific needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded">Bespoke</span>
                <span className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded">Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              How HITL Works
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Intelligent escalation that feels seamless to customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 h-full">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-4">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Customer Engages</h3>
                <p className="text-sm text-slate-400">
                  Customer starts a chat, call, or submits a request. AI immediately begins processing.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600 text-2xl">→</div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 h-full">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mb-4">2</div>
                <h3 className="text-lg font-bold text-white mb-2">AI Analyzes</h3>
                <p className="text-sm text-slate-400">
                  AI assesses complexity, sentiment, and confidence. Handles routine requests instantly.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600 text-2xl">→</div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 h-full">
                <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mb-4">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Smart Escalation</h3>
                <p className="text-sm text-slate-400">
                  Complex cases route to humans with full context. No customer repetition needed.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-slate-600 text-2xl">→</div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 h-full">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mb-4">4</div>
              <h3 className="text-lg font-bold text-white mb-2">Continuous Learning</h3>
              <p className="text-sm text-slate-400">
                Human decisions train the AI. The system gets smarter over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why HITL Matters */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Why Choose HITL Agency
          </h2>
          <p className="text-slate-300 text-lg mb-10">
            The numbers speak for themselves
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <p className="text-4xl font-bold text-cyan-400 mb-2">95%+</p>
              <p className="text-slate-300">Customer Satisfaction</p>
              <p className="text-xs text-slate-500 mt-2">vs 60-70% for full automation</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <p className="text-4xl font-bold text-green-400 mb-2">80%</p>
              <p className="text-slate-300">Automation Rate</p>
              <p className="text-xs text-slate-500 mt-2">AI handles the volume</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <p className="text-4xl font-bold text-purple-400 mb-2">10x</p>
              <p className="text-slate-300">Faster Resolution</p>
              <p className="text-xs text-slate-500 mt-2">Compared to manual processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Perfect For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Customer Support Teams</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                  <span>Handle 10x more tickets without hiring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                  <span>Focus agents on high-value interactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                  <span>24/7 availability with instant response</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                  <span>Reduce average handle time by 60%</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Operations Leaders</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold flex-shrink-0">✓</span>
                  <span>Automate document processing pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold flex-shrink-0">✓</span>
                  <span>Maintain compliance with human review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold flex-shrink-0">✓</span>
                  <span>Scale operations without proportional cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 font-bold flex-shrink-0">✓</span>
                  <span>Built-in audit trails and oversight</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-green-400 mb-4">Product Teams</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Add AI features with confidence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Human fallback for edge cases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Gather training data from human decisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Iterate quickly with real feedback</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Enterprise IT</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span>
                  <span>Enterprise-grade security and compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span>
                  <span>Integrate with existing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span>
                  <span>On-premise or cloud deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold flex-shrink-0">✓</span>
                  <span>Full observability and monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Let&apos;s discuss how HITL can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </a>
            <a
              href="#services"
              className="inline-block px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all border border-white/20"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is Human-in-the-Loop AI?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Human-in-the-Loop (HITL) AI is an approach where humans work alongside AI systems to provide oversight, make critical decisions, and ensure quality. The AI handles routine tasks while humans step in for complex situations, edge cases, or when empathy and judgment are needed. It&apos;s the best of both worlds - AI speed with human wisdom.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How does escalation to humans work?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Our systems use multiple signals to detect when human intervention is needed: confidence scores, sentiment analysis, complexity detection, and explicit user requests. When escalation triggers, the full context is passed to the human agent seamlessly - the customer never has to repeat themselves. Humans can also train the AI in real-time through their decisions.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What&apos;s the typical implementation timeline?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                It depends on complexity. A basic customer service chatbot with human escalation can be deployed in weeks. More complex systems with multiple integrations, custom workflows, and extensive training data may take longer. We work in phases - starting with an MVP and iterating based on real usage data.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do you provide ongoing support?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes! HITL systems benefit from continuous improvement. We offer ongoing support packages that include monitoring, performance optimization, model updates, and feature enhancements. The system gets smarter over time as it learns from human decisions.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How do you ensure data security?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Security is built-in from day one. We follow enterprise security best practices including encryption at rest and in transit, role-based access control, audit logging, and compliance with major frameworks (SOC 2, GDPR, HIPAA where applicable). We can deploy on your infrastructure if required.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
