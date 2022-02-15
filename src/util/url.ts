import {URL} from "url";


export const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return true;
    } catch (err) {
        return false;
    }
}
