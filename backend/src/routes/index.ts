import { Request, Router, Response } from 'express';
import usersRoutes from '../modules/routes/users.Routes';

const Routes = Router();

Routes.use('/users', usersRoutes);

Routes.get('/users', (request: Request, response: Response) => {
  return response.json('rotas funcionando');
});

export default Routes;
