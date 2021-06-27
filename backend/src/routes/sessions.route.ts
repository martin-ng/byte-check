import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSchema } from '../schema/user.schema';
import { createUserSessionController } from '../controller/session.controller';

const router = express.Router();

router.post('/sessions', validateRequest(createUserSchema), createUserSessionController);

export default router;
