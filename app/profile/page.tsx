'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth/client';

// Profile state type
type ProfileState = {
  yoga_styles: string[];
  teaching_locations: string[];
  student_count: string | null;
  has_existing_insurance: boolean;
};

const YOGA_STYLE_OPTIONS = [
  { id: 'hatha', label: 'Hatha' },
  { id: 'vinyasa', label: 'Vinyasa Flow' },
  { id: 'yin', label: 'Yin / Restorative' },
  { id: 'hot_yoga', label: 'Hot Yoga / Bikram' },
  { id: 'aerial', label: 'Aerial Yoga' },
  { id: 'prenatal', label: 'Prenatal / Postnatal' },
  { id: 'teacher_training', label: 'Teacher Training' },
];

const LOCATION_OPTIONS = [
  { id: 'studio', label: 'Yoga Studio' },
  { id: 'gym', label: 'Gym / Leisure Centre' },
  { id: 'private', label: 'Private / In-Home' },
  { id: 'outdoor', label: 'Outdoor / Parks' },
  { id: 'online', label: 'Online / Virtual' },
  { id: 'corporate', label: 'Corporate / Workplace' },
];

const STUDENT_COUNT_OPTIONS = [
  { id: '1-10', label: '1-10 students' },
  { id: '11-25', label: '11-25 students' },
  { id: '26-50', label: '26-50 students' },
  { id: '50+', label: '50+ students' },
];

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  // Local state for profile preferences
  const [profile, setProfile] = useState<ProfileState>({
    yoga_styles: [],
    teaching_locations: [],
    student_count: null,
    has_existing_insurance: false,
  });

  const [saved, setSaved] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!isPending && !user) {
      router.push('/auth/sign-in');
    }
  }, [isPending, user, router]);

  const handleStyleToggle = (styleId: string) => {
    const currentStyles = profile.yoga_styles;
    const newStyles = currentStyles.includes(styleId)
      ? currentStyles.filter((s: string) => s !== styleId)
      : [...currentStyles, styleId];

    setProfile((prev) => ({
      ...prev,
      yoga_styles: newStyles,
    }));
    setSaved(false);
  };

  const handleLocationToggle = (locationId: string) => {
    const currentLocations = profile.teaching_locations;
    const newLocations = currentLocations.includes(locationId)
      ? currentLocations.filter((l: string) => l !== locationId)
      : [...currentLocations, locationId];

    setProfile((prev) => ({
      ...prev,
      teaching_locations: newLocations,
    }));
    setSaved(false);
  };

  const handleStudentCountChange = (count: string | null) => {
    setProfile((prev) => ({
      ...prev,
      student_count: count,
    }));
    setSaved(false);
  };

  const handleInsuranceToggle = () => {
    setProfile((prev) => ({
      ...prev,
      has_existing_insurance: !prev.has_existing_insurance,
    }));
    setSaved(false);
  };

  const handleSave = async () => {
    // Save to Zep for memory persistence (if configured)
    if (user) {
      try {
        await fetch('/api/zep', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            email: user.email,
            name: user.name,
            action: 'ensure_user',
          }),
        });

        // Add profile facts to Zep
        const profileFact = `User ${user.name} teaches: ${profile.yoga_styles.join(', ') || 'not specified'}. ` +
          `Locations: ${profile.teaching_locations.join(', ') || 'not specified'}. ` +
          `Student count: ${profile.student_count || 'not specified'}. ` +
          `Has existing insurance: ${profile.has_existing_insurance ? 'yes' : 'no'}.`;

        await fetch('/api/zep', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: user.id,
            action: 'add_fact',
            fact: profileFact,
          }),
        });
      } catch (e) {
        console.log('Zep not configured, skipping memory save');
      }
    }

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Your Profile</h1>
        <p className="text-slate-400 mb-8">
          Customize your preferences to get personalized insurance recommendations.
        </p>

        {/* Account Info */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>
          <div className="space-y-3">
            <div>
              <label className="text-sm text-slate-400">Name</label>
              <p className="text-white">{user.name || 'Not set'}</p>
            </div>
            <div>
              <label className="text-sm text-slate-400">Email</label>
              <p className="text-white">{user.email}</p>
            </div>
          </div>
        </div>

        {/* Yoga Styles */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Yoga Styles You Teach</h2>
          <p className="text-sm text-slate-400 mb-4">
            Select all styles you teach. This helps us recommend the right coverage.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {YOGA_STYLE_OPTIONS.map((style) => (
              <button
                key={style.id}
                onClick={() => handleStyleToggle(style.id)}
                className={`px-4 py-3 rounded-xl text-left transition-all ${
                  (profile.yoga_styles ?? []).includes(style.id)
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
                } border`}
              >
                <span className="flex items-center gap-2">
                  {(profile.yoga_styles ?? []).includes(style.id) && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {style.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Teaching Locations */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Where Do You Teach?</h2>
          <p className="text-sm text-slate-400 mb-4">
            Select all locations where you teach yoga.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {LOCATION_OPTIONS.map((location) => (
              <button
                key={location.id}
                onClick={() => handleLocationToggle(location.id)}
                className={`px-4 py-3 rounded-xl text-left transition-all ${
                  (profile.teaching_locations ?? []).includes(location.id)
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
                } border`}
              >
                <span className="flex items-center gap-2">
                  {(profile.teaching_locations ?? []).includes(location.id) && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {location.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Student Count */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Class Size</h2>
          <p className="text-sm text-slate-400 mb-4">
            How many students do you typically teach per week?
          </p>
          <div className="grid grid-cols-2 gap-3">
            {STUDENT_COUNT_OPTIONS.map((option) => (
              <button
                key={option.id}
                onClick={() => handleStudentCountChange(option.id)}
                className={`px-4 py-3 rounded-xl text-left transition-all ${
                  profile.student_count === option.id
                    ? 'bg-blue-600 text-white border-blue-500'
                    : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
                } border`}
              >
                <span className="flex items-center gap-2">
                  {profile.student_count === option.id && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {option.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Existing Insurance */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Current Insurance</h2>
          <button
            onClick={handleInsuranceToggle}
            className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
              profile.has_existing_insurance
                ? 'bg-green-600/20 text-green-400 border-green-500/50'
                : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
            } border`}
          >
            <span className="flex items-center gap-2">
              {profile.has_existing_insurance ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <div className="w-5 h-5 rounded border border-slate-500" />
              )}
              I already have yoga teacher insurance
            </span>
          </button>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Save Preferences
          </button>
          {saved && (
            <span className="text-green-400 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Saved! Your preferences are synced.
            </span>
          )}
        </div>

        <p className="text-sm text-slate-500 mt-4">
          Your preferences are automatically shared with our AI advisor to give you personalized recommendations.
        </p>
      </div>
    </div>
  );
}
