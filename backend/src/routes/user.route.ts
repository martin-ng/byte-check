import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSchema } from '../schema/user.schema';
import { createUserController } from '../controller/user.controller';

const router = express.Router();

router.post('/', validateRequest(createUserSchema), createUserController);

export default router;
