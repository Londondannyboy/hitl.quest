import { Metadata } from 'next'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Mobility Scooter Insurance UK | Compare Quotes from £4/month',
  description: 'Mobility scooter insurance UK - compare quotes from specialist insurers. Get insurance for mobility scooter, powerchair or wheelchair. Cheap cover from £4/month with theft, damage & breakdown protection.',
  alternates: {
    canonical: 'https://mobilityscooterinsurance.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I legally need mobility scooter insurance in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, mobility scooter insurance is not a legal requirement in the UK. However, it is highly recommended to protect your investment. Class 3 scooters must be registered with DVLA but don\'t require compulsory insurance like cars do.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does mobility scooter insurance cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobility scooter insurance typically costs between £50 and £150 per year, depending on the scooter\'s value, cover level, and your location. That works out to roughly £4-£12 per month. Cheap mobility scooter insurance options start from around £40 per year for basic theft cover.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does mobility scooter insurance cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comprehensive mobility scooter insurance typically covers theft, accidental damage, fire damage, vandalism, and public liability. Many policies also offer optional breakdown cover and personal accident protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Class 2 and Class 3 mobility scooters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Class 2 scooters have a maximum speed of 4mph and are for pavement use only - they don\'t need registration. Class 3 scooters can travel up to 8mph on roads, must be registered with DVLA, and need lights, indicators, and a horn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my home insurance cover my mobility scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some home insurance policies include limited cover for mobility scooters, but it\'s often restricted to theft from your home only. Specialist mobility scooter insurance provides more comprehensive protection including cover away from home, accidental damage, and breakdown.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I insure a second-hand mobility scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most insurers will cover second-hand mobility scooters. You\'ll need to provide details of the scooter\'s age, value, and condition. Insurance will be based on current market value rather than the original purchase price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is mobility scooter breakdown cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobility scooter breakdown cover provides roadside assistance if your scooter breaks down while you\'re out. It typically includes recovery to your home or a repair centre. Many insurers like Surewise and Age UK offer this as an add-on.',
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
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Mobility Scooter Insurance
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"> UK 2025</span>
          </h1>
          <p className="text-lg text-slate-400 mb-2">
            Compare <strong>mobility scooter insurance quotes</strong> from specialist UK insurers.
            Find the <strong>best mobility scooter insurance UK</strong> providers and get
            <strong> insurance for mobility scooters</strong> with comprehensive cover.
          </p>
          <p className="text-sm text-slate-500 mb-4">
            <strong>Cheap mobility scooter insurance</strong> from £4/month. Whether you need
            <strong> class 3 mobility scooter insurance</strong>, breakdown cover, or third party
            liability - <strong>compare mobility scooter insurance</strong> and save.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-500">
            <span className="px-3 py-1 bg-slate-800/50 rounded-full">Theft Cover</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full">Accidental Damage</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full">Breakdown Cover</span>
            <span className="px-3 py-1 bg-slate-800/50 rounded-full">Public Liability</span>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <QuoteCalculator />
      </section>

      {/* Why Insurance Section */}
      <section id="coverage" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Mobility Scooter Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Mobility scooter insurance</strong> protects your essential mobility equipment
            from theft, damage and breakdown. With scooter thefts on the rise, the right insurance
            provides peace of mind and financial protection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Theft Protection</h3>
              <p className="text-sm text-slate-400">
                Mobility scooter theft is increasing. Insurance covers replacement costs if your
                scooter is stolen from home, in public, or from your vehicle.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Protect Your Investment</h3>
              <p className="text-sm text-slate-400">
                Quality mobility scooters cost £1,000 to £5,000+. Insurance protects this significant
                investment against accidental damage, vandalism and mechanical breakdown.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Public Liability</h3>
              <p className="text-sm text-slate-400">
                Third party liability cover protects you if your scooter causes injury to someone
                or damages their property while you&apos;re out and about.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Breakdown Cover</h3>
              <p className="text-sm text-slate-400">
                Get roadside assistance if your scooter breaks down. Many policies include
                recovery to your home or a repair centre if needed.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personal Accident</h3>
              <p className="text-sm text-slate-400">
                Some policies include personal accident cover, providing financial support
                if you&apos;re injured while using your mobility scooter.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Accessory Cover</h3>
              <p className="text-sm text-slate-400">
                Cover for accessories like baskets, canopies, and battery chargers.
                Protect all your mobility equipment under one policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            UK Mobility Scooter Insurance Providers
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Compare quotes from the UK&apos;s leading <strong>mobility scooter insurance</strong> specialists.
            We help you find the best cover at the best price.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Surewise</h3>
              <p className="text-slate-400 text-sm mb-4">
                Leading specialist in mobility equipment insurance with excellent reviews.
              </p>
              <p className="text-sm text-slate-500">390+ monthly searches</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Age UK</h3>
              <p className="text-slate-400 text-sm mb-4">
                Trusted charity partner offering competitive mobility scooter cover.
              </p>
              <p className="text-sm text-slate-500">320+ monthly searches</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Mark Bates Ltd</h3>
              <p className="text-slate-400 text-sm mb-4">
                Specialist broker with comprehensive disability equipment policies.
              </p>
              <p className="text-sm text-slate-500">320+ monthly searches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cover Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Types of Mobility Scooter Insurance Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Class 2 Scooter Insurance</h3>
              <p className="text-slate-400 mb-4">
                For pavement-only scooters with max speed of 4mph. These don&apos;t require
                registration but still benefit from comprehensive insurance cover.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Theft from home or public places
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Accidental damage cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Public liability optional
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Class 3 Scooter Insurance</h3>
              <p className="text-slate-400 mb-4">
                For road-legal scooters up to 8mph. Must be registered with DVLA and
                have rear lights, indicators and a horn.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Comprehensive road use cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Third party liability included
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Breakdown assistance available
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Electric Wheelchair Insurance</h3>
              <p className="text-slate-400 mb-4">
                Specialist cover for powerchairs and electric wheelchairs.
                Protects your essential mobility equipment.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Indoor and outdoor use cover
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Battery and charger included
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Hire chair while yours is repaired
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Multi-Scooter Insurance</h3>
              <p className="text-slate-400 mb-4">
                Cover multiple mobility scooters or wheelchairs under one policy.
                Ideal for couples or households with multiple users.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Discounted multi-vehicle rates
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Single renewal date
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Mix of scooter types allowed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Mobility Scooter Insurance FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I legally need mobility scooter insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                No, mobility scooter insurance is not a legal requirement in the UK. However,
                it&apos;s highly recommended to protect your investment. Class 3 scooters
                (road-legal, up to 8mph) must be registered with DVLA but don&apos;t require
                compulsory insurance like cars do. That said, insurance provides valuable
                protection against theft, damage, and third-party liability claims.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does mobility scooter insurance cost?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Mobility scooter insurance typically costs between £50 and £150 per year,
                depending on the scooter&apos;s value, the level of cover chosen, and where
                you live. Comprehensive policies including theft, accidental damage, and
                breakdown cover will be at the higher end, while basic theft-only cover
                can be much cheaper.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What&apos;s the difference between Class 2 and Class 3 scooters?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Class 2 scooters have a maximum speed of 4mph and are designed for pavement
                use only. They don&apos;t need to be registered. Class 3 scooters can travel
                up to 8mph on roads (4mph on pavements), must be registered with DVLA, and
                need lights, indicators, a horn, and rear reflectors. Class 3 scooters can
                use the road but not motorways or cycle lanes.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Will my home insurance cover my mobility scooter?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Some home insurance policies include limited cover for mobility scooters,
                but it&apos;s often restricted to theft from your home only. Cover for use
                away from home, accidental damage, and breakdown is typically not included.
                Specialist mobility scooter insurance provides more comprehensive protection
                and is usually better value than adding to your home insurance.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can I insure a second-hand mobility scooter?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, most insurers will cover second-hand mobility scooters. You&apos;ll need
                to provide details of the scooter&apos;s age, value, and condition. Some
                insurers may have maximum age limits (e.g., 10 years) or require a recent
                service history. The insurance will be based on the current market value
                rather than the original purchase price.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is mobility scooter breakdown cover?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                <strong>Mobility scooter breakdown cover</strong> provides 24/7 roadside assistance
                if your scooter breaks down while you&apos;re out. It typically includes recovery
                to your home or a repair centre. Providers like Surewise and Age UK offer
                <strong> mobility scooter insurance and breakdown cover</strong> as a combined package,
                which is often better value than buying separately.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is mobility scooter third party insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                <strong>Mobility scooter third party insurance</strong> (also called public liability)
                covers you if your scooter causes injury to someone or damages their property.
                While not legally required, <strong>mobility scooter liability insurance</strong> provides
                peace of mind when using your scooter in public places. Most comprehensive
                policies include this as standard.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Your Mobility Scooter Insurance Quote Today
          </h2>
          <p className="text-slate-400 mb-6">
            <strong>Insurance for mobility scooter UK</strong> owners has never been easier.
            Compare quotes from the <strong>cheapest mobility scooter insurance</strong> providers
            and find the right cover for your needs.
          </p>
          <a
            href="#calculator"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
          >
            Compare Quotes Now
          </a>
        </div>
      </section>
    </div>
  )
}
