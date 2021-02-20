import { Router } from 'express';
import UserController from '../controllers/userControler';

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post('/', userController.create);

export default usersRoutes;
