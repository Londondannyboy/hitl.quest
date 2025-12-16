import Link from "next/link"
import { Metadata } from "next"
import { AerialYogaCalculator } from "@/components/AerialYogaCalculator"

export const metadata: Metadata = {
  title: "Aerial Yoga Insurance UK 2025 | Equipment & Fall Protection Coverage",
  description: "Specialist aerial yoga insurance for UK instructors. Complete coverage for suspension equipment, fall risks, rigging liability & student injuries. Get quotes from £28/month with our calculator.",
  keywords: "aerial yoga insurance UK, aerial yoga insurance cost, suspended yoga insurance, flying yoga insurance, aerial silks insurance, aerial hammock insurance, equipment liability insurance",
  alternates: {
    canonical: "https://yogateacherinsurance.quest/aerial-yoga-insurance",
  },
  openGraph: {
    title: "Aerial Yoga Insurance UK | Specialist Equipment Coverage",
    description: "Protect your aerial yoga practice with specialist insurance. Coverage for falls, equipment failure, and student injuries from £28/month.",
    type: "website",
    url: "https://yogateacherinsurance.quest/aerial-yoga-insurance",
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Aerial Yoga Insurance UK | Complete Equipment & Safety Coverage
        </h1>

        <p className="text-lg text-slate-400 mb-8">
          Aerial yoga (suspended yoga, flying yoga, anti-gravity yoga) is the highest-risk yoga discipline and requires premium specialized insurance coverage. This comprehensive 2025 guide explains equipment liability, fall protection, safety protocols, coverage needs, and why aerial yoga insurance costs significantly more than standard yoga insurance. Use our calculator below to get instant premium estimates.
        </p>

        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8 border border-red-500/20 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop&q=80"
            alt="Aerial yoga instructor performing suspended inversion pose in silk hammock with proper safety equipment and rigging at professional studio height demonstrating advanced aerial technique"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-semibold">Professional Aerial Yoga Setup</p>
            <p className="text-slate-300 text-xs">Proper equipment & safety protocols required for insurance coverage</p>
          </div>
        </div>

        {/* Comparison Site Disclaimer */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-blue-400 font-semibold mb-1">We Are A Comparison Site</p>
              <p className="text-slate-300 text-sm">
                YogaTeacherInsurance.quest is an independent comparison website, not an insurer. We compare specialist aerial yoga insurance providers to help you find suitable cover. We do not provide financial advice. Always verify policy details directly with insurers.
              </p>
            </div>
          </div>
        </div>

        {/* Aerial Yoga Insurance Calculator */}
        <section id="calculator" className="my-12 scroll-mt-20">
          <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-2 text-center">Aerial Yoga Insurance Calculator</h2>
            <p className="text-slate-400 text-center mb-8">Get instant premium estimates based on your teaching profile</p>
            <AerialYogaCalculator />
          </div>
        </section>

        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Highest Risk Yoga Discipline</h2>
          <p className="text-slate-300 mb-4">
            Aerial yoga carries the highest liability risk of all yoga types. Suspended equipment, fall risks from heights of 6-15+ feet, and potential for catastrophic injuries (spinal cord damage, brain trauma, fractures) mean insurance costs are 50-100% higher than standard yoga and significantly higher than hot or power yoga.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="text-red-400 font-bold text-2xl">6-15 feet</div>
              <div className="text-slate-400 text-sm">Typical suspension height</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="text-red-400 font-bold text-2xl">£500K+</div>
              <div className="text-slate-400 text-sm">Potential claim costs</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-3">
              <div className="text-red-400 font-bold text-2xl">50-100%</div>
              <div className="text-slate-400 text-sm">Higher premiums vs standard</div>
            </div>
          </div>
        </div>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Aerial Yoga Insurance Costs 2025</h2>

          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                <p className="text-slate-300 font-semibold mb-2">Standard Yoga</p>
                <p className="text-3xl font-bold text-green-400 mb-1">£18-£25</p>
                <p className="text-sm text-slate-400">per month</p>
              </div>
              <div className="text-center p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
                <p className="text-slate-300 font-semibold mb-2">Hot Yoga</p>
                <p className="text-3xl font-bold text-orange-400 mb-1">£22-£32</p>
                <p className="text-sm text-slate-400">per month</p>
              </div>
              <div className="text-center p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                <p className="text-slate-300 font-semibold mb-2">Aerial Yoga</p>
                <p className="text-3xl font-bold text-red-400 mb-1">£28-£45</p>
                <p className="text-sm text-slate-400">per month</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-5 mb-6">
            <h3 className="text-lg font-bold text-orange-400 mb-3">What Affects Your Aerial Yoga Premium?</h3>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span><strong>Equipment Height:</strong> Higher suspension points (10-15+ feet) increase premiums by 15-30%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span><strong>Teaching Volume:</strong> More weekly classes means higher exposure and increased cost</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span><strong>Experience Level:</strong> Newly qualified instructors pay 25-35% more than 5+ year veterans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span><strong>Coverage Limits:</strong> Higher indemnity limits (£6M+ vs £3M) add £5-10/month</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span><strong>Equipment Value:</strong> Additional equipment coverage (silks, hammocks, rigging) costs £4-8/month</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-400 bg-slate-800/30 p-4 rounded-lg border-l-4 border-red-500">
            <strong className="text-red-400">Why the premium?</strong> Aerial yoga involves suspended equipment, potential falls from 6-15+ feet, and serious injury risks including spinal cord damage, brain trauma, and fractures. A single fall-related claim could exceed £100,000-£500,000 in medical costs, rehabilitation, and liability damages. Equipment failure (fabric tears, rigging collapse, anchor point failure) can cause multiple simultaneous injuries if a group class is affected.
          </p>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Why Aerial Yoga Requires Specialized Insurance</h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Fall & Impact Injury Risk</h3>
                  <p className="text-slate-400 mb-3">
                    Students are suspended 6-15+ feet above the ground. Even with proper training and safety protocols, falls can occur due to fabric slippage, student panic, improper wrapping technique, or loss of grip. Serious spinal injuries, head trauma, concussions, and fractures are possible without proper equipment, spotting, and progressive training methods.
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-red-400">Insurance Implication:</strong> Insurers require documented safety briefings, progression tracking (beginner → advanced), mandatory spotter protocols, and maximum height restrictions. Violations can void coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Equipment Liability & Maintenance</h3>
                  <p className="text-slate-400 mb-3">
                    Faulty fabric (wear, tears, UV damage), rigging failure (carabiner malfunction, swivel breakage), anchoring issues (ceiling mount failure, beam stress fractures), or improper setup can lead to catastrophic student falls and serious injuries. Instructors and studios are legally liable for equipment maintenance, regular safety inspections, load testing, and proper installation verification.
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-red-400">Insurance Requirement:</strong> Monthly equipment inspection logs, annual professional safety audits, fabric replacement schedules (every 1-2 years or 500 hours use), and engineering certification for anchor points. Missing documentation = claim denial.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Specialist Certification Requirements</h3>
                  <p className="text-slate-400 mb-3">
                    Insurance providers require certification from recognized aerial yoga training programs (minimum 50-100 hours aerial-specific training, not just traditional yoga + short aerial workshop). Teachers with insufficient training, expired certifications, or no documented continued professional development face automatic claim denials or policy non-renewal.
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-red-400">Accepted Certifications:</strong> Unnata Aerial Yoga, AIRYOGA, Yoga Fly, Aerial Physique, Born to Fly Yoga (Level 1 minimum). Some insurers also require base RYT-200 yoga teaching qualification.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Medical Screening & Contraindications</h3>
                  <p className="text-slate-400 mb-3">
                    Students with heart conditions, vertigo, inner ear disorders, pregnancy, spinal injuries, osteoporosis, hypertension, glaucoma, or recent surgery face extreme risk in aerial yoga. Improper or absent pre-class health screening can lead to medical emergencies and claims being denied as "negligent instruction" or "failure to screen."
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-red-400">Mandatory Protocols:</strong> Written health questionnaires (retained for 7 years), documented verbal confirmation, GP clearance letters for high-risk conditions, signed contraindication acknowledgment forms, and emergency contact information for every student.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-3">Ongoing Equipment Certification & Testing</h3>
                  <p className="text-slate-400 mb-3">
                    Equipment must meet British Standards (BS EN 795 for anchor points) and be regularly inspected by competent persons. Insurance policies require proof of equipment certification, dated maintenance logs, fabric retirement schedules, and annual professional safety inspections by qualified riggers or structural engineers.
                  </p>
                  <p className="text-slate-400">
                    <strong className="text-red-400">Critical Records:</strong> Anchor point load test certificates (every 12 months), fabric purchase dates and usage hours, rigging component inspection logs (monthly), incident reports (even near-misses), and annual professional audit reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Essential Aerial Yoga Insurance Coverage</h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Required Coverage Components</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-slate-200 mb-1">Professional Indemnity Insurance</p>
                  <p className="text-slate-400 text-sm mb-2">Minimum £3-6 million (higher than standard yoga's £2-3M)</p>
                  <p className="text-slate-500 text-xs">Covers negligent instruction claims, improper technique guidance, inadequate safety briefings, failure to spot, or teaching beyond student capability. Critical for fall-related injuries where instruction adequacy is questioned.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-slate-200 mb-1">Public Liability Insurance</p>
                  <p className="text-slate-400 text-sm mb-2">Minimum £10 million for aerial equipment and fall risks</p>
                  <p className="text-slate-500 text-xs">Covers student injuries, third-party injuries (visitors, observers), property damage from equipment failure, and studio/venue liability. Essential for equipment-related accidents and fall injuries.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-slate-200 mb-1">Equipment & Contents Coverage</p>
                  <p className="text-slate-400 text-sm mb-2">Covers fabric damage, rigging component replacement, theft (£3,000-£10,000)</p>
                  <p className="text-slate-500 text-xs">Protects your investment in aerial silks (£150-300 each), hammocks (£100-250), rigging hardware (£500-1500), and portable frame systems (£2,000-5,000). Includes accidental damage and malicious damage.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-slate-200 mb-1">Products Liability (for Studio Owners)</p>
                  <p className="text-slate-400 text-sm mb-2">Covers equipment sold or provided to students (hammocks, home practice kits)</p>
                  <p className="text-slate-500 text-xs">Essential if you sell aerial equipment or rent hammocks to students for home practice. Covers injuries from equipment defects or inadequate home installation guidance.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-slate-200 mb-1">Legal Defense Costs</p>
                  <p className="text-slate-400 text-sm mb-2">Unrestricted legal support for fall-related litigation (often £50,000-£150,000)</p>
                  <p className="text-slate-500 text-xs">Covers solicitor fees, expert witnesses (rigging engineers, medical experts), court costs, and settlement negotiations. Fall cases often require extensive technical evidence and can take 2-4 years to resolve.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Critical Policy Verification Questions</h3>
              <div className="space-y-3">
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ Does the policy explicitly cover "aerial yoga," "suspended yoga," "flying yoga," or "anti-gravity yoga"?</p>
                  <p className="text-slate-500 text-sm">Generic "yoga insurance" or "fitness instructor insurance" will NOT cover aerial activities. The policy wording must specifically mention aerial/suspended practice.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ What are the exact certification requirements?</p>
                  <p className="text-slate-500 text-sm">Some insurers require specific training schools (Unnata, AIRYOGA) while others accept "any 50+ hour aerial certification." Verify your qualifications match before purchasing.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ Is equipment failure and fabric damage covered?</p>
                  <p className="text-slate-500 text-sm">Some policies exclude equipment-related injuries or limit fabric/rigging coverage. Ensure both equipment damage AND injuries from equipment failure are included.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ What's the policy excess on fall-related claims?</p>
                  <p className="text-slate-500 text-sm">Typical excess is £250-500 but can be £1,000-2,500 for aerial claims. High excess means you pay more out-of-pocket before insurance covers the rest.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ Does it cover the specific heights you teach at (6ft, 10ft, 15ft+)?</p>
                  <p className="text-slate-500 text-sm">Some policies cap coverage at 8-10 feet. If you teach higher work, ensure policy covers your maximum teaching height.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ Are there restrictions on student medical conditions or screening requirements?</p>
                  <p className="text-slate-500 text-sm">Most policies require documented health screening. Verify what screening level is mandatory and if certain conditions void coverage.</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg">
                  <p className="text-slate-300 font-semibold mb-2">✓ Does the policy require professional equipment inspections? How often?</p>
                  <p className="text-slate-500 text-sm">Some require annual professional rigger audits (£200-500 cost). Factor this ongoing cost into your decision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Equipment Safety & Certification Standards</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Equipment Standards & Requirements</h3>
              <ul className="text-slate-400 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-300">Aerial Fabric:</strong> Must be aerial-grade nylon/polyester tricot (NOT costume fabric). Minimum breaking strength 2,000+ lbs per silk. Replace every 1-2 years or 400-600 hours use.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-300">Anchor Points:</strong> Must meet BS EN 795 (UK/EU standard for anchor devices). Requires structural engineer certification for ceiling/beam mounting. Load test to minimum 15kN (1,500kg/3,300lbs).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-300">Rigging Hardware:</strong> CE-certified carabiners (minimum 25kN rated), swivels (20kN+), and rescue-grade webbing. Inspect before EVERY class.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-300">Weight Limits:</strong> Equipment must display Safe Working Load (SWL). Standard: 120-150kg (265-330lbs) per hammock.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-300">Inspection Logs:</strong> Document fabric condition, hardware wear, and anchor integrity monthly minimum. Retain logs for 7+ years.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span><strong className="text-slate-300">Professional Maintenance:</strong> Only qualified riggers or aerial equipment specialists should install, repair, or certify equipment.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Classroom Safety Protocols</h3>
              <ul className="text-slate-400 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Pre-Class Health Screening:</strong> Written questionnaire covering contraindications (heart disease, vertigo, pregnancy, spinal conditions, recent surgery, high blood pressure).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Informed Consent:</strong> Signed waiver explicitly mentioning fall risks, potential injuries (fractures, head trauma, spinal injury), and equipment risks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Mandatory Spotter:</strong> Assistant instructor or trained spotter required for all aerial classes, especially beginner sessions and inversions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Safety Briefings:</strong> Demonstrate mount/dismount procedures, emergency descent protocols, and hand signals before EVERY class (even regular students).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-slate-300">First Aid Preparedness:</strong> Current first aid certification, AED available, head injury protocols, emergency services contact readily accessible.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span><strong className="text-slate-300">Progression System:</strong> Structured beginner/intermediate/advanced levels. Never skip progressions or allow advanced moves without prerequisite skills.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Mandatory Documentation for Insurance Claims</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-slate-300 font-semibold mb-2">Equipment Records:</p>
                <ul className="text-slate-400 space-y-1 text-sm">
                  <li>• Equipment purchase receipts & dates</li>
                  <li>• Fabric usage hours/age tracking</li>
                  <li>• Monthly inspection checklists</li>
                  <li>• Annual professional audit reports</li>
                  <li>• Anchor point load test certificates</li>
                  <li>• Repair/replacement logs</li>
                </ul>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-2">Student Records:</p>
                <ul className="text-slate-400 space-y-1 text-sm">
                  <li>• Health screening questionnaires</li>
                  <li>• Signed waivers & consent forms</li>
                  <li>• Attendance records & class registers</li>
                  <li>• Progression tracking documents</li>
                  <li>• Incident reports (all accidents)</li>
                  <li>• Safety briefing acknowledgments</li>
                </ul>
              </div>
            </div>
            <p className="text-red-400 text-sm mt-4 font-semibold">
              ⚠️ Missing documentation is the #1 reason aerial yoga insurance claims are denied. Maintain meticulous records.
            </p>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-bold text-white mb-6">Aerial Yoga Insurance Provider Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Provider Type</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Monthly Cost</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Advantages</th>
                  <th className="text-left py-3 px-3 text-blue-400 font-bold">Disadvantages</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-4 px-3 text-slate-200 font-medium">Specialist Aerial Insurers</td>
                  <td className="py-4 px-3 text-slate-300">£32-£45</td>
                  <td className="py-4 px-3 text-green-400 text-xs">Deep aerial expertise, fewer exclusions, faster claims</td>
                  <td className="py-4 px-3 text-slate-400 text-xs">Higher premiums, stricter equipment requirements</td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-4 px-3 text-slate-200 font-medium">Fitness/Dance Insurers</td>
                  <td className="py-4 px-3 text-slate-300">£28-£38</td>
                  <td className="py-4 px-3 text-green-400 text-xs">Competitive pricing, bundled options</td>
                  <td className="py-4 px-3 text-slate-400 text-xs">May have height limits, generic policies</td>
                </tr>
                <tr className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-4 px-3 text-slate-200 font-medium">General Yoga Insurers</td>
                  <td className="py-4 px-3 text-slate-300">£22-£32</td>
                  <td className="py-4 px-3 text-green-400 text-xs">Lower base cost, familiar providers</td>
                  <td className="py-4 px-3 text-orange-400 text-xs">Limited aerial knowledge, higher claim denials</td>
                </tr>
                <tr className="hover:bg-slate-700/30">
                  <td className="py-4 px-3 text-slate-200 font-medium">Standard Yoga Policies</td>
                  <td className="py-4 px-3 text-slate-300">£18-£25</td>
                  <td className="py-4 px-3 text-green-400 text-xs">Cheapest option</td>
                  <td className="py-4 px-3 text-red-400 text-xs font-semibold">NO aerial coverage - claims DENIED</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-5">
            <p className="text-red-400 font-bold flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              CRITICAL WARNING: Never Teach Aerial Yoga with Standard Yoga Insurance
            </p>
            <p className="text-slate-300 mt-2 text-sm">
              Standard yoga insurance policies explicitly exclude aerial/suspended activities. If you make a claim for an aerial yoga incident, it will be automatically denied. You will be personally liable for all costs (medical bills, legal fees, compensation) which could exceed £500,000-£2,000,000 for serious injuries.
            </p>
          </div>
        </section>

        <section className="my-12 bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Why Aerial Yoga Insurance is Non-Negotiable</h2>
          <p className="text-slate-300 mb-4">
            Aerial yoga is fundamentally different from all other yoga disciplines from both a risk and insurance perspective. A serious fall from 10-15 feet can result in catastrophic injuries including spinal cord damage (paralysis), traumatic brain injury, skull fractures, multiple bone fractures, and internal organ damage. Medical treatment and rehabilitation for such injuries can cost £500,000-£2,000,000+ and take years.
          </p>
          <p className="text-slate-300 mb-4">
            Beyond medical costs, you face unlimited personal liability for compensation, loss of earnings, ongoing care costs, and legal fees. A single serious claim without proper insurance could bankrupt you, force home sale to pay damages, and permanently end your teaching career.
          </p>
          <div className="bg-slate-900/50 rounded-xl p-4 border-l-4 border-red-500">
            <p className="text-slate-300 text-sm">
              <strong className="text-red-400">Real Risk Example:</strong> In 2019, an aerial yoga instructor in the US faced a $2.3M lawsuit after a student fell 12 feet due to fabric anchor failure. The instructor's generic "fitness insurance" denied the claim, citing aerial exclusion. The instructor declared bankruptcy and lost their home. <span className="text-red-400 font-semibold">Don't let this happen to you.</span>
            </p>
          </div>
          <p className="text-slate-300 mt-4">
            The insurance cost of £28-£45/month is negligible compared to the protection it provides and the financial devastation of being uninsured. It's not just good practice—it's essential business protection and professional responsibility to your students.
          </p>
        </section>

        <section id="providers" className="my-12 bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Get Your Aerial Yoga Insurance Quote</h2>
          <p className="text-slate-300 mb-6">
            Don't compromise on coverage. Get specialist quotes from UK providers experienced in aerial equipment liability, fall protection, and suspended fitness insurance. Use our calculator above to estimate costs, then compare detailed quotes from verified insurers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#calculator" className="inline-block px-8 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors">
              Use Calculator Above
            </Link>
            <Link href="/best-yoga-teacher-insurance-uk" className="inline-block px-8 py-3 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors">
              Compare UK Providers
            </Link>
          </div>
        </section>

        <section className="my-12 pt-8 border-t border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Related Aerial Yoga Insurance Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/articles/aerial-yoga-insurance-explained" className="p-4 bg-purple-800/30 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-colors">
              <p className="font-semibold text-purple-400 mb-2">📖 Aerial Yoga Insurance Guide</p>
              <p className="text-sm text-slate-400">In-depth article on suspension equipment protection and fall coverage</p>
            </Link>
            <Link href="/hot-yoga-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">🔥 Hot Yoga Insurance UK</p>
              <p className="text-sm text-slate-400">Specialized thermal conditions coverage for heated yoga studios</p>
            </Link>
            <Link href="/how-much-yoga-teacher-insurance-cost" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">💰 How Much Does Yoga Insurance Cost?</p>
              <p className="text-sm text-slate-400">Complete breakdown of aerial yoga equipment insurance pricing</p>
            </Link>
            <Link href="/best-yoga-teacher-insurance-uk" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">⭐ Best Yoga Teacher Insurance UK 2025</p>
              <p className="text-sm text-slate-400">Top-rated providers covering aerial yoga and suspended practice</p>
            </Link>
            <Link href="/do-you-need-yoga-teacher-insurance" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">✓ Do You Need Yoga Teacher Insurance?</p>
              <p className="text-sm text-slate-400">Risk assessment for aerial yoga instructors and legal requirements</p>
            </Link>
            <Link href="/articles/yoga-insurance-costs-guide" className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-colors">
              <p className="font-semibold text-blue-400 mb-2">📊 Complete Costs Breakdown 2025</p>
              <p className="text-sm text-slate-400">Detailed article on specialty yoga insurance pricing factors</p>
            </Link>
          </div>
        </section>

        {/* Schema.org Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does aerial yoga insurance cost in the UK?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aerial yoga insurance in the UK costs £28-£45 per month on average, depending on your experience level, equipment height, teaching volume, and coverage limits. This is 50-100% higher than standard yoga insurance due to the significant fall and equipment risks."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need special insurance for aerial yoga?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, absolutely. Standard yoga insurance policies explicitly exclude aerial/suspended activities. You MUST have specialist aerial yoga insurance that covers equipment liability, fall risks, and suspension-specific injuries. Teaching without proper coverage exposes you to unlimited personal liability."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does aerial yoga insurance cover?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aerial yoga insurance covers professional indemnity (£3-6M), public liability (£10M), equipment damage and failure, fall-related injuries, student injuries from suspended work, legal defense costs, and rigging liability. It must explicitly mention aerial/suspended yoga coverage."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </div>
  )
}
