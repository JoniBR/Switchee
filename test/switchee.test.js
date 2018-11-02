import $switch from "../switcheroo";

const identity = val => val;

/*---------------- Basic tests ---------------- */
test("check basic isEqual switch", () => {
  const cases = [];
  for (let i = 0; i < 3; i++) {
    cases.push({
      matcher: "isEqual",
      params: i,
      action: () => i
    });
  }

  let switcheroo = $switch(cases);
  for (let i = 0; i < 3; ++i) {
    expect(switcheroo(i)).toEqual([i]);
  }
});

test("check basic isEqual switch with useVal", () => {
  const cases = [];
  for (let i = 0; i < 3; i++) {
    cases.push({
      matcher: "isEqual",
      params: i,
      action: identity,
      useVal: true
    });
  }

  let switcheroo = $switch(cases);
  for (let i = 0; i < 3; ++i) {
    expect(switcheroo(i)).toEqual([i]);
  }
});

test("check basic isEqual switch where params are in array", () => {
  const cases = [];
  for (let i = 0; i < 3; i++) {
    cases.push({
      matcher: "isEqual",
      params: [i],
      action: () => i
    });
  }

  let switcheroo = $switch(cases);
  for (let i = 0; i < 3; ++i) {
    expect(switcheroo(i)).toEqual([i]);
  }
});

test("check mutiple matches  ", () => {
  const cases = [];
  cases.push({
    matcher: "isEqual",
    params: [1, 2],
    action: identity,
    useVal: true
  });
  cases.push({
    matcher: "isEqual",
    params: [1],
    action: identity,
    useVal: true
  });
  cases.push({
    matcher: "isEqual",
    params: [4, 3, 2, 1],
    action: identity,
    useVal: true
  });

  let switcheroo = $switch(cases);
  expect(switcheroo(1)).toEqual([1, 1, 1]);
});

test("check break works  ", () => {
  const cases = [];
  cases.push({
    matcher: "isEqual",
    params: [1, 2],
    action: identity,
    useVal: true
  });
  cases.push({
    matcher: "isEqual",
    params: [1],
    action: identity,
    useVal: true,
    break: true
  });
  cases.push({
    matcher: "isEqual",
    params: [4, 3, 2, 1],
    action: identity,
    useVal: true
  });

  let switcheroo = $switch(cases);
  expect(switcheroo(1)).toEqual([1, 1]);
});

test("test null on no match  ", () => {
  const cases = [];
  cases.push({
    matcher: "isEqual",
    params: ["a", 2],
    action: identity,
    useVal: true
  });
  cases.push({
    matcher: "isEqual",
    params: [2],
    action: identity,
    useVal: true,
    break: true
  });
  cases.push({
    matcher: "isEqual",
    params: [4, 3, 2],
    action: identity,
    useVal: true
  });

  let switcheroo = $switch(cases);
  expect(switcheroo(1)).toEqual(null);
});

test("test default case - when default is provided as a function  ", () => {
  const cases = [];
  cases.push({
    matcher: "isEqual",
    params: ["a", 2],
    action: identity,
    useVal: true
  });

  let switcheroo = $switch(cases, () => 1);
  expect(switcheroo(1)).toEqual([1]);
});

test("test default case - when default is provided as object  ", () => {
  const cases = [];
  cases.push({
    matcher: "isEqual",
    params: ["a", 2],
    action: identity,
    useVal: true
  });

  let switcheroo = $switch(cases, { action: () => 1 });
  expect(switcheroo(1)).toEqual([1]);
});
test("test default case - when default is provided as object and uses val  ", () => {
  const cases = [];
  cases.push({
    matcher: "isEqual",
    params: ["a", 2],
    action: identity,
    useVal: true
  });

  let switcheroo = $switch(cases, {
    action: identity,
    useVal: true
  });
  expect(switcheroo(1)).toEqual([1]);
});

// test('check seperate default value', () => {
// 	const cases = {
// 		'1': () => 1,
// 		'2': () => 2,
// 		'3': () => 3
// 	};
// 	const defaultFunc = () => 'default';
// 	const callbackSwitch = callbackSwitchCreator(cases, defaultFunc);
// 	expect(callbackSwitch('1')).toBe(1);
// 	expect(callbackSwitch('2')).toBe(2);
// 	expect(callbackSwitch('3')).toBe(3);
// 	expect(callbackSwitch()).toBe('default');
// });

// test('check seperate default case', () => {
// 	const cases = {

// 		'1': () => 1,
// 		'2': () => 2,
// 		'3': () => 3
// 	};
// 	const defaultFunc = () => 'default';
// 	const callbackSwitch = callbackSwitchCreator(cases, defaultFunc);
// 	expect(callbackSwitch('1')).toBe(1);
// 	expect(callbackSwitch('2')).toBe(2);
// 	expect(callbackSwitch('3')).toBe(3);
// 	expect(callbackSwitch()).toBe('default');
// });

// test('check error on no default case', () => {
// 	const cases = {
// 		'1': () => 1,
// 		'2': () => 2,
// 		'3': () => 3
// 	};
// 	expect(() => callbackSwitchCreator(cases)).toThrowError('Default case must be defined');
// });

// test('check error on default case not being a function', () => {
// 	const cases = {
// 		'1': () => 1,
// 		'2': () => 2,
// 		'3': () => 3
// 	};

// 	const notFunc = 'not a function';
// 	expect(() => callbackSwitchCreator(cases, notFunc)).toThrowError('function');
// 	cases['default'] = notFunc;
// 	expect(() => callbackSwitchCreator(cases)).toThrowError('function');
// });

// test('check error on case action not being a function', () => {
// 	const cases = {
// 		'1': () => 1,
// 		'2': () => 2,
// 		'3': 3,
// 		default: () => 'default'
// 	};
// 	expect(() => callbackSwitchCreator(cases)).toThrowError('function');
// });
