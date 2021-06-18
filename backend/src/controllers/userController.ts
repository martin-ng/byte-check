import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import argon from 'argon2';

const NAMESPACE = 'USER';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated - user authorized');

    return res.status(200).json({
        message: 'Authorized'
    });
};

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    try {
        const hash = await argon.hash(password);
        console.log('hash', hash);
        res.send(password);
    } catch (error) {
        console.log(error);
    }
};

export { validateToken, register };
