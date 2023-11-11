-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT,
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

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anamnese" (
    "id" SERIAL NOT NULL,
    "infeccao_urinaria" BOOLEAN,
    "dst" TEXT,
    "pedra_nos_rins" TEXT,
    "problema_nos_testiculos" TEXT,
    "historico_de_cancer_na_familia" TEXT,
    "doenca_cronica" TEXT,
    "utiliza_remedios" TEXT,
    "fumante" TEXT,
    "bebidas_alcoolicas" TEXT,
    "droga" TEXT,
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
    "medico_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

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
    "medico_id" INTEGER NOT NULL,
    "paciente_id" INTEGER NOT NULL,

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

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_paciente" (
    "id" SERIAL NOT NULL,
    "read_paciente" BOOLEAN NOT NULL,
    "create_paciente" BOOLEAN NOT NULL,
    "update_paciente" BOOLEAN NOT NULL,
    "delete_paciente" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,

    CONSTRAINT "Controle_paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_anamnese" (
    "id" SERIAL NOT NULL,
    "create_anamnese" BOOLEAN NOT NULL,
    "update_anamnese" BOOLEAN NOT NULL,
    "read_anamnese" BOOLEAN NOT NULL,
    "delete_anamnese" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,

    CONSTRAINT "Controle_anamnese_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_agendamento" (
    "id" SERIAL NOT NULL,
    "create_agendamento" BOOLEAN NOT NULL,
    "update_agendamento" BOOLEAN NOT NULL,
    "read_agendamento" BOOLEAN NOT NULL,
    "delete_agendamento" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,

    CONSTRAINT "Controle_agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_consulta" (
    "id" SERIAL NOT NULL,
    "create_consulta" BOOLEAN NOT NULL,
    "update_consulta" BOOLEAN NOT NULL,
    "read_consulta" BOOLEAN NOT NULL,
    "delete_consulta" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,

    CONSTRAINT "Controle_consulta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Controle_usuario" (
    "id" SERIAL NOT NULL,
    "create_usuario" BOOLEAN NOT NULL,
    "update_usuario" BOOLEAN NOT NULL,
    "read_usuario" BOOLEAN NOT NULL,
    "delete_usuario" BOOLEAN NOT NULL,
    "usuario_id" INTEGER,

    CONSTRAINT "Controle_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nome_key" ON "Usuario"("nome");

-- AddForeignKey
ALTER TABLE "Anamnese" ADD CONSTRAINT "Anamnese_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_medico_id_fkey" FOREIGN KEY ("medico_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consulta" ADD CONSTRAINT "Consulta_paciente_id_fkey" FOREIGN KEY ("paciente_id") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_paciente" ADD CONSTRAINT "Controle_paciente_id_fkey" FOREIGN KEY ("id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_anamnese" ADD CONSTRAINT "Controle_anamnese_id_fkey" FOREIGN KEY ("id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_agendamento" ADD CONSTRAINT "Controle_agendamento_id_fkey" FOREIGN KEY ("id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_consulta" ADD CONSTRAINT "Controle_consulta_id_fkey" FOREIGN KEY ("id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Controle_usuario" ADD CONSTRAINT "Controle_usuario_id_fkey" FOREIGN KEY ("id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
