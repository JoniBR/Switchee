import matchers from '../matchers/matcherTypes';

// main fuction validators
export const validateCases = (cases) => {
	if (Array.isArray(cases) && cases.length) {
		cases.forEach(validateCaseSturcute);
	} else {
		throw new Error('cases argument should be a non empty array');
	}
};

const validateCaseSturcute = (c) => {
	if (typeof c == 'object' && c !== null) {
		const matcher = c['matcher'];
		validateInMatchers(matcher);
		const action = c['action'];
		validateActionIsFunc(action);
	} else {
		throw new Error(`Case should be an object, ${c} isn't!`);
	}
};

const validateInMatchers = (matcher) => {
	if (!(matcher in matchers)) {
		let errMsg = 'Unrecgonized matcher , try one of this: \n';
		for (let m in matchers) {
			errMsg += `${m} \n`;
		}
		throw new Error(errMsg);
	}
};

export const validateActionIsFunc = (action) => {
	let type = typeof action;
	if (!(type === 'function')) {
		throw new Error(`type of action should be a function not ${type}!`);
	}
};
