/*
  Warnings:

  - Made the column `anamnese_id` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_anamnese_id_fkey";

-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "anamnese_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_anamnese_id_fkey" FOREIGN KEY ("anamnese_id") REFERENCES "Anamnese"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
