import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compare Yoga Teacher Insurance UK | Best Quotes 2026',
  description: 'Compare yoga teacher insurance quotes from Yoga Alliance, Balens, and specialist UK providers. Find the best coverage at the best price. Professional indemnity and public liability insurance.',
  alternates: {
    canonical: 'https://yogateacherinsurance.quest/compare-yoga-teacher-insurance-uk',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Compare Yoga Teacher Insurance UK
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Compare professional indemnity and public liability insurance quotes from the UK's leading yoga teacher insurance specialists. Find the best coverage at the best price.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1552621554-5fefe8c9ef14?w=1200&h=600&crop=entropy"
            alt="yoga teachers comparing insurance coverage options and quotes"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Your Personalized Quote</h2>
          <p className="text-slate-300 mb-4">
            Use our quote calculator to see estimated premiums for your specific teaching situation.
          </p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Get Quote Now
          </Link>
        </div>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-8">Leading Yoga Teacher Insurance Providers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Yoga Alliance Insurance</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p className="font-semibold text-white">Official provider for registered members</p>
                <ul className="space-y-2">
                  <li>✓ Professional indemnity</li>
                  <li>✓ Public liability</li>
                  <li>✓ Member-specific rates</li>
                  <li>✓ Recognized authority</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  £10-£25/month (indicative)
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Balens Insurance</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p className="font-semibold text-white">Specialist fitness professional insurance</p>
                <ul className="space-y-2">
                  <li>✓ Fitness-specific coverage</li>
                  <li>✓ Yoga & pilates specialists</li>
                  <li>✓ Competitive rates</li>
                  <li>✓ Fast online quotes</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  £12-£30/month (indicative)
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Specialist Providers</h3>
              <div className="space-y-3 text-sm text-slate-400">
                <p className="font-semibold text-white">UK insurers specializing in wellness</p>
                <ul className="space-y-2">
                  <li>✓ Flexible coverage options</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Specialized support</li>
                  <li>✓ Online management</li>
                </ul>
                <p className="text-xs text-slate-500 mt-4">
                  £15-£38/month (indicative)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-4">What to Compare</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-3">Coverage Types</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Professional indemnity limits</li>
                <li>• Public liability limits</li>
                <li>• Excess/deductible amounts</li>
                <li>• Additional coverage options</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-400 mb-3">Cost Factors</h3>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li>• Premium amounts</li>
                <li>• Payment options</li>
                <li>• No claims discounts</li>
                <li>• Group rates available</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold text-white mb-4">How to Get Quotes</h2>
          <ol className="text-slate-400 space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="font-bold text-blue-400 flex-shrink-0">1.</span>
              <span>Use our quote calculator to estimate your premium</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-400 flex-shrink-0">2.</span>
              <span>Compare coverage options from multiple providers</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-400 flex-shrink-0">3.</span>
              <span>Review provider details and customer ratings</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-400 flex-shrink-0">4.</span>
              <span>Choose the best coverage for your needs</span>
            </li>
          </ol>
        </section>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Ready to get insured?</p>
          <Link href="/#calculator" className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
            Get Your Quote Now
          </Link>
        </div>
      </article>
    </div>
  )
}
