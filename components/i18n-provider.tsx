"use client"

import type React from "react"
import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Lang = "en" | "hi" | "pa"
type Dict = Record<string, string>

const en: Dict = {
  "site.title": "Kisaan Crop Advisor",
  "site.tagline": "Find crops that fit your land and climate",
  "hero.title": "Choose the right crop for your land and area",
  "hero.desc":
    "Enter soil, pH, rainfall, irrigation, season, and location. We suggest better crops with clear reasons and tips.",
  "cta.getAdvice": "Get Crop Advice",
  "cta.howWorks": "How it Works",
  "recommend.title": "Get crop advice for your land",
  "recommend.desc": "Fill details below. We’ll score crops for your soil, rainfall, season, irrigation and area.",
  "cta.shareRec": "Share your own recommendation",
  "referenceMaps.title": "Reference maps",
  "referenceMaps.desc":
    "See the major cropping systems and soil types across India to understand regional suitability.",
  "maps.croppingSystems": "Major Cropping Systems in India",
  "maps.soilTypes": "Major Soil Types in India",

  "form.title": "Farm details",
  "form.state": "State/Region",
  "form.state.placeholder": "Select state",
  "form.soil": "Soil type",
  "form.soil.placeholder": "Select soil",
  "form.ph": "Soil pH",
  "form.rainfall": "Annual rainfall (mm)",
  "form.irrigation": "Irrigation availability",
  "form.irrigation.none": "None",
  "form.irrigation.limited": "Limited",
  "form.irrigation.reliable": "Reliable",
  "form.season": "Season",
  "form.season.kharif": "Kharif (Monsoon)",
  "form.season.rabi": "Rabi (Winter)",
  "form.season.zaid": "Zaid (Summer)",
  "form.land": "Land size (acres)",
  "form.organic": "Prefer organic-friendly crops",
  "form.submit": "Get Recommendations",
  "form.note": "High-contrast, mobile-friendly",

  "form.recommendedFor": "Recommended for",
  "form.recommended.ph": "pH",
  "form.recommended.rainfall": "rainfall",
  "form.recommended.mm": "mm",
  "form.recommended.suggestedSoils": "Suggested soils",

  "home.how.title": "How it works",
  "home.how.1.title": "1. Fill details",
  "home.how.1.desc": "Soil type, pH, rainfall, irrigation, season, location",
  "home.how.2.title": "2. See matches",
  "home.how.2.desc": "Top crops scored by suitability for your land and area",
  "home.how.3.title": "3. Learn & plan",
  "home.how.3.desc": "Quick tips, irrigation needs, and season fit",

  "home.photos.title": "Field photos",
  "home.photos.1.caption": "Healthy farmland ready for sowing",
  "home.photos.2.caption": "Our farmers at the heart of every harvest",
  "home.photos.3.caption": "Soil texture and health are key to yield",

  "home.state.title": "Your State, Languages & Crops",
  "home.state.cardTitle": "State & language preferences",
  "home.state.selectLabel": "Select your State",
  "home.state.helper": "Languages and crop highlights update based on your selection.",
  "home.state.languagesLabel": "Official language(s)",
  "home.state.uiNote": "UI currently in English/Hinglish; more languages can be added next.",
  "home.state.cropsLabel": "Major crops / highlights",
  "home.state.cta.recommendPrefix": "Get recommendations for",
  "home.state.cta.community": "Open community",

  "site.footer": "Made for farmers • Simple, accessible, and mobile-first",
}

