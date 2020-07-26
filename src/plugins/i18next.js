import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  // [lang]: {
  //   translation: [dictionary],
  // },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: [default lang],
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
