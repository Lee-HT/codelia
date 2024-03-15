import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import jp from "./jp";
import kr from "./kr";

i18next.use(initReactI18next).init({
  resources: {
    ko: { translation: kr },
    en: { translation: en },
    ja: { translation: jp },
  },
  lng: "ko", // 기본 언어
  fallbackLng: ["ko", "en", "ja"], // 언어 리스트 출력
  interpolation: {
    escapeValue: false, 
  },
});

export default i18next;
