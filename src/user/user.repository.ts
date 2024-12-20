import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: CreateUserDto) {
    return this.prismaService.user.create({ data: user });
  }

  async getUserById(id: string) {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  async deleteUser(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }

  async listUsers() {
    return this.prismaService.user.findMany();
  }
}