import express from 'express';
import validateRequest from '../middleware/validateRequest';

import { authUser } from '../middleware';

const router = express.Router();

export default router;
