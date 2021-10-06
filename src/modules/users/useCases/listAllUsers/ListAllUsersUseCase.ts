import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userToCheck = this.usersRepository.findById(user_id);

    if (!userToCheck) {
      throw new Error("User doesn't exist!");
    }

    if (userToCheck.admin === false) {
      throw new Error("User is not an admin!");
    }

    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
