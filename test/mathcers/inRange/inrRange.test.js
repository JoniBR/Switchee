import $switch from '../../../switcheroo'

const identity = (val) => val;

/*---------------- Basic tests ---------------- */
test('test for match number between 2 values', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [0,10],
			action: identity,
			op:'between',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(5)).toEqual([ 5 ]);
	
});

test('test for match on number between-left-inclusive 2 values', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [5,10],
			action: identity,
			op:'between-left-inclusive',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(5)).toEqual([ 5 ]);
	
});

test('test for match on number between-right-inclusive 2 values', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [5,10],
			action: identity,
			op:'between-right-inclusive',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(10)).toEqual([ 10 ]);
	
});

test('test for match on number bigger than value', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [5],
			action: identity,
			op:'bigger',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(5)).toEqual([ 5 ]);
	
});

test('test for match on number bigger-equals than value', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [5],
			action: identity,
			op:'bigger-equals',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(5)).toEqual([ 5 ]);
		expect(switcheroo(6)).toEqual([ 6 ]);
});
test('test for match on number smaller than value', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [5],
			action: identity,
			op:'smaller',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(4)).toEqual([ 4 ]);
	
});

test('test for match on number smaller-equals than value', () => {
	const cases = [];
		cases.push({
			matcher: 'inRange',
			params: [5],
			action: identity,
			op:'smaller-equals',
            useVal : true
		});

	let switcheroo = $switch(cases);
		expect(switcheroo(5)).toEqual([ 5 ]);
		expect(switcheroo(4)).toEqual([ 4 ]);
});