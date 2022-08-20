const { getMessage } = require('.');

describe('utils', () => {

    describe('getMessage', () => {
        test('behaves as expected', () => {

            const result = getMessage('Niko');

            expect(result).toEqual('Hello Niko!');
        });
    });
});