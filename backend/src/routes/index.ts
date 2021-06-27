import { Request, Response } from 'express';
import express from 'express';

import userRoute from './user.route';

const router = express.Router();

router.use('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
router.use('/users', userRoute);

export default router;
