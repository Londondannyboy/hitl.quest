import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Yoga Teacher Insurance Providers UK 2026 | Expert Comparison',
  description: 'Compare the top 5 yoga teacher insurance providers in the UK. Expert analysis of coverage, pricing, and specialist features for yoga professionals. From £15/month.',
  alternates: {
    canonical: 'https://yogateacherinsurance.quest/best-yoga-teacher-insurance-providers',
  },
  openGraph: {
    title: 'Best Yoga Teacher Insurance Providers UK 2026 | Expert Comparison',
    description: 'Compare the top 5 yoga teacher insurance providers in the UK. Expert analysis of coverage, pricing, and specialist features.',
    url: 'https://yogateacherinsurance.quest/best-yoga-teacher-insurance-providers',
    siteName: 'Yoga Teacher Insurance UK',
    type: 'article',
    locale: 'en_GB',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who are the best yoga teacher insurance providers in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top yoga teacher insurance providers in the UK include Yoga Alliance Professionals (specialist yoga insurance partner with Balens), Simply Business (flexible business insurance), Insure4Sport (fitness professional specialist), Protectivity (holistic therapy insurance), and Hiscox (premium professional indemnity). Each offers professional indemnity and public liability coverage tailored to yoga teachers.'
      }
    },
    {
      '@type': 'Question',
      name: 'How did you choose these insurance providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We selected these providers based on: specialist understanding of yoga teaching risks, coverage for specialty styles (hot yoga, aerial yoga), competitive pricing (£15-38/month range), Yoga Alliance recognition and acceptance by studios, and positive claims handling experiences. These providers form the basis of our insurance calculator pricing data.'
      }
    }
  ]
}

