"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isEqual = require("./isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isType = function isType(val, params, isArray) {
  var type = typeof val === "undefined" ? "undefined" : _typeof(val);
  if (type === "object") {
    var className = val.constructor.name;
    return className === "Object" ? (0, _isEqual2.default)(type, params, isArray) : (0, _isEqual2.default)(className, params, isArray);
  }
  return (0, _isEqual2.default)(type, params, isArray);
};

exports.default = isType;