import User from '../modules/models/User';
import UserReposirory from '../modules/repositories/userRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  // constructor() {
  //   const userReposirory = new UserReposirory();
  // }

  private userReposirory = new UserReposirory();

  async execute({ name, email, password }: IRequest): Promise<User> {
    const userdata = await this.userReposirory.create({
      name,
      email,
      password,
    });

    return userdata;
  }
}
export default CreateUserService;
