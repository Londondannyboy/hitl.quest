import Link from "next/link"
import { Metadata } from 'next'
import { HeroVoice } from '@/components/HeroVoice'

export const metadata: Metadata = {
  title: 'Contact Us | HITL.quest',
  description: 'Get in touch with HITL.quest to discuss your human-in-the-loop AI needs. Customer service automation, voice systems, document processing, and more.',
  alternates: {
    canonical: 'https://hitl.quest/contact',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Let&apos;s Build Something Amazing</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to add human-in-the-loop AI to your operations? Let&apos;s talk about your challenges and how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Start a Conversation</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Your name"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="you@company.com"/>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent" placeholder="Your company"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                    <option value="">Select a service...</option>
                    <option value="customer-service">AI Customer Service</option>
                    <option value="voice">Voice Call Systems</option>
                    <option value="document">Document Processing</option>
                    <option value="moderation">Content Moderation</option>
                    <option value="decision">Decision Support</option>
                    <option value="custom">Custom Solution</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Tell us about your project</label>
                <textarea className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-600 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-transparent" rows={5} placeholder="What are your current challenges? What would success look like?"></textarea>
              </div>

              <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Voice Demo */}
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/30 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Try Our Voice AI</h3>
              <HeroVoice />
              <p className="text-sm text-slate-400 mt-4">
                Experience our emotionally intelligent voice assistant
              </p>
            </div>

            {/* What to Expect */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">What to Expect</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">1.</span>
                  <span>We&apos;ll respond within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">2.</span>
                  <span>Schedule a discovery call to understand your needs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">3.</span>
                  <span>Receive a custom solution proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">4.</span>
                  <span>Start with an MVP to validate the approach</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="/#services" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span>→</span> Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/#what-is-hitl" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span>→</span> What is HITL?
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span>→</span> FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <span>→</span> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Email */}
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Email Us Directly</h3>
              <a href="mailto:hello@hitl.quest" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                hello@hitl.quest
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400">
            Prefer to chat? Use the AI assistant in the bottom-right corner or try our voice demo above.
          </p>
          <p className="text-slate-400 mt-4">
            Learn more about our <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">HITL agency</Link> services and how we can help your business.
          </p>
        </div>
      </article>
    </div>
  )
}
