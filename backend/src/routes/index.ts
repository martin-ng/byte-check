import express from 'express';

const router = express.Router();

import helloWorldRoute from './helloWorldRoute';

router.use('/', helloWorldRoute);

export default router;
