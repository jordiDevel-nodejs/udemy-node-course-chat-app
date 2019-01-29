const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
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

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        const from = 'Dembele';
        const latitude = 1;
        const longitude = 1;
        const url = 'https://www.google.com/maps?q=1,1';

        const msg = generateLocationMessage(from, latitude, longitude);

        expect(msg.from).toBe(from);
        expect(msg.url).toBe(url);
        expect(typeof msg.createdAt).toBe('number');
        expect(msg).toMatchObject({ from, url });
    });
});