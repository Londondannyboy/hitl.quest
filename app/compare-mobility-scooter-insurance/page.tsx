import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Mobility Scooter Insurance UK 2025 | Best Quotes',
  description: 'Compare mobility scooter insurance from UK providers. Find the best and cheapest mobility scooter insurance with our comparison guide. Surewise, Age UK, Mark Bates & more.',
  keywords: [
    'compare mobility scooter insurance',
    'mobility scooter insurance comparison',
    'best mobility scooter insurance uk',
    'cheapest mobility scooter insurance',
    'cheap mobility scooter insurance uk',
    'mobility scooter insurance compare',
  ],
  alternates: {
    canonical: 'https://mobilityscooterinsurance.quest/compare-mobility-scooter-insurance',
  },
}

const providers = [
  {
    name: 'Surewise',
    rating: 4.8,
    priceFrom: '£3.50',
    features: ['Theft & accidental damage', 'Breakdown cover available', 'New for old replacement', 'Public liability up to £2m'],
    pros: ['Specialist provider', 'Excellent reviews', 'Fast claims process'],
    cons: ['Online only', 'No phone claims'],
    searchVolume: '390/month',
  },
  {
    name: 'Age UK',
    rating: 4.6,
    priceFrom: '£4.00',
    features: ['Comprehensive cover', 'Breakdown assistance', 'Personal accident cover', 'Accessories included'],
    pros: ['Trusted charity brand', 'Phone support', 'Over 50s specialist'],
    cons: ['Age restrictions may apply', 'Slightly higher prices'],
    searchVolume: '320/month',
  },
  {
    name: 'Mark Bates Ltd',
    rating: 4.5,
    priceFrom: '£4.50',
    features: ['Flexible cover options', 'Multi-scooter discounts', 'Worldwide cover available', 'No age limit'],
    pros: ['Specialist broker', 'Personalised service', 'Flexible policies'],
    cons: ['Quote by phone/email', 'Longer setup process'],
    searchVolume: '320/month',
  },
]

const comparisonJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Compare Mobility Scooter Insurance UK 2025',
  description: 'Comprehensive comparison of UK mobility scooter insurance providers including Surewise, Age UK, and Mark Bates.',
  author: {
    '@type': 'Organization',
    name: 'Mobility Scooter Insurance UK',
  },
  datePublished: '2024-12-01',
  dateModified: new Date().toISOString().split('T')[0],
}

export default function ComparePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Compare Mobility Scooter Insurance UK
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Find the <strong>best mobility scooter insurance UK</strong> providers with our
            comprehensive <strong>mobility scooter insurance comparison</strong>. Compare quotes
            from specialist insurers and find the <strong>cheapest mobility scooter insurance</strong> for your needs.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left py-4 px-6 text-white font-semibold">Provider</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Price From</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Rating</th>
                  <th className="text-left py-4 px-6 text-white font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-6 text-white font-medium">Surewise</td>
                  <td className="py-4 px-6 text-blue-400">£3.50/month</td>
                  <td className="py-4 px-6 text-slate-300">4.8/5</td>
                  <td className="py-4 px-6 text-slate-400">Best overall value</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-6 text-white font-medium">Age UK</td>
                  <td className="py-4 px-6 text-blue-400">£4.00/month</td>
                  <td className="py-4 px-6 text-slate-300">4.6/5</td>
                  <td className="py-4 px-6 text-slate-400">Best for over 50s</td>
                </tr>
                <tr className="hover:bg-slate-800/30">
                  <td className="py-4 px-6 text-white font-medium">Mark Bates</td>
                  <td className="py-4 px-6 text-blue-400">£4.50/month</td>
                  <td className="py-4 px-6 text-slate-300">4.5/5</td>
                  <td className="py-4 px-6 text-slate-400">Best for flexibility</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Provider Cards */}
        <h2 className="text-2xl font-bold text-white mb-6">
          Best Mobility Scooter Insurance Providers UK
        </h2>
        <div className="space-y-6 mb-12">
          {providers.map((provider) => (
            <div key={provider.name} className="bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-xl font-bold text-blue-400">{provider.name}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">
                      {provider.rating}/5
                    </span>
                    <span className="text-sm text-slate-500">{provider.searchVolume} searches</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Features</h4>
                      <ul className="space-y-1">
                        {provider.features.map((feature, i) => (
                          <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Pros</h4>
                      <ul className="space-y-1 mb-3">
                        {provider.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-slate-400">+ {pro}</li>
                        ))}
                      </ul>
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Cons</h4>
                      <ul className="space-y-1">
                        {provider.cons.map((con, i) => (
                          <li key={i} className="text-sm text-slate-400">- {con}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-48 text-center lg:text-right">
                  <div className="text-sm text-slate-400 mb-1">From</div>
                  <div className="text-3xl font-bold text-white mb-1">{provider.priceFrom}</div>
                  <div className="text-sm text-slate-500 mb-4">per month</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How to Compare Section */}
        <div className="bg-slate-800/30 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            How to Compare Mobility Scooter Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-400">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Check Cover Levels</h3>
              <p className="text-sm">
                When you <strong>compare mobility scooter insurance</strong>, look at what&apos;s
                included. Comprehensive cover should include theft, accidental damage, and
                public liability as standard.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Consider Breakdown Cover</h3>
              <p className="text-sm">
                <strong>Mobility scooter insurance and breakdown cover UK</strong> packages offer
                better value than buying separately. Check if 24/7 roadside assistance is included.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Check the Excess</h3>
              <p className="text-sm">
                The <strong>cheapest mobility scooter insurance UK</strong> quote might have a
                high excess. Balance the premium against what you&apos;d pay if you claimed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">4. Read Reviews</h3>
              <p className="text-sm">
                Check <strong>mobility scooter insurance reviews</strong> to see how providers
                handle claims. Fast, fair claims handling is more important than saving a few pounds.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Find the Best Deal?
          </h2>
          <p className="text-slate-400 mb-6">
            Use our calculator to get a <strong>cheap mobility scooter insurance</strong> estimate,
            then compare quotes from UK specialist providers.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
          >
            Get Quote Estimate
          </Link>
        </div>
      </div>
    </div>
  )
}
