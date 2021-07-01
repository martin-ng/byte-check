import express from 'express';
import validateRequest from '../middleware/validateRequest';

import { authUser } from '../middleware';
import { createTextSchema } from '../schema/text.schema';

import { createTextController } from '../controller/text.controller';

const router = express.Router();

router.post('/', [authUser, validateRequest(createTextSchema)], createTextController);

export default router;
