import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pilates Instructor Insurance UK | Specialist Coverage 2026",
  description: "Professional liability insurance for pilates instructors in the UK. Coverage for mat and equipment-based pilates. From £18-£28/month.",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/pilates-instructor-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Pilates Instructor Insurance UK | Specialist Coverage</h1>

        <p className="text-lg text-slate-400 mb-8">
          Pilates instructors require specialized professional liability insurance to protect against injury claims and equipment-related accidents. This guide explains pilates-specific coverage, pricing, and how to find the best insurance for your pilates teaching.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=600&crop=entropy"
            alt="pilates instructor mat equipment class reformer professional insurance coverage"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Specialized Fitness Coverage</h2>
          <p className="text-slate-300 mb-4">Pilates involves specialized equipment and techniques requiring specific insurance coverage. Professional indemnity insurance protects you from injury claims and equipment liability.</p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Pilates Quote</Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Pilates Insurance Costs</h2>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-slate-300 font-semibold mb-2">Mat Pilates</p>
                <p className="text-xl font-bold text-blue-400">£18-£22/month</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300 font-semibold mb-2">Equipment Pilates</p>
                <p className="text-xl font-bold text-blue-400">£22-£28/month</p>
              </div>
              <div className="text-center">
                <p className="text-slate-300 font-semibold mb-2">Combined (Yoga+Pilates)</p>
                <p className="text-xl font-bold text-blue-400">£20-£25/month</p>
              </div>
            </div>
          </div>

          <p className="text-slate-400">
            Equipment-based pilates costs more due to specialized machinery risks (reformers, cadillac, apparatus). Combined yoga/pilates coverage is often cheaper than separate policies.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Pilates Needs Specialized Insurance</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Equipment Liability</h3>
              <p className="text-slate-400 text-sm">Reformers, cadillacs, chairs, and other equipment create specific injury risks. Equipment maintenance and student safety are key liability areas.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">High-Intensity Instruction</h3>
              <p className="text-slate-400 text-sm">Pilates involves precise movements and intense muscle engagement. Improper instruction can lead to strains, sprains, and serious injuries.</p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Studio Liability</h3>
              <p className="text-slate-400 text-sm">Public liability covers third-party injuries on your premises, whether in a studio, gym, or private space.</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Pilates Insurance Coverage</h2>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-bold text-green-400 mb-4">Typical Coverage Includes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="text-slate-400 text-sm space-y-2">
                <li>✓ Professional indemnity (£1-3M)</li>
                <li>✓ Public liability (£6-10M)</li>
                <li>✓ Equipment-related claims</li>
              </ul>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>✓ Legal defense costs</li>
                <li>✓ Cyber liability (optional)</li>
                <li>✓ Products liability (optional)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Mat vs. Equipment Pilates Insurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-3">Mat Pilates</h3>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Lower cost (£18-£22/month)</li>
                <li>• Bodyweight-based exercises</li>
                <li>• Lower injury severity risk</li>
                <li>• Easier to insure</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-orange-400 mb-3">Equipment Pilates</h3>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• Higher cost (£22-£28/month)</li>
                <li>• Machinery-based exercises</li>
                <li>• Higher severity injury potential</li>
                <li>• Requires specialized coverage</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Your Pilates Quote</h2>
          <p className="text-slate-300 mb-6">Professional insurance protects your pilates teaching business and gives your students confidence in your expertise.</p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Quote</Link>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Related Fitness Insurance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/fitness-instructor-insurance-uk" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">💪 Fitness Instructor Insurance UK</p>
              <p className="text-sm text-slate-400">General fitness professional coverage</p>
            </Link>
            <Link href="/how-much-yoga-teacher-insurance-cost" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">💰 How Much Does Yoga Teacher Insurance Cost?</p>
              <p className="text-sm text-slate-400">Pilates instructor insurance pricing</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
