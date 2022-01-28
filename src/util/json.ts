import {notEmptyString} from "./string";

export const toJson = <T extends object = any>(rowJson: string): T => {
    if(!notEmptyString(rowJson)) {
        throw new TypeError('expected not empty string');
    }

    return JSON.parse(rowJson);
}
