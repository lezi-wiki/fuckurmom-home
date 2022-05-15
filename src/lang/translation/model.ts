import { ResourceLanguage } from "i18next";

export default interface TranslationModel extends ResourceLanguage, ContextTranslation {
    siteCard: SiteCardTranslation;
    pageName: PageNameTranslation;
}

export interface PageNameTranslation {
    Home: string;
    Details: string;
    "Fuck Your Mom": string;
}

export interface ContextTranslation {
    HomeContext: {
        "Fuck Your Mom": "Fuck Your Mom";
        "There is a homepage that explains what the project does, what's interesting about this project, and how to get involved in this project.": string;
        "You can apply for the corresponding subdomain by submit an Issue, but you need to clarify your identity and the reason for the application.": string;
        "Don't get me wrong, we have all the respect for your mother. This project gives you the freedom to create by distributing subdomains to you, which may achieve the bashing of idiots. We firmly believe that bashing idiots can change idiots or prompt idiots to self-harm and commit suicide, thereby reducing the number of idiots in the world.": string;
        "Go for details": string;
    };
    DetailContext: {
        Details: string;
        "Before you submit, you need to make sure your situation meets our requirements. We have the following requirements for submitted applications:": string;
        "You must open source the code of the applications you deploy using the subdomain under any license.": string;
        "You may not monetize the applications deployed by the subdomain in any way, except for non-mandatory donations.": string;
        "You are not allowed to deploy service projects such as IDC and Image Storage Service in subdomains. However, display sites such as personal blogs are allowed.": string;
        "Subdomains with specific meanings such as www, ftp, blog, etc. cannot be applied for.": string;
        "You need to keep your applications running for a long time. In the event of multiple service interruptions, we will cancel the resolution of your subdomain.": string;
        "You must deploy your applications legally, not from your home PC.": string;
        "There are strict formatting requirements to follow for your application:": string;
        "You need to point out what the idiot did, write it as best you can!": string;
        "You need to identify yourself and leave your contact details so we can better communicate with you.": string;
        "If authenticated, you have unlimited access to subdomains which begin with your name, which is discouraged but considered cool.": string;
        "The application format is as follows:": string;
        "Your name": string;
        "Your contact": string;
        "Your project name": string;
        "The type of subdomain you are applying for": string;
        "What idiots do (detailed description)": string;
        "Idiots' contact": string;
        "Go for apply": string;
        Confirm: string;
        "You will be navigated to the GitHub Issue page, be sure to state [Apply] at the beginning of the title of the Issue": string;
        Cancel: string;
        Go: string;
    };
}

export interface SiteCardTranslation {
    Site: string;
    Domain: string;
    Owner: string;
    Idiot: string;
    Go: string;
}
