"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispatch = exports.apiToken = void 0;
var default_1 = __importDefault(require("./env/default"));
var dispatch_1 = require("./dispatch");
var config = {
    baseUrl: default_1.default.baseUrl
};
var apiToken = function (apiToken) {
    if (apiToken.trim() === '') {
        throw new TypeError('apiToken cannot be an empty string');
    }
    config.apiToken = apiToken;
};
exports.apiToken = apiToken;
exports.dispatch = (0, dispatch_1.createDispatch)(config);
