import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { PrismaService } from "src/services/prisma.service";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [PrismaService, UserRepository, UserService],
  exports: [UserRepository, UserService],
})
export class UserModule {}