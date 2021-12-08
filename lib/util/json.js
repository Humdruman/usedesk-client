"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
var string_1 = require("./string");
var toJson = function (rowJson) {
    if (!(0, string_1.notEmptyString)(rowJson)) {
        throw new TypeError('expected not empty string');
    }
    return JSON.parse(rowJson);
};
exports.toJson = toJson;
