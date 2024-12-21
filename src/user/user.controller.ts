import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async listUsers() {
    return await this.userService.listUsers();
  }

  @Get(":id")
  async getUser(@Param() params: any) {
    return await this.userService.getUser(params.id);
  }

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.createUser(data);
  }

  @Delete(":id")
  async deleteUser(@Param() params: any) {
    return await this.userService.deleteUser(params.id);
  }
}