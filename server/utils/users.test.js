const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Jordi',
            room: 'Barsa'
        }, {
            id: '2',
            name: 'Ignasi',
            room: 'Madrid'
        }, {
            id: '3',
            name: 'Blanca',
            room: 'Barsa'
        }];
    });

    it('should add new user', () => {
        const users = new Users();
        const user = {
            id: '123',
            name: 'Jordi',
            room: 'Barsa'
        };

        const resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for Barsa room', () => {
        const userList = users.getUserList('Barsa');

        expect(userList).toEqual(['Jordi', 'Blanca']);
    });

    it('should return names for Madrid room', () => {
        const userList = users.getUserList('Madrid');

        expect(userList).toEqual(['Ignasi']);
    });

    it('should remove user', () => {
        const userId = '1';

        const user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        const userId = '1111';

        const user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        const userId = '1';
        const user = users.getUser(userId);
        
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        const userId = '1111';
        const user = users.getUser(userId);

        expect(user).toBeFalsy();
    });
});