import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from 'config';

export interface UserDoc extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
    let user = this as UserDoc;

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(config.get('saltNumber'));

    const hash = await bcrypt.hashSync(user.password, salt);

    user.password = hash;
});

UserSchema.methods.comparePassword = async function (candidatePassword: string) {
    const user = this as UserDoc;

    return bcrypt.compare(candidatePassword, user.password).catch((error) => false);
};

const User = mongoose.model<UserDoc>('User', UserSchema);

export default User;
