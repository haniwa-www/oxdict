export type OxfordDictHost = string;
export type OxfordDictPort = "443";
export type OxfordDictPath = string;
export type OxfordDictMethod = "GET";
export type OxfordDictAppId = string;
export type OxfordDictAppKey = string;
export type OxfordDictHeaders = {
    app_id: OxfordDictAppId,
    app_key: OxfordDictAppKey,
}
export type OxfordDictOptions = {
    host: OxfordDictHost,
    port: OxfordDictPort,
    path: OxfordDictPath,
    method: OxfordDictMethod,
    headers: OxfordDictHeaders,
}

export type OxfordDictOptionsForApi = Omit<OxfordDictOptions, 'path'>

export const TypeOxfordDictFields = {
    definitions: "definitions",
    domains: "domains",
    etymologies: "etymologies",
    examples: "examples",
    pronunciations: "pronunciations",
    regions: "regions",
    registers: "registers",
    variantForms: "variantForms",
} as const;
type TypeOxfordDictFieldsValues = typeof TypeOxfordDictFields
type TypeOxfordDictFieldsKeys = keyof TypeOxfordDictFieldsValues
export type TypeOxfordDictFields = TypeOxfordDictFieldsValues[TypeOxfordDictFieldsKeys]
