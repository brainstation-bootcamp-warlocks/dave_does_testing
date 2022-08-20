const handlers = require('.');

describe('handlers', () => {

    describe('root', () => {
        test('behaves as expected', () => {

            const json = jest.fn();
            const req = {};
            const res = { json };

            handlers.root(req, res);

            expect(json).toHaveBeenCalled();
        });
    });

    describe('message', () => {
        test('behaves as expected', () => {
            const json = jest.fn();
            const req = { params: { message: 'bruh' } };
            const res = { json };

            handlers.message(req, res);

            expect(json).toHaveBeenCalledWith({ message: 'Hello bruh!' });
        });
    });
});

