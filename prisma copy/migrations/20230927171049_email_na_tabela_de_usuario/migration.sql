/*
  Warnings:

  - Added the required column `email` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Controle_usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_usuario" BOOLEAN NOT NULL,
    "update_usuario" BOOLEAN NOT NULL,
    "read_usuario" BOOLEAN NOT NULL,
    "delete_usuario" BOOLEAN NOT NULL,
    "controle_id" INTEGER NOT NULL,
    CONSTRAINT "Controle_usuario_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "consulta_id" INTEGER,
    CONSTRAINT "Paciente_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Paciente" ("bairro", "cep", "complemento", "consulta_id", "cpf", "created_at", "data_nascimento", "deleted_at", "email", "endereco", "id", "is_active", "nome", "numero", "telefone", "updated_at") SELECT "bairro", "cep", "complemento", "consulta_id", "cpf", "created_at", "data_nascimento", "deleted_at", "email", "endereco", "id", "is_active", "nome", "numero", "telefone", "updated_at" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "Consulta_id" INTEGER,
    CONSTRAINT "Usuario_Consulta_id_fkey" FOREIGN KEY ("Consulta_id") REFERENCES "Consulta" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("Consulta_id", "created_at", "deleted_at", "id", "is_active", "nome", "ocupacao", "senha", "updated_at") SELECT "Consulta_id", "created_at", "deleted_at", "id", "is_active", "nome", "ocupacao", "senha", "updated_at" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
