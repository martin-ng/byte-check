import jwt from 'jsonwebtoken';
import { tokenConfig } from '../config/jwt';
import logging from '../config/logging';
import IUser from '../interfaces/user';

const NAMESPACE = 'Auth';

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void): void => {
    let timeEpoch = new Date().getTime();
    let expirationTime = timeEpoch + Number(tokenConfig.expireTime) * 100000;
    let expirationTimeInSeconds = Math.floor(expirationTime / 1000);

    logging.info(NAMESPACE, `Attempting to sign token for ${user.email}`);

    try {
        jwt.sign(
            {
                email: user.email
            },
            tokenConfig.secret,
            {
                issuer: tokenConfig.issuer,
                algorithm: 'HS256',
                expiresIn: expirationTimeInSeconds
            },
            (error, token) => {
                if (error) {
                    callback(error, null);
                } else if (token) {
                    callback(null, token);
                }
            }
        );
    } catch (error) {
        logging.error(NAMESPACE, error.message, error);
        callback(error, null);
    }
};

export default signJWT;
