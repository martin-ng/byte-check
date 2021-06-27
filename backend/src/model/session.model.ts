import mongoose from 'mongoose';
import { UserDoc } from './user.model';

export interface SessionDoc extends mongoose.Document {
    user: UserDoc['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}

const SessionSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        valid: { type: Boolean, default: true },
        userAgent: { type: String }
    },
    { timestamps: true }
);

const Session = mongoose.model<SessionDoc>('Session', SessionSchema);

export default Session;
