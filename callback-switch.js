'use strict';

function checkValuesAreFunctios(cases) {
	for (let c in cases) {
		let type = typeof cases[c];
		if (type !== 'function') {
			let errMsg = `All cases must be mapped to a function, \n 
            case ${c} is of type ${type}. `;
			throw new Error(errMsg);
		}
	}
}

function checkForDefaultCase(default_case, cases) {
	if (default_case) {
		const typeOfDefault = typeof default_case;
		if (typeOfDefault != 'function') {
			throw new Error(`Default case must be a function,\n
            ${typeOfDefault} was provided;
            `);
		}
	} else if (!('default' in cases)) {
		throw new Error('Default case must be defined');
	}
}

const callbackSwitchCreator = function(cases, default_case) {
	checkForDefaultCase(default_case, cases);
	checkValuesAreFunctios(cases);
	const callbackSwitch = (value) => {
		if (value in cases) {
			return cases[value]();
		} else if (default_case) {
			return default_case();
		} else {
			return cases['default']();
		}
	};

	return callbackSwitch;
};

module.exports.callbackSwitchCreator = callbackSwitchCreator;
