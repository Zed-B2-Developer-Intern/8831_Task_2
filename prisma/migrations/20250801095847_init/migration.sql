/*
  Warnings:

  - Added the required column `message` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feedback` ADD COLUMN `message` VARCHAR(191) NOT NULL;
