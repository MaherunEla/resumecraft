-- CreateTable
CREATE TABLE "FormValues" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "phnNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "socialsite" JSONB NOT NULL,
    "language" JSONB NOT NULL,
    "experience" JSONB NOT NULL,
    "project" JSONB NOT NULL,
    "education" JSONB NOT NULL,
    "skills" JSONB NOT NULL,

    CONSTRAINT "FormValues_pkey" PRIMARY KEY ("id")
);
