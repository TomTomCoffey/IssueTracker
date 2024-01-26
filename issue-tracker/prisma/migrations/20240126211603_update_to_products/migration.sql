/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `createdAt`,
    DROP COLUMN `description`,
    DROP COLUMN `image`,
    DROP COLUMN `updatedAt`;
