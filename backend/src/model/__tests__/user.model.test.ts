import User, { UserDoc } from '../user.model';
import { createUser, deleteAllUsers, validatePassword } from '../../service/user.service';

describe('User model', () => {
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

    let user: any;

    beforeEach(async () => {
        user = await User.create(userInfo);
    });

    describe('Column definitions and validations', () => {
        it('has a "email" and a "name"', async () => {
            expect(user.email).toBe(userInfo.email);
            expect(user.name).toBe(userInfo.name);
        });
    });

    describe('User methods', () => {
        it('comparePassword returns correct boolean', async () => {
            const loggedUser = await validatePassword({ email: userInfo.email, password: userInfo.password });
            let status = true;
            if (!loggedUser) status = false;

            expect(status).toBeTruthy();
        });
    });

    describe('Sign up', () => {
        describe('Sign up success', () => {
            it('returns true if _id is a number', () => {
                expect(Number(user._id)).toEqual(expect.any(Number));
            });
        });
    });
});
