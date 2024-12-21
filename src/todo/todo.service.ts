import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { TodoRepository } from "./todo.repository";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo(todo: CreateTodoDto) {
    return await this.todoRepository.createTodo(todo);
  }

  async getTodo(id: string) {
    const todo = await this.todoRepository.getTodoById(id);

    if(!todo) {
      throw new HttpException("No todo found with that id", HttpStatus.NOT_FOUND);
    }

    return todo;
  }

  async deleteTodo(id: string) {
    const todo = await this.todoRepository.getTodoById(id);
    if(!todo) {
      throw new HttpException("No todo found with that id", HttpStatus.NOT_FOUND);
    }

    await this.todoRepository.deleteTodo(id);
    
    const checkTodo = await this.todoRepository.getTodoById(id);
    if(checkTodo) {
      throw new HttpException(`Failed to delete todo with id ${id}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    return {
      message: `Todo with id ${id} successfully deleted`
    };
  }

  async listTodos() {
    return await this.todoRepository.listTodos();
  }
}