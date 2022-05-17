import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";
import resources from "./translation";
import PanguMiddleware from "./panguMiddleware";

i18n.use(LanguageDetector)
    .use(PanguMiddleware)
    .use(initReactI18next)
    .init({
        backend: {
            backends: [LocalStorageBackend],
            backendOptions: [
                {
                    expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
                },
            ],
        },
        fallbackLng: "en-US",
        debug: process.env.NODE_ENV === "development",
        ns: ["siteCard", "pageName", "HomeContext", "DetailContext", "languageSwitcher"],
        defaultNS: "translation",
        resources: resources,
        postProcess: "pangu",
    });

export const languages: Record<keyof typeof resources, string> = {
    "en-US": "English (US)",
    "zh-CN": "简体中文（中国大陆）",
    "zh-HK": "繁體中文（香港）",
    "zh-TW": "台灣正體（台湾）",
    "es-MX": "Español (México)";,
};

export default i18n;
