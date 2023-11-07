-- DropForeignKey
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_consulta_id_fkey";

-- DropForeignKey
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_medico_id_fkey";

-- AlterTable
ALTER TABLE "Agendamento" ALTER COLUMN "consulta_id" DROP NOT NULL,
ALTER COLUMN "medico_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
