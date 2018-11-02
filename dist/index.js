"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _validators = require("./validators/validators");

var _matcherTypes = require("./matchers/matcherTypes");

var _matcherTypes2 = _interopRequireDefault(_matcherTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * case object -
 * {
 * matcher: string
 * params : array
 * action: function
 * useVal : boolean
 * break: boolean
 * op: string
 * useProperty : string
 * }
 */

var switcheroo = function switcheroo(cases, defaultAction) {
  (0, _validators.validateCases)(cases);

  return function (val) {
    var filteredCases = cases.filter(function (c) {
      var switchVal = c.useProperty ? val[c.useProperty] : val;
      var matcher = _matcherTypes2.default[c["matcher"]];
      var op = c["op"];
      var params = c["params"];
      var isArray = Array.isArray(params);
      return matcher(switchVal, params, isArray, op);
    });
    var actionsResults = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = filteredCases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var c = _step.value;

        var useVal = c["useVal"];
        var action = c["action"];
        var res = useVal ? action(val) : action();
        actionsResults.push(res);
        var brk = c["break"];
        if (brk) {
          break;
        }
      }

      // in case no action was triggeded, check for default case and trigger it
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    if (!actionsResults.length) {
      if (defaultAction) {
        if (typeof defaultAction === "function") {
          var res = defaultAction();
          actionsResults.push(res);
        } else {
          var useVal = defaultAction["useVal"];
          var action = defaultAction["action"];
          (0, _validators.validateActionIsFunc)(action);
          var _res = useVal ? action(val) : action();
          actionsResults.push(_res);
        }
      }
    }
    return actionsResults.length ? actionsResults : null;
  };
};

exports.default = switcheroo;