/*
  Warnings:

  - You are about to drop the column `reference` on the `Commands` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Commands` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Commands_reference_key";

-- AlterTable
ALTER TABLE "Commands" DROP COLUMN "reference";

-- CreateIndex
CREATE UNIQUE INDEX "Commands_id_key" ON "Commands"("id");
