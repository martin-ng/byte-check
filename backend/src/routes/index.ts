import { Request, Response } from 'express';
import express from 'express';

import userRoute from './user.route';
import sessionsRoute from './session.route';

const router = express.Router();

router.use('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
router.use('/users', userRoute);
router.use('/session', sessionsRoute);

export default router;
