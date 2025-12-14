import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Class 3 Mobility Scooter Insurance UK | Road Legal Cover',
  description: 'Get Class 3 mobility scooter insurance for road-legal scooters in the UK. Compare quotes for scooters up to 8mph with comprehensive cover, breakdown assistance and public liability.',
  keywords: [
    'class 3 mobility scooter insurance',
    'class 3 scooter insurance',
    'road legal mobility scooter insurance',
    'mobility scooter insurance class 3',
    '8mph scooter insurance',
  ],
  alternates: {
    canonical: 'https://mobilityscooterinsurance.quest/class-3-mobility-scooter-insurance',
  },
}

export default function Class3InsurancePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Class 3 Mobility Scooter Insurance
          </h1>
          <p className="text-lg text-slate-400">
            Comprehensive cover for road-legal mobility scooters up to 8mph
          </p>
        </div>

        {/* What is Class 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What is a Class 3 Mobility Scooter?
          </h2>
          <p className="text-slate-400 mb-4">
            A <strong>Class 3 mobility scooter</strong> is a road-legal vehicle that can travel
            at up to 8mph on roads and 4mph on pavements. Unlike Class 2 scooters, Class 3
            models must be registered with the DVLA (free of charge) and meet specific requirements.
          </p>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-3">Class 3 Requirements:</h3>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Maximum speed 8mph (4mph on pavements)
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Must have front and rear lights
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Must have indicators
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Must have a horn
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Must have rear reflectors
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Must be registered with DVLA (free)
              </li>
            </ul>
          </div>
        </section>

        {/* Do You Need Insurance */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Do Class 3 Scooters Need Insurance?
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-4">
            <p className="text-slate-300">
              <strong>No, insurance is not legally required</strong> for Class 3 mobility scooters.
              However, because these scooters can be used on roads, <strong>Class 3 mobility scooter
              insurance</strong> with public liability cover is strongly recommended.
            </p>
          </div>
          <p className="text-slate-400">
            When using your scooter on roads, the risk of accidents increases. If you were to
            collide with a pedestrian, cyclist, or damage a vehicle, you could face significant
            legal costs without insurance.
          </p>
        </section>

        {/* What Cover Do You Need */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Recommended Cover for Class 3 Scooters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Public Liability</h3>
              <p className="text-sm text-slate-400">
                Essential for road use. Covers you if your scooter causes injury or property
                damage to third parties.
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                Highly Recommended
              </span>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Theft Cover</h3>
              <p className="text-sm text-slate-400">
                Class 3 scooters are typically more expensive. Theft cover protects your investment
                at home and when out.
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                Highly Recommended
              </span>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Accidental Damage</h3>
              <p className="text-sm text-slate-400">
                Road use increases the risk of collisions. Cover repairs or replacement if your
                scooter is damaged.
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                Recommended
              </span>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Breakdown Cover</h3>
              <p className="text-sm text-slate-400">
                If you travel longer distances on roads, breakdown cover ensures you&apos;re
                not left stranded far from home.
              </p>
              <span className="inline-block mt-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                Recommended
              </span>
            </div>
          </div>
        </section>

        {/* Class 2 vs Class 3 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Class 2 vs Class 3: Insurance Differences
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="text-left py-3 px-4 text-white font-semibold">Feature</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Class 2</th>
                  <th className="text-left py-3 px-4 text-white font-semibold">Class 3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr>
                  <td className="py-3 px-4 text-slate-400">Max Speed</td>
                  <td className="py-3 px-4 text-slate-300">4mph</td>
                  <td className="py-3 px-4 text-slate-300">8mph (roads)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400">Road Use</td>
                  <td className="py-3 px-4 text-slate-300">No</td>
                  <td className="py-3 px-4 text-slate-300">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400">DVLA Registration</td>
                  <td className="py-3 px-4 text-slate-300">Not required</td>
                  <td className="py-3 px-4 text-slate-300">Required (free)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400">Insurance Required</td>
                  <td className="py-3 px-4 text-slate-300">No</td>
                  <td className="py-3 px-4 text-slate-300">No (but recommended)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400">Public Liability</td>
                  <td className="py-3 px-4 text-slate-300">Optional</td>
                  <td className="py-3 px-4 text-slate-300">Strongly recommended</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-400">Typical Premium</td>
                  <td className="py-3 px-4 text-slate-300">From £40/year</td>
                  <td className="py-3 px-4 text-slate-300">From £50/year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center bg-slate-800/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Get Class 3 Scooter Insurance
          </h2>
          <p className="text-slate-400 mb-6">
            Protect your road-legal mobility scooter with comprehensive cover from UK specialists.
            Compare quotes for <strong>Class 3 mobility scooter insurance</strong> today.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
