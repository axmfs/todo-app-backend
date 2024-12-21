export class CreateTodoDto {
  userId: string;
  emoji?: string;
  notifyBeforeDueDate?: string;
  dueDate?: Date;
  description: string;
};