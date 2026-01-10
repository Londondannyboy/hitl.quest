import type { Metadata } from "next"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Yoga Instructor Insurance Requirements by Location: UK Regional Guide",
  description: "Regional breakdown of yoga instructor insurance requirements across the UK. Learn location-specific liability considerations and venue requirements.",
  keywords: [
    "yoga instructor insurance by location",
    "regional yoga insurance requirements",
    "yoga insurance uk different locations",
    "venue yoga insurance requirements"
  ],
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Yoga Instructor Insurance Requirements by Location: UK Regional Guide",
  description: "Regional breakdown of yoga instructor insurance requirements across the UK.",
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
          <span className="text-slate-300">Insurance Requirements by Location</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-900 to-slate-900 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-8 border border-rose-500/20">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&crop=entropy"
                alt="yoga instructor insurance requirements UK location venue liability"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="inline-block bg-rose-500/30 text-rose-300 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Location Guide
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Yoga Insurance Requirements by Location
            <span className="text-rose-400"> UK Regional Guide</span>
          </h1>
          <p className="text-xl text-slate-300 mb-6">
            Regional breakdown of yoga instructor insurance requirements, venue-specific liability considerations, and location-dependent teaching regulations across the UK.
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
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-rose-900/30 to-pink-900/30 border border-rose-500/30 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-rose-400">Key Point About Location</h2>
          <p className="text-lg text-slate-200 mb-4">
            <strong>Insurance requirements don't vary significantly by UK region</strong>, but venue requirements, local building regulations, and teaching environments do. Your insurance must match your specific teaching location and setup.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Home studio vs hired venue:</strong> Different liability considerations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Gym vs independent studio:</strong> Different insurance requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Outdoor vs indoor classes:</strong> Different risk profiles</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Commercial vs private spaces:</strong> Different requirements apply</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6 mt-0">Understanding Location-Based Insurance Considerations</h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            A common misconception is that yoga teacher insurance requirements vary significantly depending on where in the UK you teach. While UK-wide regulations are relatively consistent, the specific type of insurance you need—and how much it will cost—does depend significantly on your teaching location and environment. Understanding these location-specific factors helps you get appropriate insurance at a fair price.
          </p>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            The UK doesn't have region-specific yoga insurance requirements like some countries do. However, where you teach does matter. Teaching hot yoga in a commercial studio in London carries different risks than teaching yin yoga in a village village hall in the Cotswolds, and your insurance should reflect these differences.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Teaching Environments and Insurance Implications</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            The primary factor isn't your geographic location but rather the physical environment and venue type where you teach.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Home Studio</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Professional indemnity + public liability (£1-6 million each)
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Teaching yoga in your own home studio carries specific considerations. You may need to disclose to your home insurance provider that you're running a business from your residence. Additionally, your property insurance might need a rider for business liability. Your yoga teacher insurance should cover classes held in your home studio space.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Home studios typically support smaller class sizes (5-15 students), which can actually reduce insurance costs compared to teaching larger groups. However, check that your home insurance allows business use of your property.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Hired Studio/Commercial Space</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Professional indemnity + public liability (£6 million minimum recommended)
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Renting dedicated studio space for yoga classes is common. The studio owner/operator typically has their own business insurance, but this doesn't cover your professional indemnity. You must carry personal professional liability insurance covering your instruction. The venue's insurance covers their facilities; yours covers your teaching.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Many hired studios require you to present proof of professional insurance before renting space. Typical requirements are minimum £6 million coverage. Get written confirmation of the studio's requirements before taking the space.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Gym or Health Club</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Usually mandated by gym; typically £6-10 million public liability minimum
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Gyms and health clubs almost universally require their yoga instructors to carry personal professional insurance. This is often a condition of employment. Typical gym requirements are:
          </p>

          <ul className="space-y-2 mb-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Minimum £6 million professional indemnity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Minimum £10 million public liability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Current, active policy with no lapses</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Certificate of insurance provided annually</span>
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed mb-4">
            Ensure your insurance explicitly covers teaching at commercial gyms if this is where you'll teach.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Village Halls and Community Spaces</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Professional indemnity + public liability (£1-6 million)
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Village halls, community centers, and similar spaces often rent to yoga teachers at affordable rates. However, these venues may have stricter insurance requirements than you'd expect. Many:
          </p>

          <ul className="space-y-2 mb-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Require proof of public liability insurance before booking</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Require £6+ million minimum coverage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Require you to name them as "interested party" on your policy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Ask you to provide proof of insurance before each booking</span>
            </li>
          </ul>

          <p className="text-slate-300 leading-relaxed mb-4">
            Always ask venue administrators for their specific insurance requirements when booking.
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Corporate/Workplace Classes</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Professional indemnity + public liability (£6-10 million); may require additional liability coverage
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Teaching yoga in corporate offices or workplace wellness programs often involves the highest insurance requirements. Many companies require:
          </p>

          <ul className="space-y-2 mb-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>£10 million public liability minimum</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Company named as "interested party" or "certificate holder"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Proof of insurance before each class</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Sometimes additional liability riders</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Health and safety compliance documentation</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold mb-3 mt-6">Outdoor Classes</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Standard professional indemnity + public liability, but verify outdoor coverage
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Teaching yoga outdoors (parks, beaches, gardens) requires specific insurance consideration. Some policies automatically exclude outdoor classes. Before teaching outdoors, verify:
          </p>

          <ul className="space-y-2 mb-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">✓</span>
              <span>Outdoor classes ARE covered by your policy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">✓</span>
              <span>Weather-related liability is covered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">✓</span>
              <span>Liability for injuries from natural hazards (tree branches, uneven ground) is covered</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">✓</span>
              <span>You have permission from location owner (park, beach, etc.) to teach</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold mb-3 mt-6">Online/Virtual Classes</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            <strong>Insurance Requirement:</strong> Confirm online teaching is covered; may require rider or notification
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Online yoga teaching became prominent post-pandemic. Insurance considerations for virtual classes include:
          </p>

          <ul className="space-y-2 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Many policies automatically cover online teaching, but verify this</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Some policies require notification that you teach online</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Coverage scope is same as in-person (professional indemnity + public liability)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Student location (UK vs international) might affect coverage</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">UK Regional Specific Considerations</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            While insurance requirements don't vary by region, some location-specific factors influence your insurance needs:
          </p>

          <h4 className="text-xl font-bold mb-3 mt-6">Major Cities (London, Manchester, Birmingham, Edinburgh, etc.)</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Urban areas typically have:
          </p>

          <ul className="space-y-2 mb-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>More commercial yoga studios (higher venue requirements)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>More corporate wellness opportunities (higher insurance demands)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Larger class sizes possible (may increase premiums)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>More specialized yoga offerings (hot yoga, aerial yoga cost more to insure)</span>
            </li>
          </ul>

          <h4 className="text-xl font-bold mb-3 mt-6">Smaller Towns and Villages</h4>
          <p className="text-slate-300 leading-relaxed mb-4">
            Rural and small urban areas typically have:
          </p>

          <ul className="space-y-2 mb-4 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Fewer commercial spaces (more home studios and village halls)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Smaller class sizes (can reduce premiums)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Lower rental costs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span>Generally standard yoga offerings (specialized styles less common)</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Building Regulations and Location Factors</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            Beyond insurance, UK building regulations affecting yoga teaching spaces vary slightly by location:
          </p>

          <ul className="space-y-3 mb-6 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Fire safety:</strong> All venues must have proper fire exits, alarms, and safety equipment. Your venue must comply; you can't teach in unsafe buildings.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Accessibility:</strong> Commercial venues must be accessible; this affects where you can teach.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Home use:</strong> Teaching from home might violate planning restrictions in some areas. Check before starting a home studio.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Parking:</strong> Venues must have adequate parking or accessibility by public transport. Poor venue access can create liability issues.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4 mt-8">Documenting Your Teaching Location for Insurance</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            When obtaining insurance, clearly document your teaching locations:
          </p>

          <ol className="space-y-3 mb-6 text-slate-300">
            <li className="flex gap-4">
              <span className="text-rose-400 font-bold">1.</span>
              <span><strong>Primary location:</strong> Where do you teach most classes?</span>
            </li>
            <li className="flex gap-4">
              <span className="text-rose-400 font-bold">2.</span>
              <span><strong>Secondary locations:</strong> List all other venues where you teach</span>
            </li>
            <li className="flex gap-4">
              <span className="text-rose-400 font-bold">3.</span>
              <span><strong>Environment type:</strong> Home studio, commercial space, gym, outdoor, etc.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-rose-400 font-bold">4.</span>
              <span><strong>Venue details:</strong> Size, access, facilities, specific location types</span>
            </li>
          </ol>

          <p className="text-slate-300 leading-relaxed mb-4">
            Accurate location documentation ensures your insurance properly covers you. If you later teach in a location type not mentioned, notify your insurer to add coverage.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-8">Conclusion</h3>

          <p className="text-slate-300 leading-relaxed mb-4">
            While yoga teacher insurance requirements don't vary by specific UK region, your insurance must match your teaching environment. The type of venue, class size, student volume, and specific location-related risks all influence your insurance needs and costs.
          </p>

          <p className="text-slate-300 leading-relaxed">
            When obtaining insurance, focus on accurately describing your teaching location and environment rather than worrying about regional variations. Be transparent about where you teach, what environment you're teaching in, and what activities you conduct. This ensures you get appropriate coverage and avoid coverage disputes if something goes wrong.
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
                Full breakdown of insurance pricing factors and costs.
              </p>
            </Link>
            <Link
              href="/articles/best-yoga-insurance-providers-2026"
              className="group bg-slate-800 hover:bg-slate-700 rounded-lg p-6 transition-all border border-slate-700 hover:border-blue-500/50"
            >
              <h4 className="font-bold text-lg group-hover:text-blue-400 transition-colors mb-2">
                Best Yoga Insurance Providers 2026
              </h4>
              <p className="text-slate-400 text-sm">
                Comparison of leading UK yoga insurance providers.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-900/30 to-blue-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Get Insurance for Your Teaching Location
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get quotes that match your specific teaching environment and venue type.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Custom Quote
          </a>
        </div>
      </section>
    </main>
  )
}
