/*
  Warnings:

  - A unique constraint covering the columns `[stripeSession]` on the table `Commands` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `stripeSession` to the `Commands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Commands" ADD COLUMN     "stripeSession" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Commands_stripeSession_key" ON "Commands"("stripeSession");
