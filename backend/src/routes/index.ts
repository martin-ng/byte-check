import express from 'express';
const router = express.Router();

import helloWorldRoute from './helloWorldRoute';
import userRoute from './userRoute';

router.use('/', helloWorldRoute);
router.use('/user', userRoute);

export default router;
