const expect = require('expect');

const {generateMessage} = require('./message');

describe('', () => {
    it('should generate correct message object', () => {
        const from = 'Dembele';
        const text = 'Coutinho patata';

        const msg = generateMessage(from, text);

        expect(msg.from).toBe(from);
        expect(msg.text).toBe(text);
        expect(typeof msg.createdAt).toBe('number');
        expect(msg).toMatchObject({ from, text });
    });
});