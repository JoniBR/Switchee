"use strict";

import isEqual from "./isEqual";

const isType = (val, params, isArray) => {
  const type = typeof val;
  if (type === "object") {
    const className = val.constructor.name;
    return className === "Object"
      ? isEqual(type, params, isArray)
      : isEqual(className, params, isArray);
  }
  return isEqual(type, params, isArray);
};

export default isType;
