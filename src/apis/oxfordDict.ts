import {
    OxfordDictHeaders,
    OxfordDictHost,
    OxfordDictMethod,
    OxfordDictPort,
    TypeOxfordDictFields
} from "../types/typeCommon";
import {fetchOxfordEntries} from "./entries/entries";
import {OxfordDictEntriesSourceLang} from "../types/typeSourceLang";

export default class OxfordDict {
    private instance: OxfordDict;
    private readonly appId: string;
    private readonly appKey: string;
    private readonly port: OxfordDictPort = "443";
    private readonly method: OxfordDictMethod = "GET";
    private host: OxfordDictHost = "od-api.oxforddictionaries.com";

    private generateHeaders = (): OxfordDictHeaders => ({
        app_id: this.appId,
        app_key: this.appKey,
    })

    private constructor(appId: string, appKey: string) {
        this.appId = appId;
        this.appKey = appKey;
    }

    public getInstance = (appId: string, appKey: string) => {
        if (!this.instance) {
            this.instance = new OxfordDict(appId, appKey);
        }
        return this.instance;
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
        return fetchOxfordEntries(options);
    }
}