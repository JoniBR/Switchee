'use strict';
import matchers from './matchers/matcherTypes';
import { validateCases, validateActionIsFunc } from './validators/validators';

/**
 * case object -
 * {
 * matcher: string,
 * params : array
 * action: function
 * useVal : boolean
 * break: boolean
 * op: string
 * }
 */

const switcheroo = (cases, defaultCase) => {
	validateCases(cases);

	return (val) => {
		const filteredCases = cases.filter((c) => {
			const matcher = matchers[c['matcher']];
			const op = c['op'];
			const params = c['params'];
			return matcher(val, params, op);
		});
		let actionsResults = [];
		for (let c of filteredCases) {
			const useVal = c['useVal'];
			const action = c['action'];
			const res = useVal ? action(val) : action();
			actionsResults.push(res);
			const brk = c['break'];
			if (brk) {
				break;
			}
		}

		// in case no action was triggeded, check for default case and trigger it
		if (!actionsResults.length) {
			if (defaultCase) {
				if (typeof defaultCase === 'function') {
					const res = defaultCase();
					actionsResults.push(res);
				} else {
					const useVal = defaultCase['useVal'];
					const action = defaultCase['action'];
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
