-- CreateTable
CREATE TABLE "Skillsetname" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skillsetname_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT[],
    "skillId" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skillsetname"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
