
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.EstabelecimentoScalarFieldEnum = {
  id: 'id',
  razao_social: 'razao_social',
  nome_fantasia: 'nome_fantasia',
  endereco: 'endereco',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  uf: 'uf',
  cidade: 'cidade',
  cep: 'cep',
  cnpj: 'cnpj',
  inscricao_estadual: 'inscricao_estadual',
  telefone: 'telefone',
  email: 'email',
  nome_responsavel: 'nome_responsavel',
  telefone_responsavel: 'telefone_responsavel',
  email_responsavel: 'email_responsavel',
  usuarios_de_acesso: 'usuarios_de_acesso',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  is_active: 'is_active'
};

exports.Prisma.LicencaScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  data_vencimento: 'data_vencimento',
  is_active: 'is_active'
};

exports.Prisma.PacienteScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  cpf: 'cpf',
  data_nascimento: 'data_nascimento',
  endereco: 'endereco',
  numero: 'numero',
  bairro: 'bairro',
  complemento: 'complemento',
  cep: 'cep',
  telefone: 'telefone',
  email: 'email',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  consulta_id: 'consulta_id'
};

exports.Prisma.AnamneseScalarFieldEnum = {
  id: 'id',
  infeccao_urinaria: 'infeccao_urinaria',
  dst: 'dst',
  pedra_nos_rins: 'pedra_nos_rins',
  problema_nos_testiculos: 'problema_nos_testiculos',
  historico_de_cancer_na_familia: 'historico_de_cancer_na_familia',
  doenca_cronica: 'doenca_cronica',
  utiliza_remedios: 'utiliza_remedios',
  fumante: 'fumante',
  bebidas_alcoolicas: 'bebidas_alcoolicas',
  droga: 'droga',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  paciente_id: 'paciente_id'
};

exports.Prisma.AgendamentoScalarFieldEnum = {
  id: 'id',
  observacao: 'observacao',
  status: 'status',
  data_de_agendado: 'data_de_agendado',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.ConsultaScalarFieldEnum = {
  id: 'id',
  diagnostico: 'diagnostico',
  prescricao: 'prescricao',
  convenio: 'convenio',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  nome: 'nome',
  senha: 'senha',
  ocupacao: 'ocupacao',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  Consulta_id: 'Consulta_id'
};

exports.Prisma.Controle_acessoScalarFieldEnum = {
  id: 'id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  is_active: 'is_active',
  usuario_id: 'usuario_id'
};

exports.Prisma.Controle_pacienteScalarFieldEnum = {
  id: 'id',
  read_paciente: 'read_paciente',
  create_paciente: 'create_paciente',
  update_paciente: 'update_paciente',
  delete_paciente: 'delete_paciente',
  controle_id: 'controle_id'
};

exports.Prisma.Controle_anamneseScalarFieldEnum = {
  id: 'id',
  create_anamnese: 'create_anamnese',
  update_anamnese: 'update_anamnese',
  read_anamnese: 'read_anamnese',
  delete_anamnese: 'delete_anamnese',
  controle_id: 'controle_id'
};

exports.Prisma.Controle_agendamentoScalarFieldEnum = {
  id: 'id',
  create_agendamento: 'create_agendamento',
  update_agendamento: 'update_agendamento',
  read_agendamento: 'read_agendamento',
  delete_agendamento: 'delete_agendamento',
  control_id: 'control_id'
};

exports.Prisma.Controle_consultaScalarFieldEnum = {
  id: 'id',
  create_consulta: 'create_consulta',
  update_consulta: 'update_consulta',
  read_consulta: 'read_consulta',
  delete_consulta: 'delete_consulta',
  controle_id: 'controle_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Estabelecimento: 'Estabelecimento',
  licenca: 'licenca',
  Paciente: 'Paciente',
  Anamnese: 'Anamnese',
  Agendamento: 'Agendamento',
  Consulta: 'Consulta',
  Usuario: 'Usuario',
  Controle_acesso: 'Controle_acesso',
  Controle_paciente: 'Controle_paciente',
  Controle_anamnese: 'Controle_anamnese',
  Controle_agendamento: 'Controle_agendamento',
  Controle_consulta: 'Controle_consulta'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
