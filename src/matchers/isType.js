'use strict';
import isEqual from './isEqual';

const isType = (val, params) => {
	const type = typeof val;
	return isEqual(type, params);
};

export default isEqual;
