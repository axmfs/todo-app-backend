import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth.guard';
import { AuthController } from './auth.controller';
import { UserModule } from '../user.module';
import { UserService } from '../user.service';
import { AuthJwtStrategy } from './auth.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: "60m",
      },
    }),
    UserModule,
  ],
  providers: [AuthService, AuthJwtStrategy, JwtAuthGuard],
  controllers: [AuthController],
  exports: [PassportModule],
})
export class AuthModule {}