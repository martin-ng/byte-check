import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import argon from 'argon2';
import User from '../models/user';

const NAMESPACE = 'USER';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated - user authorized');

    return res.status(200).json({
        message: 'Authorized'
    });
};

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password } = req.body;
    if (!password || typeof password !== 'string') {
        return res.json({ status: 'error', error: 'Invalid password' });
    }
    if (password.length < 5) {
        return res.json({
            status: 'error',
            error: 'Password is too short. Please make it at least 6 characters.'
        });
    }
    const hashedPassword = await argon.hash(password);

    try {
        const response = await User.create({
            email,
            name,
            password: hashedPassword
        });
    } catch (error) {
        console.log(error);
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log('login');
};

export { validateToken, register, login };
