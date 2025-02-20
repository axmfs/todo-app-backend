import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ValidateUserDto } from '../dto/validate-user.dto';
import * as bcrypt from "bcrypt";
import { UserService } from '../user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(user: ValidateUserDto) {
    const response = await this.userService.getUser(user.email);
    const isPasswordValid = await bcrypt.compare(user.password, response.password);

    if(!isPasswordValid) {
      throw new HttpException("Password is incorrect", HttpStatus.UNAUTHORIZED);
    }

    const token = await this.generateUserToken(response.id);
    return { access_token: token };
  }

  async generateUserToken(userId: string) {
    const payload = { sub: userId };
    return this.jwtService.sign(payload);
  }
}