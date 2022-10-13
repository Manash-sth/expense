/*
  Warnings:

  - Added the required column `lastUpdate` to the `Expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastUpdate` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "lastUpdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "recorded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "lastUpdate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "recorded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
