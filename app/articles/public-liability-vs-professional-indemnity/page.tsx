import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Public Liability vs Professional Indemnity: Which Insurance Do Yoga Teachers Need?",
  description: "Clear explanation of the differences between public liability and professional indemnity insurance for yoga teachers. Learn which coverage you actually need.",
  keywords: [
    "public liability vs professional indemnity",
    "professional indemnity insurance yoga",
    "public liability insurance yoga",
    "yoga teacher insurance types",
    "indemnity insurance yoga teacher"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Public Liability vs Professional Indemnity: Which Insurance Do Yoga Teachers Need?",
  description: "Clear explanation of the differences between public liability and professional indemnity insurance.",
  author: {
    "@type": "Organization",
    name: "Yoga Teacher Insurance UK"
  },
  datePublished: "2024-12-15",
  dateModified: "2024-12-15",
}

export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-slate-800/50 py-4 px-4 border-b border-slate-700">
        <div className="max-w-4xl mx-auto text-sm">
          <Link href="/articles" className="text-blue-400 hover:text-blue-300">Articles</Link>
          <span className="text-slate-500 mx-2">/</span>
          <span className="text-slate-300">Public Liability vs Professional Indemnity</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-indigo-500/20">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop&q=80"
                alt="public liability professional indemnity insurance comparison yoga teachers coverage"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-indigo-500/30 text-indigo-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Insurance Education
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Public Liability vs Professional Indemnity
            <span className="text-indigo-400"> Which Insurance Do You Need?</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Clear explanation of the fundamental differences between these two essential insurance types for yoga teachers and what each one protects.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-indigo-900/30 to-blue-900/30 border border-indigo-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">The Essential Difference</h2>
          <div className="space-y-4 text-slate-300">
            <div>
              <h4 className="font-bold text-lg text-blue-300 mb-2">Public Liability Insurance</h4>
              <p>Covers injuries or damage to third parties caused by you or your negligence during yoga classes. Example: A student slips on a wet studio floor and breaks their wrist.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-blue-300 mb-2">Professional Indemnity Insurance</h4>
              <p>Covers claims that your professional advice or instruction caused harm. Example: A student claims your yoga instruction caused them a back injury.</p>
            </div>
            <p className="text-lg font-semibold text-indigo-300 mt-4 pt-4 border-t border-indigo-500/30">
              ✓ You need BOTH types of coverage for complete protection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 mt-0">Understanding the Two Types of Insurance</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            One of the most common points of confusion for yoga teachers is understanding the difference between public liability insurance and professional indemnity insurance. Many teachers mistakenly believe these terms are interchangeable or that having one covers the risks of the other. In reality, they protect against completely different types of claims and are both essential for comprehensive protection.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Understanding this distinction isn't just academic—it's critical for ensuring you have adequate protection. A claim covered by professional indemnity wouldn't be covered by public liability insurance alone, and vice versa. Let's break down exactly what each covers and why you need both.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Public Liability Insurance: The Basics</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Public liability insurance protects you against claims from third parties who claim you caused them physical injury, death, or property damage through negligence or breach of your legal duty of care. In simpler terms, it covers "accidents" rather than "professional mistakes."
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">What Public Liability Covers</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Public liability insurance specifically covers:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Physical injuries to students caused by environmental hazards (slipping on wet floors, hitting something in the studio)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Injuries from your negligence (not maintaining studio safety, failing to warn of hazards)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Property damage you cause (damaging someone's phone, breaking studio equipment)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Legal defense costs and compensation for the injured party</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Medical expenses for injured students</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold mb-3 mt-6">Real-World Public Liability Examples</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Imagine these scenarios in your yoga studio:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">1.</span>
              <span><strong>The slip:</strong> A student exits your hot yoga class, slips on the wet bathroom floor you neglected to mop properly, and fractures their ankle. Public liability covers this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">2.</span>
              <span><strong>The falling equipment:</strong> A yoga block falls from a shelf you overstuffed and hits a student on the head, requiring emergency room treatment. Public liability covers this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">3.</span>
              <span><strong>The collision:</strong> During class, another student accidentally kicks your student in the head causing a concussion. Public liability covers this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">4.</span>
              <span><strong>The property damage:</strong> You knock over a student's expensive yoga mat bag, damaging their laptop inside. Public liability covers this.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Professional Indemnity Insurance: The Basics</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Professional indemnity insurance (also called professional liability insurance) covers claims that your professional advice, instruction, or treatment caused harm to a client. The emphasis here is on your professional expertise—what you advised or instructed them to do, not on accidents or environmental hazards.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            For yoga teachers, professional indemnity covers claims that your instruction caused physical harm, based on the assumption that you gave bad advice or failed to properly assess the student's capabilities and limitations.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">What Professional Indemnity Covers</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Professional indemnity insurance specifically covers:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Claims that your yoga instruction caused injury (e.g., a student claims your cueing made them twist their back incorrectly)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Claims that you failed to modify poses appropriately for their limitations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Claims that you pushed a student too far, beyond their safe range of motion</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Claims based on your professional assessment (or lack thereof)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Legal defense costs against professional negligence claims</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold mb-3 mt-6">Real-World Professional Indemnity Examples</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Consider these scenarios:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">1.</span>
              <span><strong>The deep backbend:</strong> You encourage a student to go deeper into a backbend despite them mentioning lower back pain. They aggravate a pre-existing condition. They claim your instruction caused the injury. Professional indemnity covers this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">2.</span>
              <span><strong>The unsafe assist:</strong> You manually adjust a student in a pose using incorrect technique, causing a shoulder strain. They claim your adjustment caused the injury. Professional indemnity covers this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">3.</span>
              <span><strong>The untold contraindication:</strong> You teach a student a pose contraindicated for their condition (which they mentioned but you missed). They sustain injury and claim you should have known better. Professional indemnity covers this.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">4.</span>
              <span><strong>The progressive injury:</strong> During a yoga class, a student feels mild pain but continues the class at your urging. The pain worsens later into a significant injury. They claim you should have recognized the problem and stopped them. Professional indemnity covers this.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">The Critical Difference: Real-World Comparison</h3>

          <p className="text-slate-300 leading-relaxed mb-6">
            Let's use a concrete example to show how these cover different aspects of the same incident:
          </p>

          <div className="bg-slate-800 p-6 rounded-lg mb-6 border border-slate-700">
            <h4 className="font-bold text-lg text-indigo-300 mb-4">Scenario: A Student Gets Injured During Warrior II Pose</h4>

            <div className="space-y-4">
              <div className="border-b border-slate-700 pb-4">
                <p className="text-slate-300 mb-2">
                  <strong>What happened:</strong> During a vinyasa class, you cue a student into warrior II. They immediately feel a sharp knee pain and stop.
                </p>
              </div>

              <div className="border-b border-slate-700 pb-4">
                <h5 className="font-bold text-green-400 mb-2">Scenario A: Environmental/Accident Factor</h5>
                <p className="text-slate-300">
                  "I slipped in warrior II because the studio floor was slippery with sweat, and I twisted my knee on the way down."
                </p>
                <p className="text-indigo-300 text-sm mt-2">
                  ✓ <strong>Public Liability covers this:</strong> The slippery floor and your responsibility to maintain safe conditions.
                </p>
              </div>

              <div>
                <h5 className="font-bold text-green-400 mb-2">Scenario B: Professional Instruction Factor</h5>
                <p className="text-slate-300">
                  "You told me to deepen my warrior II stance. I mentioned I have a knee injury history, but you insisted I could handle it. Your instruction caused me pain that aggravated my condition."
                </p>
                <p className="text-indigo-300 text-sm mt-2">
                  ✓ <strong>Professional Indemnity covers this:</strong> Your professional judgment and instruction, not the environment.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why You Need Both Types of Coverage</h3>

          <p className="text-slate-300 leading-relaxed mb-6">
            The key point: Public liability and professional indemnity cover different types of risk. A claim might fall into either category or even both, but you can't rely on one type to cover what the other doesn't.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            Consider these specific risks of teaching yoga:
          </p>

          <table className="w-full mb-6 text-slate-300 border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Risk Type</th>
                <th className="text-left py-3 px-4 text-white">Public Liability</th>
                <th className="text-left py-3 px-4 text-white">Professional Indemnity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Student slips on wet floor</td>
                <td className="py-3 px-4 text-green-400">✓ Covers</td>
                <td className="py-3 px-4">✗ Doesn't cover</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Student gets injured from your instruction</td>
                <td className="py-3 px-4">✗ Doesn't cover</td>
                <td className="py-3 px-4 text-green-400">✓ Covers</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Student hits head on equipment you placed unsafely</td>
                <td className="py-3 px-4 text-green-400">✓ Covers</td>
                <td className="py-3 px-4 text-green-400">✓ Covers</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Manual adjustment causes strain</td>
                <td className="py-3 px-4">Possibly</td>
                <td className="py-3 px-4 text-green-400">✓ Covers</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Student property damage in your care</td>
                <td className="py-3 px-4 text-green-400">✓ Covers</td>
                <td className="py-3 px-4">✗ Doesn't cover</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Coverage Amounts and Limits</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Both types of insurance come with maximum coverage limits. Understanding these limits helps you understand your protection level:
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Typical Yoga Teacher Coverage Limits</h4>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>Public Liability:</strong> Usually £1-10 million per claim (£1 million is most common for yoga teachers)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>Professional Indemnity:</strong> Usually £1-6 million per claim (£6 million is standard for yoga teachers)</span>
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed mb-4">
            These limits might seem high, but serious injury claims can be substantial. A permanent spinal injury might be valued at £500,000-£2,000,000 depending on severity and age of the injured party. Head injuries can exceed these amounts. Understanding your coverage limits helps you assess whether your insurance is adequate for your specific situation.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">What's NOT Covered by Either Type</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            There are some situations neither type of insurance covers:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Intentional harm or criminal behavior</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Professional violations or breaches of code of conduct</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Claims related to verbal abuse or harassment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Employment-related disputes with staff</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <span>Contractual disputes over class fees or services</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Getting the Right Coverage</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            When shopping for yoga teacher insurance, look for policies that explicitly include BOTH:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">1.</span>
              <span>Public Liability Insurance (minimum £1 million, ideally £6 million)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">2.</span>
              <span>Professional Indemnity Insurance (minimum £6 million)</span>
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed mb-4">
            Most yoga teacher insurance policies bundle these together as a comprehensive professional package. When comparing quotes, always verify:
          </p>

          <ul className="space-y-2 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span>Both public liability AND professional indemnity are included</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span>Coverage limits are adequate for your student volume and class types</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span>All yoga styles you teach are explicitly covered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">✓</span>
              <span>Private sessions and group classes are both covered if you offer both</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Conclusion</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Public liability and professional indemnity insurance serve different but equally important purposes in protecting your yoga teaching career. Public liability protects against accidents and environmental hazards; professional indemnity protects against claims related to your instruction and professional judgment. You need both.
          </p>

          <p className="text-slate-300 leading-relaxed">
            When you purchase yoga teacher insurance, make sure you're getting a comprehensive policy that includes both types of coverage. Review your policy annually to ensure both components are maintained and that coverage limits remain appropriate for your evolving practice.
          </p>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/articles/yoga-insurance-costs-guide"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-blue-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors mb-2">
                Complete Yoga Insurance Costs
              </h4>
              <p className="text-slate-400 text-sm">
                Full breakdown of insurance pricing and factors affecting costs.
              </p>
            </Link>
            <Link
              href="/articles/hot-yoga-insurance-coverage"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-blue-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors mb-2">
                Hot Yoga Insurance Coverage
              </h4>
              <p className="text-slate-400 text-sm">
                Specialized coverage needs for heated yoga classes.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-900/30 to-blue-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get Comprehensive Coverage Today
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Compare policies that include both public liability and professional indemnity insurance.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </main>
  )
}
