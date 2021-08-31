import {
    OxfordDictContentType,
    OxfordDictHeaders,
    OxfordDictHost,
    OxfordDictMethod,
    OxfordDictPort,
    TypeOxfordDictFields
} from "../types/typeCommon";
import {
    OxfordDictEntriesSourceLang,
    OxfordDictLemmasSourceLang, OxfordDictSearchSourceLang,
    OxfordDictSearchThesaurusSourceLang, OxfordDictSearchTranslationsSourceLang, OxfordDictTranslationsSourceLang
} from "../types/typeSourceLang";
import {handleHttpsRequest} from "./handleHttpsRequest";

export default class OxfordDict {
    private static instance: OxfordDict;
    private readonly appId: string;
    private readonly appKey: string;
    private readonly port: OxfordDictPort = "443";
    private readonly method: OxfordDictMethod = "GET";
    private readonly contentType: OxfordDictContentType = "application/json";
    private host: OxfordDictHost = "od-api.oxforddictionaries.com";

    private generateHeaders = (): OxfordDictHeaders => ({
        Accept: this.contentType,
        app_id: this.appId,
        app_key: this.appKey,
    })

    private constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appKey = appKey;
    }

    public static getInstance = (appId: string, appKey: string) => {
        if (!OxfordDict.instance) {
            OxfordDict.instance = new OxfordDict(appId, appKey);
        }
        return OxfordDict.instance;
    }

    private readonly entriesBasePath = "/api/v2/entries";
    private generateEntriesPath = ({sourceLang, wordId, fields, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, fields: TypeOxfordDictFields, strictMatch: boolean}) => `${this.entriesBasePath}/${sourceLang}/${wordId}?fields=${fields}&strictMatch=${strictMatch}`;
    public fetchEntries = ({sourceLang, wordId, fields, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, fields: TypeOxfordDictFields, strictMatch: boolean}) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateEntriesPath({sourceLang, wordId, fields, strictMatch}),
            method: this.method,
            headers: this.generateHeaders(),
        }
        return handleHttpsRequest(options);
    }

    private readonly lemmasBasePath = "/api/v2/lemmas";
    private generateLemmasPath = ({sourceLang, wordId}: {sourceLang: OxfordDictLemmasSourceLang, wordId: string}) => `${this.lemmasBasePath}/${sourceLang}/${wordId}`;
    public fetchLemmas = ({sourceLang, wordId}: {sourceLang: OxfordDictLemmasSourceLang, wordId: string}) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateLemmasPath({sourceLang, wordId}),
            method: this.method,
            headers: this.generateHeaders(),
        }
        handleHttpsRequest(options);
    }

    private readonly searchBasePath = "/api/v2/search";
    private generateSearchThesaurusPath = ({sourceLang, q, limit, offset}: {sourceLang: OxfordDictSearchThesaurusSourceLang, q: string, limit?: number, offset?: number}) => `${this.searchBasePath}/thesaurus/${sourceLang}?q=${q}&limit=${limit}&offset=${offset}`;
    public fetchSearchThesaurus = ({sourceLang, q, limit, offset}: {sourceLang: OxfordDictSearchThesaurusSourceLang, q: string, limit?: number, offset?: number}) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateSearchThesaurusPath({sourceLang, q, limit, offset}),
            method: this.method,
            headers: this.generateHeaders(),
        }
        handleHttpsRequest(options);
    }

    private generateSearchTranslationsPath = ({sourceLang, targetLang, q, limit, offset}: {sourceLang: OxfordDictSearchTranslationsSourceLang, targetLang: OxfordDictSearchTranslationsSourceLang, limit?: number, offset?: number}) => `${this.searchBasePath}/thesaurus/${sourceLang}/${targetLang}?q=${q}&limit=${limit}&offset=${offset}`;
    public fetchSearchTranslations = ({sourceLang, targetLang, q, limit, offset}: {sourceLang: OxfordDictSearchTranslationsSourceLang, targetLang: OxfordDictSearchTranslationsSourceLang, limit?: number, offset?: number}) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateSearchTranslationsPath({sourceLang, targetLang, q, limit, offset}),
            method: this.method,
            headers: this.generateHeaders(),
        }
        handleHttpsRequest(options);
    }

    private generateSearchPath = ({sourceLang, q, prefix, limit, offset}: {sourceLang: OxfordDictSearchSourceLang, q: string, prefix?: boolean, limit?: number, offset?: number}) => `${this.searchBasePath}/thesaurus/${sourceLang}?q=${q}&prefix=${prefix}&limit=${limit}&offset=${offset}`;
    public fetchSearch = ({sourceLang, q, prefix, limit, offset}: {sourceLang: OxfordDictSearchSourceLang, q: string, prefix?: boolean, limit?: number, offset?: number}) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateSearchPath({sourceLang, q, prefix, limit, offset}),
            method: this.method,
            headers: this.generateHeaders(),
        }
        handleHttpsRequest(options);
    }

    private readonly translationsBasePath = "/api/v2/translations";
    private generateTranslationsPath = ({sourceLang, targetLang, wordId, strictMatch, grammaticalFeatures, lexicalFeatures, domains, registers}: {sourceLang: OxfordDictTranslationsSourceLang, targetLang: OxfordDictTranslationsSourceLang, wordId: string, strictMatch?: boolean, fields?: TypeOxfordDictFields, grammaticalFeatures?: string, lexicalFeatures?: string, domains?: string, registers?: string}) => `${this.translationsBasePath}/thesaurus/${sourceLang}/${targetLang}/${wordId}?strictMatch=${strictMatch}&grammaticalFeatures=${grammaticalFeatures}&lexicalFeatures=${lexicalFeatures}&domains=${domains}&registers=${registers}`;
    public fetchTranslations = ({sourceLang, targetLang, wordId, strictMatch, grammaticalFeatures, lexicalFeatures, domains, registers}: {sourceLang: OxfordDictTranslationsSourceLang, targetLang: OxfordDictTranslationsSourceLang, wordId: string, strictMatch?: boolean, fields?: TypeOxfordDictFields, grammaticalFeatures?: string, lexicalFeatures?: string, domains?: string, registers?: string}) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateTranslationsPath({sourceLang, targetLang, wordId, strictMatch, grammaticalFeatures, lexicalFeatures, domains, registers}),
            method: this.method,
            headers: this.generateHeaders(),
        }
        handleHttpsRequest(options);
    }

    // TODO: sourceLangの型を定義して
    // private readonly thesaurusBasePath = "/api/v2/thesaurus";
    // private generateThesaurusPath = ({sourceLang, wordId, fields, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, fields: TypeOxfordDictFields, strictMatch: boolean}) => `${this.thesaurusBasePath}/${sourceLang}/${wordId}?fields=${fields}&strictMatch=${strictMatch}`;
    // public fetchThesaurus = ({sourceLang, wordId, fields, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, fields: TypeOxfordDictFields, strictMatch: boolean}) => {
    //     const options = {
    //         host: this.host,
    //         port: this.port,
    //         path: this.generateThesaurusPath({sourceLang, wordId, fields, strictMatch}),
    //         method: this.method,
    //         headers: this.generateHeaders(),
    //     }
    //     return handleHttpsRequest(options);
    // }

    // private readonly sentencesBasePath = "/api/v2/sentences";
    // private generateSentencesPath = ({sourceLang, wordId, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, strictMatch: boolean}) => `${this.sentencesBasePath}/${sourceLang}/${wordId}?strictMatch=${strictMatch}`;
    // public fetchThesaurus = ({sourceLang, wordId, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, strictMatch: boolean}) => {
    //     const options = {
    //         host: this.host,
    //         port: this.port,
    //         path: this.generateSentencesPath({sourceLang, wordId, strictMatch}),
    //         method: this.method,
    //         headers: this.generateHeaders(),
    //     }
    //     return handleHttpsRequest(options);
    // }
    //
    // private readonly wordsBasePath = "/api/v2/words";
    // private generateWordsPath = ({sourceLang, wordId, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, strictMatch: boolean}) => `${this.sentencesBasePath}/${sourceLang}/${wordId}?strictMatch=${strictMatch}`;
    // public fetchThesaurus = ({sourceLang, wordId, strictMatch}: {sourceLang: OxfordDictEntriesSourceLang, wordId: string, strictMatch: boolean}) => {
    //     const options = {
    //         host: this.host,
    //         port: this.port,
    //         path: this.generateSentencesPath({sourceLang, wordId, strictMatch}),
    //         method: this.method,
    //         headers: this.generateHeaders(),
    //     }
    //     return handleHttpsRequest(options);
    // }
}