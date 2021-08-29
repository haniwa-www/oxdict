import * as http from "http";
import {OxfordDictOptions} from "../../types/typeCommon";

export const fetchOxfordEntries = (
    options: OxfordDictOptions,
) => {
    http.get(options, (res) => {
        let body = "";
        res.on('data', (chunk) => {
            console.log(chunk);
            body += chunk;
        })
        res.on('end', () => {
            const parsed = JSON.parse(body);
            console.log(parsed);
            return parsed;
        })
    }).on('error', (e) => {
        console.error(e);
    })
}