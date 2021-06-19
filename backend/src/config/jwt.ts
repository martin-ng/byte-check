export const accessToken = {
    secret: process.env.JWT_ACCESS_SECRET,
    expiresIn: 10 * 60 * 1000 //10 mins
};

export const refreshToken = {
    secret: process.env.JWT_REFRESH_SECRET,
    expiresIn: 14 * 24 * 60 * 60 * 1000 //14 days
};

export const SERVER_TOKEN_EXPIRETIME = process.env.SERVER_TOKEN_EXPIRETIME || 60000;
export const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'issuer';
export const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'secret';

export const tokenConfig = {
    expireTime: SERVER_TOKEN_EXPIRETIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET
};
