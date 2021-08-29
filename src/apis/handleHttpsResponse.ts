import {IncomingMessage} from "http";

export const handleHttpsResponse = (res: IncomingMessage) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            return JSON.parse(rawData);
        } catch (e) {
            console.error('Failed at json parse response');
            throw e;
        }
    });
}