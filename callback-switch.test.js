const callbackSwitchCreator = require('./callback-switch').callbackSwitchCreator;

test('check basic cases', () => {
	const cases = {
		'1': () => 1,
		'2': () => 2,
		'3': () => 3,
		default: () => 'default'
	};
	const callbackSwitch = callbackSwitchCreator(cases);
	expect(callbackSwitch('1')).toBe(1);
	expect(callbackSwitch('2')).toBe(2);
	expect(callbackSwitch('3')).toBe(3);
	expect(callbackSwitch('default')).toBe('default');
	expect(callbackSwitch()).toBe('default');
});

test('check seperate default value', () => {
	const cases = {
		'1': () => 1,
		'2': () => 2,
		'3': () => 3
	};
	const defaultFunc = () => 'default';
	const callbackSwitch = callbackSwitchCreator(cases,defaultFunc);
	expect(callbackSwitch('1')).toBe(1);
	expect(callbackSwitch('2')).toBe(2);
	expect(callbackSwitch('3')).toBe(3);
	expect(callbackSwitch()).toBe('default');
});

test('check seperate default value', () => {
	const cases = {
		'1': () => 1,
		'2': () => 2,
		'3': () => 3
	};
	const defaultFunc = () => 'default';
	const callbackSwitch = callbackSwitchCreator(cases,defaultFunc);
	expect(callbackSwitch('1')).toBe(1);
	expect(callbackSwitch('2')).toBe(2);
	expect(callbackSwitch('3')).toBe(3);
	expect(callbackSwitch()).toBe('default');
});