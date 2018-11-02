"use strict";

const ops = {
  between: (val, nums) => {
    checkMinimunTwoParams(nums);
    return val > nums[0] && val < nums[1];
  },
  "between-inclusive": (val, nums) => {
    checkMinimunTwoParams(nums);
    return val >= nums[0] && val <= nums[1];
  },
  "between-left-inclusive": (val, nums) => {
    checkMinimunTwoParams(nums);
    return nums[0] && val < nums[1];
  },
  "between-right-inclusive": (val, nums) => {
    checkMinimunTwoParams(nums);
    return num[0] && val <= nums[1];
  },
  bigger: (val, nums, isArray) => {
    return isArray ? val > nums[0] : val > nums;
  },
  "bigger-equals": (val, nums, isArray) => {
    return isArray ? val >= nums[0] : val >= nums;
  },
  smaller: (val, nums, isArray) => {
    return isArray ? val < nums[0] : val < nums;
  },
  "smaller-equals": (val, nums, isArray) => {
    return isArray ? val <= nums[0] : val <= nums;
  }
};

const checkMinimunTwoParams = nums => {
  if (nums.length < 2) {
    throw new Error("between operation requires 2 numbers");
  }
};

const inRange = (val, params, isArray, op) => {
  if (op in ops) {
    return ops[op](val, params, isArray);
  } else {
    let errorMsg = "unknown range operation, try one of this: \n";
    for (let opName in ops) {
      errorMsg += `${opName} \n`;
    }
    throw new Error(errorMsg);
  }
};

export default inRange;
