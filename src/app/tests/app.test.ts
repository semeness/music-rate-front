import { summer } from 'app/helpers';

describe('initial tests', () => {
    test('check for summer', () => {
        expect(summer(4, 2)).toBe(6);
    });
});
