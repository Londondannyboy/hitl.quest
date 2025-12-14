import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobility Scooter Breakdown Cover UK | Insurance & Recovery',
  description: 'Get mobility scooter breakdown cover and roadside assistance in the UK. Compare mobility scooter insurance and breakdown cover packages from specialist providers.',
  keywords: [
    'mobility scooter breakdown cover',
    'mobility scooter insurance and breakdown cover',
    'mobility scooter insurance and breakdown cover uk',
    'mobility scooter breakdown insurance',
    'mobility scooter insurance breakdown cover',
    'mobility scooter recovery',
  ],
  alternates: {
    canonical: 'https://mobilityscooterinsurance.quest/mobility-scooter-breakdown-cover',
  },
}

export default function BreakdownCoverPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Mobility Scooter Breakdown Cover UK
          </h1>
          <p className="text-lg text-slate-400">
            24/7 roadside assistance and recovery for your mobility scooter
          </p>
        </div>

        {/* What is Breakdown Cover */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What is Mobility Scooter Breakdown Cover?
          </h2>
          <p className="text-slate-400 mb-4">
            <strong>Mobility scooter breakdown cover</strong> provides emergency assistance if your
            scooter stops working while you&apos;re out. Whether it&apos;s a flat battery, mechanical
            failure, or puncture, breakdown cover ensures you&apos;re not left stranded.
          </p>
          <p className="text-slate-400">
            Many people search for <strong>mobility scooter insurance and breakdown cover UK</strong> as
            a combined package - and for good reason. Bundling your insurance with breakdown assistance
            is often the most cost-effective way to get comprehensive protection.
          </p>
        </section>

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            What Does Breakdown Cover Include?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">24/7 Helpline</h3>
              <p className="text-sm text-slate-400">
                Round-the-clock telephone support to arrange assistance whenever you need it.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Roadside Assistance</h3>
              <p className="text-sm text-slate-400">
                A technician will attempt to fix your scooter on the spot, including battery issues.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Recovery Home</h3>
              <p className="text-sm text-slate-400">
                If repairs can&apos;t be made, you and your scooter will be transported home safely.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Repair Centre</h3>
              <p className="text-sm text-slate-400">
                Alternative transport to a local repair centre if needed for more complex repairs.
              </p>
            </div>
          </div>
        </section>

        {/* Providers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Providers Offering Breakdown Cover
          </h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Surewise</h3>
              <p className="text-slate-400 text-sm mb-2">
                Offers <strong>mobility scooter insurance and breakdown cover</strong> as a combined
                package. Their breakdown cover includes 24/7 assistance and recovery to your home.
              </p>
              <p className="text-xs text-slate-500">From approx. £15/year as add-on</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Age UK</h3>
              <p className="text-slate-400 text-sm mb-2">
                Provides comprehensive <strong>mobility scooter breakdown insurance</strong> with their
                policies. Includes roadside assistance and recovery.
              </p>
              <p className="text-xs text-slate-500">Often included in comprehensive policies</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Mark Bates Ltd</h3>
              <p className="text-slate-400 text-sm mb-2">
                Specialist broker offering flexible <strong>mobility scooter insurance breakdown cover</strong>
                options tailored to your needs.
              </p>
              <p className="text-xs text-slate-500">Quote required - flexible options</p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Tips for Choosing Breakdown Cover
          </h2>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">1.</span>
              <span>
                <strong>Bundle with insurance</strong> - <strong>Mobility scooter insurance and
                breakdown cover UK</strong> packages are usually better value than buying separately.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">2.</span>
              <span>
                <strong>Check response times</strong> - Good providers aim for assistance within 45-90 minutes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">3.</span>
              <span>
                <strong>Understand limits</strong> - Check how many callouts are included per year and any distance limits for recovery.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">4.</span>
              <span>
                <strong>Personal transport</strong> - Ensure the policy covers getting you home too, not just the scooter.
              </span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Breakdown Cover Today
          </h2>
          <p className="text-slate-400 mb-6">
            Don&apos;t risk being stranded. Compare <strong>mobility scooter insurance and breakdown
            cover</strong> from UK specialists and travel with confidence.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
          >
            Compare Quotes
          </Link>
        </div>
      </div>
    </div>
  )
}
