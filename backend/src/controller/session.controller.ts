import { Request, Response } from 'express';
// import { omit } from 'lodash';
// import { createUser } from '../service/user.service';
// import log from '../logger';
import { validatePassword } from '../service/user.service';

export async function createUserSessionHandler(req: Request, res: Response) {
    // validate the email and password
    const user = await validatePassword(req.body);

    if (!user) {
        return res.status(401).send('Invalid account');
    }

    // Create a session
    const session = await createSession(user._id, req.get('user-agent') || '');

    // create access token
    const accessToken = createAccessToken({
        user,
        session
    });

    // create refresh token
    const refreshToken = sign(session, {
        expiresIn: config.get('refreshTokenTtl') // 1 year
    });

    // send refresh & access token back
    return res.send({ accessToken, refreshToken });
}
