/*
  Warnings:

  - Added the required column `medico_id` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "medico_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
