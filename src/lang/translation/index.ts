import enUS from "./en-US";
import type TranslationModel from "./model";
import { Resource } from "i18next";
import zhCN from "./zh-CN";

const resources: Resource = {
    "en-US": enUS,
    "zh-CN": zhCN,
};

export default resources;
export type Translation = TranslationModel;
