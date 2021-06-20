import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema: Schema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

UserSchema.plugin(uniqueValidator);
const model = mongoose.model<IUser>('User', UserSchema);
export default model;
