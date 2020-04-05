import * as foos from './foo';

describe('foo', () => {
    beforeEach(() => {
        foos.foo();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('can call bar from foo', () => {
        jest.spyOn(foos, 'bar').mockImplementation(() => {});

        foos.foo();

        expect(foos.bar).toHaveBeenCalledTimes(1);
    });

    test('bar should return bar', () => {
        expect(foos.bar()).toBe('bar');
    });
});
