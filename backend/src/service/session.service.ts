import config from 'config';
import { get } from 'lodash';
import { LeanDocument } from 'mongoose';
import Session from '../model/session.model';
import { SessionDoc } from '../model/session.model';
import { UserDoc } from '../model/user.model';
import { sign, decode } from '../utils/jwt.utils';

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
        { expiresIn: config.get('accessTokenTime') }
    );
    return accessToken;
}

export async function reissueAccessToken({ refreshToken }: { refreshToken: string }) {
    const { decoded } = decode(refreshToken);

    if (!decoded || !get(decoded, '_id')) return false;

    const session = await Session.findById(get(decoded, '_id'));

    if (!session || !session?.valid) return false;

    const user = await findUser({ _id: session.user });

    if (!user) return false;

    const accessToken = createAccessToken({ user, session });

    return accessToken;
}
