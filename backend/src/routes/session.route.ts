import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSessionSchema } from '../schema/user.schema';
import { createUserSessionController, destroyUserSessionController, getUserSessionsController } from '../controller/session.controller';
import { authUser } from '../middleware';

const router = express.Router();

// Login
router.post('/', validateRequest(createUserSessionSchema), createUserSessionController);

// Logout
router.delete('/', authUser, destroyUserSessionController);

router.get('/', authUser, getUserSessionsController);

export default router;
