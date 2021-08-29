export default class OxfordDict {
    private instance: OxfordDict;
    private AppId: string;
    private AppKey: string;

    private constructor(appId: string, appKey: string) {
        this.AppId = appId;
        this.AppKey = appKey;
    }

    public getInstance = (appId: string, appKey: string) => {
        if (!this.instance) {
            this.instance = new OxfordDict(appId, appKey);
        }
        return this.instance;
    }
}