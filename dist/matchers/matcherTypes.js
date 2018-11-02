"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inRange = require("./inRange");

var _inRange2 = _interopRequireDefault(_inRange);

var _isEqual = require("./isEqual");

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isType = require("./isType");

var _isType2 = _interopRequireDefault(_isType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = {
  inRange: _inRange2.default,
  isEqual: _isEqual2.default,
  isType: _isType2.default
};

exports.default = types;