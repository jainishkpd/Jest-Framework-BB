describe('', function() {
	beforeEach(function() {
		jest.unmock('./sum');
		const sum = require('./sum');
		expect(sum(1, 2)).toBe(3);
	});
	test('', () => {
		jest.unmock('./sum');
		const sum = require('./sum');
		expect(sum(1, 2)).toBe(3);
	});
});


