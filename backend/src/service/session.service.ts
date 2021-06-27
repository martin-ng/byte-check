import config from 'config';
import { LeanDocument } from 'mongoose';
import Session from '../model/session.model';
import { SessionDoc } from '../model/session.model';
import { UserDoc } from '../model/user.model';

export async function createSession(userId: string, userAgent: string) {
    const session = await Session.create({ user: userId, userAgent });

    return session.toJSON();
}

export function createAccessToken({
    user,
    session
}: {
    user: Omit<UserDoc, 'password'> | LeanDocument<Omit<UserDoc, 'password'>>;
    session: Omit<SessionDoc, 'password'> | LeanDocument<Omit<SessionDoc, 'password'>>;
}) {
    const accessToken = sign(
        {
            ...user,
            session: session._id
        },
        { expiresIn: config.get('accessTokenTtl') }
    );
    return accessToken;
}
