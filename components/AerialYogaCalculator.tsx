'use client'

import { useState, useMemo } from 'react'

const INSTRUCTOR_TYPES = [
  { value: 'solo', label: 'Solo Instructor', description: 'Independent 1-on-1 aerial sessions' },
  { value: 'studio', label: 'Studio Owner', description: 'Own/manage aerial yoga studio' },
  { value: 'freelance', label: 'Freelance', description: 'Teach at multiple venues' },
  { value: 'assistant', label: 'Assistant/Trainee', description: 'Training or assisting lead instructor' },
]

const EXPERIENCE_LEVELS = [
  { value: '0-1', label: 'Newly Qualified', description: 'Less than 1 year', premium: 38 },
  { value: '1-3', label: '1-3 Years', description: 'Building experience', premium: 34 },
  { value: '3-5', label: '3-5 Years', description: 'Experienced instructor', premium: 30 },
  { value: '5+', label: '5+ Years', description: 'Highly experienced', premium: 28 },
]

const EQUIPMENT_HEIGHTS = [
  { value: 'low', label: 'Low Level (3-6 feet)', description: 'Ground-based & low aerial', multiplier: 0.9 },
  { value: 'medium', label: 'Medium (6-10 feet)', description: 'Standard aerial height', multiplier: 1.0, popular: true },
  { value: 'high', label: 'High (10-15 feet)', description: 'Advanced aerial work', multiplier: 1.15 },
  { value: 'very-high', label: 'Very High (15+ feet)', description: 'Professional performance level', multiplier: 1.3 },
]

const WEEKLY_CLASSES = [
  { value: '1-5', label: '1-5 Classes/Week', description: 'Part-time teaching', multiplier: 1.0 },
  { value: '6-10', label: '6-10 Classes/Week', description: 'Regular teaching', multiplier: 1.1 },
  { value: '11-15', label: '11-15 Classes/Week', description: 'Full-time teaching', multiplier: 1.2 },
  { value: '16+', label: '16+ Classes/Week', description: 'Intensive schedule', multiplier: 1.3 },
]

const COVER_TYPES = [
  { value: 'indemnity', label: 'Professional Indemnity', description: 'Coverage for negligence claims', multiplier: 0.85 },
  { value: 'liability', label: 'Public Liability', description: 'Injury & equipment damage', multiplier: 1.0, popular: true },
  { value: 'combined', label: 'Combined Coverage', description: 'Indemnity + Public Liability', multiplier: 1.35 },
]

const ADDITIONAL_OPTIONS = [
  { value: 'equipment', label: 'Equipment Coverage', description: 'Silks, hammocks, rigging (up to £5,000)', cost: 6 },
  { value: 'travel', label: 'Travel Insurance', description: 'Teaching at multiple venues', cost: 4 },
  { value: 'cyber', label: 'Cyber Insurance', description: 'Online classes & digital risks', cost: 5 },
  { value: 'legal', label: 'Legal Expenses', description: 'Enhanced legal defense', cost: 7 },
]

function estimateAerialYogaPremium(
  experienceLevel: string,
  equipmentHeight: string,
  weeklyClasses: string,
  coverType: string,
  additionalOptions: string[]
) {
  // Base premium from experience level
  const experienceData = EXPERIENCE_LEVELS.find(e => e.value === experienceLevel)
  const basePremium = experienceData?.premium || 34

  // Apply equipment height multiplier
  const heightMultiplier = EQUIPMENT_HEIGHTS.find(h => h.value === equipmentHeight)?.multiplier || 1.0

  // Apply weekly classes multiplier
  const classesMultiplier = WEEKLY_CLASSES.find(w => w.value === weeklyClasses)?.multiplier || 1.0

  // Apply cover type multiplier
  const coverMultiplier = COVER_TYPES.find(c => c.value === coverType)?.multiplier || 1.0

  // Calculate base monthly with all multipliers
  let monthlyPremium = basePremium * heightMultiplier * classesMultiplier * coverMultiplier

  // Add additional options
  additionalOptions.forEach(optionValue => {
    const option = ADDITIONAL_OPTIONS.find(o => o.value === optionValue)
    if (option) monthlyPremium += option.cost
  })

  // Add variance for realism
  const variance = monthlyPremium * 0.12

  return {
    monthly: {
      low: Math.floor(monthlyPremium - variance),
      high: Math.ceil(monthlyPremium + variance)
    },
    annual: {
      low: Math.floor((monthlyPremium - variance) * 12),
      high: Math.ceil((monthlyPremium + variance) * 12)
    }
  }
}

