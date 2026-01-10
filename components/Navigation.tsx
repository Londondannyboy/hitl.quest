'use client'

import { useState } from 'react'
import Link from 'next/link'
import { authClient } from '@/lib/auth/client'
import { UserButton } from '@neondatabase/auth/react/ui'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  // Main navigation links
  const mainLinks = [
    { href: '#services', label: 'Services' },
    { href: '#tech', label: 'Tech Stack' },
    { href: '#faq', label: 'FAQ' },
  ]

  // Services dropdown
  const serviceTypes = [
    { href: '#services', label: 'AI Customer Service', icon: '💬' },
    { href: '#services', label: 'Voice Call Systems', icon: '📞' },
    { href: '#services', label: 'Document Processing', icon: '📄' },
    { href: '#services', label: 'Content Moderation', icon: '🛡️' },
    { href: '#services', label: 'Decision Support', icon: '🧠' },
    { href: '#services', label: 'Custom Solutions', icon: '⚙️' },
  ]

  return (
    <header className="border-b border-slate-700/50 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              HITL<span className="text-cyan-400">.quest</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {/* What is HITL link */}
            <a
              href="#what-is-hitl"
              className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              What is HITL?
            </a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-slate-800 border border-slate-700 rounded-lg shadow-xl py-2 z-50">
                  {serviceTypes.map((type) => (
                    <a
                      key={type.label}
                      href={type.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      <span>{type.icon}</span>
                      {type.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Other Main Links */}
            {mainLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Divider */}
            <div className="w-px h-6 bg-slate-700 mx-2" />

            {/* Auth Section */}
            {isPending ? (
              <div className="w-7 h-7 rounded-full bg-slate-700 animate-pulse" />
            ) : user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/profile"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 text-sm transition-colors"
                >
                  <span className="text-xs">👤</span>
                  <span>Dashboard</span>
                </Link>
                <div className="w-7 h-7">
                  <UserButton size="sm" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/sign-in"
                  className="px-3 py-1.5 text-sm text-slate-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700 mt-3">
            <div className="flex flex-col space-y-1">
              {/* Main Links */}
              <a
                href="#what-is-hitl"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
              >
                What is HITL?
              </a>
              {mainLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Services Section */}
              <div className="pt-2 pb-1 px-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Our Services</span>
              </div>
              {serviceTypes.map((type) => (
                <a
                  key={type.label}
                  href={type.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 transition-colors"
                >
                  <span>{type.icon}</span>
                  {type.label}
                </a>
              ))}

              {/* Mobile auth */}
              <div className="pt-3 border-t border-slate-700 mt-2">
                {!isPending && !user && (
                  <div className="px-4 space-y-2">
                    <Link
                      href="/auth/sign-in"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 text-center transition-colors"
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
                {user && (
                  <div className="px-4 space-y-2">
                    <Link
                      href="/profile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
                    >
                      <span>👤</span>
                      Dashboard
                    </Link>
                    <div className="flex items-center gap-3 px-4 py-2">
                      <div className="w-7 h-7">
                        <UserButton size="sm" />
                      </div>
                      <span className="text-sm text-slate-300">{user.name || 'User'}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
