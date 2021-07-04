import { createUser, findUser, deleteAllUsers } from '../user.service';

describe('User service', () => {
    afterAll(async () => {
        await deleteAllUsers();
    });

    afterEach(async () => {
        await deleteAllUsers();
    });

    const userInfo: any = {
        email: 'martin@test.com',
        name: 'Martin',
        password: 'abc123'
    };

    describe('Create user', () => {
        describe('The given input is valid', () => {
            it('should create a new user', async () => {
                const user = await createUser(userInfo);

                expect(user.password).toHaveLength(60);
                expect(user.name).toBe(userInfo.name);
                expect(user.email).toBe(userInfo.email);
            });
        });
    });

    describe('User log in', () => {
        describe('the given password is correct', () => {
            it('should return true', async () => {
                const user = await createUser(userInfo);

                const foundUser = await findUser({ email: userInfo.email });
                const foundUserPass = foundUser.comparePassword(userInfo.password);
                expect(foundUserPass).toBeTruthy();
            });
        });
    });
});
