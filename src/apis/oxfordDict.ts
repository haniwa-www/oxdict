import {
    OxfordDictContentType,
    OxfordDictHeaders,
    OxfordDictHost,
    OxfordDictMethod,
    OxfordDictPort,
    TypeOxfordDictFields
} from "../types/typeCommon";
import {OxfordDictEntriesSourceLang, OxfordDictLemmasSourceLang} from "../types/typeSourceLang";
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
    private generateEntriesPath = (sourceLang: OxfordDictEntriesSourceLang, wordId: string, fields: TypeOxfordDictFields, strictMatch: boolean) => `${this.entriesBasePath}/${sourceLang}/${wordId}?fields=${fields}&strictMatch=${strictMatch}`;
    public fetchEntries = (sourceLang: OxfordDictEntriesSourceLang, wordId: string, fields: TypeOxfordDictFields, strictMatch: boolean) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateEntriesPath(sourceLang, wordId, fields, strictMatch),
            method: this.method,
            headers: this.generateHeaders(),
        }
        return handleHttpsRequest(options);
    }

    private readonly lemmasBasePath = "/api/v2/lemmas";
    private generateLemmasPath = (sourceLang: OxfordDictLemmasSourceLang, wordId: string) => `${this.lemmasBasePath}/${sourceLang}/${wordId}`;
    public fetchLemmas = (sourceLang: OxfordDictLemmasSourceLang, wordId: string) => {
        const options = {
            host: this.host,
            port: this.port,
            path: this.generateLemmasPath(sourceLang, wordId),
            method: this.method,
            headers: this.generateHeaders(),
        }
        handleHttpsRequest(options);
    }
}