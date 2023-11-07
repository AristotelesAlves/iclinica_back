/*
  Warnings:

  - You are about to drop the column `medico_id` on the `Agendamento` table. All the data in the column will be lost.
  - You are about to drop the column `paciente_id` on the `Anamnese` table. All the data in the column will be lost.
  - You are about to drop the column `usuario_id` on the `Controle_acesso` table. All the data in the column will be lost.
  - You are about to drop the column `control_id` on the `Controle_agendamento` table. All the data in the column will be lost.
  - You are about to drop the column `controle_id` on the `Controle_anamnese` table. All the data in the column will be lost.
  - You are about to drop the column `controle_id` on the `Controle_consulta` table. All the data in the column will be lost.
  - You are about to drop the column `controle_id` on the `Controle_paciente` table. All the data in the column will be lost.
  - You are about to drop the column `controle_id` on the `Controle_usuario` table. All the data in the column will be lost.
  - You are about to drop the column `consulta_id` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `Consulta_id` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Estabelecimento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `licenca` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[consulta_id]` on the table `Agendamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[anamnese_id]` on the table `Paciente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[controle_acesso_id]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `medico_id` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paciente_id` to the `Consulta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `anamnese_id` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `controle_acesso_id` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Agendamento" DROP CONSTRAINT "Agendamento_medico_id_fkey";

-- DropForeignKey
ALTER TABLE "Anamnese" DROP CONSTRAINT "Anamnese_paciente_id_fkey";

-- DropForeignKey
ALTER TABLE "Controle_acesso" DROP CONSTRAINT "Controle_acesso_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "Controle_agendamento" DROP CONSTRAINT "Controle_agendamento_control_id_fkey";

-- DropForeignKey
ALTER TABLE "Controle_anamnese" DROP CONSTRAINT "Controle_anamnese_controle_id_fkey";

-- DropForeignKey
ALTER TABLE "Controle_consulta" DROP CONSTRAINT "Controle_consulta_controle_id_fkey";

-- DropForeignKey
ALTER TABLE "Controle_paciente" DROP CONSTRAINT "Controle_paciente_controle_id_fkey";

-- DropForeignKey
ALTER TABLE "Controle_usuario" DROP CONSTRAINT "Controle_usuario_controle_id_fkey";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "Paciente_consulta_id_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_Consulta_id_fkey";

-- AlterTable
ALTER TABLE "Agendamento" DROP COLUMN "medico_id";

-- AlterTable
ALTER TABLE "Anamnese" DROP COLUMN "paciente_id";

-- AlterTable
ALTER TABLE "Consulta" ADD COLUMN     "medico_id" INTEGER NOT NULL,
ADD COLUMN     "paciente_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Controle_acesso" DROP COLUMN "usuario_id";

-- AlterTable
ALTER TABLE "Controle_agendamento" DROP COLUMN "control_id";

-- AlterTable
ALTER TABLE "Controle_anamnese" DROP COLUMN "controle_id";

-- AlterTable
ALTER TABLE "Controle_consulta" DROP COLUMN "controle_id";

-- AlterTable
ALTER TABLE "Controle_paciente" DROP COLUMN "controle_id";

-- AlterTable
ALTER TABLE "Controle_usuario" DROP COLUMN "controle_id";

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "consulta_id",
ADD COLUMN     "anamnese_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "Consulta_id",
ADD COLUMN     "controle_acesso_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Estabelecimento";

-- DropTable
DROP TABLE "licenca";

-- CreateIndex
CREATE UNIQUE INDEX "Agendamento_consulta_id_key" ON "Agendamento"("consulta_id");

-- CreateIndex
CREATE UNIQUE INDEX "Paciente_anamnese_id_key" ON "Paciente"("anamnese_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_controle_acesso_id_key" ON "Usuario"("controle_acesso_id");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_anamnese_id_fkey" FOREIGN KEY ("anamnese_id") REFERENCES "Anamnese"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_controle_acesso_id_fkey" FOREIGN KEY ("controle_acesso_id") REFERENCES "Controle_acesso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
