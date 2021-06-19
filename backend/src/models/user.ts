import mongoose from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema = new mongoose.Schema<IUser>(
    {
        email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

const model = mongoose.model('User', UserSchema);
export default model;
