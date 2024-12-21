import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createTodo(todo: CreateTodoDto) {
    return await this.prismaService.toDo.create({ data: todo });
  }

  async getTodoById(id: string) {
    return await this.prismaService.toDo.findUnique({ where: { id } });
  }

  async deleteTodo(id: string) {
    return await this.prismaService.toDo.delete({ where: { id } });
  }

  async listTodos() {
    return await this.prismaService.toDo.findMany();
  }
}