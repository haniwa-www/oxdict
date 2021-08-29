import {SuccessStatusCodes} from "../types/typeCommon";
import {IncomingMessage} from "http";

const contentTypeRegex = /^application\/json/;

export const checkHttpsError = (res: IncomingMessage) => {
    const { statusCode, statusMessage } = res;
    const contentType = res.headers['content-type'];

    if (!statusCode) {
        const error = new Error('Request Failed.\n' +
            `Status code not found`);
        console.error(error);
        throw error;
    }
    if (!SuccessStatusCodes.includes(statusCode)) {
        const error = new Error('Request Failed.\n' +
            `Status Code: ${statusCode}. ${statusMessage}.`);
        console.error(error);
        throw error;
    }
    if (!contentType) {
        const error = new Error('Request Failed.\n' +
            `Content type not found`);
        console.error(error);
        throw error;
    }
    if (!contentTypeRegex.test(contentType)) {
        const error = new Error('Invalid content-type.\n' +
            `Expected application/json but received ${contentType}`);
        console.error(error);
        throw error;
    }
}