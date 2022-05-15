import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import { initReactI18next } from "react-i18next";
import resources from "./translation";

i18n.use(LanguageDetector)
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
        ns: ["siteCard", "pageName", "HomeContext", "DetailContext"],
        defaultNS: "translation",
        resources: resources,
    });

i18n.on("languageChanged", (lng) => {
    window.document.documentElement.setAttribute("lang", lng);
});

export const languages = {
    "en-US": "English (US)",
    "zh-CN": "简体中文",
};

export default i18n;
