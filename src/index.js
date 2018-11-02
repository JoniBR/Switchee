"use strict";

import { validateActionIsFunc, validateCases } from "./validators/validators";

import matchers from "./matchers/matcherTypes";

/**
 * case object -
 * {
 * matcher: string,
 * params : array
 * action: function
 * useVal : boolean
 * break: boolean
 * op: string
 * useProperty : string
 * }
 */

const switcheroo = (cases, defaultAction) => {
  validateCases(cases);

  return val => {
    const filteredCases = cases.filter(c => {
      const switchVal = c.useProperty ? val[c.useProperty] : val;
      const matcher = matchers[c["matcher"]];
      const op = c["op"];
      const params = c["params"];
      const isArray = Array.isArray(params);
      return matcher(switchVal, params, op, isArray);
    });
    let actionsResults = [];
    for (let c of filteredCases) {
      const useVal = c["useVal"];
      const action = c["action"];
      const res = useVal ? action(val) : action();
      actionsResults.push(res);
      const brk = c["break"];
      if (brk) {
        break;
      }
    }

    // in case no action was triggeded, check for default case and trigger it
    if (!actionsResults.length) {
      if (defaultAction) {
        if (typeof defaultAction === "function") {
          const res = defaultAction();
          actionsResults.push(res);
        } else {
          const useVal = defaultAction["useVal"];
          const action = defaultAction["action"];
          validateActionIsFunc(action);
          const res = useVal ? action(val) : action();
          actionsResults.push(res);
        }
      }
    }
    return actionsResults.length ? actionsResults : null;
  };
};

export default switcheroo;
