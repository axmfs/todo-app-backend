import { Body, Controller, Post } from '@nestjs/common';
import { ValidateUserDto } from '../dto/validate-user.dto';
import { AuthService } from './auth.service';

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/validate")
  async validateUser(@Body() data: ValidateUserDto) {
    return await this.authService.validateUser(data);
  }
}