import defaultSetting from "./env/default";
import type {AppConfig} from "./contracts/AppConfig";
import {createDispatch} from "./dispatch";
import {isValidUrl} from "./util/url";


const config: AppConfig = {
    baseUrl: defaultSetting.baseUrl
}

export const apiToken = (apiToken: string) => {
    if(apiToken.trim() === '') {
        throw new TypeError('apiToken cannot be an empty string')
    }
    config.apiToken = apiToken;
}

export const hasApiToken = () => !!config.apiToken

export const baseUrl = (url: string, strict = false) => {
    if(url.trim() === '') {
        throw new TypeError('url cannot be an empty string')
    }

    if(strict && !isValidUrl(url)) {
        throw new TypeError(`url invalid format - ${url}`)
    }

    config.baseUrl = url;
}

export const getBaseUrl = () => config.baseUrl;

export const dispatch = createDispatch(config);
