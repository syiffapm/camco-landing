import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LocaleContext = createContext(null)

const UI_STRINGS = {
  skipToContent: { en: 'Skip to main content', km: 'រំលងទៅមាតិកាសំខាន់' },
  officialSite: {
    en: 'Official website of the Ministry of Commerce, Kingdom of Cambodia',
    km: 'គេហទំព័រផ្លូវការរបស់ក្រសួងពាណិជ្ជកម្ម នៃព្រះរាជាណាចក្រកម្ពុជា',
  },
  contact: { en: 'Contact', km: 'ទំនាក់ទំនង' },
  login: { en: 'Login', km: 'ចូលប្រើប្រាស់' },
  registerExporter: { en: 'Register as Exporter', km: 'ចុះឈ្មោះជាអ្នកនាំចេញ' },
  seeHowItWorks: { en: 'See how it works', km: 'មើលរបៀបប្រើប្រាស់' },
  verify: { en: 'Verify', km: 'ផ្ទៀងផ្ទាត់' },
  verifyCertificate: { en: 'Verify a certificate', km: 'ផ្ទៀងផ្ទាត់វិញ្ញាបនបត្រ' },
  scanQr: { en: 'Scan QR', km: 'ស្កេន QR' },
  free: { en: 'Free · no account needed', km: 'ឥតគិតថ្លៃ · មិនចាំបាច់មានគណនី' },
  menu: { en: 'Menu', km: 'ម៉ឺនុយ' },
  dashboard: { en: 'Dashboard', km: 'ផ្ទាំងគ្រប់គ្រង' },
  learnMore: { en: 'Learn more', km: 'ស្វែងយល់បន្ថែម' },
  comingSoon: { en: 'Content in progress', km: 'មាតិកាកំពុងរៀបចំ' },
}

const RESIZE_STEPS = [1, 1.125, 1.25]

export function LocaleProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return localStorage.getItem('camco-lang') || 'en'
  })
  const [scaleIndex, setScaleIndex] = useState(() => {
    if (typeof window === 'undefined') return 0
    const saved = Number(localStorage.getItem('camco-text-scale-index'))
    return Number.isInteger(saved) && saved >= 0 && saved < RESIZE_STEPS.length ? saved : 0
  })

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('camco-lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.style.setProperty('--text-scale', String(RESIZE_STEPS[scaleIndex]))
    localStorage.setItem('camco-text-scale-index', String(scaleIndex))
  }, [scaleIndex])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((l) => (l === 'en' ? 'km' : 'en')),
      // t(field) — field is a {en, km} object; falls back to EN so we never
      // show a raw/missing translation key to the reader.
      t: (field) => {
        if (!field) return ''
        return field[lang] || field.en || ''
      },
      ui: (key) => {
        const field = UI_STRINGS[key]
        if (!field) return key
        return field[lang] || field.en
      },
      increaseText: () => setScaleIndex((i) => Math.min(i + 1, RESIZE_STEPS.length - 1)),
      decreaseText: () => setScaleIndex((i) => Math.max(i - 1, 0)),
      textScaleIndex: scaleIndex,
      textScaleSteps: RESIZE_STEPS.length,
    }),
    [lang, scaleIndex],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
