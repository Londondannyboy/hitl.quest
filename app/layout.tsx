import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { Providers } from "@/components/providers"
import { Disclaimer } from "@/components/Disclaimer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Yoga Teacher Insurance UK 2026 | Compare Quotes from £15/month",
    template: "%s | Yoga Teacher Insurance UK"
  },
  description: "Yoga teacher insurance UK - compare quotes from specialist providers. Get professional indemnity & public liability insurance for yoga instructors, trainers & studio owners. Quotes from leading insurers.",
  keywords: [
    "yoga teacher insurance",
    "yoga teacher insurance uk",
    "yoga instructor insurance",
    "insurance for yoga teachers",
    "insurance for yoga teachers uk",
    "yoga teachers insurance",
    "professional indemnity yoga",
    "yoga teacher liability insurance",
    "yoga studio insurance",
    "best yoga teacher insurance uk",
    "compare yoga teacher insurance",
    "yoga training insurance"
  ],
  authors: [{ name: "Yoga Teacher Insurance UK" }],
  creator: "Yoga Teacher Insurance UK",
  publisher: "Yoga Teacher Insurance UK",
  metadataBase: new URL("https://yogateacherinsurance.quest"),
  alternates: {
    canonical: "https://yogateacherinsurance.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://yogateacherinsurance.quest",
    siteName: "Yoga Teacher Insurance UK",
    title: "Yoga Teacher Insurance UK 2026 | Compare Quotes",
    description: "Yoga teacher insurance UK - compare quotes from specialist providers. Get professional indemnity & public liability insurance for yoga instructors & studio owners.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Teacher Insurance UK | Compare Quotes",
    description: "Yoga teacher insurance from UK specialists. Compare quotes for yoga instructors, trainers & studio owners.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    title: "Yoga Teacher Insurance UK",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  // Icons auto-detected from app/ folder: favicon.ico, icon.png, icon.svg, apple-icon.png
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://yogateacherinsurance.quest/#website",
  name: "Yoga Teacher Insurance UK",
  alternateName: ["Yoga Instructor Insurance UK", "Insurance for Yoga Teachers", "Professional Indemnity Yoga"],
  url: "https://yogateacherinsurance.quest",
  description: "Yoga teacher insurance UK comparison service. Get professional indemnity & public liability insurance for yoga instructors, trainers & studio owners from specialist UK insurers.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    "@id": "https://yogateacherinsurance.quest/#organization",
    name: "Yoga Teacher Insurance UK",
    url: "https://yogateacherinsurance.quest",
    logo: {
      "@type": "ImageObject",
      "@id": "https://yogateacherinsurance.quest/#logo",
      url: "https://yogateacherinsurance.quest/icon.svg",
      contentUrl: "https://yogateacherinsurance.quest/icon.svg",
      width: 512,
      height: 512,
      caption: "Yoga Teacher Insurance UK"
    }
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://yogateacherinsurance.quest/#service",
  name: "Yoga Teacher Insurance UK Comparison",
  alternateName: "Insurance for Yoga Teachers Comparison",
  description: "Compare yoga teacher insurance UK quotes from specialist providers. Find professional indemnity & public liability insurance for yoga instructors, trainers & studio owners. Compare Yoga Alliance, Balens, specialist providers and more.",
  provider: {
    "@type": "Organization",
    name: "Yoga Teacher Insurance UK"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  serviceType: "Yoga Teacher Insurance Comparison",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free yoga teacher insurance quotes UK"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Yoga Teacher Insurance",
      item: "https://yogateacherinsurance.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-slate-900 text-white`}>
        <Providers>
          <Disclaimer />
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  )
}
