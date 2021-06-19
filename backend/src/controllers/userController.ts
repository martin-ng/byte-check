import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import argon from 'argon2';
import mongoose from 'mongoose';
import User from '../models/user';
import signJWT from '../helper/signJWT';

const NAMESPACE = 'USER';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Token validated - user authorized');

    return res.status(200).json({
        message: 'Authorized'
    });
};

const register = async (req: Request, res: Response, next: NextFunction) => {
    const { email, name, password } = req.body;
    if (!email || typeof email !== 'string') {
        return res.json({ status: 'error', error: 'Invalid email' });
    }
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
        const newUser = await User.create({
            _id: new mongoose.Types.ObjectId(),
            email,
            name,
            password: hashedPassword
        });

        newUser.save();
        return res.status(201).json({ newUser });
    } catch (error) {
        if (error.code === 11000) {
            return res.json({ status: 'error', error: 'Username already in use' });
        }
        throw error;
    }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log('login');
};

export { validateToken, register, login };
