-- CreateTable
CREATE TABLE "Estabelecimento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "razao_social" TEXT NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "inscricao_estadual" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome_responsavel" TEXT NOT NULL,
    "telefone_responsavel" TEXT NOT NULL,
    "email_responsavel" TEXT NOT NULL,
    "usuarios_de_acesso" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "licenca" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "data_vencimento" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Paciente" (
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
    "consulta_id" INTEGER NOT NULL,
    CONSTRAINT "Paciente_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Anamnese" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infeccao_urinaria" BOOLEAN NOT NULL,
    "dst" TEXT NOT NULL,
    "pedra_nos_rins" TEXT NOT NULL,
    "problema_nos_testiculos" TEXT NOT NULL,
    "historico_de_cancer_na_familia" TEXT NOT NULL,
    "doenca_cronica" TEXT NOT NULL,
    "utiliza_remedios" TEXT NOT NULL,
    "fumante" TEXT NOT NULL,
    "bebidas_alcoolicas" TEXT NOT NULL,
    "droga" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "paciente_id" INTEGER NOT NULL,
    CONSTRAINT "Anamnese_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "observacao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "data_de_agendado" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "diagnostico" TEXT NOT NULL,
    "prescricao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "Consulta_id" INTEGER NOT NULL,
    CONSTRAINT "Usuario_Consulta_id_fkey" FOREIGN KEY ("Consulta_id") REFERENCES "Consulta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Controle_acesso" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    "deleted_at" DATETIME NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    CONSTRAINT "Controle_acesso_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Controle_paciente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "read_paciente" BOOLEAN NOT NULL,
    "create_paciente" BOOLEAN NOT NULL,
    "update_paciente" BOOLEAN NOT NULL,
    "delete_paciente" BOOLEAN NOT NULL,
    "controle_id" INTEGER NOT NULL,
    CONSTRAINT "Controle_paciente_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Controle_anamnese" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_anamnese" BOOLEAN NOT NULL,
    "update_anamnese" BOOLEAN NOT NULL,
    "read_anamnese" BOOLEAN NOT NULL,
    "delete_anamnese" BOOLEAN NOT NULL,
    "controle_id" INTEGER NOT NULL,
    CONSTRAINT "Controle_anamnese_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Controle_agendamento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_agendamento" BOOLEAN NOT NULL,
    "update_agendamento" BOOLEAN NOT NULL,
    "read_agendamento" BOOLEAN NOT NULL,
    "delete_agendamento" BOOLEAN NOT NULL,
    "control_id" INTEGER NOT NULL,
    CONSTRAINT "Controle_agendamento_control_id_fkey" FOREIGN KEY ("control_id") REFERENCES "Controle_acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Controle_consulta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "create_consulta" BOOLEAN NOT NULL,
    "update_consulta" BOOLEAN NOT NULL,
    "read_consulta" BOOLEAN NOT NULL,
    "delete_consulta" BOOLEAN NOT NULL,
    "controle_id" INTEGER NOT NULL,
    CONSTRAINT "Controle_consulta_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_cnpj_key" ON "Estabelecimento"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_email_key" ON "Estabelecimento"("email");
