import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | HITL.quest',
  description: 'Terms of Service for HITL.quest. Please read our terms and conditions before using our website and services.',
  alternates: {
    canonical: 'https://hitl.quest/terms',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="text-slate-400 mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p className="text-slate-400">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
          <p className="text-slate-400">Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
          <p className="text-slate-400">The materials on our website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
          <p className="text-slate-400">In no event shall HITL.quest or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
          <p className="text-slate-400">If you have any questions about these Terms of Service, please contact us at: hello@hitl.quest</p>
        </section>
      </article>
    </div>
  )
}
