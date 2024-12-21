import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: CreateUserDto) {
    return await this.prismaService.user.create({ data: user });
  }

  async getUserById(id: string) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async deleteUser(id: string) {
    return await this.prismaService.user.delete({ where: { id } });
  }

  async listUsers() {
    return await this.prismaService.user.findMany();
  }
}