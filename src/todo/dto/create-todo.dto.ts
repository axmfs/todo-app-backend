export class CreateTodoDto {
  userId: string;
  title: string;
  dueDate?: Date;
  description: string;
};