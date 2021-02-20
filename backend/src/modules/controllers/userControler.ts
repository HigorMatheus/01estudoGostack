import { Request, Response } from 'express';

import CreateUserService from '../../services/CreateUserService';

class UserController {
 private createuser :CreateUserService();

  // constructor() {
  //   const createUser = new CreateUserService();

  //   this.createUser = createUser
  // }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const user = await this.createuser.execute({ password, email, name });

    return response.json(user);
  }
}

export default UserController;
