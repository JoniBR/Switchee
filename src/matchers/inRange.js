'use strict';

const ops = {
	between: (val, nums) => {
		checkMinimunTwoParams(nums);
		return val > nums[0] && val < nums[1];
	},
	'between-inclusive': (val, nums) => {
		checkMinimunTwoParams(nums);
		return val >= nums[0] && val <= nums[1];
	},
	'between-left-inclusive': (val, nums) => {
		checkMinimunTwoParams(nums);
		return (val) => nums[0] && val < nums[1];
	},
	'between-right-inclusive': (val, nums) => {
		checkMinimunTwoParams(nums);
		return (val) => nusm[0] && val <= nums[1];
	},
	bigger: (val, nums) => {
		return (val) => val > nums[0];
	},
	'bigger-equals': (val, nums) => {
		return (val) => val >= nums[0];
	},
	smaller: (val, nums) => {
		return (val) => val < nums[0];
	},
	'smaller-equals': (val, nums) => {
		return (val) => val <= nums[0];
	}
};

const checkMinimunTwoParams = (nums) => {
	if (nums.length < 2) {
		throw new Error('between operation requires 2 numbers');
	}
};

const inRange = (val, params, op) => {
	if (op in ops) {
		return ops[op](val, params);
	} else {
		let errorMsg = 'unknown range operation, try one of this: \n';
		for (let opName in ops) {
			errorMsg += `${opName} \n`;
		}
		throw new Error(errorMsg);
	}
};

export default inRange;