const hi: Dict = {
  "site.title": "किसान क्रॉप एडवाइज़र",
  "site.tagline": "अपनी ज़मीन और मौसम के अनुसार सही फसल चुनें",
  "hero.title": "सही फसल का चुनाव, आपकी ज़मीन और इलाके के हिसाब से",
  "hero.desc": "मिट्टी, pH, वर्षा, सिंचाई, सीज़न और लोकेशन दर्ज करें। हम स्पष्ट कारणों और टिप्स के साथ बेहतर फसलें सुझाएंगे।",
  "cta.getAdvice": "फसल सलाह प्राप्त करें",
  "cta.howWorks": "कैसे काम करता है",
  "recommend.title": "अपनी ज़मीन के लिए फसल सलाह प्राप्त करें",
  "recommend.desc": "नीचे विवरण भरें। हम मिट्टी, वर्षा, मौसम, सिंचाई और क्षेत्र के आधार पर फसलों को स्कोर करेंगे।",
  "cta.shareRec": "अपनी सिफारिश साझा करें",
  "referenceMaps.title": "संदर्भ मानचित्र",
  "referenceMaps.desc": "भारत में प्रमुख फसल प्रणालियाँ और मृदा प्रकार देखें ताकि क्षेत्रीय उपयुक्तता समझ सकें।",
  "maps.croppingSystems": "भारत में प्रमुख फसल प्रणालियाँ",
  "maps.soilTypes": "भारत में प्रमुख मृदा प्रकार",

  "form.title": "खेत का विवरण",
  "form.state": "राज्य/क्षेत्र",
  "form.state.placeholder": "राज्य चुनें",
  "form.soil": "मिट्टी का प्रकार",
  "form.soil.placeholder": "मिट्टी चुनें",
  "form.ph": "मिट्टी का pH",
  "form.rainfall": "वार्षिक वर्षा (मिमी)",
  "form.irrigation": "सिंचाई उपलब्धता",
  "form.irrigation.none": "कोई नहीं",
  "form.irrigation.limited": "सीमित",
  "form.irrigation.reliable": "विश्वसनीय",
  "form.season": "सीज़न",
  "form.season.kharif": "खरीफ (मानसून)",
  "form.season.rabi": "रबी (सर्दी)",
  "form.season.zaid": "ज़ायद (गर्मी)",
  "form.land": "ज़मीन का आकार (एकड़)",
  "form.organic": "जैविक‑अनुकूल फसलों को प्राथमिकता",
  "form.submit": "सिफारिशें देखें",
  "form.note": "उच्च‑कॉन्ट्रास्ट, मोबाइल‑अनुकूल",

  "form.recommendedFor": "के लिए अनुशंसित",
  "form.recommended.ph": "pH",
  "form.recommended.rainfall": "वर्षा",
  "form.recommended.mm": "मिमी",
  "form.recommended.suggestedSoils": "सुझावित मिट्टियाँ",

  "home.how.title": "कैसे काम करता है",
  "home.how.1.title": "1. विवरण भरें",
  "home.how.1.desc": "मिट्टी का प्रकार, pH, वर्षा, सिंचाई, सीज़न, लोकेशन",
  "home.how.2.title": "2. मिलान देखें",
  "home.how.2.desc": "आपकी ज़मीन और क्षेत्र के अनुसार सबसे उपयुक्त फसलें",
  "home.how.3.title": "3. सीखें और योजना बनाएं",
  "home.how.3.desc": "त्वरित टिप्स, सिंचाई ज़रूरतें और सीज़न फिट",

  "home.photos.title": "फ़ील्ड फ़ोटो",
  "home.photos.1.caption": "बीज बुवाई के लिए तैयार उपजाऊ खेत",
  "home.photos.2.caption": "हर फसल की सफलता में हमारे किसान सबसे अहम",
  "home.photos.3.caption": "बेहतर उपज के लिए मिट्टी की बनावट और सेहत महत्वपूर्ण",

  "home.state.title": "आपका राज्य, भाषाएँ और फ़सलें",
  "home.state.cardTitle": "राज्य और भाषा वरीयताएँ",
  "home.state.selectLabel": "अपना राज्य चुनें",
  "home.state.helper": "आपकी पसंद के अनुसार भाषाएँ और फ़सल हाइलाइट्स बदलते हैं।",
  "home.state.languagesLabel": "राजकीय भाषा(एँ)",
  "home.state.uiNote": "UI अभी अंग्रेज़ी/हिंग्लिश में है; आगे और भाषाएँ जोड़ी जा सकती हैं।",
  "home.state.cropsLabel": "मुख्य फ़सलें / हਾਈਲਾਈਟਸ",
  "home.state.cta.recommendPrefix": "इसके लिए सिफारਸ਼ें देखें:",
  "home.state.cta.community": "कਮ्युनिटी खोलें",

  "site.footer": "किसानों के लिए • सरल, सुलभ और मोबाइल‑अनुकूल",
}

