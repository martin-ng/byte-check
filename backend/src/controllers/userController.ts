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
