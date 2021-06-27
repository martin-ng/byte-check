import { DocumentDefinition } from 'mongoose';
import User, { UserDoc } from '../model/user.model';

export async function createUser(input: DocumentDefinition<UserDoc>) {
    try {
        return await User.create(input);
    } catch (error) {
        throw new Error(error);
    }
}

function findUser() {}
