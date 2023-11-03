-- CreateTable
CREATE TABLE "Estabelecimento" (
    "id" TEXT NOT NULL,
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
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "Estabelecimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "licenca" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "data_vencimento" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,

    CONSTRAINT "licenca_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" INTEGER,
    "data_nascimento" TEXT,
    "endereco" TEXT,
    "numero" INTEGER,
    "bairro" TEXT,
    "complemento" TEXT,
    "cep" INTEGER,
    "telefone" TEXT NOT NULL,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "consulta_id" INTEGER,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anamnese" (
    "id" SERIAL NOT NULL,
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
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "paciente_id" INTEGER NOT NULL,

    CONSTRAINT "Anamnese_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" SERIAL NOT NULL,
    "observacao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "data_de_agendado" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "diagnostico" TEXT NOT NULL,
    "prescricao" TEXT NOT NULL,
    "convenio" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "ocupacao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "Consulta_id" INTEGER,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_acesso" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,

    CONSTRAINT "Controle_acesso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_paciente" (
    "id" SERIAL NOT NULL,
    "read_paciente" BOOLEAN NOT NULL,
    "create_paciente" BOOLEAN NOT NULL,
    "update_paciente" BOOLEAN NOT NULL,
    "delete_paciente" BOOLEAN NOT NULL,
    "controle_id" INTEGER NOT NULL,

    CONSTRAINT "Controle_paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_anamnese" (
    "id" SERIAL NOT NULL,
    "create_anamnese" BOOLEAN NOT NULL,
    "update_anamnese" BOOLEAN NOT NULL,
    "read_anamnese" BOOLEAN NOT NULL,
    "delete_anamnese" BOOLEAN NOT NULL,
    "controle_id" INTEGER,

    CONSTRAINT "Controle_anamnese_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_agendamento" (
    "id" SERIAL NOT NULL,
    "create_agendamento" BOOLEAN NOT NULL,
    "update_agendamento" BOOLEAN NOT NULL,
    "read_agendamento" BOOLEAN NOT NULL,
    "delete_agendamento" BOOLEAN NOT NULL,
    "control_id" INTEGER,

    CONSTRAINT "Controle_agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_consulta" (
    "id" SERIAL NOT NULL,
    "create_consulta" BOOLEAN NOT NULL,
    "update_consulta" BOOLEAN NOT NULL,
    "read_consulta" BOOLEAN NOT NULL,
    "delete_consulta" BOOLEAN NOT NULL,
    "controle_id" INTEGER,

    CONSTRAINT "Controle_consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_usuario" (
    "id" SERIAL NOT NULL,
    "create_usuario" BOOLEAN NOT NULL,
    "update_usuario" BOOLEAN NOT NULL,
    "read_usuario" BOOLEAN NOT NULL,
    "delete_usuario" BOOLEAN NOT NULL,
    "controle_id" INTEGER NOT NULL,

    CONSTRAINT "Controle_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_cnpj_key" ON "Estabelecimento"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Estabelecimento_email_key" ON "Estabelecimento"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nome_key" ON "Usuario"("nome");

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "Paciente_consulta_id_fkey" FOREIGN KEY ("consulta_id") REFERENCES "Consulta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Anamnese" ADD CONSTRAINT "Anamnese_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_Consulta_id_fkey" FOREIGN KEY ("Consulta_id") REFERENCES "Consulta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_acesso" ADD CONSTRAINT "Controle_acesso_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_paciente" ADD CONSTRAINT "Controle_paciente_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_anamnese" ADD CONSTRAINT "Controle_anamnese_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_agendamento" ADD CONSTRAINT "Controle_agendamento_control_id_fkey" FOREIGN KEY ("control_id") REFERENCES "Controle_acesso"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_consulta" ADD CONSTRAINT "Controle_consulta_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_usuario" ADD CONSTRAINT "Controle_usuario_controle_id_fkey" FOREIGN KEY ("controle_id") REFERENCES "Controle_acesso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
