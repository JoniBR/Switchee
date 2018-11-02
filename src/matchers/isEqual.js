"use strict";

const isEqual = (val, params, isArray) => {
  if (isArray) {
    if (!params.length) {
      throw new Error(
        "params array of isEqual operation should contain at least 1 item"
      );
    } else {
      return params.includes(val);
    }
  } else {
    return val === params;
  }
};

export default isEqual;
