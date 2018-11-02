"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ops = {
  between: function between(val, nums) {
    checkMinimunTwoParams(nums);
    return val > nums[0] && val < nums[1];
  },
  "between-inclusive": function betweenInclusive(val, nums) {
    checkMinimunTwoParams(nums);
    return val >= nums[0] && val <= nums[1];
  },
  "between-left-inclusive": function betweenLeftInclusive(val, nums) {
    checkMinimunTwoParams(nums);
    return nums[0] && val < nums[1];
  },
  "between-right-inclusive": function betweenRightInclusive(val, nums) {
    checkMinimunTwoParams(nums);
    return num[0] && val <= nums[1];
  },
  bigger: function bigger(val, nums, isArray) {
    return isArray ? val > nums[0] : val > nums;
  },
  "bigger-equals": function biggerEquals(val, nums, isArray) {
    return isArray ? val >= nums[0] : val >= nums;
  },
  smaller: function smaller(val, nums, isArray) {
    return isArray ? val < nums[0] : val < nums;
  },
  "smaller-equals": function smallerEquals(val, nums, isArray) {
    return isArray ? val <= nums[0] : val <= nums;
  }
};

var checkMinimunTwoParams = function checkMinimunTwoParams(nums) {
  if (nums.length < 2) {
    throw new Error("between operation requires 2 numbers");
  }
};

var inRange = function inRange(val, params, isArray, op) {
  if (op in ops) {
    return ops[op](val, params, isArray);
  } else {
    var errorMsg = "unknown range operation, try one of this: \n";
    for (var opName in ops) {
      errorMsg += opName + " \n";
    }
    throw new Error(errorMsg);
  }
};

exports.default = inRange;