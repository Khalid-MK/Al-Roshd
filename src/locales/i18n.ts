import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import translations_ar from "./ar/translations.json"
import translations_en from "./en/translations.json"
i18n
  .use(initReactI18next)
  .init({
  resources: {
      en: {
        translation: translations_en
    },
      ar: {
        translation : translations_ar
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en', // fallback language in case translation isn't found
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n;