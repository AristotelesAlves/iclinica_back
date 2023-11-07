/*
  Warnings:

  - Added the required column `consulta_id` to the `Agendamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medico_id` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "consulta_id" INTEGER NOT NULL,
ADD COLUMN     "medico_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
