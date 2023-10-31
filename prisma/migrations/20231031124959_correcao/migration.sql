/*
  Warnings:

  - You are about to drop the column `bairro` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `cep` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `complemento` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Paciente` table. All the data in the column will be lost.
  - Made the column `consulta_id` on table `Paciente` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "data_nascimento" TEXT,
    "telefone" TEXT NOT NULL,
    "email" TEXT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "consulta_id" INTEGER NOT NULL,
    CONSTRAINT "Paciente_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Paciente" ("consulta_id", "cpf", "created_at", "data_nascimento", "deleted_at", "email", "id", "is_active", "nome", "telefone", "updated_at") SELECT "consulta_id", "cpf", "created_at", "data_nascimento", "deleted_at", "email", "id", "is_active", "nome", "telefone", "updated_at" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
