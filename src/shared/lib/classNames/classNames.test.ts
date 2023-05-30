import { classNames } from './classNames';

describe('classNames', () => {
	test('width only first para', () => {
		expect(classNames('someClass')).toBe('someClass');
	});

	test('width additional class', () => {
		const expected = 'mainClass class1 class2';
		expect(classNames('mainClass', ['class1 class2'], {})).toBe(expected);
	});

	test('width mods', () => {
		const expected = 'mainClass class1 class2 active hovered';
		expect(
			classNames('mainClass', ['class1 class2'], {
				active: true,
				hovered: true,
			})
		).toBe(expected);
	});

	test('width mods false', () => {
		const expected = 'mainClass class1 class2 active';
		expect(
			classNames('mainClass', ['class1 class2'], {
				active: true,
				hovered: false,
			})
		).toBe(expected);
	});

	test('width mods false', () => {
		const expected = 'mainClass class1 class2 active';
		expect(
			classNames('mainClass', ['class1 class2'], {
				active: true,
				hovered: undefined,
			})
		).toBe(expected);
	});
});
