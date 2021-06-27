import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSchema } from '../schema/user.schema';
import { createUser } from '../service/user.service';

const router = express.Router();

router.post('/signup', validateRequest(createUserSchema), createUser);

export default router;
