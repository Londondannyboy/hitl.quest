'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authClient } from '@/lib/auth/client';
import { HeroVoice } from '@/components/HeroVoice';

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const firstName = user?.name?.split(' ')[0] || 'User';

  // Redirect if not logged in
  useEffect(() => {
    if (!isPending && !user) {
      router.push('/auth/sign-in');
    }
  }, [isPending, user, router]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-cyan-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{firstName}</span>
          </h1>
          <p className="text-slate-400">Your HITL.quest dashboard</p>
        </div>

        {/* Account Info */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
              {firstName.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{user.name}</h2>
              <p className="text-slate-400 text-sm">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Voice Demo */}
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-cyan-500/30 mb-8 text-center">
          <h3 className="text-xl font-bold text-white mb-6">Try Our Voice AI</h3>
          <HeroVoice />
          <p className="text-sm text-slate-400 mt-4">
            Experience our Hume-powered voice assistant
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link
            href="/#services"
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Our Services</h3>
                <p className="text-sm text-slate-400">Explore HITL solutions</p>
              </div>
            </div>
          </Link>

          <Link
            href="/contact"
            className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-white">Contact Us</h3>
                <p className="text-sm text-slate-400">Start a conversation</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Box */}
        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 text-center">
          <p className="text-slate-400 text-sm">
            Use the chat assistant in the bottom-right corner to learn more about our Human-in-the-Loop AI solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
