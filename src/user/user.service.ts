import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { UserRepository } from "./user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { isEmail } from '../helpers/isEmail';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: CreateUserDto) {
    user.password = await bcrypt.hash(user.password, 18);
    return await this.userRepository.createUser(user);
  }

  async getUser(id: string) {
    let user: any;

    if(isEmail(id)) {
      user = await this.userRepository.getUserByEmail(id);
    }
    else {
      user = await this.userRepository.getUserById(id);
    }

    if(!user) {
      throw new HttpException("No user found with that id", HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async deleteUser(id: string) {
    const user = await this.userRepository.getUserById(id);
    if(!user) {
      throw new HttpException("No user found with that id", HttpStatus.NOT_FOUND);
    }

    await this.userRepository.deleteUser(id);
    
    const checkUser = await this.userRepository.getUserById(id);
    if(checkUser) {
      throw new HttpException(`Failed to delete user with id ${id}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return {
      message: `User with id ${id} deleted successfully`
    };
  }

  async listUsers() {
    return await this.userRepository.listUsers();
  }
}