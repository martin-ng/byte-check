import express from 'express';
const router = express.Router();

import { validateToken, register, login } from '../controllers/userController';

router.get('/validate', validateToken);
router.post('/register', register);
router.post('/login', login);

export default router;
