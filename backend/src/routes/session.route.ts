import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSessionSchema } from '../schema/user.schema';
import { createUserSessionController } from '../controller/session.controller';

const router = express.Router();

// Login
router.post('/', validateRequest(createUserSessionSchema), createUserSessionController);

// Logout
router.delete('/');

export default router;
