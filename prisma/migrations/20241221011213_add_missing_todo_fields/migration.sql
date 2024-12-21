-- AlterTable
ALTER TABLE "ToDo" ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "emoji" TEXT,
ADD COLUMN     "notifyBeforeDueDate" TEXT;
