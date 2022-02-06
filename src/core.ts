import defaultSetting from "./env/default";
import type {AppConfig} from "./contracts/AppConfig";
import {createDispatch} from "./dispatch";


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

export const baseUrl = (url: string) => {
    if(url.trim() === '') {
        throw new TypeError('url cannot be an empty string')
    }
    config.baseUrl = url;
}

export const dispatch = createDispatch(config);
