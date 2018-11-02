"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isEqual = function isEqual(val, params, isArray) {
  if (isArray) {
    if (!params.length) {
      throw new Error("params array should contain at least 1 item");
    } else {
      return params.includes(val);
    }
  } else {
    return val === params;
  }
};

exports.default = isEqual;