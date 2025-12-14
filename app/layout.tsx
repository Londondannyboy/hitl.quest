import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Mobility Scooter Insurance UK | Compare Quotes from £4/month",
    template: "%s | Mobility Scooter Insurance UK"
  },
  description: "Mobility scooter insurance UK - compare quotes from specialist insurers. Get insurance for mobility scooter, powerchair or wheelchair. Cheap cover from £4/month with theft, damage & breakdown protection.",
  keywords: [
    "mobility scooter insurance",
    "mobility scooter insurance uk",
    "insurance for mobility scooter",
    "insurance mobility scooter",
    "scooter mobility insurance",
    "insurance for mobility scooter uk",
    "do you need insurance for mobility scooter",
    "cheap mobility scooter insurance",
    "best mobility scooter insurance uk",
    "compare mobility scooter insurance",
    "class 3 mobility scooter insurance",
    "mobility scooter insurance and breakdown cover",
    "electric wheelchair insurance"
  ],
  authors: [{ name: "Mobility Scooter Insurance UK" }],
  creator: "Mobility Scooter Insurance UK",
  publisher: "Mobility Scooter Insurance UK",
  metadataBase: new URL("https://mobilityscooterinsurance.quest"),
  alternates: {
    canonical: "https://mobilityscooterinsurance.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mobilityscooterinsurance.quest",
    siteName: "Mobility Scooter Insurance UK",
    title: "Mobility Scooter Insurance UK | Best Quotes 2025",
    description: "Mobility scooter insurance UK - get insurance for mobility scooter from specialist providers. Compare cheap quotes with theft, accidental damage & breakdown cover.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobility Scooter Insurance UK | Compare Quotes",
    description: "Mobility scooter insurance from UK specialists. Compare cheap quotes for scooter, powerchair & wheelchair cover.",
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
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mobilityscooterinsurance.quest/#website",
  name: "Mobility Scooter Insurance UK",
  alternateName: ["Insurance for Mobility Scooter UK", "Scooter Mobility Insurance"],
  url: "https://mobilityscooterinsurance.quest",
  description: "Mobility scooter insurance UK comparison service. Get insurance for mobility scooter, powerchair or electric wheelchair from specialist UK insurers.",
  inLanguage: "en-GB",
  publisher: {
    "@type": "Organization",
    name: "Mobility Scooter Insurance UK",
    url: "https://mobilityscooterinsurance.quest"
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://mobilityscooterinsurance.quest/#service",
  name: "Mobility Scooter Insurance UK Comparison",
  alternateName: "Insurance for Mobility Scooter Comparison",
  description: "Compare mobility scooter insurance UK quotes from specialist providers. Find cheap insurance for mobility scooter with theft, damage and breakdown cover. Compare Surewise, Age UK, Mark Bates and more.",
  provider: {
    "@type": "Organization",
    name: "Mobility Scooter Insurance UK"
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom"
  },
  serviceType: "Mobility Scooter Insurance Comparison",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
    description: "Free mobility scooter insurance quotes UK"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Mobility Scooter Insurance",
      item: "https://mobilityscooterinsurance.quest"
    }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
