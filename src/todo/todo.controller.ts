import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("/todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async listTodos() {
    return await this.todoService.listTodos();
  }

  @Get(":id")
  async getTodo(@Param() params: any) {
    return await this.todoService.getTodo(params.id);
  }

  @Post()
  async createTodo(@Body() todo: CreateTodoDto) {
    return await this.todoService.createTodo(todo);
  }

  @Delete(":id")
  async deleteTodo(@Param() params: any) {
    return await this.todoService.deleteTodo(params.id);
  }
}