import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Trainee Yoga Teacher Insurance UK: Protection During Training",
  description: "Complete guide to insurance for trainee yoga teachers, student coverage requirements, and protection while completing your yoga training course.",
  keywords: [
    "trainee yoga teacher insurance",
    "yoga student insurance",
    "yoga teacher training insurance",
    "student yoga instructor insurance",
    "yoga course student insurance"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Trainee Yoga Teacher Insurance UK: Protection During Training",
  description: "Complete guide to insurance for trainee yoga teachers and students.",
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
          <span className="text-slate-300">Trainee Yoga Teacher Insurance</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-amber-500/20">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop&q=80"
                alt="trainee yoga teacher insurance student coverage training course protection"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-amber-500/30 text-amber-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Student Guidance
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Trainee Yoga Teacher Insurance
            <span className="text-amber-400"> Protection While Training</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Complete guide to insurance requirements for yoga students and trainees, including student practice insurance, training course coverage, and protection while learning to teach.</p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <span>December 2024</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>Updated 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-amber-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">Key Points for Trainees</h2>
          <p className="text-lg text-slate-200 mb-4">
            <strong>Most yoga teacher training courses do NOT provide insurance for students.</strong> Trainees and students should consider obtaining trainee-specific insurance, which typically costs <strong>£8-25/month (£100-£300/year)</strong> and covers practice teaching.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Training courses:</strong> Check if insurance is included in course fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Practice teaching:</strong> You need insurance when teaching other trainees or friends</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Budget consciously:</strong> Trainee insurance is affordable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Transition seamlessly:</strong> Upgrade to full professional insurance after completion</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 mt-0">Understanding Insurance for Trainee Yoga Teachers</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            If you're currently enrolled in a yoga teacher training program, you're likely thinking about whether you need insurance. This is an important question because even as a student still in training, you may be teaching other trainees, friends, or family members during practice sessions—situations where insurance becomes essential protection.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The key insight: Your yoga school's insurance probably doesn't cover your personal practice teaching. If you injure someone while you're teaching them yoga, even as a trainee, they could claim against you personally. Trainee-specific insurance exists specifically for this situation and costs very little.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Does Your Yoga Training Course Include Insurance?</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            First, check whether your yoga training course includes insurance. Some training programs do include basic coverage for students, though this varies widely by school and course type.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Insurance Included in Course Fees</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Some yoga schools, particularly Yoga Alliance accredited programs, include professional insurance in course fees. This coverage typically extends to:
          </p>

          <ul className="space-y-2 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Practice teaching during the course (teaching other trainees)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Supervised teaching as part of curriculum</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold">✓</span>
              <span>Liability if you accidentally injure someone during practice teaching</span>
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed mb-4">
            However, even if your course includes insurance, the coverage typically expires when your course finishes. Additionally, it may not cover unsupervised practice teaching outside the course structure.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Insurance NOT Included in Course Fees</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Many yoga teacher training programs—particularly shorter weekend courses, online programs, or independent instructors—do not include insurance in their fees. If your course falls into this category, you need to obtain your own trainee insurance.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Why Trainee Yoga Teachers Need Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Even as a trainee not yet fully qualified, you face real liability risks if you're teaching yoga to anyone—whether it's other trainees, friends, family, or anyone in a practice class. Consider these scenarios:
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Practice Teaching During Course</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Most yoga training courses require students to teach practice classes, either to other trainees or to the general public. During these practice sessions, you're teaching professionally, even though you're still learning. If someone is injured, they can claim against you even though you're a trainee.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Teaching Friends and Family</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Many trainees start teaching friends and family while still in training. Even casual teaching can create liability. If your friend claims that a pose you taught them caused back pain, you're potentially liable for damages—and you need insurance to protect yourself.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Private Student Sessions</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Some trainees offer private lessons while completing their training. Private sessions create even higher liability risks because you have one-on-one responsibility. Without insurance, you're personally exposed to any injury claim.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Trainee vs. Professional Yoga Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            The key differences between trainee and professional yoga teacher insurance:
          </p>

          <table className="w-full mb-6 text-slate-300 border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Aspect</th>
                <th className="text-left py-3 px-4 text-white">Trainee Insurance</th>
                <th className="text-left py-3 px-4 text-white">Professional Insurance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Annual Cost</td>
                <td className="py-3 px-4">£100-300</td>
                <td className="py-3 px-4">£360-720</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Coverage Amount</td>
                <td className="py-3 px-4">£1-6 million</td>
                <td className="py-3 px-4">£6-10 million</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Teaching Frequency</td>
                <td className="py-3 px-4">Occasional/practice only</td>
                <td className="py-3 px-4">Regular professional teaching</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Student Volume</td>
                <td className="py-3 px-4">5-10 students per class</td>
                <td className="py-3 px-4">10+ students, multiple classes</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">Private Sessions Covered</td>
                <td className="py-3 px-4">Sometimes limited</td>
                <td className="py-3 px-4">Full coverage</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Specialized Yoga Covered</td>
                <td className="py-3 px-4">Standard yoga only</td>
                <td className="py-3 px-4">All yoga styles available</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Getting Trainee Yoga Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Trainee yoga insurance is straightforward to obtain:
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Ask Your Training Provider First</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Check whether your yoga training school includes insurance in course fees or recommends specific providers. Many schools have established relationships with insurers and can provide group discounts to their students.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Check If You Qualify for Group Rates</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Some insurers offer group discounts for students of specific yoga schools. These can reduce costs by 20-30%, making insurance even more affordable.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Compare Individual Trainee Policies</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            If no group coverage is available, compare trainee-specific policies from yoga insurance specialists. Many offer policies specifically designed for students and trainees with appropriate coverage levels and affordable pricing.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">When to Upgrade to Professional Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Plan to upgrade to professional yoga teacher insurance:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Upon course completion:</strong> Immediately after finishing training</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Before taking your first paid class:</strong> Never teach for payment without professional insurance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Before accepting studio employment:</strong> Studios will require professional insurance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>When teaching regularly:</strong> If you're teaching more than occasionally</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Budget Planning for Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            As a trainee, include insurance costs in your training budget:
          </p>

          <table className="w-full mb-6 text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-white">Training Duration</th>
                <th className="text-left py-3 px-4 text-white">Trainee Insurance Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">10-week intensive course</td>
                <td className="py-3 px-4">£30-50 (short-term)</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">6-month part-time course</td>
                <td className="py-3 px-4">£75-150</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-3 px-4">1-year full program</td>
                <td className="py-3 px-4">£150-300</td>
              </tr>
              <tr>
                <td className="py-3 px-4">500-hour training (2 years)</td>
                <td className="py-3 px-4">£300-600</td>
              </tr>
            </tbody>
          </table>

          <h3 className="text-2xl font-bold mb-4 mt-8">Key Takeaways for Trainee Yoga Teachers</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Remember these essential points about trainee insurance:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">1.</span>
              <span>Check if your training course includes insurance in fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">2.</span>
              <span>If not included, obtain trainee-specific insurance immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">3.</span>
              <span>Trainee insurance is inexpensive (£8-25/month) and essential</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">4.</span>
              <span>Upgrade to professional insurance before your course ends or you take your first paid class</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold">5.</span>
              <span>Never teach yoga for payment without appropriate professional insurance</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Conclusion</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Being a trainee yoga teacher doesn't exempt you from liability if you teach and someone gets injured. Even though you're still learning, you have a responsibility to protect those you teach. Trainee insurance is affordable, appropriate for your current situation, and ensures you're properly protected while you complete your training.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Plan to transition from trainee insurance to professional insurance as you complete your training and begin your professional yoga teaching career. This straightforward progression ensures continuous protection as your teaching progresses from student practice to professional practice.
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
                Full breakdown of insurance pricing for all levels of teachers.
              </p>
            </Link>
            <Link
              href="/articles/yoga-alliance-insurance-requirements"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-blue-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors mb-2">
                Yoga Alliance Requirements
              </h4>
              <p className="text-slate-400 text-sm">
                Insurance requirements for Yoga Alliance certified teachers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-900/30 to-blue-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get Trainee Yoga Insurance
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Find affordable trainee insurance options for yoga students and trainees.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Quote Today
          </a>
        </div>
      </section>
    </main>
  )
}
