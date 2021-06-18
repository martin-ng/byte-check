import express from 'express';
const router = express.Router();

const helloWorldController = require('../controllers/helloWorldController');

router.get('/', helloWorldController.helloWorld);

export default router;