function formatCurrency(amount: number) {
  return `£${amount.toFixed(0)}`
}

export function AerialYogaCalculator() {
  const [step, setStep] = useState(1)
  const [instructorType, setInstructorType] = useState('freelance')
  const [experienceLevel, setExperienceLevel] = useState('1-3')
  const [equipmentHeight, setEquipmentHeight] = useState('medium')
  const [weeklyClasses, setWeeklyClasses] = useState('6-10')
  const [coverType, setCoverType] = useState('liability')
  const [additionalOptions, setAdditionalOptions] = useState<string[]>([])
  const [showEstimate, setShowEstimate] = useState(false)

  const premium = useMemo(
    () => estimateAerialYogaPremium(experienceLevel, equipmentHeight, weeklyClasses, coverType, additionalOptions),
    [experienceLevel, equipmentHeight, weeklyClasses, coverType, additionalOptions]
  )

  const canProceed = () => {
    switch (step) {
      case 1: return instructorType && experienceLevel
      case 2: return equipmentHeight && weeklyClasses
      case 3: return coverType
      default: return true
    }
  }

  const toggleAdditionalOption = (value: string) => {
    setAdditionalOptions(prev =>
      prev.includes(value)
        ? prev.filter(o => o !== value)
        : [...prev, value]
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Beta Disclaimer Banner */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="text-sm text-slate-300">
            <strong className="text-orange-400">Beta Calculator:</strong> This is an indicative pricing tool only. We are a comparison site, not an insurer, and do not provide financial advice. Final quotes depend on your individual circumstances. Always compare multiple providers.
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex items-center">
            <button
              onClick={() => s < step && setStep(s)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                s === step
                  ? 'bg-red-500 text-white'
                  : s < step
                  ? 'bg-red-500/30 text-red-400 cursor-pointer hover:bg-red-500/50'
                  : 'bg-slate-700 text-slate-400'
              }`}
              aria-label={`Step ${s}`}
            >
              {s < step ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < 4 && (
              <div className={`w-12 sm:w-20 h-1 mx-2 rounded ${s < step ? 'bg-red-500/50' : 'bg-slate-700'}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Labels */}
      <div className="grid grid-cols-4 mb-8 text-xs sm:text-sm text-slate-400 px-2">
        <span className={`text-center ${step === 1 ? 'text-red-400 font-semibold' : ''}`}>Profile</span>
        <span className={`text-center ${step === 2 ? 'text-red-400 font-semibold' : ''}`}>Risk Factors</span>
        <span className={`text-center ${step === 3 ? 'text-red-400 font-semibold' : ''}`}>Coverage</span>
        <span className={`text-center ${step === 4 ? 'text-red-400 font-semibold' : ''}`}>Estimate</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Instructor Profile */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Instructor Type</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INSTRUCTOR_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setInstructorType(type.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        instructorType === type.value
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{type.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{type.description}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Teaching Experience</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {EXPERIENCE_LEVELS.map((level) => (
                    <button
                      key={level.value}
                      onClick={() => setExperienceLevel(level.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        experienceLevel === level.value
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{level.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{level.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Risk Factors */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Equipment Height</h3>
                <p className="text-sm text-slate-400 mb-4">What height do you typically teach at?</p>
                <div className="space-y-3">
                  {EQUIPMENT_HEIGHTS.map((height) => (
                    <button
                      key={height.value}
                      onClick={() => setEquipmentHeight(height.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all relative ${
                        equipmentHeight === height.value
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {height.popular && (
                        <span className="absolute -top-2 right-4 px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                          Most Common
                        </span>
                      )}
                      <div className="font-medium text-white">{height.label}</div>
                      <div className="text-sm text-slate-400">{height.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Teaching Volume</h3>
                <p className="text-sm text-slate-400 mb-4">Average classes per week</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {WEEKLY_CLASSES.map((classes) => (
                    <button
                      key={classes.value}
                      onClick={() => setWeeklyClasses(classes.value)}
                      className={`p-4 rounded-xl text-left transition-all ${
                        weeklyClasses === classes.value
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      <span className="text-sm font-medium text-white block">{classes.label}</span>
                      <span className="text-xs text-slate-400 mt-1 block">{classes.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Coverage Selection */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Primary Coverage Type</h3>
                <div className="space-y-3">
                  {COVER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setCoverType(type.value)}
                      className={`w-full text-left p-4 rounded-xl transition-all relative ${
                        coverType === type.value
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : 'bg-slate-700/30 border-2 border-transparent hover:bg-slate-700/50'
                      }`}
                    >
                      {type.popular && (
                        <span className="absolute -top-2 right-4 px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-full">
                          Recommended
                        </span>
                      )}
                      <div className="font-medium text-white">{type.label}</div>
                      <div className="text-sm text-slate-400">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Additional Coverage (Optional)</h3>
                <div className="space-y-3">
                  {ADDITIONAL_OPTIONS.map((opt) => (
                    <label key={opt.value} className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative mt-1">
                        <input
                          type="checkbox"
                          checked={additionalOptions.includes(opt.value)}
                          onChange={() => toggleAdditionalOption(opt.value)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          additionalOptions.includes(opt.value) ? 'bg-red-500 border-red-500' : 'border-slate-500 group-hover:border-slate-400'
                        }`}>
                          {additionalOptions.includes(opt.value) && (
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="text-white font-medium">{opt.label}</div>
                          <div className="text-red-400 text-sm font-semibold">+£{opt.cost}/mo</div>
                        </div>
                        <div className="text-sm text-slate-400">{opt.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-4">Your Insurance Profile</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Instructor Type</span>
                    <span className="text-white font-medium">{INSTRUCTOR_TYPES.find(t => t.value === instructorType)?.label}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Experience</span>
                    <span className="text-white font-medium">{EXPERIENCE_LEVELS.find(e => e.value === experienceLevel)?.label}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Equipment Height</span>
                    <span className="text-white font-medium">{EQUIPMENT_HEIGHTS.find(h => h.value === equipmentHeight)?.label}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Weekly Classes</span>
                    <span className="text-white font-medium">{WEEKLY_CLASSES.find(w => w.value === weeklyClasses)?.label}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Primary Coverage</span>
                    <span className="text-white font-medium">{COVER_TYPES.find(c => c.value === coverType)?.label}</span>
                  </div>
                  {additionalOptions.length > 0 && (
                    <div className="flex justify-between py-2">
                      <span className="text-slate-400">Additional Options</span>
                      <span className="text-red-400 font-medium">{additionalOptions.length} selected</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-6 border border-red-500/30">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Your Estimated Premium</h3>
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-white mb-2">
                    {formatCurrency(premium.monthly.low)}-{formatCurrency(premium.monthly.high)}
                  </div>
                  <div className="text-lg text-red-400 font-semibold">per month</div>
                  <div className="text-sm text-slate-400 mt-2">
                    ({formatCurrency(premium.annual.low)}-{formatCurrency(premium.annual.high)} annually)
                  </div>
                </div>
                <div className="text-xs text-slate-400 text-center bg-slate-900/50 rounded-lg p-3">
                  This is an indicative estimate based on typical market rates for aerial yoga instruction. Actual premiums will vary based on your specific circumstances, claims history, and insurer underwriting criteria.
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            {step > 1 && (
              <button
                onClick={() => {
                  setStep(step - 1)
                  setShowEstimate(false)
                }}
                className="flex-1 py-4 rounded-xl font-semibold bg-slate-700 text-white hover:bg-slate-600 transition-colors"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => canProceed() && setStep(step + 1)}
                disabled={!canProceed()}
                className={`flex-1 py-4 rounded-xl font-semibold transition-colors ${
                  canProceed()
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                Continue
              </button>
            ) : (
              <button
                onClick={() => setShowEstimate(true)}
                className="flex-1 py-4 rounded-xl font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                Compare Providers
              </button>
            )}
          </div>
        </div>

        {/* Live Estimate Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl p-6 border border-red-500/30">
              <div className="text-center">
                <div className="text-sm text-slate-400 mb-1">Live Estimate</div>
                <div className="text-3xl font-bold text-white mb-1">
                  {formatCurrency(premium.monthly.low)}-{formatCurrency(premium.monthly.high)}
                </div>
                <div className="text-sm text-red-400 font-semibold">per month</div>
                <div className="text-xs text-slate-500 mt-2">
                  Annual: {formatCurrency(premium.annual.low)}-{formatCurrency(premium.annual.high)}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-600/50 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Fall & injury protection
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Equipment liability
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Student protection
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  Legal defense costs
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-4 text-center">
                Specialist UK aerial yoga insurers
              </p>
            </div>

            {showEstimate && step === 4 && (
              <div className="mt-4 bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-semibold text-white mb-3">Next Steps</h4>
                <p className="text-sm text-slate-400 mb-4">
                  Compare quotes from specialist aerial yoga insurance providers.
                </p>
                <a
                  href="#providers"
                  className="block w-full text-center py-3 rounded-xl font-semibold bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  View Providers
                </a>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  Get detailed quotes from verified insurers
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
