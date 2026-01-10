import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Yoga Alliance UK Insurance | Professional Requirements 2026",
  description: "Insurance for Yoga Alliance UK registered members. Professional indemnity requirements for RYA members and yoga teachers.",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/yoga-alliance-insurance-uk",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Yoga Alliance UK Insurance | Professional Requirements</h1>

        <p className="text-lg text-slate-400 mb-8">
          Yoga Alliance UK (RYA) is the principal professional body for yoga teachers in the UK. While professional indemnity insurance isn't legally mandated, it's strongly recommended and increasingly required by studios. This guide explains RYA membership levels, insurance recommendations, and how professional insurance supports your teaching career.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&crop=entropy"
            alt="yoga alliance UK registered teacher professional standards insurance requirements"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Professional Standard</h2>
          <p className="text-slate-300 mb-4">RYA membership combined with professional insurance is the gold standard for UK yoga teachers, providing credibility with studios and confidence for students.</p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Insured</Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">RYA Membership Levels & Insurance</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">RYTA® - Registered Yoga Teacher</h3>
              <p className="text-slate-400 mb-3">200+ hours RYT equivalent training</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Insurance: Recommended</li>
                <li>• Professional indemnity: £1-2 million minimum</li>
                <li>• Membership: £55-80/year</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">FRYA® - Fellow RYA</h3>
              <p className="text-slate-400 mb-3">500+ hours training + proven experience</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Insurance: Strongly recommended</li>
                <li>• Professional indemnity: £2-3 million</li>
                <li>• Enhanced professional status</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Student Members</h3>
              <p className="text-slate-400 mb-3">Currently completing 200+ hour training</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Insurance: Often required for teaching practice</li>
                <li>• Trainee coverage: £15-£20/month</li>
                <li>• Many training providers offer discounts</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Insurance Matters for RYA Teachers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Studio Credibility</h3>
              <p className="text-slate-400 text-sm">Studios prefer hiring RYA members who carry insurance—it demonstrates professional commitment and student protection.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Professional Standard</h3>
              <p className="text-slate-400 text-sm">RYA Code of Conduct emphasizes professional responsibility. Insurance aligns with these standards.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Student Confidence</h3>
              <p className="text-slate-400 text-sm">Students feel protected knowing their teacher is both RYA registered and properly insured.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Legal Protection</h3>
              <p className="text-slate-400 text-sm">Insurance covers legal defense and settlements—critical protection against injury claims.</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Getting Insured as an RYA Member</h2>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Step-by-Step:</h3>
            <ol className="text-slate-400 space-y-3 text-sm">
              <li><strong>1. Complete training:</strong> Finish 200+ hours yoga teacher training</li>
              <li><strong>2. Get insured:</strong> Obtain professional indemnity insurance</li>
              <li><strong>3. Register with RYA:</strong> Apply for RYTA® membership</li>
              <li><strong>4. Maintain membership:</strong> Annual RYA membership + insurance renewal</li>
            </ol>
          </div>
        </section>

        <section className="my-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">RYA Membership + Insurance = Professional Success</h2>
          <p className="text-slate-300">This combination opens doors with studios, builds client trust, and protects your career.</p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors mt-4">Get Quote</Link>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/do-you-need-yoga-teacher-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">✓ Do You Need Yoga Teacher Insurance?</p>
              <p className="text-sm text-slate-400">Professional requirements for RYA members</p>
            </Link>
            <Link href="/best-yoga-teacher-insurance-uk" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">⭐ Best Yoga Teacher Insurance UK</p>
              <p className="text-sm text-slate-400">RYA-recommended insurance providers</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
