-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Controle_acesso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,
    CONSTRAINT "Controle_acesso_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Controle_acesso" ("created_at", "deleted_at", "id", "is_active", "updated_at", "usuario_id") SELECT "created_at", "deleted_at", "id", "is_active", "updated_at", "usuario_id" FROM "Controle_acesso";
DROP TABLE "Controle_acesso";
ALTER TABLE "new_Controle_acesso" RENAME TO "Controle_acesso";
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
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
CREATE TABLE "new_Controle_agendamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_agendamento" BOOLEAN NOT NULL,
    "update_agendamento" BOOLEAN NOT NULL,
    "read_agendamento" BOOLEAN NOT NULL,
    "delete_agendamento" BOOLEAN NOT NULL,
    "control_id" INTEGER,
    CONSTRAINT "Controle_agendamento_control_id_fkey" FOREIGN KEY ("control_id") REFERENCES "Controle_acesso" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Controle_agendamento" ("control_id", "create_agendamento", "delete_agendamento", "id", "read_agendamento", "update_agendamento") SELECT "control_id", "create_agendamento", "delete_agendamento", "id", "read_agendamento", "update_agendamento" FROM "Controle_agendamento";
DROP TABLE "Controle_agendamento";
ALTER TABLE "new_Controle_agendamento" RENAME TO "Controle_agendamento";
CREATE TABLE "new_Controle_anamnese" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_anamnese" BOOLEAN NOT NULL,
    "update_anamnese" BOOLEAN NOT NULL,
    "read_anamnese" BOOLEAN NOT NULL,
    "delete_anamnese" BOOLEAN NOT NULL,
    "controle_id" INTEGER,
    CONSTRAINT "Controle_anamnese_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Controle_anamnese" ("controle_id", "create_anamnese", "delete_anamnese", "id", "read_anamnese", "update_anamnese") SELECT "controle_id", "create_anamnese", "delete_anamnese", "id", "read_anamnese", "update_anamnese" FROM "Controle_anamnese";
DROP TABLE "Controle_anamnese";
ALTER TABLE "new_Controle_anamnese" RENAME TO "Controle_anamnese";
CREATE TABLE "new_Controle_consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_consulta" BOOLEAN NOT NULL,
    "update_consulta" BOOLEAN NOT NULL,
    "read_consulta" BOOLEAN NOT NULL,
    "delete_consulta" BOOLEAN NOT NULL,
    "controle_id" INTEGER,
    CONSTRAINT "Controle_consulta_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Controle_consulta" ("controle_id", "create_consulta", "delete_consulta", "id", "read_consulta", "update_consulta") SELECT "controle_id", "create_consulta", "delete_consulta", "id", "read_consulta", "update_consulta" FROM "Controle_consulta";
DROP TABLE "Controle_consulta";
ALTER TABLE "new_Controle_consulta" RENAME TO "Controle_consulta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
