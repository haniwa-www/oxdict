import {StatusCodes} from "http-status-codes";

export type OxfordDictHost = string;
export type OxfordDictPort = "443";
export type OxfordDictPath = string;
export type OxfordDictMethod = "GET";
export type OxfordDictAppId = string;
export type OxfordDictAppKey = string;
export type OxfordDictContentType = "application/json";
export type OxfordDictHeaders = {
    Accept: OxfordDictContentType,
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

export const SuccessStatusCodes = [
    StatusCodes.OK,
    StatusCodes.PARTIAL_CONTENT,
    StatusCodes.RESET_CONTENT,
    StatusCodes.ACCEPTED,
    StatusCodes.CREATED,
    StatusCodes.MULTI_STATUS,
    StatusCodes.NO_CONTENT,
    StatusCodes.NON_AUTHORITATIVE_INFORMATION
] as const
export type SuccessStatusCodes = typeof SuccessStatusCodes[number]
