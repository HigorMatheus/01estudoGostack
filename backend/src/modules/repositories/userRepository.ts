interface IUser {
  name: string;
  email: string;
  password: string;
}

class UserReposirory {
  private users: IUser[];

  constructor() {
    this.users = [];
  }

  public async create({ name, email, password }: IUser): Promise<IUser> {
    const user = {
      name,
      email,
      password,
    };
    this.users.push(user);

    return user;
  }
}

export default UserReposirory;
