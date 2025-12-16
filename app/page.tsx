import { Metadata } from 'next'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Yoga Teacher Insurance UK 2025 | Compare Quotes from £15/month',
  description: 'Yoga teacher insurance UK - compare quotes from specialist providers. Get professional indemnity & public liability insurance for yoga instructors, trainers & studio owners. Quotes from leading insurers.',
  alternates: {
    canonical: 'https://yogateacherinsurance.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do yoga teachers need insurance in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While not legally required by law, yoga teacher insurance is highly recommended for professional protection. Most yoga studios require teachers to have liability insurance, and Yoga Alliance register members are strongly advised to carry professional indemnity and public liability cover. Insurance protects you against claims from students and provides essential financial protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does yoga teacher insurance cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yoga teacher insurance typically covers two main types: Professional Indemnity Insurance protects against claims of negligence or poor teaching causing injury, and Public Liability Insurance covers injury to students or damage to property during classes. Combined policies offer both protections. Many providers also offer additional coverage for yoga alliances and online classes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does yoga teacher insurance cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yoga teacher insurance typically costs between £15-£38 per month depending on experience level, coverage type, and teaching situation. New teachers (0-2 years) generally pay more than experienced teachers (5+ years). Basic public liability insurance starts around £180-£240 per year, while combined professional indemnity and public liability insurance ranges from £240-£456 per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between professional indemnity and public liability insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional Indemnity Insurance covers claims that your teaching advice or instruction caused injury or loss to a student due to negligence. Public Liability Insurance covers injury to students or damage to property that occurs during your classes. Most yoga teachers need both types of coverage for comprehensive protection. Combined policies are often more cost-effective than buying separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do trainee yoga teachers need insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, trainee yoga teachers are strongly recommended to have insurance, especially if they are teaching students during their training. Many yoga teacher training programs require trainees to carry professional indemnity insurance. Insurance protects both you and your students during the learning process and is often available at lower rates for trainees.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is yoga teacher liability insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yoga teacher liability insurance refers to both professional indemnity and public liability coverage combined. This comprehensive insurance protects you against claims from students regarding injury or damage caused by your teaching. It covers legal fees, compensation claims, and defense costs, making it essential for any yoga professional offering classes or one-on-one sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can hot yoga or aerial yoga be insured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, specialized yoga styles including hot yoga and aerial yoga can be insured. Some providers offer specific coverage for these high-risk practices. Hot yoga requires coverage for heat-related injury risks, while aerial yoga requires coverage for fall and equipment risks. Specialist insurers understand these specific requirements and can provide appropriate coverage at fair rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do studio owners need different yoga insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, yoga studio owners typically need more comprehensive insurance than independent teachers. Studio insurance should cover all teachers working at the studio, property damage, equipment, and employer\'s liability. Studio owners should also ensure they have adequate public liability coverage for the increased foot traffic and potential injury risks. Many insurers offer specific studio-owner policies.',
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

      {/* Hero Section with Yoga Background */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&crop=entropy"
            alt="Peaceful yoga practice meditation morning mindfulness wellness"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Protect Your Practice
            <span className="block bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mt-2">with Peace of Mind</span>
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            Comprehensive yoga teacher insurance from specialist UK providers
          </p>
          <p className="text-lg text-slate-200 mb-8">
            Get <strong>professional indemnity & public liability insurance</strong> for yoga instructors, trainers & studio owners.
          </p>
          <p className="text-sm text-slate-300 mb-6">
            <strong>Yoga teacher insurance from £15/month</strong> • Compare quotes in minutes • Get instant coverage
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-200">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Professional Indemnity</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Public Liability</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Yoga Alliance</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Student Protection</span>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <QuoteCalculator />
      </section>

      {/* Why Insurance Section with Yoga Background */}
      <section id="coverage" className="relative py-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1920&h=1080&fit=crop&q=80"
            alt="yoga studio class practice meditation mindfulness wellness"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/92 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do Yoga Teachers Need Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Yoga teacher insurance</strong> protects you from liability claims and provides
            essential coverage for your professional practice. With increasing litigation, the right
            insurance gives you peace of mind while you teach.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Professional Protection</h3>
              <p className="text-sm text-slate-400">
                Professional indemnity insurance covers claims that your teaching advice or
                instruction caused injury to a student due to negligence or poor practice.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Student Protection</h3>
              <p className="text-sm text-slate-400">
                Public liability insurance covers injury to students or damage to property
                during your classes. Essential for protecting your students and your business.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Legal Support</h3>
              <p className="text-sm text-slate-400">
                Coverage includes legal fees and compensation costs if a claim is made against
                you. Protects your financial security and professional reputation.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Peace of Mind</h3>
              <p className="text-sm text-slate-400">
                Focus on teaching while knowing you&apos;re protected. Insurance covers defense
                against claims and helps resolve disputes professionally.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Studio Requirements</h3>
              <p className="text-sm text-slate-400">
                Most yoga studios require teachers to carry insurance. Some insurers provide
                coverage that meets studio owner requirements and Yoga Alliance standards.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Affordable Rates</h3>
              <p className="text-sm text-slate-400">
                Yoga teacher insurance is reasonably priced. Specialist insurers offer
                competitive rates from as little as £15/month for comprehensive coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Section */}
      <section id="providers" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Leading Yoga Teacher Insurance Providers
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Compare quotes from the UK's leading <strong>yoga teacher insurance</strong> specialists.
            We help you find the best coverage at the best price.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Yoga Alliance</h3>
              <p className="text-slate-400 text-sm mb-4">
                Official insurance for Yoga Alliance registered members. Recognized and trusted provider.
              </p>
              <p className="text-sm text-slate-500">Professional + Public Liability</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Balens</h3>
              <p className="text-slate-400 text-sm mb-4">
                Specialist fitness and yoga professional insurance with competitive rates.
              </p>
              <p className="text-sm text-slate-500">Comprehensive Coverage</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-2">Specialist Providers</h3>
              <p className="text-slate-400 text-sm mb-4">
                UK insurers specializing in yoga, fitness, and wellness professionals.
              </p>
              <p className="text-sm text-slate-500">Flexible Options Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Service Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Choose Yoga Teacher Insurance UK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">⚡ Instant Quotes</h3>
              <p className="text-slate-400">
                Get personalized insurance quotes in minutes. Our calculator analyzes your specific teaching situation to provide accurate pricing.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">🏆 Specialist Providers</h3>
              <p className="text-slate-400">
                We work exclusively with UK insurers who specialize in yoga teacher coverage, understanding your unique risks and needs.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">📊 Transparent Pricing</h3>
              <p className="text-slate-400">
                No hidden fees or surprises. See exactly what you're paying for with clear breakdowns of professional indemnity and public liability costs.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">✓ Quick Comparison</h3>
              <p className="text-slate-400">
                Compare multiple providers side-by-side to find the best coverage at the best price for your teaching situation and requirements.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">🎯 Specialized Coverage</h3>
              <p className="text-slate-400">
                Whether you teach hot yoga, aerial yoga, or standard classes, we help you find insurance tailored to your specific teaching style.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">🚀 Expert Support</h3>
              <p className="text-slate-400">
                Our guides and resources help you understand insurance options, making informed decisions about protecting your yoga teaching career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cover Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Types of Yoga Teacher Insurance Cover
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Professional Indemnity</h3>
              <p className="text-slate-400 mb-4">
                Covers claims of professional negligence, poor advice, or inadequate instruction
                that causes injury to a student. Essential for protecting your professional practice.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Covers negligence claims
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Legal defense included
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Compensation costs covered
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Public Liability</h3>
              <p className="text-slate-400 mb-4">
                Covers injury to students or damage to property during your classes.
                Recommended for all yoga teachers, required by most studios.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Student injury covered
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Property damage covered
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Studio requirements met
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Combined Coverage</h3>
              <p className="text-slate-400 mb-4">
                Both professional indemnity and public liability insurance in one policy.
                Best value for comprehensive protection and peace of mind.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Comprehensive professional protection
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Cost-effective bundled rate
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Single renewal and invoice
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Specialized Coverage</h3>
              <p className="text-slate-400 mb-4">
                Additional options for hot yoga, aerial yoga, online classes, and studio owners.
                Customize coverage to match your teaching specialty.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Hot and aerial yoga
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Online class coverage
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Studio owner policies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Yoga Insurance Section with Yoga Background */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&h=1080&fit=crop&q=80"
            alt="peaceful yoga meditation mindfulness practice wellness"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Who Needs Yoga Teacher Insurance?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-green-400 mb-4">✓ You Need Insurance If You:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Teach yoga classes to students (group or private)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Are self-employed or run a yoga studio</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Are training to become a yoga teacher</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Teach specialized styles (hot yoga, aerial yoga)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Are a Yoga Alliance member or want accreditation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                  <span>Work at studios or venues that require insurance</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📚 Teacher Types We Serve:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span><strong>Experienced teachers</strong> - Established practices seeking comprehensive coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span><strong>New teachers</strong> - Recently qualified instructors starting their careers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span><strong>Trainees</strong> - Students completing yoga teacher training programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span><strong>Studio owners</strong> - Multi-teacher studios needing comprehensive protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span><strong>Freelance instructors</strong> - Teaching at multiple venues or online</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 font-bold flex-shrink-0">•</span>
                  <span><strong>Specialists</strong> - Hot yoga, aerial yoga, therapeutic practitioners</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Insured Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            How to Get Yoga Teacher Insurance in 4 Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute top--4 left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-lg">1</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Share Your Details</h3>
                <p className="text-slate-400 text-sm">
                  Tell us about your yoga teaching practice - styles you teach, experience level, number of students, and whether you teach online or in-person.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute top-4 left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-lg">2</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Get Instant Quotes</h3>
                <p className="text-slate-400 text-sm">
                  Receive personalized quotes from multiple specialist insurers within minutes. See pricing for different coverage options and compare providers.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute top-4 left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-lg">3</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Choose Your Policy</h3>
                <p className="text-slate-400 text-sm">
                  Select the coverage option that best fits your teaching practice and budget. Choose professional indemnity, public liability, or combined policies.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-2xl p-6 border border-blue-500/30 relative">
              <div className="absolute top-4 left-6 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-lg">4</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-blue-300 mb-3">Get Protected</h3>
                <p className="text-slate-400 text-sm">
                  Complete your policy and receive your certificate. You're now fully insured and can start teaching with complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/30 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Why Yoga Teacher Insurance Matters
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            A single injury claim could cost you thousands in legal fees and compensation. Without insurance, you could face:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-red-400 font-bold text-xl mb-2">£10,000+</p>
              <p className="text-slate-300 text-sm">Average legal defense costs</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-red-400 font-bold text-xl mb-2">£50,000+</p>
              <p className="text-slate-300 text-sm">Potential compensation claims</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <p className="text-red-400 font-bold text-xl mb-2">Career Risk</p>
              <p className="text-slate-300 text-sm">Loss of reputation and income</p>
            </div>
          </div>
          <p className="text-slate-300 mt-8">
            Yoga teacher insurance protects your livelihood, reputation, and financial security. For less than £30/month, you get complete peace of mind to focus on teaching.
          </p>
        </div>
      </section>

      {/* Articles & Resources Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Expert Articles & Guides
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Explore our comprehensive guides on yoga teacher insurance, coverage types, costs, and specialized requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/articles/yoga-insurance-costs-guide" className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all border border-slate-700 hover:border-blue-500/50">
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1542654291-526a40ef6050?w=600&h=400&crop=entropy"
                  alt="yoga teacher insurance costs 2025 UK pricing guide budget breakdown"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-400 group-hover:text-blue-300 mb-2">Insurance Costs Guide</h3>
                <p className="text-sm text-slate-400 mb-4">Complete breakdown of yoga teacher insurance pricing, factors affecting costs, and budgeting tips.</p>
                <div className="text-xs text-blue-400">Read Guide →</div>
              </div>
            </a>

            <a href="/hot-yoga-insurance" className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all border border-slate-700 hover:border-orange-500/50">
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&crop=entropy"
                  alt="hot yoga insurance bikram yoga heated class coverage requirements UK quotes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-orange-400 group-hover:text-orange-300 mb-2">Hot Yoga Insurance UK</h3>
                <p className="text-sm text-slate-400 mb-4">Specialized coverage for heated yoga classes, Bikram yoga, heat-related injury protection. Get quotes now.</p>
                <div className="text-xs text-orange-400">Get Quote →</div>
              </div>
            </a>

            <a href="/aerial-yoga-insurance" className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all border border-slate-700 hover:border-red-500/50">
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&crop=entropy"
                  alt="aerial yoga insurance suspended yoga equipment liability fall protection UK coverage calculator"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-red-400 group-hover:text-red-300 mb-2">Aerial Yoga Insurance UK</h3>
                <p className="text-sm text-slate-400 mb-4">Complete protection for suspension equipment, fall risks, rigging liability. Use our calculator for instant quotes.</p>
                <div className="text-xs text-red-400">Get Quote + Calculator →</div>
              </div>
            </a>

            <a href="/articles/public-liability-vs-professional-indemnity" className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all border border-slate-700 hover:border-indigo-500/50">
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1552621554-5fefe8c9ef14?w=600&h=400&crop=entropy"
                  alt="public liability professional indemnity insurance comparison yoga teachers"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-indigo-400 group-hover:text-indigo-300 mb-2">Insurance Types Explained</h3>
                <p className="text-sm text-slate-400 mb-4">Clear explanation of public liability vs professional indemnity and what each covers.</p>
                <div className="text-xs text-indigo-400">Read Guide →</div>
              </div>
            </a>

            <a href="/articles/yoga-alliance-insurance-requirements" className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all border border-slate-700 hover:border-teal-500/50">
              <div className="relative h-48 overflow-hidden bg-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&crop=entropy"
                  alt="yoga alliance insurance requirements accreditation standards membership"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-teal-400 group-hover:text-teal-300 mb-2">Yoga Alliance Requirements</h3>
                <p className="text-sm text-slate-400 mb-4">Insurance requirements for Yoga Alliance members and professional standards.</p>
                <div className="text-xs text-teal-400">Read Guide →</div>
              </div>
            </a>

            <a href="/articles" className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all border border-slate-700 hover:border-emerald-500/50">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17c0 5.523 3.692 10 8 10c1.906 0 3.674-.586 5-1.566 1.326.98 3.094 1.566 5 1.566 4.308 0 8-4.477 8-10 0-6.002-4.5-10.747-10-10.253z" />
                  </svg>
                  <p className="text-slate-300 font-semibold">View All Articles</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-emerald-400 group-hover:text-emerald-300 mb-2">Complete Collection</h3>
                <p className="text-sm text-slate-400 mb-4">Explore our complete collection of yoga teacher insurance guides and educational resources.</p>
                <div className="text-xs text-emerald-400">Browse All →</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Yoga Teacher Insurance FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do yoga teachers need insurance in the UK?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                While not legally required by UK law, yoga teacher insurance is highly recommended for professional protection. Most yoga studios require teachers to have liability insurance, and Yoga Alliance register members are strongly advised to carry professional indemnity and public liability cover. Insurance protects you against potential claims from students and provides essential financial protection for your teaching business.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What does yoga teacher insurance cover?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yoga teacher insurance typically covers two main types: Professional Indemnity Insurance protects against claims of negligence or poor teaching causing injury, and Public Liability Insurance covers injury to students or damage to property during classes. Combined policies offer both protections for comprehensive coverage. Many providers also offer additional coverage for yoga alliances and online classes.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does yoga teacher insurance cost?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yoga teacher insurance typically costs between £15-£38 per month depending on experience level, coverage type, and teaching situation. New teachers (0-2 years) generally pay more than experienced teachers (5+ years). Basic public liability insurance starts around £180-£240 per year, while combined professional indemnity and public liability insurance ranges from £240-£456 per year. <a href="/articles/yoga-insurance-costs-guide" className="text-blue-400 hover:text-blue-300 underline">Read our complete costs guide</a> for detailed pricing information. Get a personalized quote based on your teaching profile using our calculator.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is the difference between professional indemnity and public liability insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Professional Indemnity Insurance covers claims that your teaching advice or instruction caused injury or loss to a student due to negligence. Public Liability Insurance covers injury to students or damage to property that occurs during your classes. Most yoga teachers need both types of coverage for comprehensive protection. <a href="/articles/public-liability-vs-professional-indemnity" className="text-blue-400 hover:text-blue-300 underline">Learn the key differences</a> between these two essential coverage types.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do trainee yoga teachers need insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, trainee yoga teachers are strongly recommended to have insurance, especially if they are teaching students during their training. Many yoga teacher training programs require trainees to carry professional indemnity insurance. <a href="/articles/trainee-yoga-teacher-insurance" className="text-blue-400 hover:text-blue-300 underline">Check our trainee insurance guide</a> for affordable coverage options during your training. Insurance protects both you and your students during the learning process and is often available at lower rates for trainees.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is yoga teacher liability insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yoga teacher liability insurance refers to both professional indemnity and public liability coverage combined. This comprehensive insurance protects you against claims from students regarding injury or damage caused by your teaching. It covers legal fees, compensation claims, and defense costs, making it essential for any yoga professional offering classes or one-on-one sessions. Having this coverage demonstrates professionalism to students and studios.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can hot yoga or aerial yoga be insured?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, specialized yoga styles including hot yoga and aerial yoga can be insured. Some providers offer specific coverage for these high-risk practices. <a href="/articles/hot-yoga-insurance-coverage" className="text-blue-400 hover:text-blue-300 underline">Hot yoga requires coverage for heat-related risks</a>, while <a href="/articles/aerial-yoga-insurance-explained" className="text-blue-400 hover:text-blue-300 underline">aerial yoga requires coverage for fall and equipment risks</a>. Specialist insurers understand these specific requirements and can provide appropriate coverage at fair rates. When getting quotes, always mention your specific yoga specialties.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do studio owners need different yoga insurance?
                <svg className="w-5 h-5 text-blue-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, yoga studio owners typically need more comprehensive insurance than independent teachers. Studio insurance should cover all teachers working at the studio, property damage, equipment, and employer's liability. Studio owners should also ensure they have adequate public liability coverage for the increased foot traffic and potential injury risks. Many insurers offer specific studio-owner policies designed to provide comprehensive protection for the entire business.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  )
}
