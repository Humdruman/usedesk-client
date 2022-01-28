import {Axios, AxiosRequestConfig, AxiosRequestHeaders, Method} from "axios";
import {RequestBody} from "./contracts/RequestBody";
import ApiError from "./exception/ApiError";
import defaultSetting from "./env/default";
import {AppConfig} from "./contracts/AppConfig";
import {toJson} from "./util/json";
import {notEmptyString} from "./util/string";


const prepareDataToJsonRequest = (data: any, headers?: AxiosRequestHeaders) => {
    if (data !== null && typeof data === 'object') {
        headers = headers === undefined ? {} : headers;
        headers['Content-Type'] = 'application/json'
        return JSON.stringify(data)
    }
    return data;
}


const axios = new Axios({
    responseType: 'json',
    transformRequest: prepareDataToJsonRequest,
    validateStatus: status => status === 200
});


export const createDispatch = (appConfig: AppConfig) => {

    return <ResponseData extends any>(
        url: string,
        body: RequestBody = {},
        method: Method = 'POST'): Promise<ResponseData> => {

        const options: AxiosRequestConfig = {
            method,
            url: appConfig.baseUrl + url
        };

        if (!notEmptyString(appConfig.apiToken)) {
            throw new Error('apiToken is not installed. Use apiToken() function')
        }

        body = Object.assign(body, {api_token: appConfig.apiToken});

        const bodyKey = method.toLowerCase() === 'get' ? 'params' : 'data';
        options[bodyKey] = body;

        return axios.request(options)
            .catch(error => {
                    const {status, statusText} = error.response;
                    throw new ApiError(status, statusText);
                }
            ).then(response => {
                const data = typeof response.data === 'string'
                    ? toJson(response.data)
                    : response.data;

                if ('error' in data) {
                    throw new ApiError(data.error, data.code);
                }

                return data;
            })
    }
}
