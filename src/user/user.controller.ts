import { Controller, Get, Param } from "@nestjs/common";
import { IUser } from "./user.interface";
import { UserService } from "./user.service";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id")
  async getUser(@Param() params: any): Promise<IUser> {
    return this.userService.getUser(params.id);
  }
}