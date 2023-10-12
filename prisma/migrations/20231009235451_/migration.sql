-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER,
    "bairro" TEXT,
    "complemento" TEXT,
    "cep" INTEGER,
    "telefone" TEXT,
    "email" TEXT,
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
