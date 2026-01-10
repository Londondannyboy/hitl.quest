import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fitness Instructor Insurance UK | Professional Liability 2026",
  description: "Professional liability insurance for fitness instructors in the UK. Coverage for yoga, pilates, personal training, group fitness. From £18-£28/month.",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/fitness-instructor-insurance-uk",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Fitness Instructor Insurance UK | Professional Coverage</h1>

        <p className="text-lg text-slate-400 mb-8">
          Whether you teach yoga, pilates, group fitness, personal training, or combinations thereof, professional liability insurance is essential. This comprehensive guide covers insurance requirements for all UK fitness professionals and how to find affordable coverage.
        </p>

        <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-blue-500/20">
          <img
            src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=1200&h=600&crop=entropy"
            alt="fitness instructor group class personal training professional liability insurance"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">All Fitness Disciplines Covered</h2>
          <p className="text-slate-300 mb-4">Whether you're a yoga teacher, pilates instructor, group fitness leader, or personal trainer, professional indemnity insurance protects your teaching career and financial security.</p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Fitness Quote</Link>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Fitness Instructor Insurance Costs by Discipline</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Discipline</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Cost</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Yoga (all styles)</td>
                  <td className="py-3 px-3 text-slate-400">£18-£32/month</td>
                  <td className="py-3 px-3 text-yellow-400">Medium</td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Pilates (mat/equipment)</td>
                  <td className="py-3 px-3 text-slate-400">£18-£28/month</td>
                  <td className="py-3 px-3 text-yellow-400">Medium</td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Group Fitness</td>
                  <td className="py-3 px-3 text-slate-400">£18-£25/month</td>
                  <td className="py-3 px-3 text-green-400">Low-Medium</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="py-3 px-3 text-slate-300">Personal Training</td>
                  <td className="py-3 px-3 text-slate-400">£20-£30/month</td>
                  <td className="py-3 px-3 text-yellow-400">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why All Fitness Professionals Need Insurance</h2>

          <div className="space-y-3">
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex items-start">
              <span className="text-green-400 font-bold mr-3">✓</span>
              <span className="text-slate-400"><strong>Studio Requirement:</strong> Most fitness studios, gyms, and wellness centers require proof of professional liability insurance before hiring</span>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex items-start">
              <span className="text-green-400 font-bold mr-3">✓</span>
              <span className="text-slate-400"><strong>Legal Protection:</strong> One serious student injury claim could cost £50,000-£500,000 without insurance</span>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex items-start">
              <span className="text-green-400 font-bold mr-3">✓</span>
              <span className="text-slate-400"><strong>Professional Credibility:</strong> Insurance demonstrates commitment to student safety and professional standards</span>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 flex items-start">
              <span className="text-green-400 font-bold mr-3">✓</span>
              <span className="text-slate-400"><strong>Student Confidence:</strong> Students prefer instructors with professional insurance—they know they're protected</span>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Comprehensive Coverage for Fitness Professionals</h2>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-xl font-bold text-green-400 mb-4">Standard Coverage Includes:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="text-slate-400 text-sm space-y-2">
                <li>✓ Professional indemnity (£1-3M)</li>
                <li>✓ Public liability (£6-10M)</li>
                <li>✓ Legal defense costs</li>
              </ul>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>✓ Equipment liability</li>
                <li>✓ Cyber liability (online classes)</li>
                <li>✓ 24/7 claims support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Your Fitness Quote Today</h2>
          <p className="text-slate-300 mb-6">Professional insurance for fitness instructors starts from just £18/month. Protect your career and your students with proper liability coverage.</p>
          <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">Get Quote</Link>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Discipline-Specific Insurance Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pilates-instructor-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">🧘 Pilates Instructor Insurance UK</p>
              <p className="text-sm text-slate-400">Equipment and mat pilates professional coverage</p>
            </Link>
            <Link href="/group-fitness-instructor-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400">👥 Group Fitness Instructor Insurance</p>
              <p className="text-sm text-slate-400">Class-based fitness teaching coverage</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
