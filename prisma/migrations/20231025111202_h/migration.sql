/*
  Warnings:

  - The `image` column on the `FormValues` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FormValues" DROP COLUMN "image",
ADD COLUMN     "image" JSONB;
