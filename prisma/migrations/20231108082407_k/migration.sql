/*
  Warnings:

  - The `Skills` column on the `Skills` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "Skills",
ADD COLUMN     "Skills" TEXT[];
