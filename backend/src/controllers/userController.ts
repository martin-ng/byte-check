import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import mongoose from 'mongoose';
import User from '../models/user';
import signJWT from '../helper/signJWT';
import bcryptjs from 'bcryptjs';

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
    bcryptjs.hash(password, 10, async (hashError, hashedPassword) => {
        if (hashError) {
            return res.status(401).json({
                message: hashError.message,
                error: hashError
            });
        }
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
    });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    let { email, password } = req.body;

    try {
        const users = await User.find({ email }).exec();

        if (users.length !== 1) {
            return res.status(401).json({ message: 'Unauthorized access' });
        }

        bcryptjs.compare(password, users[0].password, (error, result) => {
            if (error) {
                return res.status(401).json({
                    message: 'Password do not match'
                });
            } else if (result) {
                signJWT(users[0], (_error, token) => {
                    if (_error) {
                        return res.status(500).json({
                            message: _error.message,
                            error: _error
                        });
                    } else if (token) {
                        return res.status(200).json({
                            message: 'Auth was a success',
                            token: token,
                            user: users[0]
                        });
                    }
                });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

export { validateToken, register, login };