const pa: Dict = {
  "site.title": "ਕਿਸਾਨ ਕ੍ਰਾਪ ਐਡਵਾਈਜ਼ਰ",
  "site.tagline": "ਆਪਣੀ ਜ਼ਮੀਨ ਅਤੇ ਮੌਸਮ ਲਈ ਸਹੀ ਫਸਲ ਲੱਭੋ",
  "hero.title": "ਆਪਣੀ ਜ਼ਮੀਨ ਅਤੇ ਇਲਾਕੇ ਲਈ ਸਹੀ ਫਸਲ ਚੁਣੋ",
  "hero.desc": "ਮਿੱਟੀ, pH, ਵਰਖਾ, ਸਿੰਚਾਈ, ਸੀਜ਼ਨ ਅਤੇ ਲੋਕੇਸ਼ਨ ਭਰੋ। ਅਸੀਂ ਸਪਸ਼ਟ ਕਾਰਨਾਂ ਤੇ ਟਿੱਪਸ ਨਾਲ ਬਿਹਤਰ ਫਸਲਾਂ ਸੁਝਾਅ ਕਰਾਂਗੇ।",
  "cta.getAdvice": "ਫਸਲ ਸਲਾਹ ਲਓ",
  "cta.howWorks": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "recommend.title": "ਆਪਣੀ ਜ਼ਮੀਨ ਲਈ ਫਸਲ ਸਲਾਹ ਲਓ",
  "recommend.desc": "ਹੇਠਾਂ ਵੇਰਵੇ ਭਰੋ। ਅਸੀਂ ਮਿੱਟੀ, ਵਰਖਾ, ਸੀਜ਼ਨ, ਸਿੰਚਾਈ ਅਤੇ ਇਲਾਕੇ ਅਨੁਸਾਰ ਫਸਲਾਂ ਦਾ ਸਕੋਰ ਕਰਾਂਗੇ।",
  "cta.shareRec": "ਆਪਣੀ ਸਿਫਾਰਸ਼ ਸਾਂਝੀ ਕਰੋ",
  "referenceMaps.title": "ਸੰਦਰਭ ਨਕਸ਼ੇ",
  "referenceMaps.desc": "ਭਾਰਤ ਵਿੱਚ ਮੁੱਖ ਫਸਲ ਪ੍ਰਣਾਲੀਆਂ ਅਤੇ ਮਿੱਟੀ ਦੇ ਕਿਸਮਾਂ ਦੇ ਨਕਸ਼ੇ ਵੇਖੋ ਤਾਂ ਜੋ ਖੇਤਰ ਅਨੁਕੂਲਤਾ ਸਮਝ ਸਕੋ।",
  "maps.croppingSystems": "ਭਾਰਤ ਵਿੱਚ ਮੁੱਖ ਫਸਲ ਪ੍ਰਣਾਲੀਆਂ",
  "maps.soilTypes": "ਭਾਰਤ ਵਿੱਚ ਮੁੱਖ ਮਿੱਟੀ ਦੇ ਕਿਸਮ",

  "form.title": "ਖੇਤ ਦੀ ਜਾਣਕਾਰੀ",
  "form.state": "ਰਾਜ/ਖੇਤਰ",
  "form.state.placeholder": "ਰਾਜ ਚੁਣੋ",
  "form.soil": "ਮਿੱਟੀ ਦਾ ਕਿਸਮ",
  "form.soil.placeholder": "ਮਿੱਟੀ ਚੁਣੋ",
  "form.ph": "ਮਿੱਟੀ ਦਾ pH",
  "form.rainfall": "ਸਲਾਨਾ ਵਰਖਾ (ਮੀਮੀ)",
  "form.irrigation": "ਸਿੰਚਾਈ ਉਪਲਬਧਤਾ",
  "form.irrigation.none": "ਕੋਈ ਨਹੀਂ",
  "form.irrigation.limited": "ਸੀਮਿਤ",
  "form.irrigation.reliable": "ਭਰੋਸੇਯੋਗ",
  "form.season": "ਸੀਜ਼ਨ",
  "form.season.kharif": "ਖਰੀਫ (ਮਾਨਸੂਨ)",
  "form.season.rabi": "ਰਬੀ (ਸਰਦੀ)",
  "form.season.zaid": "ਜ਼ਾਇਦ (ਗਰਮੀ)",
  "form.land": "ਜ਼ਮੀਨ ਦਾ ਆਕਾਰ (ਏਕੜ)",
  "form.organic": "ਜੈਵਿਕ‑ਅਨੁਕੂਲ ਫਸਲਾਂ ਨੂੰ ਤਰਜੀਹ",
  "form.submit": "ਸਿਫਾਰਸ਼ਾਂ ਵੇਖੋ",
  "form.note": "ਉੱਚ ਕਾਂਟ੍ਰਾਸਟ, ਮੋਬਾਈਲ‑ਅਨੁਕੂਲ",

  "form.recommendedFor": "ਲਈ ਸਿਫਾਰਸ਼ੀ",
  "form.recommended.ph": "pH",
  "form.recommended.rainfall": "ਵਰਖਾ",
  "form.recommended.mm": "ਮੀਮੀ",
  "form.recommended.suggestedSoils": "ਸੁਝਾਈਆਂ ਮਿੱਟੀਆਂ",

  "home.how.title": "ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
  "home.how.1.title": "1. ਵੇਰਵੇ ਭਰੋ",
  "home.how.1.desc": "ਮਿੱਟੀ, pH, ਵਰਖਾ, ਸਿੰਚਾਈ, ਸੀਜ਼ਨ, ਲੋਕੇਸ਼ਨ",
  "home.how.2.title": "2. ਮੇਲ ਵੇਖੋ",
  "home.how.2.desc": "ਤੁਹਾਡੀ ਜ਼ਮੀਨ ਅਤੇ ਇਲਾਕੇ ਲਈ ਸਭ ਤੋਂ ਉਚਿਤ ਫਸਲਾਂ",
  "home.how.3.title": "3. ਸਿੱਖੋ ਅਤੇ ਯੋਜਨਾ ਬਣਾਓ",
  "home.how.3.desc": "ਤੇਜ਼ ਟਿੱਪਸ, ਸਿੰਚਾਈ ਦੀ ਲੋੜ ਅਤੇ ਸੀਜ਼ਨ ਫਿਟ",

  "home.photos.title": "ਖੇਤ ਦੀਆਂ ਤਸਵੀਰਾਂ",
  "home.photos.1.caption": "ਬੁਆਈ ਲਈ ਤਿਆਰ ਉਪਜਾਊ ਖੇਤ",
  "home.photos.2.caption": "ਹਰ ਫਸਲ ਦੀ ਸਫਲਤਾ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਕਿਸਾਨ",
  "home.photos.3.caption": "ਵਧੀਆ ਪੈਦਾਵਾਰ ਲਈ ਮਿੱਟੀ ਦੀ ਬਣਾਵਟ ਅਤੇ ਸਿਹਤ ਮਹੱਤਵਪੂਰਨ",

  "home.state.title": "ਤੁਹਾਡਾ ਰਾਜ, ਭਾਸ਼ਾਵਾਂ ਅਤੇ ਫਸਲਾਂ",
  "home.state.cardTitle": "ਰਾਜ ਅਤੇ ਭਾਸ਼ਾ ਪਸੰਦਾਂ",
  "home.state.selectLabel": "ਆਪਣਾ ਰਾਜ ਚੁਣੋ",
  "home.state.helper": "ਤੁਹਾਡੀ ਚੋਣ ਅਨੁਸਾਰ ਭਾਸ਼ਾਵਾਂ ਅਤੇ ਫਸਲ ਹਾਈਲਾਈਟਸ ਬਦਲਦੇ ਹਨ।",
  "home.state.languagesLabel": "ਅਧਿਕਾਰਕ ਭਾਸ਼ਾ(ਵਾਂ)",
  "home.state.uiNote": "UI ਇਸ ਵੇਲੇ ਅੰਗਰੇਜ਼ੀ/ਹਿੰਗਲਿਸ਼ ਵਿੱਚ ਹੈ; ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਬਾਅਦ ਵਿੱਚ ਜੋੜਾਂਗੇ।",
  "home.state.cropsLabel": "ਮੁੱਖ ਫਸਲਾਂ / ਹਾਈਲਾਈਟਸ",
  "home.state.cta.recommendPrefix": "ਇਸ ਲਈ ਸਿਫਾਰਸ਼ਾਂ ਵੇਖੋ:",
  "home.state.cta.community": "ਕਮਿਊਨਟੀ ਖੋਲ੍ਹੋ",

  "site.footer": "ਕਿਸਾਨਾਂ ਲਈ • ਸਧਾਰਣ, ਸੁਗਮ ਅਤੇ ਮੋਬਾਈਲ‑ਪਹਿਲਾਂ",
}

type I18nContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string, fallback?: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null
    if (saved === "en" || saved === "hi" || saved === "pa") setLang(saved)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang)
      try {
        document.documentElement.setAttribute("lang", lang)
      } catch {}
    }
  }, [lang])

  const t = useMemo(() => {
    const dict = lang === "hi" ? hi : lang === "pa" ? pa : en
    return (key: string, fallback?: string) => dict[key] ?? fallback ?? key
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
