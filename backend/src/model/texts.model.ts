import mongoose from 'mongoose';
import { nanoid } from 'nanoid';
import { UserDoc } from './user.model';

export interface TextDoc extends mongoose.Document {
    user: UserDoc['_id'];
    originalText: string;
    newText: string;
    createdAt: Date;
    updatedAt: Date;
}

const TextSchema = new mongoose.Schema(
    {
        textId: {
            type: String,
            required: true,
            unique: true,
            default: () => nanoid(10)
        },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        originalText: { type: String, default: true },
        newText: { type: String, default: true }
    },
    { timestamps: true }
);

const Text = mongoose.model<TextDoc>('Text', TextSchema);

export default Text;
