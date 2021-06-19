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
    if (!password || typeof password !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' });
    }
    if (password.length < 5) {
        return res.json({
            status: 'error',
            error: 'Password is too short. Please make it at least 6 characters.'
        });
    }
    try {
        const hashedPassword = await argon.hash(password);

        res.send(password);
    } catch (error) {
        console.log(error);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log('login');
};

export { validateToken, register, login };
