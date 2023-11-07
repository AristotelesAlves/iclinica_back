-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_anamnese_id_fkey";

-- AlterTable
ALTER TABLE "Paciente" ALTER COLUMN "anamnese_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_anamnese_id_fkey" FOREIGN KEY ("anamnese_id") REFERENCES "Anamnese"("id") ON DELETE SET NULL ON UPDATE CASCADE;
