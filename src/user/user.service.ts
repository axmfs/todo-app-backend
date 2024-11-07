import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { bcrypt } from "bcrypt";
import { IUser } from "./user.interface";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: CreateUserDto) {
    const hash = await bcrypt.hash(user.password, 18);
    user.password = hash;
    return this.userRepository.createUser(user);
  }

  async getUser(id: string): Promise<IUser> {
    return this.userRepository.getUserById(id);
  }
}