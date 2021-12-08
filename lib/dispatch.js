"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDispatch = void 0;
var axios_1 = require("axios");
var ApiError_1 = __importDefault(require("./exception/ApiError"));
var default_1 = __importDefault(require("./env/default"));
var json_1 = require("./util/json");
var string_1 = require("./util/string");
var prepareDataToJsonRequest = function (data, headers) {
    if (data !== null && typeof data === 'object') {
        headers = headers === undefined ? {} : headers;
        headers['Content-Type'] = 'application/json';
        return JSON.stringify(data);
    }
    return data;
};
var axios = new axios_1.Axios({
    baseURL: default_1.default.baseUrl,
    responseType: 'json',
    transformRequest: prepareDataToJsonRequest,
    validateStatus: function (status) { return status === 200; }
});
var createDispatch = function (appConfig) {
    return function (url, body, method) {
        if (body === void 0) { body = {}; }
        if (method === void 0) { method = 'POST'; }
        var options = {
            method: method,
            url: url
        };
        if (!(0, string_1.notEmptyString)(appConfig.apiToken)) {
            throw new Error('apiToken is not installed. Use apiToken() function');
        }
        body = Object.assign(body, { api_token: appConfig.apiToken });
        var bodyKey = method.toLowerCase() === 'get' ? 'params' : 'data';
        options[bodyKey] = body;
        return axios.request(options)
            .catch(function (error) {
            var _a = error.response, status = _a.status, statusText = _a.statusText;
            throw new ApiError_1.default(status, statusText);
        }).then(function (response) {
            var data = typeof response.data === 'string'
                ? (0, json_1.toJson)(response.data)
                : response.data;
            if ('error' in data) {
                throw new ApiError_1.default(data.error, data.code);
            }
            return data;
        });
    };
};
exports.createDispatch = createDispatch;
