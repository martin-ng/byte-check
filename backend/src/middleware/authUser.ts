import { get } from 'lodash';
import { Request, Response, NextFunction } from 'express';

export default async function authUser(req: Request, res: Response, next: NextFunction) {
    const user = get(req, 'user');
    // console.log('req', req);
    // console.log('getting user info', user);
    if (!user) {
        return res.sendStatus(403);
    }
    return next();
}
