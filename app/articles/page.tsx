import Link from 'next/link'

export default function ArticlesPage() {
  const articles = [
    {
      slug: 'yoga-insurance-costs-guide',
      title: 'The Complete Guide to Yoga Teacher Insurance Costs in 2026',
      description: 'Comprehensive breakdown of yoga teacher insurance pricing, factors affecting costs, and how much you should budget.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1542654291-526a40ef6050?w=600&h=400&crop=entropy',
      imageAlt: 'yoga teacher insurance costs 2026 UK pricing guide budget breakdown',
      color: 'from-green-900',
    },
    {
      slug: 'hot-yoga-insurance-coverage',
      title: 'Hot Yoga Insurance: Special Coverage Requirements for Heated Classes',
      description: 'Everything you need to know about insuring hot yoga, Bikram yoga, and heated classes with specialized coverage.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&crop=entropy',
      imageAlt: 'hot yoga insurance bikram yoga heated class coverage requirements',
      color: 'from-orange-900',
    },
    {
      slug: 'aerial-yoga-insurance-explained',
      title: 'Aerial Yoga Insurance: Complete Guide to Coverage and Requirements',
      description: 'Detailed guide to aerial yoga insurance, specialized coverage needs, and how to protect yourself as an aerial yoga instructor.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&crop=entropy',
      imageAlt: 'aerial yoga insurance suspension equipment protection inversion classes',
      color: 'from-purple-900',
    },
    {
      slug: 'public-liability-vs-professional-indemnity',
      title: 'Public Liability vs Professional Indemnity: Which Insurance Do You Need?',
      description: 'Clear explanation of the differences between public liability and professional indemnity insurance for yoga teachers.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: true,
      image: 'https://images.unsplash.com/photo-1552621554-5fefe8c9ef14?w=600&h=400&crop=entropy',
      imageAlt: 'public liability professional indemnity insurance comparison yoga teachers',
      color: 'from-indigo-900',
    },
    {
      slug: 'yoga-alliance-insurance-requirements',
      title: 'Yoga Alliance Insurance Requirements: Complete 2026 Guide',
      description: 'Full breakdown of Yoga Alliance insurance requirements, accreditation standards, and how to ensure compliance.',
      date: 'December 2024',
      readTime: '8 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&crop=entropy',
      imageAlt: 'yoga alliance insurance requirements accreditation standards membership',
      color: 'from-teal-900',
    },
    {
      slug: 'trainee-yoga-teacher-insurance',
      title: 'Trainee Yoga Teacher Insurance: Protection During Your Training',
      description: 'Everything trainee yoga teachers need to know about insurance coverage while completing their training course.',
      date: 'December 2024',
      readTime: '6 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1588568694645-e7a7c7ed65b9?w=600&h=400&crop=entropy',
      imageAlt: 'trainee yoga teacher insurance student coverage training course protection',
      color: 'from-amber-900',
    },
    {
      slug: 'best-yoga-insurance-providers-2026',
      title: 'Best Yoga Teacher Insurance Providers 2026: Detailed Comparison',
      description: 'Comprehensive comparison of leading yoga teacher insurance providers including pricing, coverage, and customer reviews.',
      date: 'December 2024',
      readTime: '9 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&crop=entropy',
      imageAlt: 'best yoga insurance providers 2026 comparison UK specialists',
      color: 'from-emerald-900',
    },
    {
      slug: 'yoga-instructor-insurance-requirements-by-location',
      title: 'Yoga Instructor Insurance Requirements by Location: UK Regional Guide',
      description: 'Regional breakdown of yoga instructor insurance requirements across the UK and liability considerations by area.',
      date: 'December 2024',
      readTime: '7 min read',
      featured: false,
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&crop=entropy',
      imageAlt: 'yoga instructor insurance requirements UK location venue liability',
      color: 'from-rose-900',
    },
  ]

  const featuredArticles = articles.filter(a => a.featured)
  const regularArticles = articles.filter(a => !a.featured)

  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section with Yoga Background */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&h=1080&fit=crop&q=80"
            alt="Expert yoga teacher insurance articles guides resources"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/85 to-slate-900/75"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Expert Articles & Guides
            <span className="block bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mt-2">Yoga Teacher Insurance Resources</span>
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            Comprehensive guides on yoga teacher insurance, coverage options, and protection strategies
          </p>
          <p className="text-slate-300">
            Expert resources for yoga instructors, trainers, and studio owners in the UK
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-slate-800 hover:bg-slate-700 rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/20 border border-slate-700 hover:border-blue-500/50"
              >
                <div className="relative h-48 overflow-hidden bg-slate-700">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-400">{article.date}</span>
                    <span className="text-xs text-blue-400 font-semibold">{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* All Articles */}
          <h2 className="text-3xl font-bold mb-12">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="group bg-slate-800/50 hover:bg-slate-800 rounded-lg overflow-hidden transition-all border border-slate-700 hover:border-blue-500/50"
              >
                <div className="relative h-40 overflow-hidden bg-slate-700">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold group-hover:text-blue-400 transition-colors mb-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-700">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/30 to-blue-600/20 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Compare Insurance Quotes?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Use our interactive quote calculator to compare yoga teacher insurance from leading UK providers.
          </p>
          <a
            href="/#calculator"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get Your Quote Today
          </a>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-6">About Our Yoga Insurance Guides</h2>
          <p className="text-slate-300 mb-4">
            Our comprehensive articles provide expert guidance on all aspects of yoga teacher insurance in the UK. Whether you're just starting your yoga teaching career, running an established studio, or specializing in hot yoga or aerial yoga, our guides will help you understand your insurance needs and find the right coverage.
          </p>
          <p className="text-slate-300 mb-4">
            We cover everything from basic public liability insurance to professional indemnity coverage, specialized options for different yoga styles, and detailed provider comparisons. Our goal is to help you make informed decisions about protecting your yoga teaching practice.
          </p>
          <p className="text-slate-300">
            All articles are researched and updated regularly to reflect the latest insurance requirements and market offerings for yoga professionals in the UK.
          </p>
        </div>
      </section>
    </main>
  )
}
