/*
  Warnings:

  - You are about to drop the column `skillId` on the `Skill` table. All the data in the column will be lost.
  - Added the required column `SkillSetNameId` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_skillId_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "skillId",
ADD COLUMN     "SkillSetNameId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_SkillSetNameId_fkey" FOREIGN KEY ("SkillSetNameId") REFERENCES "Skillsetname"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
