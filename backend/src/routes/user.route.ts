import express from 'express';
import validateRequest from '../middleware/validateRequest';
import { createUserSchema } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import { createUserController } from '../controller/user.controller';

const router = express.Router();

router.post('/', validateRequest(createUserSchema), createUserController);
// router.get('/', (req: Request, res: Response) => {
//     res.send('hello world');
// });

export default router;
