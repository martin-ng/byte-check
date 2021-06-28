import { get } from 'lodash';
import { Request, Response } from 'express';
import config from 'config';
import { validatePassword } from '../service/user.service';
import { createSession, createAccessToken, findSessions, updateSession } from '../service/session.service';
import { sign } from '../utils/jwt.utils';

export async function createUserSessionController(req: Request, res: Response) {
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send('Invalid account');
    }

    const session = await createSession(user._id, req.get('user-agent') || '');

    const accessToken = createAccessToken({
        user,
        session
    });

    const refreshToken = sign(session, {
        expiresIn: config.get('refreshTokenTime') // 1 year
    });

    return res.send({ accessToken, refreshToken });
}

export async function destroyUserSessionController(req: Request, res: Response) {
    const sessionId = get(req, 'user.session');
    await updateSession({ _id: sessionId }, { valid: false });
    return res.sendStatus(200);
}

export async function getUserSessionsController(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    console.log('user id', userId);
    const sessions = await findSessions({ user: userId, valid: true });

    return res.send(sessions);
}
