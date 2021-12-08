"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notEmptyString = void 0;
var notEmptyString = function (str) { return typeof str === 'string' && str.trim() !== ''; };
exports.notEmptyString = notEmptyString;
