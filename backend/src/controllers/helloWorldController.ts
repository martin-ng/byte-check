import { Request, Response, NextFunction } from 'express';

exports.helloWorld = (req: Request, res: Response) => {
    res.send('hello world');
};
