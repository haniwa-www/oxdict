import * as https from "https";
import {OxfordDictOptions} from "../types/typeCommon";
import {checkHttpsError} from "./checkHttpsError";
import {handleHttpsResponse} from "./handleHttpsResponse";

export const handleHttpsRequest = (
    options: OxfordDictOptions,
) => {
    https.get(options, (res) => {
        checkHttpsError(res);
        handleHttpsResponse(res);
    });
}
