import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../src/components/locales/en/translation.json';
import ptTranslation from '../src/components/locales/pt/translation.json';

i18n
  // Habilita o backend do i18next
  .use(Backend)
  // Habilita a detecção automática de linguagem
  .use(LanguageDetector)
  // Habilita o módulo de inicialização do hook
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
    whitelist: ['en', 'pt'],
    fallbackLng: ['en'],
    debug: false,
    detection: {
      order: ['querystring'],
      lookupFromPathIndex: 0,
      checkWhitelist: true,
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: '.',
    },
  });

// i18n
//   // Habilita o backend do i18next
//   .use(Backend)
//   // Habilita a detecção automática de linguagem
//   .use(LanguageDetector)
//   // Habilita o módulo de inicialização do hook
//   .use(initReactI18next)
//   .init({
//     // Linguagem padrão utilizada
//     whitelist: ['en', 'pt'],
//     fallbackLng: ['en'],
//     debug: false,
//     // Detecta e guarda um cookie em cache da linguagem fornecida
//     detection: {
//       order: ['querystring'],
//       lookupFromPathIndex: 0,
//       checkWhitelist: true,
//       cache: ['cookie'],
//     },
//     interpolation: {
//       escapeValue: false,
//       formatSeparator: '.',
//     },
//   });

export default i18n;
