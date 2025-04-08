/*
  Warnings:

  - The primary key for the `Commands` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `products` on the `Commands` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Commands" DROP CONSTRAINT "Commands_pkey",
DROP COLUMN "products",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Commands_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Commands_id_seq";

-- CreateTable
CREATE TABLE "CommandsDetails" (
    "id" TEXT NOT NULL,
    "commandId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CommandsDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommandsDetails" ADD CONSTRAINT "CommandsDetails_commandId_fkey" FOREIGN KEY ("commandId") REFERENCES "Commands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommandsDetails" ADD CONSTRAINT "CommandsDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
