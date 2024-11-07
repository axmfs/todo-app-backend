import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { IUser } from "./user.interface";

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: CreateUserDto): Promise<IUser> {
    return this.prismaService.user.create({ data: user });
  }

  async getUserById(id: string): Promise<IUser> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async deleteUser(id: string): Promise<void> {
    return this.prismaService.user.delete({ where: { id } });
  }
}