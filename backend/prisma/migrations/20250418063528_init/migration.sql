/*
  Warnings:

  - You are about to drop the `JournalEntry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "JournalEntry";

-- CreateTable
CREATE TABLE "Chore" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "dueDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chore_pkey" PRIMARY KEY ("id")
);
