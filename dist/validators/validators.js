'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.validateActionIsFunc = exports.validateCases = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _matcherTypes = require('../matchers/matcherTypes');

var _matcherTypes2 = _interopRequireDefault(_matcherTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// main fuction validators
var validateCases = exports.validateCases = function validateCases(cases) {
	if (Array.isArray(cases) && cases.length) {
		cases.forEach(validateCaseSturcute);
	} else {
		throw new Error('cases argument should be a non empty array');
	}
};

var validateCaseSturcute = function validateCaseSturcute(c) {
	if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) == 'object' && c !== null) {
		var matcher = c['matcher'];
		validateInMatchers(matcher);
		var action = c['action'];
		validateActionIsFunc(action);
	} else {
		throw new Error('Case should be an object, ' + c + ' isn\'t!');
	}
};

var validateInMatchers = function validateInMatchers(matcher) {
	if (!(matcher in _matcherTypes2.default)) {
		var errMsg = 'Unrecgonized matcher , try one of this: \n';
		for (var m in _matcherTypes2.default) {
			errMsg += m + ' \n';
		}
		throw new Error(errMsg);
	}
};

var validateActionIsFunc = exports.validateActionIsFunc = function validateActionIsFunc(action) {
	var type = typeof action === 'undefined' ? 'undefined' : _typeof(action);
	if (!(type === 'function')) {
		throw new Error('type of action should be a function not ' + type + '!');
	}
};