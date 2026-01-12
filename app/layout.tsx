import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { CookieConsent } from "@/components/CookieConsent"
import { Providers } from "@/components/providers"
import { Disclaimer } from "@/components/Disclaimer"
import { DebugPanel, BetaBadge } from "@/components/DebugPanel"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "HITL.quest | Human-in-the-Loop AI Agency",
    template: "%s | HITL.quest"
  },
  description: "We build human-in-the-loop AI systems. Customer service automation, call response systems, and AI workflows with seamless human oversight. Best-in-class HITL solutions.",
  keywords: [
    "human in the loop",
    "HITL",
    "HITL agency",
    "AI customer service",
    "AI automation",
    "human oversight AI",
    "call center AI",
    "AI agency",
    "AI with human oversight",
    "customer service automation",
    "voice AI",
    "document processing AI"
  ],
  authors: [{ name: "HITL.quest" }],
  creator: "HITL.quest",
  publisher: "HITL.quest",
  metadataBase: new URL("https://hitl.quest"),
  alternates: {
    canonical: "https://hitl.quest",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hitl.quest",
    siteName: "HITL.quest",
    title: "HITL.quest | Human-in-the-Loop AI Agency",
    description: "We build AI systems that know when to ask for help. Customer service automation, call response, and AI workflows with seamless human oversight.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HITL.quest | Human-in-the-Loop AI Agency",
    description: "AI systems that combine automation with human wisdom. Customer service, call response, document processing, and more.",
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
    title: "HITL.quest",
    capable: true,
    statusBarStyle: "black-translucent",
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hitl.quest/#website",
  name: "HITL.quest",
  alternateName: ["Human in the Loop AI", "HITL AI Agency", "Human-in-the-Loop Solutions"],
  url: "https://hitl.quest",
  description: "We build human-in-the-loop AI systems. Customer service automation, call response systems, and AI workflows with seamless human oversight.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    "@id": "https://hitl.quest/#organization",
    name: "HITL.quest",
    url: "https://hitl.quest",
    logo: {
      "@type": "ImageObject",
      "@id": "https://hitl.quest/#logo",
      url: "https://hitl.quest/icon.svg",
      contentUrl: "https://hitl.quest/icon.svg",
      width: 512,
      height: 512,
      caption: "HITL.quest"
    }
  }
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hitl.quest/#service",
  name: "Human-in-the-Loop AI Solutions",
  alternateName: "HITL AI Development",
  description: "Custom human-in-the-loop AI systems including customer service automation, voice call systems, document processing, content moderation, and decision support tools. Built with cutting-edge AI frameworks.",
  provider: {
    "@type": "Organization",
    name: "HITL.quest"
  },
  serviceType: "AI Development Agency",
  offers: {
    "@type": "Offer",
    description: "Custom HITL AI Solutions"
  }
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "HITL.quest",
      item: "https://hitl.quest"
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
          <BetaBadge />
          <DebugPanel />
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
