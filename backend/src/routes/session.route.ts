import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSessionSchema } from '../schema/user.schema';
import { createUserSessionController } from '../controller/session.controller';

const router = express.Router();

router.post('/', validateRequest(createUserSessionSchema), createUserSessionController);

export default router;
