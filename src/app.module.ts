import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './user/auth/auth.module';

@Module({
  imports: [AuthModule, UserModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
