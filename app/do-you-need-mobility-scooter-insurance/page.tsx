import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Do You Need Insurance for a Mobility Scooter UK? | 2025 Guide',
  description: 'Do you need insurance for a mobility scooter in the UK? Find out if mobility scooter insurance is legally required, what it covers, and why most owners choose to get covered.',
  keywords: [
    'do you need insurance for mobility scooter',
    'do you need insurance for a mobility scooter',
    'do you have to have insurance for a mobility scooter',
    'does mobility scooter need insurance',
    'do i need insurance for a mobility scooter',
    'do mobility scooters need insurance',
    'mobility scooter insurance requirements',
    'is mobility scooter insurance compulsory',
  ],
  alternates: {
    canonical: 'https://mobilityscooterinsurance.quest/do-you-need-mobility-scooter-insurance',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you need insurance for a mobility scooter in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, mobility scooter insurance is not a legal requirement in the UK. Unlike cars, you are not legally obligated to have insurance for your mobility scooter. However, insurance is strongly recommended to protect against theft, damage, and liability claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have to have insurance for a mobility scooter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you do not have to have insurance for a mobility scooter by law. However, most mobility scooter owners choose to get insurance because scooters are expensive to replace and are targets for theft. Insurance also provides public liability cover if you accidentally injure someone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a Class 3 mobility scooter need insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Class 3 mobility scooters must be registered with DVLA but do not legally require insurance. However, because Class 3 scooters can be used on roads at up to 8mph, insurance with public liability cover is particularly recommended.',
      },
    },
  ],
}

export default function DoYouNeedInsurancePage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="max-w-4xl mx-auto">
        {/* Hero */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Do You Need Insurance for a Mobility Scooter?
          </h1>
          <p className="text-lg text-slate-400">
            The complete UK guide to <strong>mobility scooter insurance requirements</strong> in 2025
          </p>
        </header>

        {/* Quick Answer Box */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-2">Quick Answer</h2>
          <p className="text-slate-300">
            <strong>No, mobility scooter insurance is not legally required in the UK.</strong> However,
            it is strongly recommended. While you don&apos;t <em>have to</em> have insurance for a
            mobility scooter, most owners choose to protect their investment against theft, damage,
            and potential liability claims.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Do Mobility Scooters Need Insurance?
            </h2>
            <p className="text-slate-400 mb-4">
              One of the most common questions we hear is &quot;<strong>do you need insurance for
              mobility scooter</strong> use in the UK?&quot; The short answer is no - unlike cars,
              there is no legal requirement for <strong>mobility scooter insurance</strong>.
            </p>
            <p className="text-slate-400 mb-4">
              However, understanding whether <strong>mobility scooters need insurance</strong> isn&apos;t
              just about legal requirements. It&apos;s about protecting yourself financially.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Why Do Most Owners Get Insurance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Theft Protection</h3>
                <p className="text-sm text-slate-400">
                  Mobility scooter theft is increasing. With scooters costing £1,000-£5,000+,
                  insurance means you won&apos;t be left without essential mobility equipment.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Accidental Damage</h3>
                <p className="text-sm text-slate-400">
                  Repairs can be expensive. Insurance covers damage from accidents, collisions,
                  and even weather damage to your scooter.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Public Liability</h3>
                <p className="text-sm text-slate-400">
                  If your scooter injures someone or damages property, you could face costly
                  legal claims. <strong>Mobility scooter liability insurance</strong> protects you.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Peace of Mind</h3>
                <p className="text-sm text-slate-400">
                  For as little as £4/month, you can use your scooter knowing you&apos;re
                  protected against unexpected costs.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Class 2 vs Class 3: Insurance Requirements
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Class 2 Scooters (Pavement Only)</h3>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>• Maximum speed: 4mph</li>
                  <li>• No DVLA registration required</li>
                  <li>• <strong>No insurance legally required</strong></li>
                  <li>• Insurance still recommended for theft and damage protection</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Class 3 Scooters (Road Legal)</h3>
                <ul className="text-sm text-slate-400 space-y-2">
                  <li>• Maximum speed: 8mph on roads, 4mph on pavements</li>
                  <li>• <strong>Must be registered with DVLA</strong> (free)</li>
                  <li>• <strong>No insurance legally required</strong></li>
                  <li>• Insurance strongly recommended due to road use</li>
                  <li>• Public liability cover particularly important</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Is Mobility Scooter Insurance Worth It?
            </h2>
            <p className="text-slate-400 mb-4">
              When people ask &quot;<strong>do I need insurance for a mobility scooter</strong>&quot;,
              what they&apos;re really asking is whether it&apos;s worth the cost. Here&apos;s how to decide:
            </p>
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Consider Insurance If:</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Your scooter is worth more than £500
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You rely on your scooter for independence
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You use your scooter in public places regularly
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You couldn&apos;t afford to replace it if stolen
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  You have a Class 3 scooter used on roads
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              What About Home Insurance?
            </h2>
            <p className="text-slate-400">
              Some people assume their home insurance covers their mobility scooter. While some
              policies do include limited cover, it&apos;s typically restricted to theft from
              your home only. <strong>Specialist mobility scooter insurance</strong> provides
              much better protection including cover when you&apos;re out and about, accidental
              damage, and breakdown assistance.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-slate-800/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            Protect Your Mobility Scooter Today
          </h2>
          <p className="text-slate-400 mb-6">
            While you don&apos;t legally need insurance, comprehensive cover from just £4/month
            protects your independence. Compare quotes from UK specialist insurers.
          </p>
          <Link
            href="/#calculator"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </article>
    </div>
  )
}
