import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const options = {
  order: ["localStorage"],
  lookupFromPathIndex: 0,
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    keySeparator: false,
    supportedLngs: ["uz", "ru"],
    whitelist: ["uz", "ru"],
    ns: ["translation"],
    fallbackLng: ["uz"],
    fallbackNS: false,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    returnEmptyString: false,
  });

export default i18n;
