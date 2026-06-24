import {Router} from 'express';
import * as authController from '../controller/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', authController.signup);
authRouter.post('/login', authController.login);
authRouter.get('/me', authController.getme);

export default authRouter;