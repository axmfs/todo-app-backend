import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UserModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
