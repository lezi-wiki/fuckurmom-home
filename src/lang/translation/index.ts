import type TranslationModel from "./model";
import { Resource } from "i18next";
import enUS from "./en-US";
import zhCN from "./zh-CN";
import zhHK from "./zh-HK";
import zhTW from "./zh-TW";
import esMX from "./es-MX";

const resources: Resource = {
    "en-US": enUS,
    "zh-CN": zhCN,
    "zh-HK": zhHK,
    "zh-TW": zhTW,
    "es-MX": esMX,
};

export default resources;
export type Translation = TranslationModel;
