import i18next from 'i18next';

import { reactI18nextModule } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    debug: true,
    whitelist: ['en', 'hi', 'ru'], // add language codes that you want.
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      checkWhiteList: true,
    },
  });

export default i18next;
