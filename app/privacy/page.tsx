import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | HITL.quest',
  description: 'Privacy policy for HITL.quest. How we collect, use, and protect your personal data.',
  alternates: {
    canonical: 'https://hitl.quest/privacy',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <p className="text-slate-400 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
          <p className="text-slate-400 mb-4">
            HITL.quest operates the hitl.quest website. We are committed to protecting your privacy and ensuring you have a positive experience on our site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
          <p className="text-slate-400 mb-4">We may collect information you provide directly through contact forms, information collected automatically through cookies and analytics, and information about your interactions with our AI assistants.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Information</h2>
          <p className="text-slate-400">We use collected information to provide our AI assistant services, respond to inquiries, improve our website and services, and comply with legal obligations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Data Protection</h2>
          <p className="text-slate-400">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
          <p className="text-slate-400">If you have questions about this Privacy Policy, please contact us at: hello@hitl.quest</p>
        </section>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            Return to <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">HITL agency</Link> homepage to learn more about our human-in-the-loop AI solutions.
          </p>
        </div>
      </article>
    </div>
  )
}
