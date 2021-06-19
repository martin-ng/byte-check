import mongoose from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema = new mongoose.Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    { collection: 'users' }
);

const model = mongoose.model('UserSchema', UserSchema);
export default model;