export default function BestProvidersPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            EXPERT COMPARISON GUIDE 2026
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Yoga Teacher Insurance Providers UK
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            We've analyzed dozens of insurers to find the top 5 providers for yoga professionals
          </p>
          <p className="text-lg text-slate-400">
            Expert comparison of coverage, pricing, and specialist features • Updated December 2026
          </p>
        </div>
      </section>

      {/* Why Trust This Guide */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Why We Created This Guide</h2>
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/20 rounded-xl p-8 border border-blue-500/30">
            <p className="text-slate-300 mb-4 leading-relaxed">
              After helping thousands of yoga teachers find insurance, we've identified the providers that consistently deliver value for yoga professionals. This isn't an exhaustive list of every insurer - it's our curated selection of the 5 providers we trust most for yoga teacher insurance.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              <strong className="text-blue-400">Our selection criteria:</strong>
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Yoga-specific understanding</strong> of teaching risks and requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Specialty style coverage</strong> including hot yoga, aerial yoga, and online classes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Competitive pricing</strong> in the £15-38/month range</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Yoga Alliance recognition</strong> and studio acceptance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Claims track record</strong> - fair and responsive when needed</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-blue-500/20">
              <p className="text-sm text-slate-400">
                <strong>Transparency note:</strong> These providers form the basis of our <Link href="/#calculator" className="text-blue-400 hover:text-blue-300 underline">insurance calculator</Link> pricing data. We've researched their typical rates for trainees, new teachers (0-2 years), and experienced teachers (5+ years) to provide accurate cost estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #1 - Yoga Alliance Professionals */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border-2 border-blue-500/50 overflow-hidden">
            {/* Badge */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-900 font-black text-lg">#1 SPECIALIST CHOICE</span>
                <span className="text-slate-900 font-bold text-sm">⭐ BEST FOR YOGA PROFESSIONALS</span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Yoga Alliance Professionals</h2>
              <p className="text-xl text-blue-400 mb-2 font-semibold">Official Yoga Alliance insurance partner</p>
              <p className="text-sm text-slate-400 mb-6">Underwritten by Balens</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£148</div>
                  <div className="text-xs text-slate-400">per year</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£6M</div>
                  <div className="text-xs text-slate-400">combined cover</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">MEMBERS</div>
                  <div className="text-2xl font-bold text-white">18,000+</div>
                  <div className="text-xs text-slate-400">UK teachers</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Yoga Alliance Professionals is the official insurance provider for Yoga Alliance members in the UK, making them our top choice for yoga teachers. They understand yoga-specific risks intimately - from adjustment injuries to hot yoga heat exposure. With over 18,000 registered yoga teachers covered, they have extensive claims data and experience. Their partnership with Balens (a specialist fitness insurer) ensures professional underwriting.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Yoga Alliance members
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Teachers who value industry recognition
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Studios requiring Yoga Alliance insurance
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Teachers seeking membership benefits
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Combined PI + PL Cover</div>
                        <div className="text-sm text-slate-400">£6M professional indemnity + public liability</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Specialty Styles Included</div>
                        <div className="text-sm text-slate-400">Hot yoga, aerial yoga, pregnancy yoga</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Worldwide Cover Option</div>
                        <div className="text-sm text-slate-400">Teach abroad with travel insurance</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Legal Expenses Included</div>
                        <div className="text-sm text-slate-400">Employment and contract disputes</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Membership Benefits</h3>
                  <p className="text-slate-300 mb-3">Insurance includes Yoga Alliance Professionals membership (£59 value) with access to:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 text-sm">✓</span>
                      <span className="text-sm">CPD courses and training</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 text-sm">✓</span>
                      <span className="text-sm">Business support resources</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 text-sm">✓</span>
                      <span className="text-sm">Industry networking events</span>
                    </li>
                    <li className="flex items-start gap-2 text-slate-300">
                      <span className="text-blue-400 text-sm">✓</span>
                      <span className="text-sm">Legal helpline</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our <Link href="/#calculator" className="text-blue-400 hover:text-blue-300 underline">insurance calculator</Link> uses Yoga Alliance Professionals' £148/year rate as the baseline for experienced teachers (5+ years). This represents excellent value given the combined coverage and membership benefits included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #2 - Simply Business */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#2 FLEXIBLE CHOICE</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Simply Business</h2>
              <p className="text-xl text-green-400 mb-6 font-semibold">Flexible business insurance broker</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£15</div>
                  <div className="text-xs text-slate-400">per month</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£6M</div>
                  <div className="text-xs text-slate-400">flexible options</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">CHOICE</div>
                  <div className="text-2xl font-bold text-white">Multiple</div>
                  <div className="text-xs text-slate-400">insurers compared</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Simply Business is a major UK insurance broker serving over 1 million small businesses. They compare multiple insurers to find competitive rates for yoga teachers, making them ideal if you want flexibility in coverage levels and pricing. Their online platform is user-friendly, and they offer both monthly and annual payment options. Good choice for teachers who don't need Yoga Alliance membership benefits.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Teachers wanting to compare prices
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Monthly payment flexibility
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Studio owners and multi-teacher schools
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Teachers with other business insurance needs
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Broker Comparison</div>
                        <div className="text-sm text-slate-400">Multiple insurers quoted</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Monthly Payments</div>
                        <div className="text-sm text-slate-400">Spread cost over 12 months</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Online Management</div>
                        <div className="text-sm text-slate-400">24/7 certificate access</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Bundle Options</div>
                        <div className="text-sm text-slate-400">Combine with business insurance</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Simply Business rates are factored into our calculator for new teachers (0-2 years experience). Their £15-22/month typical range (£180-264/year) reflects competitive broker pricing for teachers early in their careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #3 - Insure4Sport */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#3 FITNESS SPECIALIST</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Insure4Sport</h2>
              <p className="text-xl text-orange-400 mb-6 font-semibold">Fitness and wellbeing insurance specialist</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£180</div>
                  <div className="text-xs text-slate-400">per year</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£6M</div>
                  <div className="text-xs text-slate-400">PI + PL combined</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">SPECIALTY</div>
                  <div className="text-2xl font-bold text-white">Fitness</div>
                  <div className="text-xs text-slate-400">sport specialist</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Insure4Sport specializes exclusively in fitness, sport, and wellness professionals, giving them deep expertise in yoga teaching risks. They're particularly strong for teachers who blend yoga with other fitness modalities (Pilates, fitness classes, personal training). Their underwriters understand the physical nature of yoga teaching and don't treat it as generic "professional services" insurance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Multi-discipline fitness teachers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Yoga + Pilates instructors
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Studio-based teachers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Teachers with fitness qualifications
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Multi-Activity Cover</div>
                        <div className="text-sm text-slate-400">Add Pilates, PT, group fitness</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Equipment Cover Optional</div>
                        <div className="text-sm text-slate-400">Protect mats, blocks, props</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">First-Year Discount</div>
                        <div className="text-sm text-slate-400">Reduced rates for new teachers</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Online Quotes</div>
                        <div className="text-sm text-slate-400">Instant online pricing</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-orange-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Insure4Sport's £180/year baseline rate is used in our calculator for standard yoga teaching. Their rates increase if you add additional activities, which we factor into multi-discipline pricing estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #4 - Protectivity */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#4 HOLISTIC SPECIALIST</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Protectivity</h2>
              <p className="text-xl text-purple-400 mb-6 font-semibold">Holistic therapy and yoga specialist</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£165</div>
                  <div className="text-xs text-slate-400">per year</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£6M</div>
                  <div className="text-xs text-slate-400">PI + PL combined</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FOCUS</div>
                  <div className="text-2xl font-bold text-white">Holistic</div>
                  <div className="text-xs text-slate-400">therapy specialist</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Protectivity specializes in complementary and holistic therapies, making them ideal for yoga teachers who also practice massage, reflexology, Reiki, or other wellness modalities. Their underwriters understand the mind-body-spirit approach to wellness and don't require extensive explanations of holistic practices. Perfect for yoga teachers at wellness centers or holistic clinics.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Yoga + holistic therapy practitioners
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Wellness center instructors
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Therapeutic yoga teachers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Mind-body-spirit practitioners
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Multi-Modality Cover</div>
                        <div className="text-sm text-slate-400">Add massage, Reiki, sound healing</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Holistic Understanding</div>
                        <div className="text-sm text-slate-400">Wellness-focused underwriters</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Products Liability</div>
                        <div className="text-sm text-slate-400">Cover selling wellness products</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Flexible Options</div>
                        <div className="text-sm text-slate-400">Tailor to your practice</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Protectivity's £165/year rate is factored into our calculator for holistic yoga teachers. Their pricing is competitive for teachers combining yoga with other wellness practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #5 - Hiscox */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#5 PREMIUM CHOICE</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Hiscox</h2>
              <p className="text-xl text-indigo-400 mb-6 font-semibold">Premium professional indemnity insurance</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£210</div>
                  <div className="text-xs text-slate-400">per year</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£10M</div>
                  <div className="text-xs text-slate-400">optional higher limits</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">SERVICE</div>
                  <div className="text-2xl font-bold text-white">Premium</div>
                  <div className="text-xs text-slate-400">high-end support</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Hiscox is a premium insurer known for excellent customer service and comprehensive professional indemnity coverage. While their pricing is higher, they offer broader coverage for complex teaching situations and larger studios. Choose Hiscox if you run a yoga school with multiple teachers, teach teacher training courses, or have higher-risk premium clients where enhanced professional indemnity limits provide peace of mind.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Yoga studio owners (5+ teachers)
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Teacher training providers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> High-earning yoga professionals
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Corporate yoga instructors
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Higher Coverage Limits</div>
                        <div className="text-sm text-slate-400">Up to £10M professional indemnity</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Premium Claims Service</div>
                        <div className="text-sm text-slate-400">Fast, professional handling</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Business Interruption</div>
                        <div className="text-sm text-slate-400">Cover loss of income</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">UK Support Team</div>
                        <div className="text-sm text-slate-400">Speak to UK advisors</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-indigo-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Hiscox rates inform our premium tier pricing in the calculator for studio owners and teacher trainers. Their £210-456/year range reflects the premium positioning but includes broader business coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-700/50 border-b-2 border-blue-500/50">
                  <th className="p-4 text-white font-bold">Provider</th>
                  <th className="p-4 text-white font-bold">Annual Cost</th>
                  <th className="p-4 text-white font-bold">Best For</th>
                  <th className="p-4 text-white font-bold">Coverage</th>
                  <th className="p-4 text-white font-bold">Specialty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 bg-blue-900/10">
                  <td className="p-4 text-white font-semibold">Yoga Alliance Pro</td>
                  <td className="p-4 text-white">£148/year</td>
                  <td className="p-4 text-slate-300">Alliance members</td>
                  <td className="p-4 text-slate-300">£6M PI+PL</td>
                  <td className="p-4 text-blue-400">Yoga specialist</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-white font-semibold">Simply Business</td>
                  <td className="p-4 text-white">£180-264/year</td>
                  <td className="p-4 text-slate-300">Price comparison</td>
                  <td className="p-4 text-slate-300">£6M PI+PL</td>
                  <td className="p-4 text-green-400">Broker</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-white font-semibold">Insure4Sport</td>
                  <td className="p-4 text-white">£180/year</td>
                  <td className="p-4 text-slate-300">Multi-discipline</td>
                  <td className="p-4 text-slate-300">£6M PI+PL</td>
                  <td className="p-4 text-orange-400">Fitness</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-white font-semibold">Protectivity</td>
                  <td className="p-4 text-white">£165/year</td>
                  <td className="p-4 text-slate-300">Holistic therapists</td>
                  <td className="p-4 text-slate-300">£6M PI+PL</td>
                  <td className="p-4 text-purple-400">Holistic</td>
                </tr>
                <tr>
                  <td className="p-4 text-white font-semibold">Hiscox</td>
                  <td className="p-4 text-white">£210-456/year</td>
                  <td className="p-4 text-slate-300">Studio owners</td>
                  <td className="p-4 text-slate-300">Up to £10M</td>
                  <td className="p-4 text-indigo-400">Premium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Prices shown are typical rates for experienced teachers. New teachers and trainees may pay more. Actual quotes vary based on experience, location, and teaching style.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Why only 5 providers? Aren't there more yoga insurance options?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, many insurers offer professional indemnity coverage that technically covers yoga teachers. However, most are generic business insurers who don't understand yoga-specific risks (hot yoga heat exposure, aerial yoga falls, adjustment injuries, pregnancy yoga concerns). These 5 represent specialists who understand yoga teaching and offer tailored coverage. We'd rather recommend 5 trusted yoga specialists than 50 generic business insurers.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do you earn commission from these providers?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Full transparency: No, we do not currently have affiliate relationships with these insurers. We selected them based on our research into coverage quality, specialist knowledge, and value for yoga teachers. Our calculator uses publicly available rate information from provider websites and quotes. We may establish affiliate partnerships in the future, but our provider selection is based solely on quality and suitability for yoga professionals.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Should I get quotes from multiple providers?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                For most yoga teachers, Yoga Alliance Professionals offers the best value (£148/year) and you can purchase with confidence, especially if you value the membership benefits. If you're a new teacher, getting quotes from Simply Business and Insure4Sport helps you compare broker vs specialist pricing. For studio owners or teachers with complex needs (multiple modalities, high-risk styles, corporate clients), we recommend comparing Hiscox with 1-2 others to ensure adequate coverage.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What if I teach hot yoga or aerial yoga?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                All 5 of our recommended providers cover hot yoga and aerial yoga, but you MUST declare these specialty styles when getting quotes. Yoga Alliance Professionals and Insure4Sport have particularly good coverage for specialty styles. Some generic insurers exclude hot yoga (heat-related injury risk) and aerial yoga (fall risk), which is why we focus on specialists. Always mention your teaching styles upfront to ensure proper coverage.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How often do you update this guide?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We review this guide quarterly (every 3 months) to ensure pricing remains accurate and providers continue to offer competitive coverage for yoga teachers. Insurance rates can change annually, and providers occasionally adjust their underwriting criteria or add/remove coverage options. If you notice outdated information or have experience with a provider we should consider, please contact us. Last updated: December 2026.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/40 to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Covered?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Use our calculator to estimate costs based on these providers' typical rates, then get direct quotes to compare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#calculator"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Try Our Calculator
            </Link>
            <Link
              href="/"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
