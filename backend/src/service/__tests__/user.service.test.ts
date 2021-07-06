import { createUser, findUser, deleteAllUsers, validatePassword } from '../user.service';

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
                await createUser(userInfo);
                const loggedUser = await validatePassword({ email: userInfo.email, password: userInfo.password });
                let status = true;
                if (!loggedUser) status = false;

                expect(status).toBeTruthy();
            });
        });

        describe('the given password is incorrect', () => {
            it('should return false', async () => {
                await createUser(userInfo);
                const loggedUser = await validatePassword({ email: userInfo.email, password: 'wrongPassWoRd!!' });
                let status = true;
                if (!loggedUser) status = false;

                expect(status).toBeFalsy();
            });
        });
    });
});
