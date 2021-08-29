const OxfordDictSourceLang = {
    en_GB: 'en-gb',
    en_US: 'en-us',
    en: 'en',
    ar: 'ar',
    zh: 'zh',
    fa: 'fa',
    fr: 'fr',
    ka: 'ka',
    de: 'de',
    el: 'el',
    gu: 'gu',
    ha: 'ha',
    hi: 'hi',
    ig: 'ig',
    id: 'id',
    xh: 'xh',
    zu: 'zu',
    it: 'it',
    lv: 'lv',
    ms: 'ms',
    mr: 'mr',
    nso: 'nso',
    pt: 'pt',
    qu: 'qu',
    ro: 'ro',
    ru: 'ru',
    tn: 'tn',
    es: 'es',
    sw: 'sw',
    tg: 'tg',
    ta: 'ta',
    tt: 'tt',
    te: 'te',
    tpi: 'tpi',
    tk: 'tk',
    ur: 'ur',
    yo: 'yo'
} as const;
type OxfordDictSourceLangTypeValues = typeof OxfordDictSourceLang
type OxfordDictSourceLangTypeKeys = keyof OxfordDictSourceLangTypeValues

export type OxfordDictSourceLang = OxfordDictSourceLangTypeValues[OxfordDictSourceLangTypeKeys]

type OxfordDictEntriesSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en_GB" | 'en_US' | "fr" | "gu" | "hi" | "lv" | "ro" | "es" | "sw" | "ta">
export type OxfordDictEntriesSourceLang = OxfordDictSourceLangTypeValues[OxfordDictEntriesSourceLangKeys]

type OxfordDictWordsSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en_GB" | 'en_US' | "fr" | "gu" | "hi" | "lv" | "ro" | "es" | "sw" | "ta">
export type OxfordDictWordsSourceLang = OxfordDictSourceLangTypeValues[OxfordDictWordsSourceLangKeys]

type OxfordDictInflectionsSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en_GB" | 'en_US' | | "hi" | "lv" | "ro" | "es" | "sw" | "ta">
export type OxfordDictInflectionsSourceLang = OxfordDictSourceLangTypeValues[OxfordDictInflectionsSourceLangKeys]

type OxfordDictLemmasSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en" | "de" | "hi" | "it" | "lv" | "pt" | "ro" | "tn" | "es" | "sw" | "ta">
export type OxfordDictLemmasSourceLang = OxfordDictSourceLangTypeValues[OxfordDictLemmasSourceLangKeys]

type OxfordDictSearchSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en_GB" | "en_US" | "fr" | "gu" | "hi" | "lv" | "ro" | "es" | "sw" | "ta">
export type OxfordDictSearchSourceLang = OxfordDictSourceLangTypeValues[OxfordDictSearchSourceLangKeys]

type OxfordDictSearchTranslationsSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en" | "ar" | "zh" | "de" | "el" | "ha" | "hi" | "id" | "xh" | "zu" | "it" | "ms" | "mr" | "nso" | "pt" | "qu" | "ru" | "tn" | "es" | "tt" | "te" | "tpi" | "tk" | "ur">
export type OxfordDictSearchTranslationsSourceLang = OxfordDictSourceLangTypeValues[OxfordDictSearchTranslationsSourceLangKeys]

type OxfordDictSearchThesaurusSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en">
export type OxfordDictSearchThesaurusSourceLang = OxfordDictSourceLangTypeValues[OxfordDictSearchThesaurusSourceLangKeys]

type OxfordDictTranslationsSourceLangKeys = Extract<OxfordDictSourceLangTypeKeys, "en" | "ar" | "zh" | "de" | "el" | "ha" | "hi" | "id" | "xh" | "zu" | "it" | "ms" | "mr" | "nso" | "pt" | "qu" | "ru" | "tn" | "es" | "tt" | "te" | "tpi" | "tk" | "ur">
export type OxfordDictTranslationsSourceLang = OxfordDictSourceLangTypeValues[OxfordDictTranslationsSourceLangKeys]
