import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { PrismaService } from "src/services/prisma.service";
import { TodoRepository } from "./todo.repository";
import { TodoService } from "./todo.service";

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [PrismaService, TodoRepository, TodoService]
})
export class TodoModule {}