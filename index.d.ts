
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Estabelecimento
 * 
 */
export type Estabelecimento = $Result.DefaultSelection<Prisma.$EstabelecimentoPayload>
/**
 * Model licenca
 * 
 */
export type licenca = $Result.DefaultSelection<Prisma.$licencaPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Anamnese
 * 
 */
export type Anamnese = $Result.DefaultSelection<Prisma.$AnamnesePayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Controle_acesso
 * 
 */
export type Controle_acesso = $Result.DefaultSelection<Prisma.$Controle_acessoPayload>
/**
 * Model Controle_paciente
 * 
 */
export type Controle_paciente = $Result.DefaultSelection<Prisma.$Controle_pacientePayload>
/**
 * Model Controle_anamnese
 * 
 */
export type Controle_anamnese = $Result.DefaultSelection<Prisma.$Controle_anamnesePayload>
/**
 * Model Controle_agendamento
 * 
 */
export type Controle_agendamento = $Result.DefaultSelection<Prisma.$Controle_agendamentoPayload>
/**
 * Model Controle_consulta
 * 
 */
export type Controle_consulta = $Result.DefaultSelection<Prisma.$Controle_consultaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estabelecimentos
 * const estabelecimentos = await prisma.estabelecimento.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Estabelecimentos
   * const estabelecimentos = await prisma.estabelecimento.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.estabelecimento`: Exposes CRUD operations for the **Estabelecimento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estabelecimentos
    * const estabelecimentos = await prisma.estabelecimento.findMany()
    * ```
    */
  get estabelecimento(): Prisma.EstabelecimentoDelegate<ExtArgs>;

  /**
   * `prisma.licenca`: Exposes CRUD operations for the **licenca** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licencas
    * const licencas = await prisma.licenca.findMany()
    * ```
    */
  get licenca(): Prisma.licencaDelegate<ExtArgs>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs>;

  /**
   * `prisma.anamnese`: Exposes CRUD operations for the **Anamnese** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anamnese
    * const anamnese = await prisma.anamnese.findMany()
    * ```
    */
  get anamnese(): Prisma.AnamneseDelegate<ExtArgs>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.controle_acesso`: Exposes CRUD operations for the **Controle_acesso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controle_acessos
    * const controle_acessos = await prisma.controle_acesso.findMany()
    * ```
    */
  get controle_acesso(): Prisma.Controle_acessoDelegate<ExtArgs>;

  /**
   * `prisma.controle_paciente`: Exposes CRUD operations for the **Controle_paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controle_pacientes
    * const controle_pacientes = await prisma.controle_paciente.findMany()
    * ```
    */
  get controle_paciente(): Prisma.Controle_pacienteDelegate<ExtArgs>;

  /**
   * `prisma.controle_anamnese`: Exposes CRUD operations for the **Controle_anamnese** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controle_anamnese
    * const controle_anamnese = await prisma.controle_anamnese.findMany()
    * ```
    */
  get controle_anamnese(): Prisma.Controle_anamneseDelegate<ExtArgs>;

  /**
   * `prisma.controle_agendamento`: Exposes CRUD operations for the **Controle_agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controle_agendamentos
    * const controle_agendamentos = await prisma.controle_agendamento.findMany()
    * ```
    */
  get controle_agendamento(): Prisma.Controle_agendamentoDelegate<ExtArgs>;

  /**
   * `prisma.controle_consulta`: Exposes CRUD operations for the **Controle_consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Controle_consultas
    * const controle_consultas = await prisma.controle_consulta.findMany()
    * ```
    */
  get controle_consulta(): Prisma.Controle_consultaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'estabelecimento' | 'licenca' | 'paciente' | 'anamnese' | 'agendamento' | 'consulta' | 'usuario' | 'controle_acesso' | 'controle_paciente' | 'controle_anamnese' | 'controle_agendamento' | 'controle_consulta'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Estabelecimento: {
        payload: Prisma.$EstabelecimentoPayload<ExtArgs>
        fields: Prisma.EstabelecimentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstabelecimentoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          findFirst: {
            args: Prisma.EstabelecimentoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstabelecimentoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          findMany: {
            args: Prisma.EstabelecimentoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>[]
          }
          create: {
            args: Prisma.EstabelecimentoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          delete: {
            args: Prisma.EstabelecimentoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          update: {
            args: Prisma.EstabelecimentoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          deleteMany: {
            args: Prisma.EstabelecimentoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EstabelecimentoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EstabelecimentoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstabelecimentoPayload>
          }
          aggregate: {
            args: Prisma.EstabelecimentoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEstabelecimento>
          }
          groupBy: {
            args: Prisma.EstabelecimentoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EstabelecimentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstabelecimentoCountArgs<ExtArgs>,
            result: $Utils.Optional<EstabelecimentoCountAggregateOutputType> | number
          }
        }
      }
      licenca: {
        payload: Prisma.$licencaPayload<ExtArgs>
        fields: Prisma.licencaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.licencaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.licencaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>
          }
          findFirst: {
            args: Prisma.licencaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.licencaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>
          }
          findMany: {
            args: Prisma.licencaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>[]
          }
          create: {
            args: Prisma.licencaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>
          }
          delete: {
            args: Prisma.licencaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>
          }
          update: {
            args: Prisma.licencaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>
          }
          deleteMany: {
            args: Prisma.licencaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.licencaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.licencaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$licencaPayload>
          }
          aggregate: {
            args: Prisma.LicencaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLicenca>
          }
          groupBy: {
            args: Prisma.licencaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LicencaGroupByOutputType>[]
          }
          count: {
            args: Prisma.licencaCountArgs<ExtArgs>,
            result: $Utils.Optional<LicencaCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>,
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Anamnese: {
        payload: Prisma.$AnamnesePayload<ExtArgs>
        fields: Prisma.AnamneseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnamneseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnamneseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>
          }
          findFirst: {
            args: Prisma.AnamneseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnamneseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>
          }
          findMany: {
            args: Prisma.AnamneseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>[]
          }
          create: {
            args: Prisma.AnamneseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>
          }
          delete: {
            args: Prisma.AnamneseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>
          }
          update: {
            args: Prisma.AnamneseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>
          }
          deleteMany: {
            args: Prisma.AnamneseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AnamneseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AnamneseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AnamnesePayload>
          }
          aggregate: {
            args: Prisma.AnamneseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAnamnese>
          }
          groupBy: {
            args: Prisma.AnamneseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AnamneseGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnamneseCountArgs<ExtArgs>,
            result: $Utils.Optional<AnamneseCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>,
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>,
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Controle_acesso: {
        payload: Prisma.$Controle_acessoPayload<ExtArgs>
        fields: Prisma.Controle_acessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Controle_acessoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Controle_acessoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>
          }
          findFirst: {
            args: Prisma.Controle_acessoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Controle_acessoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>
          }
          findMany: {
            args: Prisma.Controle_acessoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>[]
          }
          create: {
            args: Prisma.Controle_acessoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>
          }
          delete: {
            args: Prisma.Controle_acessoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>
          }
          update: {
            args: Prisma.Controle_acessoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>
          }
          deleteMany: {
            args: Prisma.Controle_acessoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Controle_acessoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Controle_acessoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_acessoPayload>
          }
          aggregate: {
            args: Prisma.Controle_acessoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateControle_acesso>
          }
          groupBy: {
            args: Prisma.Controle_acessoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Controle_acessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Controle_acessoCountArgs<ExtArgs>,
            result: $Utils.Optional<Controle_acessoCountAggregateOutputType> | number
          }
        }
      }
      Controle_paciente: {
        payload: Prisma.$Controle_pacientePayload<ExtArgs>
        fields: Prisma.Controle_pacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Controle_pacienteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Controle_pacienteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>
          }
          findFirst: {
            args: Prisma.Controle_pacienteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Controle_pacienteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>
          }
          findMany: {
            args: Prisma.Controle_pacienteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>[]
          }
          create: {
            args: Prisma.Controle_pacienteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>
          }
          delete: {
            args: Prisma.Controle_pacienteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>
          }
          update: {
            args: Prisma.Controle_pacienteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>
          }
          deleteMany: {
            args: Prisma.Controle_pacienteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Controle_pacienteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Controle_pacienteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_pacientePayload>
          }
          aggregate: {
            args: Prisma.Controle_pacienteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateControle_paciente>
          }
          groupBy: {
            args: Prisma.Controle_pacienteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Controle_pacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.Controle_pacienteCountArgs<ExtArgs>,
            result: $Utils.Optional<Controle_pacienteCountAggregateOutputType> | number
          }
        }
      }
      Controle_anamnese: {
        payload: Prisma.$Controle_anamnesePayload<ExtArgs>
        fields: Prisma.Controle_anamneseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Controle_anamneseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Controle_anamneseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>
          }
          findFirst: {
            args: Prisma.Controle_anamneseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Controle_anamneseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>
          }
          findMany: {
            args: Prisma.Controle_anamneseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>[]
          }
          create: {
            args: Prisma.Controle_anamneseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>
          }
          delete: {
            args: Prisma.Controle_anamneseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>
          }
          update: {
            args: Prisma.Controle_anamneseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>
          }
          deleteMany: {
            args: Prisma.Controle_anamneseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Controle_anamneseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Controle_anamneseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_anamnesePayload>
          }
          aggregate: {
            args: Prisma.Controle_anamneseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateControle_anamnese>
          }
          groupBy: {
            args: Prisma.Controle_anamneseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Controle_anamneseGroupByOutputType>[]
          }
          count: {
            args: Prisma.Controle_anamneseCountArgs<ExtArgs>,
            result: $Utils.Optional<Controle_anamneseCountAggregateOutputType> | number
          }
        }
      }
      Controle_agendamento: {
        payload: Prisma.$Controle_agendamentoPayload<ExtArgs>
        fields: Prisma.Controle_agendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Controle_agendamentoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Controle_agendamentoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>
          }
          findFirst: {
            args: Prisma.Controle_agendamentoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Controle_agendamentoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>
          }
          findMany: {
            args: Prisma.Controle_agendamentoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>[]
          }
          create: {
            args: Prisma.Controle_agendamentoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>
          }
          delete: {
            args: Prisma.Controle_agendamentoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>
          }
          update: {
            args: Prisma.Controle_agendamentoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>
          }
          deleteMany: {
            args: Prisma.Controle_agendamentoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Controle_agendamentoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Controle_agendamentoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_agendamentoPayload>
          }
          aggregate: {
            args: Prisma.Controle_agendamentoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateControle_agendamento>
          }
          groupBy: {
            args: Prisma.Controle_agendamentoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Controle_agendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.Controle_agendamentoCountArgs<ExtArgs>,
            result: $Utils.Optional<Controle_agendamentoCountAggregateOutputType> | number
          }
        }
      }
      Controle_consulta: {
        payload: Prisma.$Controle_consultaPayload<ExtArgs>
        fields: Prisma.Controle_consultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Controle_consultaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Controle_consultaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>
          }
          findFirst: {
            args: Prisma.Controle_consultaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Controle_consultaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>
          }
          findMany: {
            args: Prisma.Controle_consultaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>[]
          }
          create: {
            args: Prisma.Controle_consultaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>
          }
          delete: {
            args: Prisma.Controle_consultaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>
          }
          update: {
            args: Prisma.Controle_consultaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>
          }
          deleteMany: {
            args: Prisma.Controle_consultaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.Controle_consultaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.Controle_consultaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$Controle_consultaPayload>
          }
          aggregate: {
            args: Prisma.Controle_consultaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateControle_consulta>
          }
          groupBy: {
            args: Prisma.Controle_consultaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Controle_consultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Controle_consultaCountArgs<ExtArgs>,
            result: $Utils.Optional<Controle_consultaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    anamnese: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    anamnese?: boolean | PacienteCountOutputTypeCountAnamneseArgs
  }

  // Custom InputTypes

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountAnamneseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnamneseWhereInput
  }



  /**
   * Count Type ConsultaCountOutputType
   */

  export type ConsultaCountOutputType = {
    usuario: number
    paciente: number
  }

  export type ConsultaCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuario?: boolean | ConsultaCountOutputTypeCountUsuarioArgs
    paciente?: boolean | ConsultaCountOutputTypeCountPacienteArgs
  }

  // Custom InputTypes

  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultaCountOutputType
     */
    select?: ConsultaCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * ConsultaCountOutputType without action
   */
  export type ConsultaCountOutputTypeCountPacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
  }



  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    controle: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    controle?: boolean | UsuarioCountOutputTypeCountControleArgs
  }

  // Custom InputTypes

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountControleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_acessoWhereInput
  }



  /**
   * Count Type Controle_acessoCountOutputType
   */

  export type Controle_acessoCountOutputType = {
    paciente: number
    anamnese: number
    agendamento: number
    consulta: number
  }

  export type Controle_acessoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    paciente?: boolean | Controle_acessoCountOutputTypeCountPacienteArgs
    anamnese?: boolean | Controle_acessoCountOutputTypeCountAnamneseArgs
    agendamento?: boolean | Controle_acessoCountOutputTypeCountAgendamentoArgs
    consulta?: boolean | Controle_acessoCountOutputTypeCountConsultaArgs
  }

  // Custom InputTypes

  /**
   * Controle_acessoCountOutputType without action
   */
  export type Controle_acessoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acessoCountOutputType
     */
    select?: Controle_acessoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * Controle_acessoCountOutputType without action
   */
  export type Controle_acessoCountOutputTypeCountPacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_pacienteWhereInput
  }


  /**
   * Controle_acessoCountOutputType without action
   */
  export type Controle_acessoCountOutputTypeCountAnamneseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_anamneseWhereInput
  }


  /**
   * Controle_acessoCountOutputType without action
   */
  export type Controle_acessoCountOutputTypeCountAgendamentoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_agendamentoWhereInput
  }


  /**
   * Controle_acessoCountOutputType without action
   */
  export type Controle_acessoCountOutputTypeCountConsultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_consultaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Estabelecimento
   */

  export type AggregateEstabelecimento = {
    _count: EstabelecimentoCountAggregateOutputType | null
    _avg: EstabelecimentoAvgAggregateOutputType | null
    _sum: EstabelecimentoSumAggregateOutputType | null
    _min: EstabelecimentoMinAggregateOutputType | null
    _max: EstabelecimentoMaxAggregateOutputType | null
  }

  export type EstabelecimentoAvgAggregateOutputType = {
    usuarios_de_acesso: number | null
  }

  export type EstabelecimentoSumAggregateOutputType = {
    usuarios_de_acesso: number | null
  }

  export type EstabelecimentoMinAggregateOutputType = {
    id: string | null
    razao_social: string | null
    nome_fantasia: string | null
    endereco: string | null
    numero: string | null
    bairro: string | null
    complemento: string | null
    uf: string | null
    cidade: string | null
    cep: string | null
    cnpj: string | null
    inscricao_estadual: string | null
    telefone: string | null
    email: string | null
    nome_responsavel: string | null
    telefone_responsavel: string | null
    email_responsavel: string | null
    usuarios_de_acesso: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
  }

  export type EstabelecimentoMaxAggregateOutputType = {
    id: string | null
    razao_social: string | null
    nome_fantasia: string | null
    endereco: string | null
    numero: string | null
    bairro: string | null
    complemento: string | null
    uf: string | null
    cidade: string | null
    cep: string | null
    cnpj: string | null
    inscricao_estadual: string | null
    telefone: string | null
    email: string | null
    nome_responsavel: string | null
    telefone_responsavel: string | null
    email_responsavel: string | null
    usuarios_de_acesso: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
  }

  export type EstabelecimentoCountAggregateOutputType = {
    id: number
    razao_social: number
    nome_fantasia: number
    endereco: number
    numero: number
    bairro: number
    complemento: number
    uf: number
    cidade: number
    cep: number
    cnpj: number
    inscricao_estadual: number
    telefone: number
    email: number
    nome_responsavel: number
    telefone_responsavel: number
    email_responsavel: number
    usuarios_de_acesso: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_active: number
    _all: number
  }


  export type EstabelecimentoAvgAggregateInputType = {
    usuarios_de_acesso?: true
  }

  export type EstabelecimentoSumAggregateInputType = {
    usuarios_de_acesso?: true
  }

  export type EstabelecimentoMinAggregateInputType = {
    id?: true
    razao_social?: true
    nome_fantasia?: true
    endereco?: true
    numero?: true
    bairro?: true
    complemento?: true
    uf?: true
    cidade?: true
    cep?: true
    cnpj?: true
    inscricao_estadual?: true
    telefone?: true
    email?: true
    nome_responsavel?: true
    telefone_responsavel?: true
    email_responsavel?: true
    usuarios_de_acesso?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
  }

  export type EstabelecimentoMaxAggregateInputType = {
    id?: true
    razao_social?: true
    nome_fantasia?: true
    endereco?: true
    numero?: true
    bairro?: true
    complemento?: true
    uf?: true
    cidade?: true
    cep?: true
    cnpj?: true
    inscricao_estadual?: true
    telefone?: true
    email?: true
    nome_responsavel?: true
    telefone_responsavel?: true
    email_responsavel?: true
    usuarios_de_acesso?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
  }

  export type EstabelecimentoCountAggregateInputType = {
    id?: true
    razao_social?: true
    nome_fantasia?: true
    endereco?: true
    numero?: true
    bairro?: true
    complemento?: true
    uf?: true
    cidade?: true
    cep?: true
    cnpj?: true
    inscricao_estadual?: true
    telefone?: true
    email?: true
    nome_responsavel?: true
    telefone_responsavel?: true
    email_responsavel?: true
    usuarios_de_acesso?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    _all?: true
  }

  export type EstabelecimentoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estabelecimento to aggregate.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estabelecimentos
    **/
    _count?: true | EstabelecimentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstabelecimentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstabelecimentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstabelecimentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstabelecimentoMaxAggregateInputType
  }

  export type GetEstabelecimentoAggregateType<T extends EstabelecimentoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstabelecimento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstabelecimento[P]>
      : GetScalarType<T[P], AggregateEstabelecimento[P]>
  }




  export type EstabelecimentoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EstabelecimentoWhereInput
    orderBy?: EstabelecimentoOrderByWithAggregationInput | EstabelecimentoOrderByWithAggregationInput[]
    by: EstabelecimentoScalarFieldEnum[] | EstabelecimentoScalarFieldEnum
    having?: EstabelecimentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstabelecimentoCountAggregateInputType | true
    _avg?: EstabelecimentoAvgAggregateInputType
    _sum?: EstabelecimentoSumAggregateInputType
    _min?: EstabelecimentoMinAggregateInputType
    _max?: EstabelecimentoMaxAggregateInputType
  }

  export type EstabelecimentoGroupByOutputType = {
    id: string
    razao_social: string
    nome_fantasia: string
    endereco: string
    numero: string
    bairro: string
    complemento: string
    uf: string
    cidade: string
    cep: string
    cnpj: string
    inscricao_estadual: string
    telefone: string
    email: string
    nome_responsavel: string
    telefone_responsavel: string
    email_responsavel: string
    usuarios_de_acesso: number
    created_at: Date
    updated_at: Date
    deleted_at: Date
    is_active: boolean
    _count: EstabelecimentoCountAggregateOutputType | null
    _avg: EstabelecimentoAvgAggregateOutputType | null
    _sum: EstabelecimentoSumAggregateOutputType | null
    _min: EstabelecimentoMinAggregateOutputType | null
    _max: EstabelecimentoMaxAggregateOutputType | null
  }

  type GetEstabelecimentoGroupByPayload<T extends EstabelecimentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstabelecimentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstabelecimentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstabelecimentoGroupByOutputType[P]>
            : GetScalarType<T[P], EstabelecimentoGroupByOutputType[P]>
        }
      >
    >


  export type EstabelecimentoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    razao_social?: boolean
    nome_fantasia?: boolean
    endereco?: boolean
    numero?: boolean
    bairro?: boolean
    complemento?: boolean
    uf?: boolean
    cidade?: boolean
    cep?: boolean
    cnpj?: boolean
    inscricao_estadual?: boolean
    telefone?: boolean
    email?: boolean
    nome_responsavel?: boolean
    telefone_responsavel?: boolean
    email_responsavel?: boolean
    usuarios_de_acesso?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["estabelecimento"]>

  export type EstabelecimentoSelectScalar = {
    id?: boolean
    razao_social?: boolean
    nome_fantasia?: boolean
    endereco?: boolean
    numero?: boolean
    bairro?: boolean
    complemento?: boolean
    uf?: boolean
    cidade?: boolean
    cep?: boolean
    cnpj?: boolean
    inscricao_estadual?: boolean
    telefone?: boolean
    email?: boolean
    nome_responsavel?: boolean
    telefone_responsavel?: boolean
    email_responsavel?: boolean
    usuarios_de_acesso?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
  }


  export type $EstabelecimentoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Estabelecimento"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      razao_social: string
      nome_fantasia: string
      endereco: string
      numero: string
      bairro: string
      complemento: string
      uf: string
      cidade: string
      cep: string
      cnpj: string
      inscricao_estadual: string
      telefone: string
      email: string
      nome_responsavel: string
      telefone_responsavel: string
      email_responsavel: string
      usuarios_de_acesso: number
      created_at: Date
      updated_at: Date
      deleted_at: Date
      is_active: boolean
    }, ExtArgs["result"]["estabelecimento"]>
    composites: {}
  }


  type EstabelecimentoGetPayload<S extends boolean | null | undefined | EstabelecimentoDefaultArgs> = $Result.GetResult<Prisma.$EstabelecimentoPayload, S>

  type EstabelecimentoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EstabelecimentoFindManyArgs, 'select' | 'include'> & {
      select?: EstabelecimentoCountAggregateInputType | true
    }

  export interface EstabelecimentoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estabelecimento'], meta: { name: 'Estabelecimento' } }
    /**
     * Find zero or one Estabelecimento that matches the filter.
     * @param {EstabelecimentoFindUniqueArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EstabelecimentoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EstabelecimentoFindUniqueArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Estabelecimento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EstabelecimentoFindUniqueOrThrowArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstabelecimentoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Estabelecimento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindFirstArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EstabelecimentoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EstabelecimentoFindFirstArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Estabelecimento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindFirstOrThrowArgs} args - Arguments to find a Estabelecimento
     * @example
     * // Get one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EstabelecimentoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstabelecimentoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Estabelecimentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estabelecimentos
     * const estabelecimentos = await prisma.estabelecimento.findMany()
     * 
     * // Get first 10 Estabelecimentos
     * const estabelecimentos = await prisma.estabelecimento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estabelecimentoWithIdOnly = await prisma.estabelecimento.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EstabelecimentoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstabelecimentoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Estabelecimento.
     * @param {EstabelecimentoCreateArgs} args - Arguments to create a Estabelecimento.
     * @example
     * // Create one Estabelecimento
     * const Estabelecimento = await prisma.estabelecimento.create({
     *   data: {
     *     // ... data to create a Estabelecimento
     *   }
     * })
     * 
    **/
    create<T extends EstabelecimentoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EstabelecimentoCreateArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Estabelecimento.
     * @param {EstabelecimentoDeleteArgs} args - Arguments to delete one Estabelecimento.
     * @example
     * // Delete one Estabelecimento
     * const Estabelecimento = await prisma.estabelecimento.delete({
     *   where: {
     *     // ... filter to delete one Estabelecimento
     *   }
     * })
     * 
    **/
    delete<T extends EstabelecimentoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EstabelecimentoDeleteArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Estabelecimento.
     * @param {EstabelecimentoUpdateArgs} args - Arguments to update one Estabelecimento.
     * @example
     * // Update one Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EstabelecimentoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EstabelecimentoUpdateArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Estabelecimentos.
     * @param {EstabelecimentoDeleteManyArgs} args - Arguments to filter Estabelecimentos to delete.
     * @example
     * // Delete a few Estabelecimentos
     * const { count } = await prisma.estabelecimento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EstabelecimentoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstabelecimentoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estabelecimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estabelecimentos
     * const estabelecimento = await prisma.estabelecimento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EstabelecimentoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EstabelecimentoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estabelecimento.
     * @param {EstabelecimentoUpsertArgs} args - Arguments to update or create a Estabelecimento.
     * @example
     * // Update or create a Estabelecimento
     * const estabelecimento = await prisma.estabelecimento.upsert({
     *   create: {
     *     // ... data to create a Estabelecimento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estabelecimento we want to update
     *   }
     * })
    **/
    upsert<T extends EstabelecimentoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EstabelecimentoUpsertArgs<ExtArgs>>
    ): Prisma__EstabelecimentoClient<$Result.GetResult<Prisma.$EstabelecimentoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Estabelecimentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoCountArgs} args - Arguments to filter Estabelecimentos to count.
     * @example
     * // Count the number of Estabelecimentos
     * const count = await prisma.estabelecimento.count({
     *   where: {
     *     // ... the filter for the Estabelecimentos we want to count
     *   }
     * })
    **/
    count<T extends EstabelecimentoCountArgs>(
      args?: Subset<T, EstabelecimentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstabelecimentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estabelecimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstabelecimentoAggregateArgs>(args: Subset<T, EstabelecimentoAggregateArgs>): Prisma.PrismaPromise<GetEstabelecimentoAggregateType<T>>

    /**
     * Group by Estabelecimento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstabelecimentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstabelecimentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstabelecimentoGroupByArgs['orderBy'] }
        : { orderBy?: EstabelecimentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstabelecimentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstabelecimentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estabelecimento model
   */
  readonly fields: EstabelecimentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estabelecimento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstabelecimentoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Estabelecimento model
   */ 
  interface EstabelecimentoFieldRefs {
    readonly id: FieldRef<"Estabelecimento", 'String'>
    readonly razao_social: FieldRef<"Estabelecimento", 'String'>
    readonly nome_fantasia: FieldRef<"Estabelecimento", 'String'>
    readonly endereco: FieldRef<"Estabelecimento", 'String'>
    readonly numero: FieldRef<"Estabelecimento", 'String'>
    readonly bairro: FieldRef<"Estabelecimento", 'String'>
    readonly complemento: FieldRef<"Estabelecimento", 'String'>
    readonly uf: FieldRef<"Estabelecimento", 'String'>
    readonly cidade: FieldRef<"Estabelecimento", 'String'>
    readonly cep: FieldRef<"Estabelecimento", 'String'>
    readonly cnpj: FieldRef<"Estabelecimento", 'String'>
    readonly inscricao_estadual: FieldRef<"Estabelecimento", 'String'>
    readonly telefone: FieldRef<"Estabelecimento", 'String'>
    readonly email: FieldRef<"Estabelecimento", 'String'>
    readonly nome_responsavel: FieldRef<"Estabelecimento", 'String'>
    readonly telefone_responsavel: FieldRef<"Estabelecimento", 'String'>
    readonly email_responsavel: FieldRef<"Estabelecimento", 'String'>
    readonly usuarios_de_acesso: FieldRef<"Estabelecimento", 'Int'>
    readonly created_at: FieldRef<"Estabelecimento", 'DateTime'>
    readonly updated_at: FieldRef<"Estabelecimento", 'DateTime'>
    readonly deleted_at: FieldRef<"Estabelecimento", 'DateTime'>
    readonly is_active: FieldRef<"Estabelecimento", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Estabelecimento findUnique
   */
  export type EstabelecimentoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where: EstabelecimentoWhereUniqueInput
  }


  /**
   * Estabelecimento findUniqueOrThrow
   */
  export type EstabelecimentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where: EstabelecimentoWhereUniqueInput
  }


  /**
   * Estabelecimento findFirst
   */
  export type EstabelecimentoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estabelecimentos.
     */
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }


  /**
   * Estabelecimento findFirstOrThrow
   */
  export type EstabelecimentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Filter, which Estabelecimento to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estabelecimentos.
     */
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }


  /**
   * Estabelecimento findMany
   */
  export type EstabelecimentoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Filter, which Estabelecimentos to fetch.
     */
    where?: EstabelecimentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estabelecimentos to fetch.
     */
    orderBy?: EstabelecimentoOrderByWithRelationInput | EstabelecimentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estabelecimentos.
     */
    cursor?: EstabelecimentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estabelecimentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estabelecimentos.
     */
    skip?: number
    distinct?: EstabelecimentoScalarFieldEnum | EstabelecimentoScalarFieldEnum[]
  }


  /**
   * Estabelecimento create
   */
  export type EstabelecimentoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * The data needed to create a Estabelecimento.
     */
    data: XOR<EstabelecimentoCreateInput, EstabelecimentoUncheckedCreateInput>
  }


  /**
   * Estabelecimento update
   */
  export type EstabelecimentoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * The data needed to update a Estabelecimento.
     */
    data: XOR<EstabelecimentoUpdateInput, EstabelecimentoUncheckedUpdateInput>
    /**
     * Choose, which Estabelecimento to update.
     */
    where: EstabelecimentoWhereUniqueInput
  }


  /**
   * Estabelecimento updateMany
   */
  export type EstabelecimentoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estabelecimentos.
     */
    data: XOR<EstabelecimentoUpdateManyMutationInput, EstabelecimentoUncheckedUpdateManyInput>
    /**
     * Filter which Estabelecimentos to update
     */
    where?: EstabelecimentoWhereInput
  }


  /**
   * Estabelecimento upsert
   */
  export type EstabelecimentoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * The filter to search for the Estabelecimento to update in case it exists.
     */
    where: EstabelecimentoWhereUniqueInput
    /**
     * In case the Estabelecimento found by the `where` argument doesn't exist, create a new Estabelecimento with this data.
     */
    create: XOR<EstabelecimentoCreateInput, EstabelecimentoUncheckedCreateInput>
    /**
     * In case the Estabelecimento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstabelecimentoUpdateInput, EstabelecimentoUncheckedUpdateInput>
  }


  /**
   * Estabelecimento delete
   */
  export type EstabelecimentoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
    /**
     * Filter which Estabelecimento to delete.
     */
    where: EstabelecimentoWhereUniqueInput
  }


  /**
   * Estabelecimento deleteMany
   */
  export type EstabelecimentoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estabelecimentos to delete
     */
    where?: EstabelecimentoWhereInput
  }


  /**
   * Estabelecimento without action
   */
  export type EstabelecimentoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estabelecimento
     */
    select?: EstabelecimentoSelect<ExtArgs> | null
  }



  /**
   * Model licenca
   */

  export type AggregateLicenca = {
    _count: LicencaCountAggregateOutputType | null
    _min: LicencaMinAggregateOutputType | null
    _max: LicencaMaxAggregateOutputType | null
  }

  export type LicencaMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    data_vencimento: Date | null
    is_active: boolean | null
  }

  export type LicencaMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    data_vencimento: Date | null
    is_active: boolean | null
  }

  export type LicencaCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    data_vencimento: number
    is_active: number
    _all: number
  }


  export type LicencaMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    data_vencimento?: true
    is_active?: true
  }

  export type LicencaMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    data_vencimento?: true
    is_active?: true
  }

  export type LicencaCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    data_vencimento?: true
    is_active?: true
    _all?: true
  }

  export type LicencaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which licenca to aggregate.
     */
    where?: licencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licencas to fetch.
     */
    orderBy?: licencaOrderByWithRelationInput | licencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: licencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned licencas
    **/
    _count?: true | LicencaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicencaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicencaMaxAggregateInputType
  }

  export type GetLicencaAggregateType<T extends LicencaAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenca]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenca[P]>
      : GetScalarType<T[P], AggregateLicenca[P]>
  }




  export type licencaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: licencaWhereInput
    orderBy?: licencaOrderByWithAggregationInput | licencaOrderByWithAggregationInput[]
    by: LicencaScalarFieldEnum[] | LicencaScalarFieldEnum
    having?: licencaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicencaCountAggregateInputType | true
    _min?: LicencaMinAggregateInputType
    _max?: LicencaMaxAggregateInputType
  }

  export type LicencaGroupByOutputType = {
    id: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
    data_vencimento: Date
    is_active: boolean
    _count: LicencaCountAggregateOutputType | null
    _min: LicencaMinAggregateOutputType | null
    _max: LicencaMaxAggregateOutputType | null
  }

  type GetLicencaGroupByPayload<T extends licencaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicencaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicencaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicencaGroupByOutputType[P]>
            : GetScalarType<T[P], LicencaGroupByOutputType[P]>
        }
      >
    >


  export type licencaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    data_vencimento?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["licenca"]>

  export type licencaSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    data_vencimento?: boolean
    is_active?: boolean
  }


  export type $licencaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "licenca"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: string
      created_at: Date
      updated_at: Date
      deleted_at: Date
      data_vencimento: Date
      is_active: boolean
    }, ExtArgs["result"]["licenca"]>
    composites: {}
  }


  type licencaGetPayload<S extends boolean | null | undefined | licencaDefaultArgs> = $Result.GetResult<Prisma.$licencaPayload, S>

  type licencaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<licencaFindManyArgs, 'select' | 'include'> & {
      select?: LicencaCountAggregateInputType | true
    }

  export interface licencaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['licenca'], meta: { name: 'licenca' } }
    /**
     * Find zero or one Licenca that matches the filter.
     * @param {licencaFindUniqueArgs} args - Arguments to find a Licenca
     * @example
     * // Get one Licenca
     * const licenca = await prisma.licenca.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends licencaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, licencaFindUniqueArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Licenca that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {licencaFindUniqueOrThrowArgs} args - Arguments to find a Licenca
     * @example
     * // Get one Licenca
     * const licenca = await prisma.licenca.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends licencaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, licencaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Licenca that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licencaFindFirstArgs} args - Arguments to find a Licenca
     * @example
     * // Get one Licenca
     * const licenca = await prisma.licenca.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends licencaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, licencaFindFirstArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Licenca that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licencaFindFirstOrThrowArgs} args - Arguments to find a Licenca
     * @example
     * // Get one Licenca
     * const licenca = await prisma.licenca.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends licencaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, licencaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Licencas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licencaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licencas
     * const licencas = await prisma.licenca.findMany()
     * 
     * // Get first 10 Licencas
     * const licencas = await prisma.licenca.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licencaWithIdOnly = await prisma.licenca.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends licencaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, licencaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Licenca.
     * @param {licencaCreateArgs} args - Arguments to create a Licenca.
     * @example
     * // Create one Licenca
     * const Licenca = await prisma.licenca.create({
     *   data: {
     *     // ... data to create a Licenca
     *   }
     * })
     * 
    **/
    create<T extends licencaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, licencaCreateArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Licenca.
     * @param {licencaDeleteArgs} args - Arguments to delete one Licenca.
     * @example
     * // Delete one Licenca
     * const Licenca = await prisma.licenca.delete({
     *   where: {
     *     // ... filter to delete one Licenca
     *   }
     * })
     * 
    **/
    delete<T extends licencaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, licencaDeleteArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Licenca.
     * @param {licencaUpdateArgs} args - Arguments to update one Licenca.
     * @example
     * // Update one Licenca
     * const licenca = await prisma.licenca.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends licencaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, licencaUpdateArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Licencas.
     * @param {licencaDeleteManyArgs} args - Arguments to filter Licencas to delete.
     * @example
     * // Delete a few Licencas
     * const { count } = await prisma.licenca.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends licencaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, licencaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licencaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licencas
     * const licenca = await prisma.licenca.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends licencaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, licencaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Licenca.
     * @param {licencaUpsertArgs} args - Arguments to update or create a Licenca.
     * @example
     * // Update or create a Licenca
     * const licenca = await prisma.licenca.upsert({
     *   create: {
     *     // ... data to create a Licenca
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Licenca we want to update
     *   }
     * })
    **/
    upsert<T extends licencaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, licencaUpsertArgs<ExtArgs>>
    ): Prisma__licencaClient<$Result.GetResult<Prisma.$licencaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Licencas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licencaCountArgs} args - Arguments to filter Licencas to count.
     * @example
     * // Count the number of Licencas
     * const count = await prisma.licenca.count({
     *   where: {
     *     // ... the filter for the Licencas we want to count
     *   }
     * })
    **/
    count<T extends licencaCountArgs>(
      args?: Subset<T, licencaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicencaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Licenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicencaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicencaAggregateArgs>(args: Subset<T, LicencaAggregateArgs>): Prisma.PrismaPromise<GetLicencaAggregateType<T>>

    /**
     * Group by Licenca.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {licencaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends licencaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: licencaGroupByArgs['orderBy'] }
        : { orderBy?: licencaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, licencaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicencaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the licenca model
   */
  readonly fields: licencaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for licenca.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__licencaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the licenca model
   */ 
  interface licencaFieldRefs {
    readonly id: FieldRef<"licenca", 'String'>
    readonly created_at: FieldRef<"licenca", 'DateTime'>
    readonly updated_at: FieldRef<"licenca", 'DateTime'>
    readonly deleted_at: FieldRef<"licenca", 'DateTime'>
    readonly data_vencimento: FieldRef<"licenca", 'DateTime'>
    readonly is_active: FieldRef<"licenca", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * licenca findUnique
   */
  export type licencaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * Filter, which licenca to fetch.
     */
    where: licencaWhereUniqueInput
  }


  /**
   * licenca findUniqueOrThrow
   */
  export type licencaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * Filter, which licenca to fetch.
     */
    where: licencaWhereUniqueInput
  }


  /**
   * licenca findFirst
   */
  export type licencaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * Filter, which licenca to fetch.
     */
    where?: licencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licencas to fetch.
     */
    orderBy?: licencaOrderByWithRelationInput | licencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for licencas.
     */
    cursor?: licencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of licencas.
     */
    distinct?: LicencaScalarFieldEnum | LicencaScalarFieldEnum[]
  }


  /**
   * licenca findFirstOrThrow
   */
  export type licencaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * Filter, which licenca to fetch.
     */
    where?: licencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licencas to fetch.
     */
    orderBy?: licencaOrderByWithRelationInput | licencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for licencas.
     */
    cursor?: licencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licencas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of licencas.
     */
    distinct?: LicencaScalarFieldEnum | LicencaScalarFieldEnum[]
  }


  /**
   * licenca findMany
   */
  export type licencaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * Filter, which licencas to fetch.
     */
    where?: licencaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of licencas to fetch.
     */
    orderBy?: licencaOrderByWithRelationInput | licencaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing licencas.
     */
    cursor?: licencaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` licencas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` licencas.
     */
    skip?: number
    distinct?: LicencaScalarFieldEnum | LicencaScalarFieldEnum[]
  }


  /**
   * licenca create
   */
  export type licencaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * The data needed to create a licenca.
     */
    data: XOR<licencaCreateInput, licencaUncheckedCreateInput>
  }


  /**
   * licenca update
   */
  export type licencaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * The data needed to update a licenca.
     */
    data: XOR<licencaUpdateInput, licencaUncheckedUpdateInput>
    /**
     * Choose, which licenca to update.
     */
    where: licencaWhereUniqueInput
  }


  /**
   * licenca updateMany
   */
  export type licencaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update licencas.
     */
    data: XOR<licencaUpdateManyMutationInput, licencaUncheckedUpdateManyInput>
    /**
     * Filter which licencas to update
     */
    where?: licencaWhereInput
  }


  /**
   * licenca upsert
   */
  export type licencaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * The filter to search for the licenca to update in case it exists.
     */
    where: licencaWhereUniqueInput
    /**
     * In case the licenca found by the `where` argument doesn't exist, create a new licenca with this data.
     */
    create: XOR<licencaCreateInput, licencaUncheckedCreateInput>
    /**
     * In case the licenca was found with the provided `where` argument, update it with this data.
     */
    update: XOR<licencaUpdateInput, licencaUncheckedUpdateInput>
  }


  /**
   * licenca delete
   */
  export type licencaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
    /**
     * Filter which licenca to delete.
     */
    where: licencaWhereUniqueInput
  }


  /**
   * licenca deleteMany
   */
  export type licencaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which licencas to delete
     */
    where?: licencaWhereInput
  }


  /**
   * licenca without action
   */
  export type licencaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the licenca
     */
    select?: licencaSelect<ExtArgs> | null
  }



  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
    cpf: number | null
    numero: number | null
    cep: number | null
    consulta_id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
    cpf: number | null
    numero: number | null
    cep: number | null
    consulta_id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: number | null
    data_nascimento: string | null
    endereco: string | null
    numero: number | null
    bairro: string | null
    complemento: string | null
    cep: number | null
    telefone: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    consulta_id: number | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: number | null
    data_nascimento: string | null
    endereco: string | null
    numero: number | null
    bairro: string | null
    complemento: string | null
    cep: number | null
    telefone: string | null
    email: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    consulta_id: number | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    data_nascimento: number
    endereco: number
    numero: number
    bairro: number
    complemento: number
    cep: number
    telefone: number
    email: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_active: number
    consulta_id: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
    cpf?: true
    numero?: true
    cep?: true
    consulta_id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
    cpf?: true
    numero?: true
    cep?: true
    consulta_id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    endereco?: true
    numero?: true
    bairro?: true
    complemento?: true
    cep?: true
    telefone?: true
    email?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    consulta_id?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    endereco?: true
    numero?: true
    bairro?: true
    complemento?: true
    cep?: true
    telefone?: true
    email?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    consulta_id?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    data_nascimento?: true
    endereco?: true
    numero?: true
    bairro?: true
    complemento?: true
    cep?: true
    telefone?: true
    email?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    consulta_id?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
    is_active: boolean
    consulta_id: number
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    numero?: boolean
    bairro?: boolean
    complemento?: boolean
    cep?: boolean
    telefone?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    consulta_id?: boolean
    anamnese?: boolean | Paciente$anamneseArgs<ExtArgs>
    consulta?: boolean | Paciente$consultaArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>

  export type PacienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    data_nascimento?: boolean
    endereco?: boolean
    numero?: boolean
    bairro?: boolean
    complemento?: boolean
    cep?: boolean
    telefone?: boolean
    email?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    consulta_id?: boolean
  }

  export type PacienteInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    anamnese?: boolean | Paciente$anamneseArgs<ExtArgs>
    consulta?: boolean | Paciente$consultaArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PacientePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      anamnese: Prisma.$AnamnesePayload<ExtArgs>[]
      consulta: Prisma.$ConsultaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      cpf: number
      data_nascimento: string
      endereco: string
      numero: number
      bairro: string
      complemento: string
      cep: number
      telefone: string
      email: string
      created_at: Date
      updated_at: Date
      deleted_at: Date
      is_active: boolean
      consulta_id: number
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }


  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PacienteFindManyArgs, 'select' | 'include'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PacienteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Paciente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PacienteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PacienteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
    **/
    create<T extends PacienteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
    **/
    delete<T extends PacienteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PacienteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PacienteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PacienteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
    **/
    upsert<T extends PacienteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>
    ): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    anamnese<T extends Paciente$anamneseArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$anamneseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'findMany'> | Null>;

    consulta<T extends Paciente$consultaArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$consultaArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Paciente model
   */ 
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly nome: FieldRef<"Paciente", 'String'>
    readonly cpf: FieldRef<"Paciente", 'Int'>
    readonly data_nascimento: FieldRef<"Paciente", 'String'>
    readonly endereco: FieldRef<"Paciente", 'String'>
    readonly numero: FieldRef<"Paciente", 'Int'>
    readonly bairro: FieldRef<"Paciente", 'String'>
    readonly complemento: FieldRef<"Paciente", 'String'>
    readonly cep: FieldRef<"Paciente", 'Int'>
    readonly telefone: FieldRef<"Paciente", 'String'>
    readonly email: FieldRef<"Paciente", 'String'>
    readonly created_at: FieldRef<"Paciente", 'DateTime'>
    readonly updated_at: FieldRef<"Paciente", 'DateTime'>
    readonly deleted_at: FieldRef<"Paciente", 'DateTime'>
    readonly is_active: FieldRef<"Paciente", 'Boolean'>
    readonly consulta_id: FieldRef<"Paciente", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }


  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
  }


  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }


  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }


  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
  }


  /**
   * Paciente.anamnese
   */
  export type Paciente$anamneseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    where?: AnamneseWhereInput
    orderBy?: AnamneseOrderByWithRelationInput | AnamneseOrderByWithRelationInput[]
    cursor?: AnamneseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnamneseScalarFieldEnum | AnamneseScalarFieldEnum[]
  }


  /**
   * Paciente.consulta
   */
  export type Paciente$consultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
  }


  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
  }



  /**
   * Model Anamnese
   */

  export type AggregateAnamnese = {
    _count: AnamneseCountAggregateOutputType | null
    _avg: AnamneseAvgAggregateOutputType | null
    _sum: AnamneseSumAggregateOutputType | null
    _min: AnamneseMinAggregateOutputType | null
    _max: AnamneseMaxAggregateOutputType | null
  }

  export type AnamneseAvgAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type AnamneseSumAggregateOutputType = {
    id: number | null
    paciente_id: number | null
  }

  export type AnamneseMinAggregateOutputType = {
    id: number | null
    infeccao_urinaria: boolean | null
    dst: string | null
    pedra_nos_rins: string | null
    problema_nos_testiculos: string | null
    historico_de_cancer_na_familia: string | null
    doenca_cronica: string | null
    utiliza_remedios: string | null
    fumante: string | null
    bebidas_alcoolicas: string | null
    droga: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    paciente_id: number | null
  }

  export type AnamneseMaxAggregateOutputType = {
    id: number | null
    infeccao_urinaria: boolean | null
    dst: string | null
    pedra_nos_rins: string | null
    problema_nos_testiculos: string | null
    historico_de_cancer_na_familia: string | null
    doenca_cronica: string | null
    utiliza_remedios: string | null
    fumante: string | null
    bebidas_alcoolicas: string | null
    droga: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    paciente_id: number | null
  }

  export type AnamneseCountAggregateOutputType = {
    id: number
    infeccao_urinaria: number
    dst: number
    pedra_nos_rins: number
    problema_nos_testiculos: number
    historico_de_cancer_na_familia: number
    doenca_cronica: number
    utiliza_remedios: number
    fumante: number
    bebidas_alcoolicas: number
    droga: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_active: number
    paciente_id: number
    _all: number
  }


  export type AnamneseAvgAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type AnamneseSumAggregateInputType = {
    id?: true
    paciente_id?: true
  }

  export type AnamneseMinAggregateInputType = {
    id?: true
    infeccao_urinaria?: true
    dst?: true
    pedra_nos_rins?: true
    problema_nos_testiculos?: true
    historico_de_cancer_na_familia?: true
    doenca_cronica?: true
    utiliza_remedios?: true
    fumante?: true
    bebidas_alcoolicas?: true
    droga?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    paciente_id?: true
  }

  export type AnamneseMaxAggregateInputType = {
    id?: true
    infeccao_urinaria?: true
    dst?: true
    pedra_nos_rins?: true
    problema_nos_testiculos?: true
    historico_de_cancer_na_familia?: true
    doenca_cronica?: true
    utiliza_remedios?: true
    fumante?: true
    bebidas_alcoolicas?: true
    droga?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    paciente_id?: true
  }

  export type AnamneseCountAggregateInputType = {
    id?: true
    infeccao_urinaria?: true
    dst?: true
    pedra_nos_rins?: true
    problema_nos_testiculos?: true
    historico_de_cancer_na_familia?: true
    doenca_cronica?: true
    utiliza_remedios?: true
    fumante?: true
    bebidas_alcoolicas?: true
    droga?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    paciente_id?: true
    _all?: true
  }

  export type AnamneseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anamnese to aggregate.
     */
    where?: AnamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anamnese to fetch.
     */
    orderBy?: AnamneseOrderByWithRelationInput | AnamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anamnese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anamnese
    **/
    _count?: true | AnamneseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnamneseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnamneseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnamneseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnamneseMaxAggregateInputType
  }

  export type GetAnamneseAggregateType<T extends AnamneseAggregateArgs> = {
        [P in keyof T & keyof AggregateAnamnese]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnamnese[P]>
      : GetScalarType<T[P], AggregateAnamnese[P]>
  }




  export type AnamneseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AnamneseWhereInput
    orderBy?: AnamneseOrderByWithAggregationInput | AnamneseOrderByWithAggregationInput[]
    by: AnamneseScalarFieldEnum[] | AnamneseScalarFieldEnum
    having?: AnamneseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnamneseCountAggregateInputType | true
    _avg?: AnamneseAvgAggregateInputType
    _sum?: AnamneseSumAggregateInputType
    _min?: AnamneseMinAggregateInputType
    _max?: AnamneseMaxAggregateInputType
  }

  export type AnamneseGroupByOutputType = {
    id: number
    infeccao_urinaria: boolean
    dst: string
    pedra_nos_rins: string
    problema_nos_testiculos: string
    historico_de_cancer_na_familia: string
    doenca_cronica: string
    utiliza_remedios: string
    fumante: string
    bebidas_alcoolicas: string
    droga: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
    is_active: boolean
    paciente_id: number
    _count: AnamneseCountAggregateOutputType | null
    _avg: AnamneseAvgAggregateOutputType | null
    _sum: AnamneseSumAggregateOutputType | null
    _min: AnamneseMinAggregateOutputType | null
    _max: AnamneseMaxAggregateOutputType | null
  }

  type GetAnamneseGroupByPayload<T extends AnamneseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnamneseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnamneseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnamneseGroupByOutputType[P]>
            : GetScalarType<T[P], AnamneseGroupByOutputType[P]>
        }
      >
    >


  export type AnamneseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    infeccao_urinaria?: boolean
    dst?: boolean
    pedra_nos_rins?: boolean
    problema_nos_testiculos?: boolean
    historico_de_cancer_na_familia?: boolean
    doenca_cronica?: boolean
    utiliza_remedios?: boolean
    fumante?: boolean
    bebidas_alcoolicas?: boolean
    droga?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    paciente_id?: boolean
    paciente?: boolean | Anamnese$pacienteArgs<ExtArgs>
  }, ExtArgs["result"]["anamnese"]>

  export type AnamneseSelectScalar = {
    id?: boolean
    infeccao_urinaria?: boolean
    dst?: boolean
    pedra_nos_rins?: boolean
    problema_nos_testiculos?: boolean
    historico_de_cancer_na_familia?: boolean
    doenca_cronica?: boolean
    utiliza_remedios?: boolean
    fumante?: boolean
    bebidas_alcoolicas?: boolean
    droga?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    paciente_id?: boolean
  }

  export type AnamneseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    paciente?: boolean | Anamnese$pacienteArgs<ExtArgs>
  }


  export type $AnamnesePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Anamnese"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      infeccao_urinaria: boolean
      dst: string
      pedra_nos_rins: string
      problema_nos_testiculos: string
      historico_de_cancer_na_familia: string
      doenca_cronica: string
      utiliza_remedios: string
      fumante: string
      bebidas_alcoolicas: string
      droga: string
      created_at: Date
      updated_at: Date
      deleted_at: Date
      is_active: boolean
      paciente_id: number
    }, ExtArgs["result"]["anamnese"]>
    composites: {}
  }


  type AnamneseGetPayload<S extends boolean | null | undefined | AnamneseDefaultArgs> = $Result.GetResult<Prisma.$AnamnesePayload, S>

  type AnamneseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AnamneseFindManyArgs, 'select' | 'include'> & {
      select?: AnamneseCountAggregateInputType | true
    }

  export interface AnamneseDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anamnese'], meta: { name: 'Anamnese' } }
    /**
     * Find zero or one Anamnese that matches the filter.
     * @param {AnamneseFindUniqueArgs} args - Arguments to find a Anamnese
     * @example
     * // Get one Anamnese
     * const anamnese = await prisma.anamnese.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AnamneseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AnamneseFindUniqueArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Anamnese that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AnamneseFindUniqueOrThrowArgs} args - Arguments to find a Anamnese
     * @example
     * // Get one Anamnese
     * const anamnese = await prisma.anamnese.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AnamneseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnamneseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Anamnese that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseFindFirstArgs} args - Arguments to find a Anamnese
     * @example
     * // Get one Anamnese
     * const anamnese = await prisma.anamnese.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AnamneseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AnamneseFindFirstArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Anamnese that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseFindFirstOrThrowArgs} args - Arguments to find a Anamnese
     * @example
     * // Get one Anamnese
     * const anamnese = await prisma.anamnese.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AnamneseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AnamneseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Anamnese that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anamnese
     * const anamnese = await prisma.anamnese.findMany()
     * 
     * // Get first 10 Anamnese
     * const anamnese = await prisma.anamnese.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const anamneseWithIdOnly = await prisma.anamnese.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AnamneseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnamneseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Anamnese.
     * @param {AnamneseCreateArgs} args - Arguments to create a Anamnese.
     * @example
     * // Create one Anamnese
     * const Anamnese = await prisma.anamnese.create({
     *   data: {
     *     // ... data to create a Anamnese
     *   }
     * })
     * 
    **/
    create<T extends AnamneseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AnamneseCreateArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Anamnese.
     * @param {AnamneseDeleteArgs} args - Arguments to delete one Anamnese.
     * @example
     * // Delete one Anamnese
     * const Anamnese = await prisma.anamnese.delete({
     *   where: {
     *     // ... filter to delete one Anamnese
     *   }
     * })
     * 
    **/
    delete<T extends AnamneseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AnamneseDeleteArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Anamnese.
     * @param {AnamneseUpdateArgs} args - Arguments to update one Anamnese.
     * @example
     * // Update one Anamnese
     * const anamnese = await prisma.anamnese.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AnamneseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AnamneseUpdateArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Anamnese.
     * @param {AnamneseDeleteManyArgs} args - Arguments to filter Anamnese to delete.
     * @example
     * // Delete a few Anamnese
     * const { count } = await prisma.anamnese.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AnamneseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AnamneseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anamnese
     * const anamnese = await prisma.anamnese.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AnamneseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AnamneseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Anamnese.
     * @param {AnamneseUpsertArgs} args - Arguments to update or create a Anamnese.
     * @example
     * // Update or create a Anamnese
     * const anamnese = await prisma.anamnese.upsert({
     *   create: {
     *     // ... data to create a Anamnese
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anamnese we want to update
     *   }
     * })
    **/
    upsert<T extends AnamneseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AnamneseUpsertArgs<ExtArgs>>
    ): Prisma__AnamneseClient<$Result.GetResult<Prisma.$AnamnesePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseCountArgs} args - Arguments to filter Anamnese to count.
     * @example
     * // Count the number of Anamnese
     * const count = await prisma.anamnese.count({
     *   where: {
     *     // ... the filter for the Anamnese we want to count
     *   }
     * })
    **/
    count<T extends AnamneseCountArgs>(
      args?: Subset<T, AnamneseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnamneseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnamneseAggregateArgs>(args: Subset<T, AnamneseAggregateArgs>): Prisma.PrismaPromise<GetAnamneseAggregateType<T>>

    /**
     * Group by Anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnamneseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnamneseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnamneseGroupByArgs['orderBy'] }
        : { orderBy?: AnamneseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnamneseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnamneseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anamnese model
   */
  readonly fields: AnamneseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anamnese.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnamneseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    paciente<T extends Anamnese$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Anamnese$pacienteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Anamnese model
   */ 
  interface AnamneseFieldRefs {
    readonly id: FieldRef<"Anamnese", 'Int'>
    readonly infeccao_urinaria: FieldRef<"Anamnese", 'Boolean'>
    readonly dst: FieldRef<"Anamnese", 'String'>
    readonly pedra_nos_rins: FieldRef<"Anamnese", 'String'>
    readonly problema_nos_testiculos: FieldRef<"Anamnese", 'String'>
    readonly historico_de_cancer_na_familia: FieldRef<"Anamnese", 'String'>
    readonly doenca_cronica: FieldRef<"Anamnese", 'String'>
    readonly utiliza_remedios: FieldRef<"Anamnese", 'String'>
    readonly fumante: FieldRef<"Anamnese", 'String'>
    readonly bebidas_alcoolicas: FieldRef<"Anamnese", 'String'>
    readonly droga: FieldRef<"Anamnese", 'String'>
    readonly created_at: FieldRef<"Anamnese", 'DateTime'>
    readonly updated_at: FieldRef<"Anamnese", 'DateTime'>
    readonly deleted_at: FieldRef<"Anamnese", 'DateTime'>
    readonly is_active: FieldRef<"Anamnese", 'Boolean'>
    readonly paciente_id: FieldRef<"Anamnese", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Anamnese findUnique
   */
  export type AnamneseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * Filter, which Anamnese to fetch.
     */
    where: AnamneseWhereUniqueInput
  }


  /**
   * Anamnese findUniqueOrThrow
   */
  export type AnamneseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * Filter, which Anamnese to fetch.
     */
    where: AnamneseWhereUniqueInput
  }


  /**
   * Anamnese findFirst
   */
  export type AnamneseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * Filter, which Anamnese to fetch.
     */
    where?: AnamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anamnese to fetch.
     */
    orderBy?: AnamneseOrderByWithRelationInput | AnamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anamnese.
     */
    cursor?: AnamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anamnese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anamnese.
     */
    distinct?: AnamneseScalarFieldEnum | AnamneseScalarFieldEnum[]
  }


  /**
   * Anamnese findFirstOrThrow
   */
  export type AnamneseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * Filter, which Anamnese to fetch.
     */
    where?: AnamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anamnese to fetch.
     */
    orderBy?: AnamneseOrderByWithRelationInput | AnamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anamnese.
     */
    cursor?: AnamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anamnese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anamnese.
     */
    distinct?: AnamneseScalarFieldEnum | AnamneseScalarFieldEnum[]
  }


  /**
   * Anamnese findMany
   */
  export type AnamneseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * Filter, which Anamnese to fetch.
     */
    where?: AnamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anamnese to fetch.
     */
    orderBy?: AnamneseOrderByWithRelationInput | AnamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anamnese.
     */
    cursor?: AnamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anamnese.
     */
    skip?: number
    distinct?: AnamneseScalarFieldEnum | AnamneseScalarFieldEnum[]
  }


  /**
   * Anamnese create
   */
  export type AnamneseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * The data needed to create a Anamnese.
     */
    data: XOR<AnamneseCreateInput, AnamneseUncheckedCreateInput>
  }


  /**
   * Anamnese update
   */
  export type AnamneseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * The data needed to update a Anamnese.
     */
    data: XOR<AnamneseUpdateInput, AnamneseUncheckedUpdateInput>
    /**
     * Choose, which Anamnese to update.
     */
    where: AnamneseWhereUniqueInput
  }


  /**
   * Anamnese updateMany
   */
  export type AnamneseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anamnese.
     */
    data: XOR<AnamneseUpdateManyMutationInput, AnamneseUncheckedUpdateManyInput>
    /**
     * Filter which Anamnese to update
     */
    where?: AnamneseWhereInput
  }


  /**
   * Anamnese upsert
   */
  export type AnamneseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * The filter to search for the Anamnese to update in case it exists.
     */
    where: AnamneseWhereUniqueInput
    /**
     * In case the Anamnese found by the `where` argument doesn't exist, create a new Anamnese with this data.
     */
    create: XOR<AnamneseCreateInput, AnamneseUncheckedCreateInput>
    /**
     * In case the Anamnese was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnamneseUpdateInput, AnamneseUncheckedUpdateInput>
  }


  /**
   * Anamnese delete
   */
  export type AnamneseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
    /**
     * Filter which Anamnese to delete.
     */
    where: AnamneseWhereUniqueInput
  }


  /**
   * Anamnese deleteMany
   */
  export type AnamneseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anamnese to delete
     */
    where?: AnamneseWhereInput
  }


  /**
   * Anamnese.paciente
   */
  export type Anamnese$pacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
  }


  /**
   * Anamnese without action
   */
  export type AnamneseDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anamnese
     */
    select?: AnamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AnamneseInclude<ExtArgs> | null
  }



  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type AgendamentoSumAggregateOutputType = {
    id: number | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id: number | null
    observacao: string | null
    status: string | null
    data_de_agendado: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id: number | null
    observacao: string | null
    status: string | null
    data_de_agendado: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id: number
    observacao: number
    status: number
    data_de_agendado: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type AgendamentoAvgAggregateInputType = {
    id?: true
  }

  export type AgendamentoSumAggregateInputType = {
    id?: true
  }

  export type AgendamentoMinAggregateInputType = {
    id?: true
    observacao?: true
    status?: true
    data_de_agendado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id?: true
    observacao?: true
    status?: true
    data_de_agendado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id?: true
    observacao?: true
    status?: true
    data_de_agendado?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _avg?: AgendamentoAvgAggregateInputType
    _sum?: AgendamentoSumAggregateInputType
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id: number
    observacao: string
    status: string
    data_de_agendado: Date
    created_at: Date
    updated_at: Date
    deleted_at: Date
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    observacao?: boolean
    status?: boolean
    data_de_agendado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id?: boolean
    observacao?: boolean
    status?: boolean
    data_de_agendado?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }


  export type $AgendamentoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      observacao: string
      status: string
      data_de_agendado: Date
      created_at: Date
      updated_at: Date
      deleted_at: Date
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }


  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AgendamentoFindManyArgs, 'select' | 'include'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AgendamentoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Agendamento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AgendamentoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AgendamentoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
    **/
    create<T extends AgendamentoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
    **/
    delete<T extends AgendamentoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AgendamentoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AgendamentoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AgendamentoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
    **/
    upsert<T extends AgendamentoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>
    ): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Agendamento model
   */ 
  interface AgendamentoFieldRefs {
    readonly id: FieldRef<"Agendamento", 'Int'>
    readonly observacao: FieldRef<"Agendamento", 'String'>
    readonly status: FieldRef<"Agendamento", 'String'>
    readonly data_de_agendado: FieldRef<"Agendamento", 'DateTime'>
    readonly created_at: FieldRef<"Agendamento", 'DateTime'>
    readonly updated_at: FieldRef<"Agendamento", 'DateTime'>
    readonly deleted_at: FieldRef<"Agendamento", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }


  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }


  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }


  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }


  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }


  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }


  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }


  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
  }


  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }


  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }


  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
  }


  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
  }



  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    diagnostico: string | null
    prescricao: string | null
    convenio: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    diagnostico: string | null
    prescricao: string | null
    convenio: string | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    diagnostico: number
    prescricao: number
    convenio: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    diagnostico?: true
    prescricao?: true
    convenio?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    diagnostico?: true
    prescricao?: true
    convenio?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    diagnostico?: true
    prescricao?: true
    convenio?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diagnostico?: boolean
    prescricao?: boolean
    convenio?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    usuario?: boolean | Consulta$usuarioArgs<ExtArgs>
    paciente?: boolean | Consulta$pacienteArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    diagnostico?: boolean
    prescricao?: boolean
    convenio?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type ConsultaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuario?: boolean | Consulta$usuarioArgs<ExtArgs>
    paciente?: boolean | Consulta$pacienteArgs<ExtArgs>
    _count?: boolean | ConsultaCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ConsultaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>[]
      paciente: Prisma.$PacientePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      diagnostico: string
      prescricao: string
      convenio: string
      status: string
      created_at: Date
      updated_at: Date
      deleted_at: Date
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }


  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ConsultaFindManyArgs, 'select' | 'include'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConsultaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Consulta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConsultaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConsultaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
    **/
    create<T extends ConsultaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
    **/
    delete<T extends ConsultaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConsultaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConsultaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConsultaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
    **/
    upsert<T extends ConsultaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>
    ): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuario<T extends Consulta$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$usuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    paciente<T extends Consulta$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Consulta$pacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Consulta model
   */ 
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly diagnostico: FieldRef<"Consulta", 'String'>
    readonly prescricao: FieldRef<"Consulta", 'String'>
    readonly convenio: FieldRef<"Consulta", 'String'>
    readonly status: FieldRef<"Consulta", 'String'>
    readonly created_at: FieldRef<"Consulta", 'DateTime'>
    readonly updated_at: FieldRef<"Consulta", 'DateTime'>
    readonly deleted_at: FieldRef<"Consulta", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }


  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }


  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
  }


  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }


  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }


  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
  }


  /**
   * Consulta.usuario
   */
  export type Consulta$usuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Consulta.paciente
   */
  export type Consulta$pacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PacienteInclude<ExtArgs> | null
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    cursor?: PacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }


  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
  }



  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    Consulta_id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    Consulta_id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    senha: string | null
    ocupacao: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    Consulta_id: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    senha: string | null
    ocupacao: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    Consulta_id: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    senha: number
    ocupacao: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_active: number
    Consulta_id: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    Consulta_id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    Consulta_id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    ocupacao?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    Consulta_id?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    ocupacao?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    Consulta_id?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    senha?: true
    ocupacao?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    Consulta_id?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    senha: string
    ocupacao: string
    created_at: Date
    updated_at: Date
    deleted_at: Date
    is_active: boolean
    Consulta_id: number | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    senha?: boolean
    ocupacao?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    Consulta_id?: boolean
    controle?: boolean | Usuario$controleArgs<ExtArgs>
    Consulta?: boolean | Usuario$ConsultaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    senha?: boolean
    ocupacao?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    Consulta_id?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    controle?: boolean | Usuario$controleArgs<ExtArgs>
    Consulta?: boolean | Usuario$ConsultaArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      controle: Prisma.$Controle_acessoPayload<ExtArgs>[]
      Consulta: Prisma.$ConsultaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      nome: string
      senha: string
      ocupacao: string
      created_at: Date
      updated_at: Date
      deleted_at: Date
      is_active: boolean
      Consulta_id: number | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controle<T extends Usuario$controleArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$controleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findMany'> | Null>;

    Consulta<T extends Usuario$ConsultaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ConsultaArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly ocupacao: FieldRef<"Usuario", 'String'>
    readonly created_at: FieldRef<"Usuario", 'DateTime'>
    readonly updated_at: FieldRef<"Usuario", 'DateTime'>
    readonly deleted_at: FieldRef<"Usuario", 'DateTime'>
    readonly is_active: FieldRef<"Usuario", 'Boolean'>
    readonly Consulta_id: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario.controle
   */
  export type Usuario$controleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    where?: Controle_acessoWhereInput
    orderBy?: Controle_acessoOrderByWithRelationInput | Controle_acessoOrderByWithRelationInput[]
    cursor?: Controle_acessoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Controle_acessoScalarFieldEnum | Controle_acessoScalarFieldEnum[]
  }


  /**
   * Usuario.Consulta
   */
  export type Usuario$ConsultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Controle_acesso
   */

  export type AggregateControle_acesso = {
    _count: Controle_acessoCountAggregateOutputType | null
    _avg: Controle_acessoAvgAggregateOutputType | null
    _sum: Controle_acessoSumAggregateOutputType | null
    _min: Controle_acessoMinAggregateOutputType | null
    _max: Controle_acessoMaxAggregateOutputType | null
  }

  export type Controle_acessoAvgAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type Controle_acessoSumAggregateOutputType = {
    id: number | null
    usuario_id: number | null
  }

  export type Controle_acessoMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    usuario_id: number | null
  }

  export type Controle_acessoMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    is_active: boolean | null
    usuario_id: number | null
  }

  export type Controle_acessoCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    is_active: number
    usuario_id: number
    _all: number
  }


  export type Controle_acessoAvgAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type Controle_acessoSumAggregateInputType = {
    id?: true
    usuario_id?: true
  }

  export type Controle_acessoMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    usuario_id?: true
  }

  export type Controle_acessoMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    usuario_id?: true
  }

  export type Controle_acessoCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    is_active?: true
    usuario_id?: true
    _all?: true
  }

  export type Controle_acessoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_acesso to aggregate.
     */
    where?: Controle_acessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_acessos to fetch.
     */
    orderBy?: Controle_acessoOrderByWithRelationInput | Controle_acessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Controle_acessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controle_acessos
    **/
    _count?: true | Controle_acessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Controle_acessoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Controle_acessoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Controle_acessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Controle_acessoMaxAggregateInputType
  }

  export type GetControle_acessoAggregateType<T extends Controle_acessoAggregateArgs> = {
        [P in keyof T & keyof AggregateControle_acesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControle_acesso[P]>
      : GetScalarType<T[P], AggregateControle_acesso[P]>
  }




  export type Controle_acessoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_acessoWhereInput
    orderBy?: Controle_acessoOrderByWithAggregationInput | Controle_acessoOrderByWithAggregationInput[]
    by: Controle_acessoScalarFieldEnum[] | Controle_acessoScalarFieldEnum
    having?: Controle_acessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Controle_acessoCountAggregateInputType | true
    _avg?: Controle_acessoAvgAggregateInputType
    _sum?: Controle_acessoSumAggregateInputType
    _min?: Controle_acessoMinAggregateInputType
    _max?: Controle_acessoMaxAggregateInputType
  }

  export type Controle_acessoGroupByOutputType = {
    id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date
    is_active: boolean
    usuario_id: number | null
    _count: Controle_acessoCountAggregateOutputType | null
    _avg: Controle_acessoAvgAggregateOutputType | null
    _sum: Controle_acessoSumAggregateOutputType | null
    _min: Controle_acessoMinAggregateOutputType | null
    _max: Controle_acessoMaxAggregateOutputType | null
  }

  type GetControle_acessoGroupByPayload<T extends Controle_acessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Controle_acessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Controle_acessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Controle_acessoGroupByOutputType[P]>
            : GetScalarType<T[P], Controle_acessoGroupByOutputType[P]>
        }
      >
    >


  export type Controle_acessoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    usuario_id?: boolean
    paciente?: boolean | Controle_acesso$pacienteArgs<ExtArgs>
    anamnese?: boolean | Controle_acesso$anamneseArgs<ExtArgs>
    agendamento?: boolean | Controle_acesso$agendamentoArgs<ExtArgs>
    consulta?: boolean | Controle_acesso$consultaArgs<ExtArgs>
    usuario?: boolean | Controle_acesso$usuarioArgs<ExtArgs>
    _count?: boolean | Controle_acessoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controle_acesso"]>

  export type Controle_acessoSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    is_active?: boolean
    usuario_id?: boolean
  }

  export type Controle_acessoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    paciente?: boolean | Controle_acesso$pacienteArgs<ExtArgs>
    anamnese?: boolean | Controle_acesso$anamneseArgs<ExtArgs>
    agendamento?: boolean | Controle_acesso$agendamentoArgs<ExtArgs>
    consulta?: boolean | Controle_acesso$consultaArgs<ExtArgs>
    usuario?: boolean | Controle_acesso$usuarioArgs<ExtArgs>
    _count?: boolean | Controle_acessoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $Controle_acessoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Controle_acesso"
    objects: {
      paciente: Prisma.$Controle_pacientePayload<ExtArgs>[]
      anamnese: Prisma.$Controle_anamnesePayload<ExtArgs>[]
      agendamento: Prisma.$Controle_agendamentoPayload<ExtArgs>[]
      consulta: Prisma.$Controle_consultaPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      created_at: Date
      updated_at: Date
      deleted_at: Date
      is_active: boolean
      usuario_id: number | null
    }, ExtArgs["result"]["controle_acesso"]>
    composites: {}
  }


  type Controle_acessoGetPayload<S extends boolean | null | undefined | Controle_acessoDefaultArgs> = $Result.GetResult<Prisma.$Controle_acessoPayload, S>

  type Controle_acessoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Controle_acessoFindManyArgs, 'select' | 'include'> & {
      select?: Controle_acessoCountAggregateInputType | true
    }

  export interface Controle_acessoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controle_acesso'], meta: { name: 'Controle_acesso' } }
    /**
     * Find zero or one Controle_acesso that matches the filter.
     * @param {Controle_acessoFindUniqueArgs} args - Arguments to find a Controle_acesso
     * @example
     * // Get one Controle_acesso
     * const controle_acesso = await prisma.controle_acesso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Controle_acessoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_acessoFindUniqueArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Controle_acesso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Controle_acessoFindUniqueOrThrowArgs} args - Arguments to find a Controle_acesso
     * @example
     * // Get one Controle_acesso
     * const controle_acesso = await prisma.controle_acesso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Controle_acessoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_acessoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Controle_acesso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoFindFirstArgs} args - Arguments to find a Controle_acesso
     * @example
     * // Get one Controle_acesso
     * const controle_acesso = await prisma.controle_acesso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Controle_acessoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_acessoFindFirstArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Controle_acesso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoFindFirstOrThrowArgs} args - Arguments to find a Controle_acesso
     * @example
     * // Get one Controle_acesso
     * const controle_acesso = await prisma.controle_acesso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Controle_acessoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_acessoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Controle_acessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controle_acessos
     * const controle_acessos = await prisma.controle_acesso.findMany()
     * 
     * // Get first 10 Controle_acessos
     * const controle_acessos = await prisma.controle_acesso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controle_acessoWithIdOnly = await prisma.controle_acesso.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Controle_acessoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_acessoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Controle_acesso.
     * @param {Controle_acessoCreateArgs} args - Arguments to create a Controle_acesso.
     * @example
     * // Create one Controle_acesso
     * const Controle_acesso = await prisma.controle_acesso.create({
     *   data: {
     *     // ... data to create a Controle_acesso
     *   }
     * })
     * 
    **/
    create<T extends Controle_acessoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_acessoCreateArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Controle_acesso.
     * @param {Controle_acessoDeleteArgs} args - Arguments to delete one Controle_acesso.
     * @example
     * // Delete one Controle_acesso
     * const Controle_acesso = await prisma.controle_acesso.delete({
     *   where: {
     *     // ... filter to delete one Controle_acesso
     *   }
     * })
     * 
    **/
    delete<T extends Controle_acessoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_acessoDeleteArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Controle_acesso.
     * @param {Controle_acessoUpdateArgs} args - Arguments to update one Controle_acesso.
     * @example
     * // Update one Controle_acesso
     * const controle_acesso = await prisma.controle_acesso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Controle_acessoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_acessoUpdateArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Controle_acessos.
     * @param {Controle_acessoDeleteManyArgs} args - Arguments to filter Controle_acessos to delete.
     * @example
     * // Delete a few Controle_acessos
     * const { count } = await prisma.controle_acesso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Controle_acessoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_acessoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controle_acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controle_acessos
     * const controle_acesso = await prisma.controle_acesso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Controle_acessoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_acessoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Controle_acesso.
     * @param {Controle_acessoUpsertArgs} args - Arguments to update or create a Controle_acesso.
     * @example
     * // Update or create a Controle_acesso
     * const controle_acesso = await prisma.controle_acesso.upsert({
     *   create: {
     *     // ... data to create a Controle_acesso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controle_acesso we want to update
     *   }
     * })
    **/
    upsert<T extends Controle_acessoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_acessoUpsertArgs<ExtArgs>>
    ): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Controle_acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoCountArgs} args - Arguments to filter Controle_acessos to count.
     * @example
     * // Count the number of Controle_acessos
     * const count = await prisma.controle_acesso.count({
     *   where: {
     *     // ... the filter for the Controle_acessos we want to count
     *   }
     * })
    **/
    count<T extends Controle_acessoCountArgs>(
      args?: Subset<T, Controle_acessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Controle_acessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controle_acesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Controle_acessoAggregateArgs>(args: Subset<T, Controle_acessoAggregateArgs>): Prisma.PrismaPromise<GetControle_acessoAggregateType<T>>

    /**
     * Group by Controle_acesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_acessoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Controle_acessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Controle_acessoGroupByArgs['orderBy'] }
        : { orderBy?: Controle_acessoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Controle_acessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControle_acessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controle_acesso model
   */
  readonly fields: Controle_acessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controle_acesso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Controle_acessoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    paciente<T extends Controle_acesso$pacienteArgs<ExtArgs> = {}>(args?: Subset<T, Controle_acesso$pacienteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'findMany'> | Null>;

    anamnese<T extends Controle_acesso$anamneseArgs<ExtArgs> = {}>(args?: Subset<T, Controle_acesso$anamneseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'findMany'> | Null>;

    agendamento<T extends Controle_acesso$agendamentoArgs<ExtArgs> = {}>(args?: Subset<T, Controle_acesso$agendamentoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'findMany'> | Null>;

    consulta<T extends Controle_acesso$consultaArgs<ExtArgs> = {}>(args?: Subset<T, Controle_acesso$consultaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'findMany'> | Null>;

    usuario<T extends Controle_acesso$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Controle_acesso$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Controle_acesso model
   */ 
  interface Controle_acessoFieldRefs {
    readonly id: FieldRef<"Controle_acesso", 'Int'>
    readonly created_at: FieldRef<"Controle_acesso", 'DateTime'>
    readonly updated_at: FieldRef<"Controle_acesso", 'DateTime'>
    readonly deleted_at: FieldRef<"Controle_acesso", 'DateTime'>
    readonly is_active: FieldRef<"Controle_acesso", 'Boolean'>
    readonly usuario_id: FieldRef<"Controle_acesso", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Controle_acesso findUnique
   */
  export type Controle_acessoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_acesso to fetch.
     */
    where: Controle_acessoWhereUniqueInput
  }


  /**
   * Controle_acesso findUniqueOrThrow
   */
  export type Controle_acessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_acesso to fetch.
     */
    where: Controle_acessoWhereUniqueInput
  }


  /**
   * Controle_acesso findFirst
   */
  export type Controle_acessoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_acesso to fetch.
     */
    where?: Controle_acessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_acessos to fetch.
     */
    orderBy?: Controle_acessoOrderByWithRelationInput | Controle_acessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_acessos.
     */
    cursor?: Controle_acessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_acessos.
     */
    distinct?: Controle_acessoScalarFieldEnum | Controle_acessoScalarFieldEnum[]
  }


  /**
   * Controle_acesso findFirstOrThrow
   */
  export type Controle_acessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_acesso to fetch.
     */
    where?: Controle_acessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_acessos to fetch.
     */
    orderBy?: Controle_acessoOrderByWithRelationInput | Controle_acessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_acessos.
     */
    cursor?: Controle_acessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_acessos.
     */
    distinct?: Controle_acessoScalarFieldEnum | Controle_acessoScalarFieldEnum[]
  }


  /**
   * Controle_acesso findMany
   */
  export type Controle_acessoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_acessos to fetch.
     */
    where?: Controle_acessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_acessos to fetch.
     */
    orderBy?: Controle_acessoOrderByWithRelationInput | Controle_acessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controle_acessos.
     */
    cursor?: Controle_acessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_acessos.
     */
    skip?: number
    distinct?: Controle_acessoScalarFieldEnum | Controle_acessoScalarFieldEnum[]
  }


  /**
   * Controle_acesso create
   */
  export type Controle_acessoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * The data needed to create a Controle_acesso.
     */
    data: XOR<Controle_acessoCreateInput, Controle_acessoUncheckedCreateInput>
  }


  /**
   * Controle_acesso update
   */
  export type Controle_acessoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * The data needed to update a Controle_acesso.
     */
    data: XOR<Controle_acessoUpdateInput, Controle_acessoUncheckedUpdateInput>
    /**
     * Choose, which Controle_acesso to update.
     */
    where: Controle_acessoWhereUniqueInput
  }


  /**
   * Controle_acesso updateMany
   */
  export type Controle_acessoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controle_acessos.
     */
    data: XOR<Controle_acessoUpdateManyMutationInput, Controle_acessoUncheckedUpdateManyInput>
    /**
     * Filter which Controle_acessos to update
     */
    where?: Controle_acessoWhereInput
  }


  /**
   * Controle_acesso upsert
   */
  export type Controle_acessoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * The filter to search for the Controle_acesso to update in case it exists.
     */
    where: Controle_acessoWhereUniqueInput
    /**
     * In case the Controle_acesso found by the `where` argument doesn't exist, create a new Controle_acesso with this data.
     */
    create: XOR<Controle_acessoCreateInput, Controle_acessoUncheckedCreateInput>
    /**
     * In case the Controle_acesso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Controle_acessoUpdateInput, Controle_acessoUncheckedUpdateInput>
  }


  /**
   * Controle_acesso delete
   */
  export type Controle_acessoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    /**
     * Filter which Controle_acesso to delete.
     */
    where: Controle_acessoWhereUniqueInput
  }


  /**
   * Controle_acesso deleteMany
   */
  export type Controle_acessoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_acessos to delete
     */
    where?: Controle_acessoWhereInput
  }


  /**
   * Controle_acesso.paciente
   */
  export type Controle_acesso$pacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    where?: Controle_pacienteWhereInput
    orderBy?: Controle_pacienteOrderByWithRelationInput | Controle_pacienteOrderByWithRelationInput[]
    cursor?: Controle_pacienteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Controle_pacienteScalarFieldEnum | Controle_pacienteScalarFieldEnum[]
  }


  /**
   * Controle_acesso.anamnese
   */
  export type Controle_acesso$anamneseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    where?: Controle_anamneseWhereInput
    orderBy?: Controle_anamneseOrderByWithRelationInput | Controle_anamneseOrderByWithRelationInput[]
    cursor?: Controle_anamneseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Controle_anamneseScalarFieldEnum | Controle_anamneseScalarFieldEnum[]
  }


  /**
   * Controle_acesso.agendamento
   */
  export type Controle_acesso$agendamentoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    where?: Controle_agendamentoWhereInput
    orderBy?: Controle_agendamentoOrderByWithRelationInput | Controle_agendamentoOrderByWithRelationInput[]
    cursor?: Controle_agendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Controle_agendamentoScalarFieldEnum | Controle_agendamentoScalarFieldEnum[]
  }


  /**
   * Controle_acesso.consulta
   */
  export type Controle_acesso$consultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    where?: Controle_consultaWhereInput
    orderBy?: Controle_consultaOrderByWithRelationInput | Controle_consultaOrderByWithRelationInput[]
    cursor?: Controle_consultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Controle_consultaScalarFieldEnum | Controle_consultaScalarFieldEnum[]
  }


  /**
   * Controle_acesso.usuario
   */
  export type Controle_acesso$usuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }


  /**
   * Controle_acesso without action
   */
  export type Controle_acessoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
  }



  /**
   * Model Controle_paciente
   */

  export type AggregateControle_paciente = {
    _count: Controle_pacienteCountAggregateOutputType | null
    _avg: Controle_pacienteAvgAggregateOutputType | null
    _sum: Controle_pacienteSumAggregateOutputType | null
    _min: Controle_pacienteMinAggregateOutputType | null
    _max: Controle_pacienteMaxAggregateOutputType | null
  }

  export type Controle_pacienteAvgAggregateOutputType = {
    id: number | null
    controle_id: number | null
  }

  export type Controle_pacienteSumAggregateOutputType = {
    id: number | null
    controle_id: number | null
  }

  export type Controle_pacienteMinAggregateOutputType = {
    id: number | null
    read_paciente: boolean | null
    create_paciente: boolean | null
    update_paciente: boolean | null
    delete_paciente: boolean | null
    controle_id: number | null
  }

  export type Controle_pacienteMaxAggregateOutputType = {
    id: number | null
    read_paciente: boolean | null
    create_paciente: boolean | null
    update_paciente: boolean | null
    delete_paciente: boolean | null
    controle_id: number | null
  }

  export type Controle_pacienteCountAggregateOutputType = {
    id: number
    read_paciente: number
    create_paciente: number
    update_paciente: number
    delete_paciente: number
    controle_id: number
    _all: number
  }


  export type Controle_pacienteAvgAggregateInputType = {
    id?: true
    controle_id?: true
  }

  export type Controle_pacienteSumAggregateInputType = {
    id?: true
    controle_id?: true
  }

  export type Controle_pacienteMinAggregateInputType = {
    id?: true
    read_paciente?: true
    create_paciente?: true
    update_paciente?: true
    delete_paciente?: true
    controle_id?: true
  }

  export type Controle_pacienteMaxAggregateInputType = {
    id?: true
    read_paciente?: true
    create_paciente?: true
    update_paciente?: true
    delete_paciente?: true
    controle_id?: true
  }

  export type Controle_pacienteCountAggregateInputType = {
    id?: true
    read_paciente?: true
    create_paciente?: true
    update_paciente?: true
    delete_paciente?: true
    controle_id?: true
    _all?: true
  }

  export type Controle_pacienteAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_paciente to aggregate.
     */
    where?: Controle_pacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_pacientes to fetch.
     */
    orderBy?: Controle_pacienteOrderByWithRelationInput | Controle_pacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Controle_pacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controle_pacientes
    **/
    _count?: true | Controle_pacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Controle_pacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Controle_pacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Controle_pacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Controle_pacienteMaxAggregateInputType
  }

  export type GetControle_pacienteAggregateType<T extends Controle_pacienteAggregateArgs> = {
        [P in keyof T & keyof AggregateControle_paciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControle_paciente[P]>
      : GetScalarType<T[P], AggregateControle_paciente[P]>
  }




  export type Controle_pacienteGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_pacienteWhereInput
    orderBy?: Controle_pacienteOrderByWithAggregationInput | Controle_pacienteOrderByWithAggregationInput[]
    by: Controle_pacienteScalarFieldEnum[] | Controle_pacienteScalarFieldEnum
    having?: Controle_pacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Controle_pacienteCountAggregateInputType | true
    _avg?: Controle_pacienteAvgAggregateInputType
    _sum?: Controle_pacienteSumAggregateInputType
    _min?: Controle_pacienteMinAggregateInputType
    _max?: Controle_pacienteMaxAggregateInputType
  }

  export type Controle_pacienteGroupByOutputType = {
    id: number
    read_paciente: boolean
    create_paciente: boolean
    update_paciente: boolean
    delete_paciente: boolean
    controle_id: number
    _count: Controle_pacienteCountAggregateOutputType | null
    _avg: Controle_pacienteAvgAggregateOutputType | null
    _sum: Controle_pacienteSumAggregateOutputType | null
    _min: Controle_pacienteMinAggregateOutputType | null
    _max: Controle_pacienteMaxAggregateOutputType | null
  }

  type GetControle_pacienteGroupByPayload<T extends Controle_pacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Controle_pacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Controle_pacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Controle_pacienteGroupByOutputType[P]>
            : GetScalarType<T[P], Controle_pacienteGroupByOutputType[P]>
        }
      >
    >


  export type Controle_pacienteSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    read_paciente?: boolean
    create_paciente?: boolean
    update_paciente?: boolean
    delete_paciente?: boolean
    controle_id?: boolean
    controle?: boolean | Controle_acessoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["controle_paciente"]>

  export type Controle_pacienteSelectScalar = {
    id?: boolean
    read_paciente?: boolean
    create_paciente?: boolean
    update_paciente?: boolean
    delete_paciente?: boolean
    controle_id?: boolean
  }

  export type Controle_pacienteInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    controle?: boolean | Controle_acessoDefaultArgs<ExtArgs>
  }


  export type $Controle_pacientePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Controle_paciente"
    objects: {
      controle: Prisma.$Controle_acessoPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      read_paciente: boolean
      create_paciente: boolean
      update_paciente: boolean
      delete_paciente: boolean
      controle_id: number
    }, ExtArgs["result"]["controle_paciente"]>
    composites: {}
  }


  type Controle_pacienteGetPayload<S extends boolean | null | undefined | Controle_pacienteDefaultArgs> = $Result.GetResult<Prisma.$Controle_pacientePayload, S>

  type Controle_pacienteCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Controle_pacienteFindManyArgs, 'select' | 'include'> & {
      select?: Controle_pacienteCountAggregateInputType | true
    }

  export interface Controle_pacienteDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controle_paciente'], meta: { name: 'Controle_paciente' } }
    /**
     * Find zero or one Controle_paciente that matches the filter.
     * @param {Controle_pacienteFindUniqueArgs} args - Arguments to find a Controle_paciente
     * @example
     * // Get one Controle_paciente
     * const controle_paciente = await prisma.controle_paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Controle_pacienteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_pacienteFindUniqueArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Controle_paciente that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Controle_pacienteFindUniqueOrThrowArgs} args - Arguments to find a Controle_paciente
     * @example
     * // Get one Controle_paciente
     * const controle_paciente = await prisma.controle_paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Controle_pacienteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_pacienteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Controle_paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteFindFirstArgs} args - Arguments to find a Controle_paciente
     * @example
     * // Get one Controle_paciente
     * const controle_paciente = await prisma.controle_paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Controle_pacienteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_pacienteFindFirstArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Controle_paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteFindFirstOrThrowArgs} args - Arguments to find a Controle_paciente
     * @example
     * // Get one Controle_paciente
     * const controle_paciente = await prisma.controle_paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Controle_pacienteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_pacienteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Controle_pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controle_pacientes
     * const controle_pacientes = await prisma.controle_paciente.findMany()
     * 
     * // Get first 10 Controle_pacientes
     * const controle_pacientes = await prisma.controle_paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controle_pacienteWithIdOnly = await prisma.controle_paciente.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Controle_pacienteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_pacienteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Controle_paciente.
     * @param {Controle_pacienteCreateArgs} args - Arguments to create a Controle_paciente.
     * @example
     * // Create one Controle_paciente
     * const Controle_paciente = await prisma.controle_paciente.create({
     *   data: {
     *     // ... data to create a Controle_paciente
     *   }
     * })
     * 
    **/
    create<T extends Controle_pacienteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_pacienteCreateArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Controle_paciente.
     * @param {Controle_pacienteDeleteArgs} args - Arguments to delete one Controle_paciente.
     * @example
     * // Delete one Controle_paciente
     * const Controle_paciente = await prisma.controle_paciente.delete({
     *   where: {
     *     // ... filter to delete one Controle_paciente
     *   }
     * })
     * 
    **/
    delete<T extends Controle_pacienteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_pacienteDeleteArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Controle_paciente.
     * @param {Controle_pacienteUpdateArgs} args - Arguments to update one Controle_paciente.
     * @example
     * // Update one Controle_paciente
     * const controle_paciente = await prisma.controle_paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Controle_pacienteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_pacienteUpdateArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Controle_pacientes.
     * @param {Controle_pacienteDeleteManyArgs} args - Arguments to filter Controle_pacientes to delete.
     * @example
     * // Delete a few Controle_pacientes
     * const { count } = await prisma.controle_paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Controle_pacienteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_pacienteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controle_pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controle_pacientes
     * const controle_paciente = await prisma.controle_paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Controle_pacienteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_pacienteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Controle_paciente.
     * @param {Controle_pacienteUpsertArgs} args - Arguments to update or create a Controle_paciente.
     * @example
     * // Update or create a Controle_paciente
     * const controle_paciente = await prisma.controle_paciente.upsert({
     *   create: {
     *     // ... data to create a Controle_paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controle_paciente we want to update
     *   }
     * })
    **/
    upsert<T extends Controle_pacienteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_pacienteUpsertArgs<ExtArgs>>
    ): Prisma__Controle_pacienteClient<$Result.GetResult<Prisma.$Controle_pacientePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Controle_pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteCountArgs} args - Arguments to filter Controle_pacientes to count.
     * @example
     * // Count the number of Controle_pacientes
     * const count = await prisma.controle_paciente.count({
     *   where: {
     *     // ... the filter for the Controle_pacientes we want to count
     *   }
     * })
    **/
    count<T extends Controle_pacienteCountArgs>(
      args?: Subset<T, Controle_pacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Controle_pacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controle_paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Controle_pacienteAggregateArgs>(args: Subset<T, Controle_pacienteAggregateArgs>): Prisma.PrismaPromise<GetControle_pacienteAggregateType<T>>

    /**
     * Group by Controle_paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_pacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Controle_pacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Controle_pacienteGroupByArgs['orderBy'] }
        : { orderBy?: Controle_pacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Controle_pacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControle_pacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controle_paciente model
   */
  readonly fields: Controle_pacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controle_paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Controle_pacienteClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controle<T extends Controle_acessoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Controle_acessoDefaultArgs<ExtArgs>>): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Controle_paciente model
   */ 
  interface Controle_pacienteFieldRefs {
    readonly id: FieldRef<"Controle_paciente", 'Int'>
    readonly read_paciente: FieldRef<"Controle_paciente", 'Boolean'>
    readonly create_paciente: FieldRef<"Controle_paciente", 'Boolean'>
    readonly update_paciente: FieldRef<"Controle_paciente", 'Boolean'>
    readonly delete_paciente: FieldRef<"Controle_paciente", 'Boolean'>
    readonly controle_id: FieldRef<"Controle_paciente", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Controle_paciente findUnique
   */
  export type Controle_pacienteFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * Filter, which Controle_paciente to fetch.
     */
    where: Controle_pacienteWhereUniqueInput
  }


  /**
   * Controle_paciente findUniqueOrThrow
   */
  export type Controle_pacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * Filter, which Controle_paciente to fetch.
     */
    where: Controle_pacienteWhereUniqueInput
  }


  /**
   * Controle_paciente findFirst
   */
  export type Controle_pacienteFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * Filter, which Controle_paciente to fetch.
     */
    where?: Controle_pacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_pacientes to fetch.
     */
    orderBy?: Controle_pacienteOrderByWithRelationInput | Controle_pacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_pacientes.
     */
    cursor?: Controle_pacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_pacientes.
     */
    distinct?: Controle_pacienteScalarFieldEnum | Controle_pacienteScalarFieldEnum[]
  }


  /**
   * Controle_paciente findFirstOrThrow
   */
  export type Controle_pacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * Filter, which Controle_paciente to fetch.
     */
    where?: Controle_pacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_pacientes to fetch.
     */
    orderBy?: Controle_pacienteOrderByWithRelationInput | Controle_pacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_pacientes.
     */
    cursor?: Controle_pacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_pacientes.
     */
    distinct?: Controle_pacienteScalarFieldEnum | Controle_pacienteScalarFieldEnum[]
  }


  /**
   * Controle_paciente findMany
   */
  export type Controle_pacienteFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * Filter, which Controle_pacientes to fetch.
     */
    where?: Controle_pacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_pacientes to fetch.
     */
    orderBy?: Controle_pacienteOrderByWithRelationInput | Controle_pacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controle_pacientes.
     */
    cursor?: Controle_pacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_pacientes.
     */
    skip?: number
    distinct?: Controle_pacienteScalarFieldEnum | Controle_pacienteScalarFieldEnum[]
  }


  /**
   * Controle_paciente create
   */
  export type Controle_pacienteCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Controle_paciente.
     */
    data: XOR<Controle_pacienteCreateInput, Controle_pacienteUncheckedCreateInput>
  }


  /**
   * Controle_paciente update
   */
  export type Controle_pacienteUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Controle_paciente.
     */
    data: XOR<Controle_pacienteUpdateInput, Controle_pacienteUncheckedUpdateInput>
    /**
     * Choose, which Controle_paciente to update.
     */
    where: Controle_pacienteWhereUniqueInput
  }


  /**
   * Controle_paciente updateMany
   */
  export type Controle_pacienteUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controle_pacientes.
     */
    data: XOR<Controle_pacienteUpdateManyMutationInput, Controle_pacienteUncheckedUpdateManyInput>
    /**
     * Filter which Controle_pacientes to update
     */
    where?: Controle_pacienteWhereInput
  }


  /**
   * Controle_paciente upsert
   */
  export type Controle_pacienteUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Controle_paciente to update in case it exists.
     */
    where: Controle_pacienteWhereUniqueInput
    /**
     * In case the Controle_paciente found by the `where` argument doesn't exist, create a new Controle_paciente with this data.
     */
    create: XOR<Controle_pacienteCreateInput, Controle_pacienteUncheckedCreateInput>
    /**
     * In case the Controle_paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Controle_pacienteUpdateInput, Controle_pacienteUncheckedUpdateInput>
  }


  /**
   * Controle_paciente delete
   */
  export type Controle_pacienteDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
    /**
     * Filter which Controle_paciente to delete.
     */
    where: Controle_pacienteWhereUniqueInput
  }


  /**
   * Controle_paciente deleteMany
   */
  export type Controle_pacienteDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_pacientes to delete
     */
    where?: Controle_pacienteWhereInput
  }


  /**
   * Controle_paciente without action
   */
  export type Controle_pacienteDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_paciente
     */
    select?: Controle_pacienteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_pacienteInclude<ExtArgs> | null
  }



  /**
   * Model Controle_anamnese
   */

  export type AggregateControle_anamnese = {
    _count: Controle_anamneseCountAggregateOutputType | null
    _avg: Controle_anamneseAvgAggregateOutputType | null
    _sum: Controle_anamneseSumAggregateOutputType | null
    _min: Controle_anamneseMinAggregateOutputType | null
    _max: Controle_anamneseMaxAggregateOutputType | null
  }

  export type Controle_anamneseAvgAggregateOutputType = {
    id: number | null
    controle_id: number | null
  }

  export type Controle_anamneseSumAggregateOutputType = {
    id: number | null
    controle_id: number | null
  }

  export type Controle_anamneseMinAggregateOutputType = {
    id: number | null
    create_anamnese: boolean | null
    update_anamnese: boolean | null
    read_anamnese: boolean | null
    delete_anamnese: boolean | null
    controle_id: number | null
  }

  export type Controle_anamneseMaxAggregateOutputType = {
    id: number | null
    create_anamnese: boolean | null
    update_anamnese: boolean | null
    read_anamnese: boolean | null
    delete_anamnese: boolean | null
    controle_id: number | null
  }

  export type Controle_anamneseCountAggregateOutputType = {
    id: number
    create_anamnese: number
    update_anamnese: number
    read_anamnese: number
    delete_anamnese: number
    controle_id: number
    _all: number
  }


  export type Controle_anamneseAvgAggregateInputType = {
    id?: true
    controle_id?: true
  }

  export type Controle_anamneseSumAggregateInputType = {
    id?: true
    controle_id?: true
  }

  export type Controle_anamneseMinAggregateInputType = {
    id?: true
    create_anamnese?: true
    update_anamnese?: true
    read_anamnese?: true
    delete_anamnese?: true
    controle_id?: true
  }

  export type Controle_anamneseMaxAggregateInputType = {
    id?: true
    create_anamnese?: true
    update_anamnese?: true
    read_anamnese?: true
    delete_anamnese?: true
    controle_id?: true
  }

  export type Controle_anamneseCountAggregateInputType = {
    id?: true
    create_anamnese?: true
    update_anamnese?: true
    read_anamnese?: true
    delete_anamnese?: true
    controle_id?: true
    _all?: true
  }

  export type Controle_anamneseAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_anamnese to aggregate.
     */
    where?: Controle_anamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_anamnese to fetch.
     */
    orderBy?: Controle_anamneseOrderByWithRelationInput | Controle_anamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Controle_anamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_anamnese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controle_anamnese
    **/
    _count?: true | Controle_anamneseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Controle_anamneseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Controle_anamneseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Controle_anamneseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Controle_anamneseMaxAggregateInputType
  }

  export type GetControle_anamneseAggregateType<T extends Controle_anamneseAggregateArgs> = {
        [P in keyof T & keyof AggregateControle_anamnese]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControle_anamnese[P]>
      : GetScalarType<T[P], AggregateControle_anamnese[P]>
  }




  export type Controle_anamneseGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_anamneseWhereInput
    orderBy?: Controle_anamneseOrderByWithAggregationInput | Controle_anamneseOrderByWithAggregationInput[]
    by: Controle_anamneseScalarFieldEnum[] | Controle_anamneseScalarFieldEnum
    having?: Controle_anamneseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Controle_anamneseCountAggregateInputType | true
    _avg?: Controle_anamneseAvgAggregateInputType
    _sum?: Controle_anamneseSumAggregateInputType
    _min?: Controle_anamneseMinAggregateInputType
    _max?: Controle_anamneseMaxAggregateInputType
  }

  export type Controle_anamneseGroupByOutputType = {
    id: number
    create_anamnese: boolean
    update_anamnese: boolean
    read_anamnese: boolean
    delete_anamnese: boolean
    controle_id: number | null
    _count: Controle_anamneseCountAggregateOutputType | null
    _avg: Controle_anamneseAvgAggregateOutputType | null
    _sum: Controle_anamneseSumAggregateOutputType | null
    _min: Controle_anamneseMinAggregateOutputType | null
    _max: Controle_anamneseMaxAggregateOutputType | null
  }

  type GetControle_anamneseGroupByPayload<T extends Controle_anamneseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Controle_anamneseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Controle_anamneseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Controle_anamneseGroupByOutputType[P]>
            : GetScalarType<T[P], Controle_anamneseGroupByOutputType[P]>
        }
      >
    >


  export type Controle_anamneseSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    create_anamnese?: boolean
    update_anamnese?: boolean
    read_anamnese?: boolean
    delete_anamnese?: boolean
    controle_id?: boolean
    controle?: boolean | Controle_anamnese$controleArgs<ExtArgs>
  }, ExtArgs["result"]["controle_anamnese"]>

  export type Controle_anamneseSelectScalar = {
    id?: boolean
    create_anamnese?: boolean
    update_anamnese?: boolean
    read_anamnese?: boolean
    delete_anamnese?: boolean
    controle_id?: boolean
  }

  export type Controle_anamneseInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    controle?: boolean | Controle_anamnese$controleArgs<ExtArgs>
  }


  export type $Controle_anamnesePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Controle_anamnese"
    objects: {
      controle: Prisma.$Controle_acessoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      create_anamnese: boolean
      update_anamnese: boolean
      read_anamnese: boolean
      delete_anamnese: boolean
      controle_id: number | null
    }, ExtArgs["result"]["controle_anamnese"]>
    composites: {}
  }


  type Controle_anamneseGetPayload<S extends boolean | null | undefined | Controle_anamneseDefaultArgs> = $Result.GetResult<Prisma.$Controle_anamnesePayload, S>

  type Controle_anamneseCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Controle_anamneseFindManyArgs, 'select' | 'include'> & {
      select?: Controle_anamneseCountAggregateInputType | true
    }

  export interface Controle_anamneseDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controle_anamnese'], meta: { name: 'Controle_anamnese' } }
    /**
     * Find zero or one Controle_anamnese that matches the filter.
     * @param {Controle_anamneseFindUniqueArgs} args - Arguments to find a Controle_anamnese
     * @example
     * // Get one Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Controle_anamneseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_anamneseFindUniqueArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Controle_anamnese that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Controle_anamneseFindUniqueOrThrowArgs} args - Arguments to find a Controle_anamnese
     * @example
     * // Get one Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Controle_anamneseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_anamneseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Controle_anamnese that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseFindFirstArgs} args - Arguments to find a Controle_anamnese
     * @example
     * // Get one Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Controle_anamneseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_anamneseFindFirstArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Controle_anamnese that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseFindFirstOrThrowArgs} args - Arguments to find a Controle_anamnese
     * @example
     * // Get one Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Controle_anamneseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_anamneseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Controle_anamnese that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.findMany()
     * 
     * // Get first 10 Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controle_anamneseWithIdOnly = await prisma.controle_anamnese.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Controle_anamneseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_anamneseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Controle_anamnese.
     * @param {Controle_anamneseCreateArgs} args - Arguments to create a Controle_anamnese.
     * @example
     * // Create one Controle_anamnese
     * const Controle_anamnese = await prisma.controle_anamnese.create({
     *   data: {
     *     // ... data to create a Controle_anamnese
     *   }
     * })
     * 
    **/
    create<T extends Controle_anamneseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_anamneseCreateArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Controle_anamnese.
     * @param {Controle_anamneseDeleteArgs} args - Arguments to delete one Controle_anamnese.
     * @example
     * // Delete one Controle_anamnese
     * const Controle_anamnese = await prisma.controle_anamnese.delete({
     *   where: {
     *     // ... filter to delete one Controle_anamnese
     *   }
     * })
     * 
    **/
    delete<T extends Controle_anamneseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_anamneseDeleteArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Controle_anamnese.
     * @param {Controle_anamneseUpdateArgs} args - Arguments to update one Controle_anamnese.
     * @example
     * // Update one Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Controle_anamneseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_anamneseUpdateArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Controle_anamnese.
     * @param {Controle_anamneseDeleteManyArgs} args - Arguments to filter Controle_anamnese to delete.
     * @example
     * // Delete a few Controle_anamnese
     * const { count } = await prisma.controle_anamnese.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Controle_anamneseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_anamneseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controle_anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Controle_anamneseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_anamneseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Controle_anamnese.
     * @param {Controle_anamneseUpsertArgs} args - Arguments to update or create a Controle_anamnese.
     * @example
     * // Update or create a Controle_anamnese
     * const controle_anamnese = await prisma.controle_anamnese.upsert({
     *   create: {
     *     // ... data to create a Controle_anamnese
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controle_anamnese we want to update
     *   }
     * })
    **/
    upsert<T extends Controle_anamneseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_anamneseUpsertArgs<ExtArgs>>
    ): Prisma__Controle_anamneseClient<$Result.GetResult<Prisma.$Controle_anamnesePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Controle_anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseCountArgs} args - Arguments to filter Controle_anamnese to count.
     * @example
     * // Count the number of Controle_anamnese
     * const count = await prisma.controle_anamnese.count({
     *   where: {
     *     // ... the filter for the Controle_anamnese we want to count
     *   }
     * })
    **/
    count<T extends Controle_anamneseCountArgs>(
      args?: Subset<T, Controle_anamneseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Controle_anamneseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controle_anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Controle_anamneseAggregateArgs>(args: Subset<T, Controle_anamneseAggregateArgs>): Prisma.PrismaPromise<GetControle_anamneseAggregateType<T>>

    /**
     * Group by Controle_anamnese.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_anamneseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Controle_anamneseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Controle_anamneseGroupByArgs['orderBy'] }
        : { orderBy?: Controle_anamneseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Controle_anamneseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControle_anamneseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controle_anamnese model
   */
  readonly fields: Controle_anamneseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controle_anamnese.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Controle_anamneseClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controle<T extends Controle_anamnese$controleArgs<ExtArgs> = {}>(args?: Subset<T, Controle_anamnese$controleArgs<ExtArgs>>): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Controle_anamnese model
   */ 
  interface Controle_anamneseFieldRefs {
    readonly id: FieldRef<"Controle_anamnese", 'Int'>
    readonly create_anamnese: FieldRef<"Controle_anamnese", 'Boolean'>
    readonly update_anamnese: FieldRef<"Controle_anamnese", 'Boolean'>
    readonly read_anamnese: FieldRef<"Controle_anamnese", 'Boolean'>
    readonly delete_anamnese: FieldRef<"Controle_anamnese", 'Boolean'>
    readonly controle_id: FieldRef<"Controle_anamnese", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Controle_anamnese findUnique
   */
  export type Controle_anamneseFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * Filter, which Controle_anamnese to fetch.
     */
    where: Controle_anamneseWhereUniqueInput
  }


  /**
   * Controle_anamnese findUniqueOrThrow
   */
  export type Controle_anamneseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * Filter, which Controle_anamnese to fetch.
     */
    where: Controle_anamneseWhereUniqueInput
  }


  /**
   * Controle_anamnese findFirst
   */
  export type Controle_anamneseFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * Filter, which Controle_anamnese to fetch.
     */
    where?: Controle_anamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_anamnese to fetch.
     */
    orderBy?: Controle_anamneseOrderByWithRelationInput | Controle_anamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_anamnese.
     */
    cursor?: Controle_anamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_anamnese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_anamnese.
     */
    distinct?: Controle_anamneseScalarFieldEnum | Controle_anamneseScalarFieldEnum[]
  }


  /**
   * Controle_anamnese findFirstOrThrow
   */
  export type Controle_anamneseFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * Filter, which Controle_anamnese to fetch.
     */
    where?: Controle_anamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_anamnese to fetch.
     */
    orderBy?: Controle_anamneseOrderByWithRelationInput | Controle_anamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_anamnese.
     */
    cursor?: Controle_anamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_anamnese.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_anamnese.
     */
    distinct?: Controle_anamneseScalarFieldEnum | Controle_anamneseScalarFieldEnum[]
  }


  /**
   * Controle_anamnese findMany
   */
  export type Controle_anamneseFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * Filter, which Controle_anamnese to fetch.
     */
    where?: Controle_anamneseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_anamnese to fetch.
     */
    orderBy?: Controle_anamneseOrderByWithRelationInput | Controle_anamneseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controle_anamnese.
     */
    cursor?: Controle_anamneseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_anamnese from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_anamnese.
     */
    skip?: number
    distinct?: Controle_anamneseScalarFieldEnum | Controle_anamneseScalarFieldEnum[]
  }


  /**
   * Controle_anamnese create
   */
  export type Controle_anamneseCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * The data needed to create a Controle_anamnese.
     */
    data: XOR<Controle_anamneseCreateInput, Controle_anamneseUncheckedCreateInput>
  }


  /**
   * Controle_anamnese update
   */
  export type Controle_anamneseUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * The data needed to update a Controle_anamnese.
     */
    data: XOR<Controle_anamneseUpdateInput, Controle_anamneseUncheckedUpdateInput>
    /**
     * Choose, which Controle_anamnese to update.
     */
    where: Controle_anamneseWhereUniqueInput
  }


  /**
   * Controle_anamnese updateMany
   */
  export type Controle_anamneseUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controle_anamnese.
     */
    data: XOR<Controle_anamneseUpdateManyMutationInput, Controle_anamneseUncheckedUpdateManyInput>
    /**
     * Filter which Controle_anamnese to update
     */
    where?: Controle_anamneseWhereInput
  }


  /**
   * Controle_anamnese upsert
   */
  export type Controle_anamneseUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * The filter to search for the Controle_anamnese to update in case it exists.
     */
    where: Controle_anamneseWhereUniqueInput
    /**
     * In case the Controle_anamnese found by the `where` argument doesn't exist, create a new Controle_anamnese with this data.
     */
    create: XOR<Controle_anamneseCreateInput, Controle_anamneseUncheckedCreateInput>
    /**
     * In case the Controle_anamnese was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Controle_anamneseUpdateInput, Controle_anamneseUncheckedUpdateInput>
  }


  /**
   * Controle_anamnese delete
   */
  export type Controle_anamneseDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
    /**
     * Filter which Controle_anamnese to delete.
     */
    where: Controle_anamneseWhereUniqueInput
  }


  /**
   * Controle_anamnese deleteMany
   */
  export type Controle_anamneseDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_anamnese to delete
     */
    where?: Controle_anamneseWhereInput
  }


  /**
   * Controle_anamnese.controle
   */
  export type Controle_anamnese$controleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    where?: Controle_acessoWhereInput
  }


  /**
   * Controle_anamnese without action
   */
  export type Controle_anamneseDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_anamnese
     */
    select?: Controle_anamneseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_anamneseInclude<ExtArgs> | null
  }



  /**
   * Model Controle_agendamento
   */

  export type AggregateControle_agendamento = {
    _count: Controle_agendamentoCountAggregateOutputType | null
    _avg: Controle_agendamentoAvgAggregateOutputType | null
    _sum: Controle_agendamentoSumAggregateOutputType | null
    _min: Controle_agendamentoMinAggregateOutputType | null
    _max: Controle_agendamentoMaxAggregateOutputType | null
  }

  export type Controle_agendamentoAvgAggregateOutputType = {
    id: number | null
    control_id: number | null
  }

  export type Controle_agendamentoSumAggregateOutputType = {
    id: number | null
    control_id: number | null
  }

  export type Controle_agendamentoMinAggregateOutputType = {
    id: number | null
    create_agendamento: boolean | null
    update_agendamento: boolean | null
    read_agendamento: boolean | null
    delete_agendamento: boolean | null
    control_id: number | null
  }

  export type Controle_agendamentoMaxAggregateOutputType = {
    id: number | null
    create_agendamento: boolean | null
    update_agendamento: boolean | null
    read_agendamento: boolean | null
    delete_agendamento: boolean | null
    control_id: number | null
  }

  export type Controle_agendamentoCountAggregateOutputType = {
    id: number
    create_agendamento: number
    update_agendamento: number
    read_agendamento: number
    delete_agendamento: number
    control_id: number
    _all: number
  }


  export type Controle_agendamentoAvgAggregateInputType = {
    id?: true
    control_id?: true
  }

  export type Controle_agendamentoSumAggregateInputType = {
    id?: true
    control_id?: true
  }

  export type Controle_agendamentoMinAggregateInputType = {
    id?: true
    create_agendamento?: true
    update_agendamento?: true
    read_agendamento?: true
    delete_agendamento?: true
    control_id?: true
  }

  export type Controle_agendamentoMaxAggregateInputType = {
    id?: true
    create_agendamento?: true
    update_agendamento?: true
    read_agendamento?: true
    delete_agendamento?: true
    control_id?: true
  }

  export type Controle_agendamentoCountAggregateInputType = {
    id?: true
    create_agendamento?: true
    update_agendamento?: true
    read_agendamento?: true
    delete_agendamento?: true
    control_id?: true
    _all?: true
  }

  export type Controle_agendamentoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_agendamento to aggregate.
     */
    where?: Controle_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_agendamentos to fetch.
     */
    orderBy?: Controle_agendamentoOrderByWithRelationInput | Controle_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Controle_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controle_agendamentos
    **/
    _count?: true | Controle_agendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Controle_agendamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Controle_agendamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Controle_agendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Controle_agendamentoMaxAggregateInputType
  }

  export type GetControle_agendamentoAggregateType<T extends Controle_agendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateControle_agendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControle_agendamento[P]>
      : GetScalarType<T[P], AggregateControle_agendamento[P]>
  }




  export type Controle_agendamentoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_agendamentoWhereInput
    orderBy?: Controle_agendamentoOrderByWithAggregationInput | Controle_agendamentoOrderByWithAggregationInput[]
    by: Controle_agendamentoScalarFieldEnum[] | Controle_agendamentoScalarFieldEnum
    having?: Controle_agendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Controle_agendamentoCountAggregateInputType | true
    _avg?: Controle_agendamentoAvgAggregateInputType
    _sum?: Controle_agendamentoSumAggregateInputType
    _min?: Controle_agendamentoMinAggregateInputType
    _max?: Controle_agendamentoMaxAggregateInputType
  }

  export type Controle_agendamentoGroupByOutputType = {
    id: number
    create_agendamento: boolean
    update_agendamento: boolean
    read_agendamento: boolean
    delete_agendamento: boolean
    control_id: number | null
    _count: Controle_agendamentoCountAggregateOutputType | null
    _avg: Controle_agendamentoAvgAggregateOutputType | null
    _sum: Controle_agendamentoSumAggregateOutputType | null
    _min: Controle_agendamentoMinAggregateOutputType | null
    _max: Controle_agendamentoMaxAggregateOutputType | null
  }

  type GetControle_agendamentoGroupByPayload<T extends Controle_agendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Controle_agendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Controle_agendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Controle_agendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], Controle_agendamentoGroupByOutputType[P]>
        }
      >
    >


  export type Controle_agendamentoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    create_agendamento?: boolean
    update_agendamento?: boolean
    read_agendamento?: boolean
    delete_agendamento?: boolean
    control_id?: boolean
    controle?: boolean | Controle_agendamento$controleArgs<ExtArgs>
  }, ExtArgs["result"]["controle_agendamento"]>

  export type Controle_agendamentoSelectScalar = {
    id?: boolean
    create_agendamento?: boolean
    update_agendamento?: boolean
    read_agendamento?: boolean
    delete_agendamento?: boolean
    control_id?: boolean
  }

  export type Controle_agendamentoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    controle?: boolean | Controle_agendamento$controleArgs<ExtArgs>
  }


  export type $Controle_agendamentoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Controle_agendamento"
    objects: {
      controle: Prisma.$Controle_acessoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      create_agendamento: boolean
      update_agendamento: boolean
      read_agendamento: boolean
      delete_agendamento: boolean
      control_id: number | null
    }, ExtArgs["result"]["controle_agendamento"]>
    composites: {}
  }


  type Controle_agendamentoGetPayload<S extends boolean | null | undefined | Controle_agendamentoDefaultArgs> = $Result.GetResult<Prisma.$Controle_agendamentoPayload, S>

  type Controle_agendamentoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Controle_agendamentoFindManyArgs, 'select' | 'include'> & {
      select?: Controle_agendamentoCountAggregateInputType | true
    }

  export interface Controle_agendamentoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controle_agendamento'], meta: { name: 'Controle_agendamento' } }
    /**
     * Find zero or one Controle_agendamento that matches the filter.
     * @param {Controle_agendamentoFindUniqueArgs} args - Arguments to find a Controle_agendamento
     * @example
     * // Get one Controle_agendamento
     * const controle_agendamento = await prisma.controle_agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Controle_agendamentoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_agendamentoFindUniqueArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Controle_agendamento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Controle_agendamentoFindUniqueOrThrowArgs} args - Arguments to find a Controle_agendamento
     * @example
     * // Get one Controle_agendamento
     * const controle_agendamento = await prisma.controle_agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Controle_agendamentoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_agendamentoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Controle_agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoFindFirstArgs} args - Arguments to find a Controle_agendamento
     * @example
     * // Get one Controle_agendamento
     * const controle_agendamento = await prisma.controle_agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Controle_agendamentoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_agendamentoFindFirstArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Controle_agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoFindFirstOrThrowArgs} args - Arguments to find a Controle_agendamento
     * @example
     * // Get one Controle_agendamento
     * const controle_agendamento = await prisma.controle_agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Controle_agendamentoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_agendamentoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Controle_agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controle_agendamentos
     * const controle_agendamentos = await prisma.controle_agendamento.findMany()
     * 
     * // Get first 10 Controle_agendamentos
     * const controle_agendamentos = await prisma.controle_agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controle_agendamentoWithIdOnly = await prisma.controle_agendamento.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Controle_agendamentoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_agendamentoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Controle_agendamento.
     * @param {Controle_agendamentoCreateArgs} args - Arguments to create a Controle_agendamento.
     * @example
     * // Create one Controle_agendamento
     * const Controle_agendamento = await prisma.controle_agendamento.create({
     *   data: {
     *     // ... data to create a Controle_agendamento
     *   }
     * })
     * 
    **/
    create<T extends Controle_agendamentoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_agendamentoCreateArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Controle_agendamento.
     * @param {Controle_agendamentoDeleteArgs} args - Arguments to delete one Controle_agendamento.
     * @example
     * // Delete one Controle_agendamento
     * const Controle_agendamento = await prisma.controle_agendamento.delete({
     *   where: {
     *     // ... filter to delete one Controle_agendamento
     *   }
     * })
     * 
    **/
    delete<T extends Controle_agendamentoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_agendamentoDeleteArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Controle_agendamento.
     * @param {Controle_agendamentoUpdateArgs} args - Arguments to update one Controle_agendamento.
     * @example
     * // Update one Controle_agendamento
     * const controle_agendamento = await prisma.controle_agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Controle_agendamentoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_agendamentoUpdateArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Controle_agendamentos.
     * @param {Controle_agendamentoDeleteManyArgs} args - Arguments to filter Controle_agendamentos to delete.
     * @example
     * // Delete a few Controle_agendamentos
     * const { count } = await prisma.controle_agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Controle_agendamentoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_agendamentoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controle_agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controle_agendamentos
     * const controle_agendamento = await prisma.controle_agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Controle_agendamentoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_agendamentoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Controle_agendamento.
     * @param {Controle_agendamentoUpsertArgs} args - Arguments to update or create a Controle_agendamento.
     * @example
     * // Update or create a Controle_agendamento
     * const controle_agendamento = await prisma.controle_agendamento.upsert({
     *   create: {
     *     // ... data to create a Controle_agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controle_agendamento we want to update
     *   }
     * })
    **/
    upsert<T extends Controle_agendamentoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_agendamentoUpsertArgs<ExtArgs>>
    ): Prisma__Controle_agendamentoClient<$Result.GetResult<Prisma.$Controle_agendamentoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Controle_agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoCountArgs} args - Arguments to filter Controle_agendamentos to count.
     * @example
     * // Count the number of Controle_agendamentos
     * const count = await prisma.controle_agendamento.count({
     *   where: {
     *     // ... the filter for the Controle_agendamentos we want to count
     *   }
     * })
    **/
    count<T extends Controle_agendamentoCountArgs>(
      args?: Subset<T, Controle_agendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Controle_agendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controle_agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Controle_agendamentoAggregateArgs>(args: Subset<T, Controle_agendamentoAggregateArgs>): Prisma.PrismaPromise<GetControle_agendamentoAggregateType<T>>

    /**
     * Group by Controle_agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_agendamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Controle_agendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Controle_agendamentoGroupByArgs['orderBy'] }
        : { orderBy?: Controle_agendamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Controle_agendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControle_agendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controle_agendamento model
   */
  readonly fields: Controle_agendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controle_agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Controle_agendamentoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controle<T extends Controle_agendamento$controleArgs<ExtArgs> = {}>(args?: Subset<T, Controle_agendamento$controleArgs<ExtArgs>>): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Controle_agendamento model
   */ 
  interface Controle_agendamentoFieldRefs {
    readonly id: FieldRef<"Controle_agendamento", 'Int'>
    readonly create_agendamento: FieldRef<"Controle_agendamento", 'Boolean'>
    readonly update_agendamento: FieldRef<"Controle_agendamento", 'Boolean'>
    readonly read_agendamento: FieldRef<"Controle_agendamento", 'Boolean'>
    readonly delete_agendamento: FieldRef<"Controle_agendamento", 'Boolean'>
    readonly control_id: FieldRef<"Controle_agendamento", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Controle_agendamento findUnique
   */
  export type Controle_agendamentoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_agendamento to fetch.
     */
    where: Controle_agendamentoWhereUniqueInput
  }


  /**
   * Controle_agendamento findUniqueOrThrow
   */
  export type Controle_agendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_agendamento to fetch.
     */
    where: Controle_agendamentoWhereUniqueInput
  }


  /**
   * Controle_agendamento findFirst
   */
  export type Controle_agendamentoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_agendamento to fetch.
     */
    where?: Controle_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_agendamentos to fetch.
     */
    orderBy?: Controle_agendamentoOrderByWithRelationInput | Controle_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_agendamentos.
     */
    cursor?: Controle_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_agendamentos.
     */
    distinct?: Controle_agendamentoScalarFieldEnum | Controle_agendamentoScalarFieldEnum[]
  }


  /**
   * Controle_agendamento findFirstOrThrow
   */
  export type Controle_agendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_agendamento to fetch.
     */
    where?: Controle_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_agendamentos to fetch.
     */
    orderBy?: Controle_agendamentoOrderByWithRelationInput | Controle_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_agendamentos.
     */
    cursor?: Controle_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_agendamentos.
     */
    distinct?: Controle_agendamentoScalarFieldEnum | Controle_agendamentoScalarFieldEnum[]
  }


  /**
   * Controle_agendamento findMany
   */
  export type Controle_agendamentoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Controle_agendamentos to fetch.
     */
    where?: Controle_agendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_agendamentos to fetch.
     */
    orderBy?: Controle_agendamentoOrderByWithRelationInput | Controle_agendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controle_agendamentos.
     */
    cursor?: Controle_agendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_agendamentos.
     */
    skip?: number
    distinct?: Controle_agendamentoScalarFieldEnum | Controle_agendamentoScalarFieldEnum[]
  }


  /**
   * Controle_agendamento create
   */
  export type Controle_agendamentoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Controle_agendamento.
     */
    data: XOR<Controle_agendamentoCreateInput, Controle_agendamentoUncheckedCreateInput>
  }


  /**
   * Controle_agendamento update
   */
  export type Controle_agendamentoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Controle_agendamento.
     */
    data: XOR<Controle_agendamentoUpdateInput, Controle_agendamentoUncheckedUpdateInput>
    /**
     * Choose, which Controle_agendamento to update.
     */
    where: Controle_agendamentoWhereUniqueInput
  }


  /**
   * Controle_agendamento updateMany
   */
  export type Controle_agendamentoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controle_agendamentos.
     */
    data: XOR<Controle_agendamentoUpdateManyMutationInput, Controle_agendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Controle_agendamentos to update
     */
    where?: Controle_agendamentoWhereInput
  }


  /**
   * Controle_agendamento upsert
   */
  export type Controle_agendamentoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Controle_agendamento to update in case it exists.
     */
    where: Controle_agendamentoWhereUniqueInput
    /**
     * In case the Controle_agendamento found by the `where` argument doesn't exist, create a new Controle_agendamento with this data.
     */
    create: XOR<Controle_agendamentoCreateInput, Controle_agendamentoUncheckedCreateInput>
    /**
     * In case the Controle_agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Controle_agendamentoUpdateInput, Controle_agendamentoUncheckedUpdateInput>
  }


  /**
   * Controle_agendamento delete
   */
  export type Controle_agendamentoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
    /**
     * Filter which Controle_agendamento to delete.
     */
    where: Controle_agendamentoWhereUniqueInput
  }


  /**
   * Controle_agendamento deleteMany
   */
  export type Controle_agendamentoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_agendamentos to delete
     */
    where?: Controle_agendamentoWhereInput
  }


  /**
   * Controle_agendamento.controle
   */
  export type Controle_agendamento$controleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    where?: Controle_acessoWhereInput
  }


  /**
   * Controle_agendamento without action
   */
  export type Controle_agendamentoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_agendamento
     */
    select?: Controle_agendamentoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_agendamentoInclude<ExtArgs> | null
  }



  /**
   * Model Controle_consulta
   */

  export type AggregateControle_consulta = {
    _count: Controle_consultaCountAggregateOutputType | null
    _avg: Controle_consultaAvgAggregateOutputType | null
    _sum: Controle_consultaSumAggregateOutputType | null
    _min: Controle_consultaMinAggregateOutputType | null
    _max: Controle_consultaMaxAggregateOutputType | null
  }

  export type Controle_consultaAvgAggregateOutputType = {
    id: number | null
    controle_id: number | null
  }

  export type Controle_consultaSumAggregateOutputType = {
    id: number | null
    controle_id: number | null
  }

  export type Controle_consultaMinAggregateOutputType = {
    id: number | null
    create_consulta: boolean | null
    update_consulta: boolean | null
    read_consulta: boolean | null
    delete_consulta: boolean | null
    controle_id: number | null
  }

  export type Controle_consultaMaxAggregateOutputType = {
    id: number | null
    create_consulta: boolean | null
    update_consulta: boolean | null
    read_consulta: boolean | null
    delete_consulta: boolean | null
    controle_id: number | null
  }

  export type Controle_consultaCountAggregateOutputType = {
    id: number
    create_consulta: number
    update_consulta: number
    read_consulta: number
    delete_consulta: number
    controle_id: number
    _all: number
  }


  export type Controle_consultaAvgAggregateInputType = {
    id?: true
    controle_id?: true
  }

  export type Controle_consultaSumAggregateInputType = {
    id?: true
    controle_id?: true
  }

  export type Controle_consultaMinAggregateInputType = {
    id?: true
    create_consulta?: true
    update_consulta?: true
    read_consulta?: true
    delete_consulta?: true
    controle_id?: true
  }

  export type Controle_consultaMaxAggregateInputType = {
    id?: true
    create_consulta?: true
    update_consulta?: true
    read_consulta?: true
    delete_consulta?: true
    controle_id?: true
  }

  export type Controle_consultaCountAggregateInputType = {
    id?: true
    create_consulta?: true
    update_consulta?: true
    read_consulta?: true
    delete_consulta?: true
    controle_id?: true
    _all?: true
  }

  export type Controle_consultaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_consulta to aggregate.
     */
    where?: Controle_consultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_consultas to fetch.
     */
    orderBy?: Controle_consultaOrderByWithRelationInput | Controle_consultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Controle_consultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Controle_consultas
    **/
    _count?: true | Controle_consultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Controle_consultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Controle_consultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Controle_consultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Controle_consultaMaxAggregateInputType
  }

  export type GetControle_consultaAggregateType<T extends Controle_consultaAggregateArgs> = {
        [P in keyof T & keyof AggregateControle_consulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateControle_consulta[P]>
      : GetScalarType<T[P], AggregateControle_consulta[P]>
  }




  export type Controle_consultaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: Controle_consultaWhereInput
    orderBy?: Controle_consultaOrderByWithAggregationInput | Controle_consultaOrderByWithAggregationInput[]
    by: Controle_consultaScalarFieldEnum[] | Controle_consultaScalarFieldEnum
    having?: Controle_consultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Controle_consultaCountAggregateInputType | true
    _avg?: Controle_consultaAvgAggregateInputType
    _sum?: Controle_consultaSumAggregateInputType
    _min?: Controle_consultaMinAggregateInputType
    _max?: Controle_consultaMaxAggregateInputType
  }

  export type Controle_consultaGroupByOutputType = {
    id: number
    create_consulta: boolean
    update_consulta: boolean
    read_consulta: boolean
    delete_consulta: boolean
    controle_id: number | null
    _count: Controle_consultaCountAggregateOutputType | null
    _avg: Controle_consultaAvgAggregateOutputType | null
    _sum: Controle_consultaSumAggregateOutputType | null
    _min: Controle_consultaMinAggregateOutputType | null
    _max: Controle_consultaMaxAggregateOutputType | null
  }

  type GetControle_consultaGroupByPayload<T extends Controle_consultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Controle_consultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Controle_consultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Controle_consultaGroupByOutputType[P]>
            : GetScalarType<T[P], Controle_consultaGroupByOutputType[P]>
        }
      >
    >


  export type Controle_consultaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    create_consulta?: boolean
    update_consulta?: boolean
    read_consulta?: boolean
    delete_consulta?: boolean
    controle_id?: boolean
    controle?: boolean | Controle_consulta$controleArgs<ExtArgs>
  }, ExtArgs["result"]["controle_consulta"]>

  export type Controle_consultaSelectScalar = {
    id?: boolean
    create_consulta?: boolean
    update_consulta?: boolean
    read_consulta?: boolean
    delete_consulta?: boolean
    controle_id?: boolean
  }

  export type Controle_consultaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    controle?: boolean | Controle_consulta$controleArgs<ExtArgs>
  }


  export type $Controle_consultaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Controle_consulta"
    objects: {
      controle: Prisma.$Controle_acessoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: number
      create_consulta: boolean
      update_consulta: boolean
      read_consulta: boolean
      delete_consulta: boolean
      controle_id: number | null
    }, ExtArgs["result"]["controle_consulta"]>
    composites: {}
  }


  type Controle_consultaGetPayload<S extends boolean | null | undefined | Controle_consultaDefaultArgs> = $Result.GetResult<Prisma.$Controle_consultaPayload, S>

  type Controle_consultaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<Controle_consultaFindManyArgs, 'select' | 'include'> & {
      select?: Controle_consultaCountAggregateInputType | true
    }

  export interface Controle_consultaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Controle_consulta'], meta: { name: 'Controle_consulta' } }
    /**
     * Find zero or one Controle_consulta that matches the filter.
     * @param {Controle_consultaFindUniqueArgs} args - Arguments to find a Controle_consulta
     * @example
     * // Get one Controle_consulta
     * const controle_consulta = await prisma.controle_consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Controle_consultaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_consultaFindUniqueArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Controle_consulta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {Controle_consultaFindUniqueOrThrowArgs} args - Arguments to find a Controle_consulta
     * @example
     * // Get one Controle_consulta
     * const controle_consulta = await prisma.controle_consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Controle_consultaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_consultaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Controle_consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaFindFirstArgs} args - Arguments to find a Controle_consulta
     * @example
     * // Get one Controle_consulta
     * const controle_consulta = await prisma.controle_consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Controle_consultaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_consultaFindFirstArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Controle_consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaFindFirstOrThrowArgs} args - Arguments to find a Controle_consulta
     * @example
     * // Get one Controle_consulta
     * const controle_consulta = await prisma.controle_consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Controle_consultaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_consultaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Controle_consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Controle_consultas
     * const controle_consultas = await prisma.controle_consulta.findMany()
     * 
     * // Get first 10 Controle_consultas
     * const controle_consultas = await prisma.controle_consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const controle_consultaWithIdOnly = await prisma.controle_consulta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends Controle_consultaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_consultaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Controle_consulta.
     * @param {Controle_consultaCreateArgs} args - Arguments to create a Controle_consulta.
     * @example
     * // Create one Controle_consulta
     * const Controle_consulta = await prisma.controle_consulta.create({
     *   data: {
     *     // ... data to create a Controle_consulta
     *   }
     * })
     * 
    **/
    create<T extends Controle_consultaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_consultaCreateArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Controle_consulta.
     * @param {Controle_consultaDeleteArgs} args - Arguments to delete one Controle_consulta.
     * @example
     * // Delete one Controle_consulta
     * const Controle_consulta = await prisma.controle_consulta.delete({
     *   where: {
     *     // ... filter to delete one Controle_consulta
     *   }
     * })
     * 
    **/
    delete<T extends Controle_consultaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_consultaDeleteArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Controle_consulta.
     * @param {Controle_consultaUpdateArgs} args - Arguments to update one Controle_consulta.
     * @example
     * // Update one Controle_consulta
     * const controle_consulta = await prisma.controle_consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Controle_consultaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_consultaUpdateArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Controle_consultas.
     * @param {Controle_consultaDeleteManyArgs} args - Arguments to filter Controle_consultas to delete.
     * @example
     * // Delete a few Controle_consultas
     * const { count } = await prisma.controle_consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Controle_consultaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, Controle_consultaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Controle_consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Controle_consultas
     * const controle_consulta = await prisma.controle_consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Controle_consultaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_consultaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Controle_consulta.
     * @param {Controle_consultaUpsertArgs} args - Arguments to update or create a Controle_consulta.
     * @example
     * // Update or create a Controle_consulta
     * const controle_consulta = await prisma.controle_consulta.upsert({
     *   create: {
     *     // ... data to create a Controle_consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Controle_consulta we want to update
     *   }
     * })
    **/
    upsert<T extends Controle_consultaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, Controle_consultaUpsertArgs<ExtArgs>>
    ): Prisma__Controle_consultaClient<$Result.GetResult<Prisma.$Controle_consultaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Controle_consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaCountArgs} args - Arguments to filter Controle_consultas to count.
     * @example
     * // Count the number of Controle_consultas
     * const count = await prisma.controle_consulta.count({
     *   where: {
     *     // ... the filter for the Controle_consultas we want to count
     *   }
     * })
    **/
    count<T extends Controle_consultaCountArgs>(
      args?: Subset<T, Controle_consultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Controle_consultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Controle_consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Controle_consultaAggregateArgs>(args: Subset<T, Controle_consultaAggregateArgs>): Prisma.PrismaPromise<GetControle_consultaAggregateType<T>>

    /**
     * Group by Controle_consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Controle_consultaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Controle_consultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Controle_consultaGroupByArgs['orderBy'] }
        : { orderBy?: Controle_consultaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Controle_consultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetControle_consultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Controle_consulta model
   */
  readonly fields: Controle_consultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Controle_consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Controle_consultaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    controle<T extends Controle_consulta$controleArgs<ExtArgs> = {}>(args?: Subset<T, Controle_consulta$controleArgs<ExtArgs>>): Prisma__Controle_acessoClient<$Result.GetResult<Prisma.$Controle_acessoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Controle_consulta model
   */ 
  interface Controle_consultaFieldRefs {
    readonly id: FieldRef<"Controle_consulta", 'Int'>
    readonly create_consulta: FieldRef<"Controle_consulta", 'Boolean'>
    readonly update_consulta: FieldRef<"Controle_consulta", 'Boolean'>
    readonly read_consulta: FieldRef<"Controle_consulta", 'Boolean'>
    readonly delete_consulta: FieldRef<"Controle_consulta", 'Boolean'>
    readonly controle_id: FieldRef<"Controle_consulta", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Controle_consulta findUnique
   */
  export type Controle_consultaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * Filter, which Controle_consulta to fetch.
     */
    where: Controle_consultaWhereUniqueInput
  }


  /**
   * Controle_consulta findUniqueOrThrow
   */
  export type Controle_consultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * Filter, which Controle_consulta to fetch.
     */
    where: Controle_consultaWhereUniqueInput
  }


  /**
   * Controle_consulta findFirst
   */
  export type Controle_consultaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * Filter, which Controle_consulta to fetch.
     */
    where?: Controle_consultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_consultas to fetch.
     */
    orderBy?: Controle_consultaOrderByWithRelationInput | Controle_consultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_consultas.
     */
    cursor?: Controle_consultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_consultas.
     */
    distinct?: Controle_consultaScalarFieldEnum | Controle_consultaScalarFieldEnum[]
  }


  /**
   * Controle_consulta findFirstOrThrow
   */
  export type Controle_consultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * Filter, which Controle_consulta to fetch.
     */
    where?: Controle_consultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_consultas to fetch.
     */
    orderBy?: Controle_consultaOrderByWithRelationInput | Controle_consultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Controle_consultas.
     */
    cursor?: Controle_consultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Controle_consultas.
     */
    distinct?: Controle_consultaScalarFieldEnum | Controle_consultaScalarFieldEnum[]
  }


  /**
   * Controle_consulta findMany
   */
  export type Controle_consultaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * Filter, which Controle_consultas to fetch.
     */
    where?: Controle_consultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Controle_consultas to fetch.
     */
    orderBy?: Controle_consultaOrderByWithRelationInput | Controle_consultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Controle_consultas.
     */
    cursor?: Controle_consultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Controle_consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Controle_consultas.
     */
    skip?: number
    distinct?: Controle_consultaScalarFieldEnum | Controle_consultaScalarFieldEnum[]
  }


  /**
   * Controle_consulta create
   */
  export type Controle_consultaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Controle_consulta.
     */
    data: XOR<Controle_consultaCreateInput, Controle_consultaUncheckedCreateInput>
  }


  /**
   * Controle_consulta update
   */
  export type Controle_consultaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Controle_consulta.
     */
    data: XOR<Controle_consultaUpdateInput, Controle_consultaUncheckedUpdateInput>
    /**
     * Choose, which Controle_consulta to update.
     */
    where: Controle_consultaWhereUniqueInput
  }


  /**
   * Controle_consulta updateMany
   */
  export type Controle_consultaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Controle_consultas.
     */
    data: XOR<Controle_consultaUpdateManyMutationInput, Controle_consultaUncheckedUpdateManyInput>
    /**
     * Filter which Controle_consultas to update
     */
    where?: Controle_consultaWhereInput
  }


  /**
   * Controle_consulta upsert
   */
  export type Controle_consultaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Controle_consulta to update in case it exists.
     */
    where: Controle_consultaWhereUniqueInput
    /**
     * In case the Controle_consulta found by the `where` argument doesn't exist, create a new Controle_consulta with this data.
     */
    create: XOR<Controle_consultaCreateInput, Controle_consultaUncheckedCreateInput>
    /**
     * In case the Controle_consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Controle_consultaUpdateInput, Controle_consultaUncheckedUpdateInput>
  }


  /**
   * Controle_consulta delete
   */
  export type Controle_consultaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
    /**
     * Filter which Controle_consulta to delete.
     */
    where: Controle_consultaWhereUniqueInput
  }


  /**
   * Controle_consulta deleteMany
   */
  export type Controle_consultaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Controle_consultas to delete
     */
    where?: Controle_consultaWhereInput
  }


  /**
   * Controle_consulta.controle
   */
  export type Controle_consulta$controleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_acesso
     */
    select?: Controle_acessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_acessoInclude<ExtArgs> | null
    where?: Controle_acessoWhereInput
  }


  /**
   * Controle_consulta without action
   */
  export type Controle_consultaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Controle_consulta
     */
    select?: Controle_consultaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: Controle_consultaInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EstabelecimentoScalarFieldEnum: {
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

  export type EstabelecimentoScalarFieldEnum = (typeof EstabelecimentoScalarFieldEnum)[keyof typeof EstabelecimentoScalarFieldEnum]


  export const LicencaScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    data_vencimento: 'data_vencimento',
    is_active: 'is_active'
  };

  export type LicencaScalarFieldEnum = (typeof LicencaScalarFieldEnum)[keyof typeof LicencaScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
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

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const AnamneseScalarFieldEnum: {
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

  export type AnamneseScalarFieldEnum = (typeof AnamneseScalarFieldEnum)[keyof typeof AnamneseScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id: 'id',
    observacao: 'observacao',
    status: 'status',
    data_de_agendado: 'data_de_agendado',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    diagnostico: 'diagnostico',
    prescricao: 'prescricao',
    convenio: 'convenio',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
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

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const Controle_acessoScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    is_active: 'is_active',
    usuario_id: 'usuario_id'
  };

  export type Controle_acessoScalarFieldEnum = (typeof Controle_acessoScalarFieldEnum)[keyof typeof Controle_acessoScalarFieldEnum]


  export const Controle_pacienteScalarFieldEnum: {
    id: 'id',
    read_paciente: 'read_paciente',
    create_paciente: 'create_paciente',
    update_paciente: 'update_paciente',
    delete_paciente: 'delete_paciente',
    controle_id: 'controle_id'
  };

  export type Controle_pacienteScalarFieldEnum = (typeof Controle_pacienteScalarFieldEnum)[keyof typeof Controle_pacienteScalarFieldEnum]


  export const Controle_anamneseScalarFieldEnum: {
    id: 'id',
    create_anamnese: 'create_anamnese',
    update_anamnese: 'update_anamnese',
    read_anamnese: 'read_anamnese',
    delete_anamnese: 'delete_anamnese',
    controle_id: 'controle_id'
  };

  export type Controle_anamneseScalarFieldEnum = (typeof Controle_anamneseScalarFieldEnum)[keyof typeof Controle_anamneseScalarFieldEnum]


  export const Controle_agendamentoScalarFieldEnum: {
    id: 'id',
    create_agendamento: 'create_agendamento',
    update_agendamento: 'update_agendamento',
    read_agendamento: 'read_agendamento',
    delete_agendamento: 'delete_agendamento',
    control_id: 'control_id'
  };

  export type Controle_agendamentoScalarFieldEnum = (typeof Controle_agendamentoScalarFieldEnum)[keyof typeof Controle_agendamentoScalarFieldEnum]


  export const Controle_consultaScalarFieldEnum: {
    id: 'id',
    create_consulta: 'create_consulta',
    update_consulta: 'update_consulta',
    read_consulta: 'read_consulta',
    delete_consulta: 'delete_consulta',
    controle_id: 'controle_id'
  };

  export type Controle_consultaScalarFieldEnum = (typeof Controle_consultaScalarFieldEnum)[keyof typeof Controle_consultaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EstabelecimentoWhereInput = {
    AND?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    OR?: EstabelecimentoWhereInput[]
    NOT?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    id?: StringFilter<"Estabelecimento"> | string
    razao_social?: StringFilter<"Estabelecimento"> | string
    nome_fantasia?: StringFilter<"Estabelecimento"> | string
    endereco?: StringFilter<"Estabelecimento"> | string
    numero?: StringFilter<"Estabelecimento"> | string
    bairro?: StringFilter<"Estabelecimento"> | string
    complemento?: StringFilter<"Estabelecimento"> | string
    uf?: StringFilter<"Estabelecimento"> | string
    cidade?: StringFilter<"Estabelecimento"> | string
    cep?: StringFilter<"Estabelecimento"> | string
    cnpj?: StringFilter<"Estabelecimento"> | string
    inscricao_estadual?: StringFilter<"Estabelecimento"> | string
    telefone?: StringFilter<"Estabelecimento"> | string
    email?: StringFilter<"Estabelecimento"> | string
    nome_responsavel?: StringFilter<"Estabelecimento"> | string
    telefone_responsavel?: StringFilter<"Estabelecimento"> | string
    email_responsavel?: StringFilter<"Estabelecimento"> | string
    usuarios_de_acesso?: IntFilter<"Estabelecimento"> | number
    created_at?: DateTimeFilter<"Estabelecimento"> | Date | string
    updated_at?: DateTimeFilter<"Estabelecimento"> | Date | string
    deleted_at?: DateTimeFilter<"Estabelecimento"> | Date | string
    is_active?: BoolFilter<"Estabelecimento"> | boolean
  }

  export type EstabelecimentoOrderByWithRelationInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    uf?: SortOrder
    cidade?: SortOrder
    cep?: SortOrder
    cnpj?: SortOrder
    inscricao_estadual?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    nome_responsavel?: SortOrder
    telefone_responsavel?: SortOrder
    email_responsavel?: SortOrder
    usuarios_de_acesso?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
  }

  export type EstabelecimentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cnpj?: string
    email?: string
    AND?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    OR?: EstabelecimentoWhereInput[]
    NOT?: EstabelecimentoWhereInput | EstabelecimentoWhereInput[]
    razao_social?: StringFilter<"Estabelecimento"> | string
    nome_fantasia?: StringFilter<"Estabelecimento"> | string
    endereco?: StringFilter<"Estabelecimento"> | string
    numero?: StringFilter<"Estabelecimento"> | string
    bairro?: StringFilter<"Estabelecimento"> | string
    complemento?: StringFilter<"Estabelecimento"> | string
    uf?: StringFilter<"Estabelecimento"> | string
    cidade?: StringFilter<"Estabelecimento"> | string
    cep?: StringFilter<"Estabelecimento"> | string
    inscricao_estadual?: StringFilter<"Estabelecimento"> | string
    telefone?: StringFilter<"Estabelecimento"> | string
    nome_responsavel?: StringFilter<"Estabelecimento"> | string
    telefone_responsavel?: StringFilter<"Estabelecimento"> | string
    email_responsavel?: StringFilter<"Estabelecimento"> | string
    usuarios_de_acesso?: IntFilter<"Estabelecimento"> | number
    created_at?: DateTimeFilter<"Estabelecimento"> | Date | string
    updated_at?: DateTimeFilter<"Estabelecimento"> | Date | string
    deleted_at?: DateTimeFilter<"Estabelecimento"> | Date | string
    is_active?: BoolFilter<"Estabelecimento"> | boolean
  }, "id" | "cnpj" | "email">

  export type EstabelecimentoOrderByWithAggregationInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    uf?: SortOrder
    cidade?: SortOrder
    cep?: SortOrder
    cnpj?: SortOrder
    inscricao_estadual?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    nome_responsavel?: SortOrder
    telefone_responsavel?: SortOrder
    email_responsavel?: SortOrder
    usuarios_de_acesso?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    _count?: EstabelecimentoCountOrderByAggregateInput
    _avg?: EstabelecimentoAvgOrderByAggregateInput
    _max?: EstabelecimentoMaxOrderByAggregateInput
    _min?: EstabelecimentoMinOrderByAggregateInput
    _sum?: EstabelecimentoSumOrderByAggregateInput
  }

  export type EstabelecimentoScalarWhereWithAggregatesInput = {
    AND?: EstabelecimentoScalarWhereWithAggregatesInput | EstabelecimentoScalarWhereWithAggregatesInput[]
    OR?: EstabelecimentoScalarWhereWithAggregatesInput[]
    NOT?: EstabelecimentoScalarWhereWithAggregatesInput | EstabelecimentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estabelecimento"> | string
    razao_social?: StringWithAggregatesFilter<"Estabelecimento"> | string
    nome_fantasia?: StringWithAggregatesFilter<"Estabelecimento"> | string
    endereco?: StringWithAggregatesFilter<"Estabelecimento"> | string
    numero?: StringWithAggregatesFilter<"Estabelecimento"> | string
    bairro?: StringWithAggregatesFilter<"Estabelecimento"> | string
    complemento?: StringWithAggregatesFilter<"Estabelecimento"> | string
    uf?: StringWithAggregatesFilter<"Estabelecimento"> | string
    cidade?: StringWithAggregatesFilter<"Estabelecimento"> | string
    cep?: StringWithAggregatesFilter<"Estabelecimento"> | string
    cnpj?: StringWithAggregatesFilter<"Estabelecimento"> | string
    inscricao_estadual?: StringWithAggregatesFilter<"Estabelecimento"> | string
    telefone?: StringWithAggregatesFilter<"Estabelecimento"> | string
    email?: StringWithAggregatesFilter<"Estabelecimento"> | string
    nome_responsavel?: StringWithAggregatesFilter<"Estabelecimento"> | string
    telefone_responsavel?: StringWithAggregatesFilter<"Estabelecimento"> | string
    email_responsavel?: StringWithAggregatesFilter<"Estabelecimento"> | string
    usuarios_de_acesso?: IntWithAggregatesFilter<"Estabelecimento"> | number
    created_at?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Estabelecimento"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Estabelecimento"> | boolean
  }

  export type licencaWhereInput = {
    AND?: licencaWhereInput | licencaWhereInput[]
    OR?: licencaWhereInput[]
    NOT?: licencaWhereInput | licencaWhereInput[]
    id?: StringFilter<"licenca"> | string
    created_at?: DateTimeFilter<"licenca"> | Date | string
    updated_at?: DateTimeFilter<"licenca"> | Date | string
    deleted_at?: DateTimeFilter<"licenca"> | Date | string
    data_vencimento?: DateTimeFilter<"licenca"> | Date | string
    is_active?: BoolFilter<"licenca"> | boolean
  }

  export type licencaOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    data_vencimento?: SortOrder
    is_active?: SortOrder
  }

  export type licencaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: licencaWhereInput | licencaWhereInput[]
    OR?: licencaWhereInput[]
    NOT?: licencaWhereInput | licencaWhereInput[]
    created_at?: DateTimeFilter<"licenca"> | Date | string
    updated_at?: DateTimeFilter<"licenca"> | Date | string
    deleted_at?: DateTimeFilter<"licenca"> | Date | string
    data_vencimento?: DateTimeFilter<"licenca"> | Date | string
    is_active?: BoolFilter<"licenca"> | boolean
  }, "id">

  export type licencaOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    data_vencimento?: SortOrder
    is_active?: SortOrder
    _count?: licencaCountOrderByAggregateInput
    _max?: licencaMaxOrderByAggregateInput
    _min?: licencaMinOrderByAggregateInput
  }

  export type licencaScalarWhereWithAggregatesInput = {
    AND?: licencaScalarWhereWithAggregatesInput | licencaScalarWhereWithAggregatesInput[]
    OR?: licencaScalarWhereWithAggregatesInput[]
    NOT?: licencaScalarWhereWithAggregatesInput | licencaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"licenca"> | string
    created_at?: DateTimeWithAggregatesFilter<"licenca"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"licenca"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"licenca"> | Date | string
    data_vencimento?: DateTimeWithAggregatesFilter<"licenca"> | Date | string
    is_active?: BoolWithAggregatesFilter<"licenca"> | boolean
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    cpf?: IntFilter<"Paciente"> | number
    data_nascimento?: StringFilter<"Paciente"> | string
    endereco?: StringFilter<"Paciente"> | string
    numero?: IntFilter<"Paciente"> | number
    bairro?: StringFilter<"Paciente"> | string
    complemento?: StringFilter<"Paciente"> | string
    cep?: IntFilter<"Paciente"> | number
    telefone?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    created_at?: DateTimeFilter<"Paciente"> | Date | string
    updated_at?: DateTimeFilter<"Paciente"> | Date | string
    deleted_at?: DateTimeFilter<"Paciente"> | Date | string
    is_active?: BoolFilter<"Paciente"> | boolean
    consulta_id?: IntFilter<"Paciente"> | number
    anamnese?: AnamneseListRelationFilter
    consulta?: XOR<ConsultaNullableRelationFilter, ConsultaWhereInput> | null
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    consulta_id?: SortOrder
    anamnese?: AnamneseOrderByRelationAggregateInput
    consulta?: ConsultaOrderByWithRelationInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    nome?: StringFilter<"Paciente"> | string
    cpf?: IntFilter<"Paciente"> | number
    data_nascimento?: StringFilter<"Paciente"> | string
    endereco?: StringFilter<"Paciente"> | string
    numero?: IntFilter<"Paciente"> | number
    bairro?: StringFilter<"Paciente"> | string
    complemento?: StringFilter<"Paciente"> | string
    cep?: IntFilter<"Paciente"> | number
    telefone?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    created_at?: DateTimeFilter<"Paciente"> | Date | string
    updated_at?: DateTimeFilter<"Paciente"> | Date | string
    deleted_at?: DateTimeFilter<"Paciente"> | Date | string
    is_active?: BoolFilter<"Paciente"> | boolean
    consulta_id?: IntFilter<"Paciente"> | number
    anamnese?: AnamneseListRelationFilter
    consulta?: XOR<ConsultaNullableRelationFilter, ConsultaWhereInput> | null
  }, "id">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    consulta_id?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    nome?: StringWithAggregatesFilter<"Paciente"> | string
    cpf?: IntWithAggregatesFilter<"Paciente"> | number
    data_nascimento?: StringWithAggregatesFilter<"Paciente"> | string
    endereco?: StringWithAggregatesFilter<"Paciente"> | string
    numero?: IntWithAggregatesFilter<"Paciente"> | number
    bairro?: StringWithAggregatesFilter<"Paciente"> | string
    complemento?: StringWithAggregatesFilter<"Paciente"> | string
    cep?: IntWithAggregatesFilter<"Paciente"> | number
    telefone?: StringWithAggregatesFilter<"Paciente"> | string
    email?: StringWithAggregatesFilter<"Paciente"> | string
    created_at?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Paciente"> | boolean
    consulta_id?: IntWithAggregatesFilter<"Paciente"> | number
  }

  export type AnamneseWhereInput = {
    AND?: AnamneseWhereInput | AnamneseWhereInput[]
    OR?: AnamneseWhereInput[]
    NOT?: AnamneseWhereInput | AnamneseWhereInput[]
    id?: IntFilter<"Anamnese"> | number
    infeccao_urinaria?: BoolFilter<"Anamnese"> | boolean
    dst?: StringFilter<"Anamnese"> | string
    pedra_nos_rins?: StringFilter<"Anamnese"> | string
    problema_nos_testiculos?: StringFilter<"Anamnese"> | string
    historico_de_cancer_na_familia?: StringFilter<"Anamnese"> | string
    doenca_cronica?: StringFilter<"Anamnese"> | string
    utiliza_remedios?: StringFilter<"Anamnese"> | string
    fumante?: StringFilter<"Anamnese"> | string
    bebidas_alcoolicas?: StringFilter<"Anamnese"> | string
    droga?: StringFilter<"Anamnese"> | string
    created_at?: DateTimeFilter<"Anamnese"> | Date | string
    updated_at?: DateTimeFilter<"Anamnese"> | Date | string
    deleted_at?: DateTimeFilter<"Anamnese"> | Date | string
    is_active?: BoolFilter<"Anamnese"> | boolean
    paciente_id?: IntFilter<"Anamnese"> | number
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
  }

  export type AnamneseOrderByWithRelationInput = {
    id?: SortOrder
    infeccao_urinaria?: SortOrder
    dst?: SortOrder
    pedra_nos_rins?: SortOrder
    problema_nos_testiculos?: SortOrder
    historico_de_cancer_na_familia?: SortOrder
    doenca_cronica?: SortOrder
    utiliza_remedios?: SortOrder
    fumante?: SortOrder
    bebidas_alcoolicas?: SortOrder
    droga?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    paciente_id?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
  }

  export type AnamneseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnamneseWhereInput | AnamneseWhereInput[]
    OR?: AnamneseWhereInput[]
    NOT?: AnamneseWhereInput | AnamneseWhereInput[]
    infeccao_urinaria?: BoolFilter<"Anamnese"> | boolean
    dst?: StringFilter<"Anamnese"> | string
    pedra_nos_rins?: StringFilter<"Anamnese"> | string
    problema_nos_testiculos?: StringFilter<"Anamnese"> | string
    historico_de_cancer_na_familia?: StringFilter<"Anamnese"> | string
    doenca_cronica?: StringFilter<"Anamnese"> | string
    utiliza_remedios?: StringFilter<"Anamnese"> | string
    fumante?: StringFilter<"Anamnese"> | string
    bebidas_alcoolicas?: StringFilter<"Anamnese"> | string
    droga?: StringFilter<"Anamnese"> | string
    created_at?: DateTimeFilter<"Anamnese"> | Date | string
    updated_at?: DateTimeFilter<"Anamnese"> | Date | string
    deleted_at?: DateTimeFilter<"Anamnese"> | Date | string
    is_active?: BoolFilter<"Anamnese"> | boolean
    paciente_id?: IntFilter<"Anamnese"> | number
    paciente?: XOR<PacienteNullableRelationFilter, PacienteWhereInput> | null
  }, "id">

  export type AnamneseOrderByWithAggregationInput = {
    id?: SortOrder
    infeccao_urinaria?: SortOrder
    dst?: SortOrder
    pedra_nos_rins?: SortOrder
    problema_nos_testiculos?: SortOrder
    historico_de_cancer_na_familia?: SortOrder
    doenca_cronica?: SortOrder
    utiliza_remedios?: SortOrder
    fumante?: SortOrder
    bebidas_alcoolicas?: SortOrder
    droga?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    paciente_id?: SortOrder
    _count?: AnamneseCountOrderByAggregateInput
    _avg?: AnamneseAvgOrderByAggregateInput
    _max?: AnamneseMaxOrderByAggregateInput
    _min?: AnamneseMinOrderByAggregateInput
    _sum?: AnamneseSumOrderByAggregateInput
  }

  export type AnamneseScalarWhereWithAggregatesInput = {
    AND?: AnamneseScalarWhereWithAggregatesInput | AnamneseScalarWhereWithAggregatesInput[]
    OR?: AnamneseScalarWhereWithAggregatesInput[]
    NOT?: AnamneseScalarWhereWithAggregatesInput | AnamneseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Anamnese"> | number
    infeccao_urinaria?: BoolWithAggregatesFilter<"Anamnese"> | boolean
    dst?: StringWithAggregatesFilter<"Anamnese"> | string
    pedra_nos_rins?: StringWithAggregatesFilter<"Anamnese"> | string
    problema_nos_testiculos?: StringWithAggregatesFilter<"Anamnese"> | string
    historico_de_cancer_na_familia?: StringWithAggregatesFilter<"Anamnese"> | string
    doenca_cronica?: StringWithAggregatesFilter<"Anamnese"> | string
    utiliza_remedios?: StringWithAggregatesFilter<"Anamnese"> | string
    fumante?: StringWithAggregatesFilter<"Anamnese"> | string
    bebidas_alcoolicas?: StringWithAggregatesFilter<"Anamnese"> | string
    droga?: StringWithAggregatesFilter<"Anamnese"> | string
    created_at?: DateTimeWithAggregatesFilter<"Anamnese"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Anamnese"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Anamnese"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Anamnese"> | boolean
    paciente_id?: IntWithAggregatesFilter<"Anamnese"> | number
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id?: IntFilter<"Agendamento"> | number
    observacao?: StringFilter<"Agendamento"> | string
    status?: StringFilter<"Agendamento"> | string
    data_de_agendado?: DateTimeFilter<"Agendamento"> | Date | string
    created_at?: DateTimeFilter<"Agendamento"> | Date | string
    updated_at?: DateTimeFilter<"Agendamento"> | Date | string
    deleted_at?: DateTimeFilter<"Agendamento"> | Date | string
  }

  export type AgendamentoOrderByWithRelationInput = {
    id?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    data_de_agendado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    observacao?: StringFilter<"Agendamento"> | string
    status?: StringFilter<"Agendamento"> | string
    data_de_agendado?: DateTimeFilter<"Agendamento"> | Date | string
    created_at?: DateTimeFilter<"Agendamento"> | Date | string
    updated_at?: DateTimeFilter<"Agendamento"> | Date | string
    deleted_at?: DateTimeFilter<"Agendamento"> | Date | string
  }, "id">

  export type AgendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    data_de_agendado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _avg?: AgendamentoAvgOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
    _sum?: AgendamentoSumOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agendamento"> | number
    observacao?: StringWithAggregatesFilter<"Agendamento"> | string
    status?: StringWithAggregatesFilter<"Agendamento"> | string
    data_de_agendado?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    diagnostico?: StringFilter<"Consulta"> | string
    prescricao?: StringFilter<"Consulta"> | string
    convenio?: StringFilter<"Consulta"> | string
    status?: StringFilter<"Consulta"> | string
    created_at?: DateTimeFilter<"Consulta"> | Date | string
    updated_at?: DateTimeFilter<"Consulta"> | Date | string
    deleted_at?: DateTimeFilter<"Consulta"> | Date | string
    usuario?: UsuarioListRelationFilter
    paciente?: PacienteListRelationFilter
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    diagnostico?: SortOrder
    prescricao?: SortOrder
    convenio?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    usuario?: UsuarioOrderByRelationAggregateInput
    paciente?: PacienteOrderByRelationAggregateInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    diagnostico?: StringFilter<"Consulta"> | string
    prescricao?: StringFilter<"Consulta"> | string
    convenio?: StringFilter<"Consulta"> | string
    status?: StringFilter<"Consulta"> | string
    created_at?: DateTimeFilter<"Consulta"> | Date | string
    updated_at?: DateTimeFilter<"Consulta"> | Date | string
    deleted_at?: DateTimeFilter<"Consulta"> | Date | string
    usuario?: UsuarioListRelationFilter
    paciente?: PacienteListRelationFilter
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    diagnostico?: SortOrder
    prescricao?: SortOrder
    convenio?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    diagnostico?: StringWithAggregatesFilter<"Consulta"> | string
    prescricao?: StringWithAggregatesFilter<"Consulta"> | string
    convenio?: StringWithAggregatesFilter<"Consulta"> | string
    status?: StringWithAggregatesFilter<"Consulta"> | string
    created_at?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    ocupacao?: StringFilter<"Usuario"> | string
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeFilter<"Usuario"> | Date | string
    is_active?: BoolFilter<"Usuario"> | boolean
    Consulta_id?: IntNullableFilter<"Usuario"> | number | null
    controle?: Controle_acessoListRelationFilter
    Consulta?: XOR<ConsultaNullableRelationFilter, ConsultaWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ocupacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    Consulta_id?: SortOrderInput | SortOrder
    controle?: Controle_acessoOrderByRelationAggregateInput
    Consulta?: ConsultaOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    ocupacao?: StringFilter<"Usuario"> | string
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeFilter<"Usuario"> | Date | string
    is_active?: BoolFilter<"Usuario"> | boolean
    Consulta_id?: IntNullableFilter<"Usuario"> | number | null
    controle?: Controle_acessoListRelationFilter
    Consulta?: XOR<ConsultaNullableRelationFilter, ConsultaWhereInput> | null
  }, "id">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ocupacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    Consulta_id?: SortOrderInput | SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    ocupacao?: StringWithAggregatesFilter<"Usuario"> | string
    created_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Usuario"> | boolean
    Consulta_id?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
  }

  export type Controle_acessoWhereInput = {
    AND?: Controle_acessoWhereInput | Controle_acessoWhereInput[]
    OR?: Controle_acessoWhereInput[]
    NOT?: Controle_acessoWhereInput | Controle_acessoWhereInput[]
    id?: IntFilter<"Controle_acesso"> | number
    created_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    updated_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    deleted_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    is_active?: BoolFilter<"Controle_acesso"> | boolean
    usuario_id?: IntNullableFilter<"Controle_acesso"> | number | null
    paciente?: Controle_pacienteListRelationFilter
    anamnese?: Controle_anamneseListRelationFilter
    agendamento?: Controle_agendamentoListRelationFilter
    consulta?: Controle_consultaListRelationFilter
    usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
  }

  export type Controle_acessoOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    paciente?: Controle_pacienteOrderByRelationAggregateInput
    anamnese?: Controle_anamneseOrderByRelationAggregateInput
    agendamento?: Controle_agendamentoOrderByRelationAggregateInput
    consulta?: Controle_consultaOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type Controle_acessoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Controle_acessoWhereInput | Controle_acessoWhereInput[]
    OR?: Controle_acessoWhereInput[]
    NOT?: Controle_acessoWhereInput | Controle_acessoWhereInput[]
    created_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    updated_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    deleted_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    is_active?: BoolFilter<"Controle_acesso"> | boolean
    usuario_id?: IntNullableFilter<"Controle_acesso"> | number | null
    paciente?: Controle_pacienteListRelationFilter
    anamnese?: Controle_anamneseListRelationFilter
    agendamento?: Controle_agendamentoListRelationFilter
    consulta?: Controle_consultaListRelationFilter
    usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type Controle_acessoOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: Controle_acessoCountOrderByAggregateInput
    _avg?: Controle_acessoAvgOrderByAggregateInput
    _max?: Controle_acessoMaxOrderByAggregateInput
    _min?: Controle_acessoMinOrderByAggregateInput
    _sum?: Controle_acessoSumOrderByAggregateInput
  }

  export type Controle_acessoScalarWhereWithAggregatesInput = {
    AND?: Controle_acessoScalarWhereWithAggregatesInput | Controle_acessoScalarWhereWithAggregatesInput[]
    OR?: Controle_acessoScalarWhereWithAggregatesInput[]
    NOT?: Controle_acessoScalarWhereWithAggregatesInput | Controle_acessoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Controle_acesso"> | number
    created_at?: DateTimeWithAggregatesFilter<"Controle_acesso"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Controle_acesso"> | Date | string
    deleted_at?: DateTimeWithAggregatesFilter<"Controle_acesso"> | Date | string
    is_active?: BoolWithAggregatesFilter<"Controle_acesso"> | boolean
    usuario_id?: IntNullableWithAggregatesFilter<"Controle_acesso"> | number | null
  }

  export type Controle_pacienteWhereInput = {
    AND?: Controle_pacienteWhereInput | Controle_pacienteWhereInput[]
    OR?: Controle_pacienteWhereInput[]
    NOT?: Controle_pacienteWhereInput | Controle_pacienteWhereInput[]
    id?: IntFilter<"Controle_paciente"> | number
    read_paciente?: BoolFilter<"Controle_paciente"> | boolean
    create_paciente?: BoolFilter<"Controle_paciente"> | boolean
    update_paciente?: BoolFilter<"Controle_paciente"> | boolean
    delete_paciente?: BoolFilter<"Controle_paciente"> | boolean
    controle_id?: IntFilter<"Controle_paciente"> | number
    controle?: XOR<Controle_acessoRelationFilter, Controle_acessoWhereInput>
  }

  export type Controle_pacienteOrderByWithRelationInput = {
    id?: SortOrder
    read_paciente?: SortOrder
    create_paciente?: SortOrder
    update_paciente?: SortOrder
    delete_paciente?: SortOrder
    controle_id?: SortOrder
    controle?: Controle_acessoOrderByWithRelationInput
  }

  export type Controle_pacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Controle_pacienteWhereInput | Controle_pacienteWhereInput[]
    OR?: Controle_pacienteWhereInput[]
    NOT?: Controle_pacienteWhereInput | Controle_pacienteWhereInput[]
    read_paciente?: BoolFilter<"Controle_paciente"> | boolean
    create_paciente?: BoolFilter<"Controle_paciente"> | boolean
    update_paciente?: BoolFilter<"Controle_paciente"> | boolean
    delete_paciente?: BoolFilter<"Controle_paciente"> | boolean
    controle_id?: IntFilter<"Controle_paciente"> | number
    controle?: XOR<Controle_acessoRelationFilter, Controle_acessoWhereInput>
  }, "id">

  export type Controle_pacienteOrderByWithAggregationInput = {
    id?: SortOrder
    read_paciente?: SortOrder
    create_paciente?: SortOrder
    update_paciente?: SortOrder
    delete_paciente?: SortOrder
    controle_id?: SortOrder
    _count?: Controle_pacienteCountOrderByAggregateInput
    _avg?: Controle_pacienteAvgOrderByAggregateInput
    _max?: Controle_pacienteMaxOrderByAggregateInput
    _min?: Controle_pacienteMinOrderByAggregateInput
    _sum?: Controle_pacienteSumOrderByAggregateInput
  }

  export type Controle_pacienteScalarWhereWithAggregatesInput = {
    AND?: Controle_pacienteScalarWhereWithAggregatesInput | Controle_pacienteScalarWhereWithAggregatesInput[]
    OR?: Controle_pacienteScalarWhereWithAggregatesInput[]
    NOT?: Controle_pacienteScalarWhereWithAggregatesInput | Controle_pacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Controle_paciente"> | number
    read_paciente?: BoolWithAggregatesFilter<"Controle_paciente"> | boolean
    create_paciente?: BoolWithAggregatesFilter<"Controle_paciente"> | boolean
    update_paciente?: BoolWithAggregatesFilter<"Controle_paciente"> | boolean
    delete_paciente?: BoolWithAggregatesFilter<"Controle_paciente"> | boolean
    controle_id?: IntWithAggregatesFilter<"Controle_paciente"> | number
  }

  export type Controle_anamneseWhereInput = {
    AND?: Controle_anamneseWhereInput | Controle_anamneseWhereInput[]
    OR?: Controle_anamneseWhereInput[]
    NOT?: Controle_anamneseWhereInput | Controle_anamneseWhereInput[]
    id?: IntFilter<"Controle_anamnese"> | number
    create_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    update_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    read_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    delete_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    controle_id?: IntNullableFilter<"Controle_anamnese"> | number | null
    controle?: XOR<Controle_acessoNullableRelationFilter, Controle_acessoWhereInput> | null
  }

  export type Controle_anamneseOrderByWithRelationInput = {
    id?: SortOrder
    create_anamnese?: SortOrder
    update_anamnese?: SortOrder
    read_anamnese?: SortOrder
    delete_anamnese?: SortOrder
    controle_id?: SortOrderInput | SortOrder
    controle?: Controle_acessoOrderByWithRelationInput
  }

  export type Controle_anamneseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Controle_anamneseWhereInput | Controle_anamneseWhereInput[]
    OR?: Controle_anamneseWhereInput[]
    NOT?: Controle_anamneseWhereInput | Controle_anamneseWhereInput[]
    create_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    update_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    read_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    delete_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    controle_id?: IntNullableFilter<"Controle_anamnese"> | number | null
    controle?: XOR<Controle_acessoNullableRelationFilter, Controle_acessoWhereInput> | null
  }, "id">

  export type Controle_anamneseOrderByWithAggregationInput = {
    id?: SortOrder
    create_anamnese?: SortOrder
    update_anamnese?: SortOrder
    read_anamnese?: SortOrder
    delete_anamnese?: SortOrder
    controle_id?: SortOrderInput | SortOrder
    _count?: Controle_anamneseCountOrderByAggregateInput
    _avg?: Controle_anamneseAvgOrderByAggregateInput
    _max?: Controle_anamneseMaxOrderByAggregateInput
    _min?: Controle_anamneseMinOrderByAggregateInput
    _sum?: Controle_anamneseSumOrderByAggregateInput
  }

  export type Controle_anamneseScalarWhereWithAggregatesInput = {
    AND?: Controle_anamneseScalarWhereWithAggregatesInput | Controle_anamneseScalarWhereWithAggregatesInput[]
    OR?: Controle_anamneseScalarWhereWithAggregatesInput[]
    NOT?: Controle_anamneseScalarWhereWithAggregatesInput | Controle_anamneseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Controle_anamnese"> | number
    create_anamnese?: BoolWithAggregatesFilter<"Controle_anamnese"> | boolean
    update_anamnese?: BoolWithAggregatesFilter<"Controle_anamnese"> | boolean
    read_anamnese?: BoolWithAggregatesFilter<"Controle_anamnese"> | boolean
    delete_anamnese?: BoolWithAggregatesFilter<"Controle_anamnese"> | boolean
    controle_id?: IntNullableWithAggregatesFilter<"Controle_anamnese"> | number | null
  }

  export type Controle_agendamentoWhereInput = {
    AND?: Controle_agendamentoWhereInput | Controle_agendamentoWhereInput[]
    OR?: Controle_agendamentoWhereInput[]
    NOT?: Controle_agendamentoWhereInput | Controle_agendamentoWhereInput[]
    id?: IntFilter<"Controle_agendamento"> | number
    create_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    update_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    read_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    delete_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    control_id?: IntNullableFilter<"Controle_agendamento"> | number | null
    controle?: XOR<Controle_acessoNullableRelationFilter, Controle_acessoWhereInput> | null
  }

  export type Controle_agendamentoOrderByWithRelationInput = {
    id?: SortOrder
    create_agendamento?: SortOrder
    update_agendamento?: SortOrder
    read_agendamento?: SortOrder
    delete_agendamento?: SortOrder
    control_id?: SortOrderInput | SortOrder
    controle?: Controle_acessoOrderByWithRelationInput
  }

  export type Controle_agendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Controle_agendamentoWhereInput | Controle_agendamentoWhereInput[]
    OR?: Controle_agendamentoWhereInput[]
    NOT?: Controle_agendamentoWhereInput | Controle_agendamentoWhereInput[]
    create_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    update_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    read_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    delete_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    control_id?: IntNullableFilter<"Controle_agendamento"> | number | null
    controle?: XOR<Controle_acessoNullableRelationFilter, Controle_acessoWhereInput> | null
  }, "id">

  export type Controle_agendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    create_agendamento?: SortOrder
    update_agendamento?: SortOrder
    read_agendamento?: SortOrder
    delete_agendamento?: SortOrder
    control_id?: SortOrderInput | SortOrder
    _count?: Controle_agendamentoCountOrderByAggregateInput
    _avg?: Controle_agendamentoAvgOrderByAggregateInput
    _max?: Controle_agendamentoMaxOrderByAggregateInput
    _min?: Controle_agendamentoMinOrderByAggregateInput
    _sum?: Controle_agendamentoSumOrderByAggregateInput
  }

  export type Controle_agendamentoScalarWhereWithAggregatesInput = {
    AND?: Controle_agendamentoScalarWhereWithAggregatesInput | Controle_agendamentoScalarWhereWithAggregatesInput[]
    OR?: Controle_agendamentoScalarWhereWithAggregatesInput[]
    NOT?: Controle_agendamentoScalarWhereWithAggregatesInput | Controle_agendamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Controle_agendamento"> | number
    create_agendamento?: BoolWithAggregatesFilter<"Controle_agendamento"> | boolean
    update_agendamento?: BoolWithAggregatesFilter<"Controle_agendamento"> | boolean
    read_agendamento?: BoolWithAggregatesFilter<"Controle_agendamento"> | boolean
    delete_agendamento?: BoolWithAggregatesFilter<"Controle_agendamento"> | boolean
    control_id?: IntNullableWithAggregatesFilter<"Controle_agendamento"> | number | null
  }

  export type Controle_consultaWhereInput = {
    AND?: Controle_consultaWhereInput | Controle_consultaWhereInput[]
    OR?: Controle_consultaWhereInput[]
    NOT?: Controle_consultaWhereInput | Controle_consultaWhereInput[]
    id?: IntFilter<"Controle_consulta"> | number
    create_consulta?: BoolFilter<"Controle_consulta"> | boolean
    update_consulta?: BoolFilter<"Controle_consulta"> | boolean
    read_consulta?: BoolFilter<"Controle_consulta"> | boolean
    delete_consulta?: BoolFilter<"Controle_consulta"> | boolean
    controle_id?: IntNullableFilter<"Controle_consulta"> | number | null
    controle?: XOR<Controle_acessoNullableRelationFilter, Controle_acessoWhereInput> | null
  }

  export type Controle_consultaOrderByWithRelationInput = {
    id?: SortOrder
    create_consulta?: SortOrder
    update_consulta?: SortOrder
    read_consulta?: SortOrder
    delete_consulta?: SortOrder
    controle_id?: SortOrderInput | SortOrder
    controle?: Controle_acessoOrderByWithRelationInput
  }

  export type Controle_consultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Controle_consultaWhereInput | Controle_consultaWhereInput[]
    OR?: Controle_consultaWhereInput[]
    NOT?: Controle_consultaWhereInput | Controle_consultaWhereInput[]
    create_consulta?: BoolFilter<"Controle_consulta"> | boolean
    update_consulta?: BoolFilter<"Controle_consulta"> | boolean
    read_consulta?: BoolFilter<"Controle_consulta"> | boolean
    delete_consulta?: BoolFilter<"Controle_consulta"> | boolean
    controle_id?: IntNullableFilter<"Controle_consulta"> | number | null
    controle?: XOR<Controle_acessoNullableRelationFilter, Controle_acessoWhereInput> | null
  }, "id">

  export type Controle_consultaOrderByWithAggregationInput = {
    id?: SortOrder
    create_consulta?: SortOrder
    update_consulta?: SortOrder
    read_consulta?: SortOrder
    delete_consulta?: SortOrder
    controle_id?: SortOrderInput | SortOrder
    _count?: Controle_consultaCountOrderByAggregateInput
    _avg?: Controle_consultaAvgOrderByAggregateInput
    _max?: Controle_consultaMaxOrderByAggregateInput
    _min?: Controle_consultaMinOrderByAggregateInput
    _sum?: Controle_consultaSumOrderByAggregateInput
  }

  export type Controle_consultaScalarWhereWithAggregatesInput = {
    AND?: Controle_consultaScalarWhereWithAggregatesInput | Controle_consultaScalarWhereWithAggregatesInput[]
    OR?: Controle_consultaScalarWhereWithAggregatesInput[]
    NOT?: Controle_consultaScalarWhereWithAggregatesInput | Controle_consultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Controle_consulta"> | number
    create_consulta?: BoolWithAggregatesFilter<"Controle_consulta"> | boolean
    update_consulta?: BoolWithAggregatesFilter<"Controle_consulta"> | boolean
    read_consulta?: BoolWithAggregatesFilter<"Controle_consulta"> | boolean
    delete_consulta?: BoolWithAggregatesFilter<"Controle_consulta"> | boolean
    controle_id?: IntNullableWithAggregatesFilter<"Controle_consulta"> | number | null
  }

  export type EstabelecimentoCreateInput = {
    id?: string
    razao_social: string
    nome_fantasia: string
    endereco: string
    numero: string
    bairro: string
    complemento: string
    uf: string
    cidade: string
    cep: string
    cnpj: string
    inscricao_estadual: string
    telefone: string
    email: string
    nome_responsavel: string
    telefone_responsavel: string
    email_responsavel: string
    usuarios_de_acesso: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
  }

  export type EstabelecimentoUncheckedCreateInput = {
    id?: string
    razao_social: string
    nome_fantasia: string
    endereco: string
    numero: string
    bairro: string
    complemento: string
    uf: string
    cidade: string
    cep: string
    cnpj: string
    inscricao_estadual: string
    telefone: string
    email: string
    nome_responsavel: string
    telefone_responsavel: string
    email_responsavel: string
    usuarios_de_acesso: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
  }

  export type EstabelecimentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricao_estadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome_responsavel?: StringFieldUpdateOperationsInput | string
    telefone_responsavel?: StringFieldUpdateOperationsInput | string
    email_responsavel?: StringFieldUpdateOperationsInput | string
    usuarios_de_acesso?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstabelecimentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricao_estadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome_responsavel?: StringFieldUpdateOperationsInput | string
    telefone_responsavel?: StringFieldUpdateOperationsInput | string
    email_responsavel?: StringFieldUpdateOperationsInput | string
    usuarios_de_acesso?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstabelecimentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricao_estadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome_responsavel?: StringFieldUpdateOperationsInput | string
    telefone_responsavel?: StringFieldUpdateOperationsInput | string
    email_responsavel?: StringFieldUpdateOperationsInput | string
    usuarios_de_acesso?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstabelecimentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    razao_social?: StringFieldUpdateOperationsInput | string
    nome_fantasia?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    uf?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    inscricao_estadual?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    nome_responsavel?: StringFieldUpdateOperationsInput | string
    telefone_responsavel?: StringFieldUpdateOperationsInput | string
    email_responsavel?: StringFieldUpdateOperationsInput | string
    usuarios_de_acesso?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type licencaCreateInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    data_vencimento: Date | string
    is_active: boolean
  }

  export type licencaUncheckedCreateInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    data_vencimento: Date | string
    is_active: boolean
  }

  export type licencaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type licencaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type licencaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type licencaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_vencimento?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PacienteCreateInput = {
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    anamnese?: AnamneseCreateNestedManyWithoutPacienteInput
    consulta?: ConsultaCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    consulta_id: number
    anamnese?: AnamneseUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    anamnese?: AnamneseUpdateManyWithoutPacienteNestedInput
    consulta?: ConsultaUpdateOneWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    consulta_id?: IntFieldUpdateOperationsInput | number
    anamnese?: AnamneseUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    consulta_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnamneseCreateInput = {
    infeccao_urinaria: boolean
    dst: string
    pedra_nos_rins: string
    problema_nos_testiculos: string
    historico_de_cancer_na_familia: string
    doenca_cronica: string
    utiliza_remedios: string
    fumante: string
    bebidas_alcoolicas: string
    droga: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: PacienteCreateNestedOneWithoutAnamneseInput
  }

  export type AnamneseUncheckedCreateInput = {
    id?: number
    infeccao_urinaria: boolean
    dst: string
    pedra_nos_rins: string
    problema_nos_testiculos: string
    historico_de_cancer_na_familia: string
    doenca_cronica: string
    utiliza_remedios: string
    fumante: string
    bebidas_alcoolicas: string
    droga: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente_id: number
  }

  export type AnamneseUpdateInput = {
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: PacienteUpdateOneWithoutAnamneseNestedInput
  }

  export type AnamneseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente_id?: IntFieldUpdateOperationsInput | number
  }

  export type AnamneseUpdateManyMutationInput = {
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnamneseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente_id?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentoCreateInput = {
    observacao: string
    status: string
    data_de_agendado: Date | string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
  }

  export type AgendamentoUncheckedCreateInput = {
    id?: number
    observacao: string
    status: string
    data_de_agendado: Date | string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
  }

  export type AgendamentoUpdateInput = {
    observacao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_de_agendado?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    observacao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_de_agendado?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUpdateManyMutationInput = {
    observacao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_de_agendado?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    observacao?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data_de_agendado?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateInput = {
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    usuario?: UsuarioCreateNestedManyWithoutConsultaInput
    paciente?: PacienteCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    usuario?: UsuarioUncheckedCreateNestedManyWithoutConsultaInput
    paciente?: PacienteUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUpdateInput = {
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateManyWithoutConsultaNestedInput
    paciente?: PacienteUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUncheckedUpdateManyWithoutConsultaNestedInput
    paciente?: PacienteUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUpdateManyMutationInput = {
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    senha: string
    ocupacao: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    controle?: Controle_acessoCreateNestedManyWithoutUsuarioInput
    Consulta?: ConsultaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    senha: string
    ocupacao: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    Consulta_id?: number | null
    controle?: Controle_acessoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUpdateManyWithoutUsuarioNestedInput
    Consulta?: ConsultaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Consulta_id?: NullableIntFieldUpdateOperationsInput | number | null
    controle?: Controle_acessoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Consulta_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_acessoCreateInput = {
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: Controle_pacienteCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaCreateNestedManyWithoutControleInput
    usuario?: UsuarioCreateNestedOneWithoutControleInput
  }

  export type Controle_acessoUncheckedCreateInput = {
    id?: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    usuario_id?: number | null
    paciente?: Controle_pacienteUncheckedCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseUncheckedCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoUncheckedCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaUncheckedCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: Controle_pacienteUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUpdateManyWithoutControleNestedInput
    usuario?: UsuarioUpdateOneWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    paciente?: Controle_pacienteUncheckedUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUncheckedUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUncheckedUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUncheckedUpdateManyWithoutControleNestedInput
  }

  export type Controle_acessoUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_acessoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_pacienteCreateInput = {
    read_paciente: boolean
    create_paciente: boolean
    update_paciente: boolean
    delete_paciente: boolean
    controle: Controle_acessoCreateNestedOneWithoutPacienteInput
  }

  export type Controle_pacienteUncheckedCreateInput = {
    id?: number
    read_paciente: boolean
    create_paciente: boolean
    update_paciente: boolean
    delete_paciente: boolean
    controle_id: number
  }

  export type Controle_pacienteUpdateInput = {
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUpdateOneRequiredWithoutPacienteNestedInput
  }

  export type Controle_pacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
    controle_id?: IntFieldUpdateOperationsInput | number
  }

  export type Controle_pacienteUpdateManyMutationInput = {
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_pacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
    controle_id?: IntFieldUpdateOperationsInput | number
  }

  export type Controle_anamneseCreateInput = {
    create_anamnese: boolean
    update_anamnese: boolean
    read_anamnese: boolean
    delete_anamnese: boolean
    controle?: Controle_acessoCreateNestedOneWithoutAnamneseInput
  }

  export type Controle_anamneseUncheckedCreateInput = {
    id?: number
    create_anamnese: boolean
    update_anamnese: boolean
    read_anamnese: boolean
    delete_anamnese: boolean
    controle_id?: number | null
  }

  export type Controle_anamneseUpdateInput = {
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUpdateOneWithoutAnamneseNestedInput
  }

  export type Controle_anamneseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
    controle_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_anamneseUpdateManyMutationInput = {
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_anamneseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
    controle_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_agendamentoCreateInput = {
    create_agendamento: boolean
    update_agendamento: boolean
    read_agendamento: boolean
    delete_agendamento: boolean
    controle?: Controle_acessoCreateNestedOneWithoutAgendamentoInput
  }

  export type Controle_agendamentoUncheckedCreateInput = {
    id?: number
    create_agendamento: boolean
    update_agendamento: boolean
    read_agendamento: boolean
    delete_agendamento: boolean
    control_id?: number | null
  }

  export type Controle_agendamentoUpdateInput = {
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUpdateOneWithoutAgendamentoNestedInput
  }

  export type Controle_agendamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
    control_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_agendamentoUpdateManyMutationInput = {
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_agendamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
    control_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_consultaCreateInput = {
    create_consulta: boolean
    update_consulta: boolean
    read_consulta: boolean
    delete_consulta: boolean
    controle?: Controle_acessoCreateNestedOneWithoutConsultaInput
  }

  export type Controle_consultaUncheckedCreateInput = {
    id?: number
    create_consulta: boolean
    update_consulta: boolean
    read_consulta: boolean
    delete_consulta: boolean
    controle_id?: number | null
  }

  export type Controle_consultaUpdateInput = {
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUpdateOneWithoutConsultaNestedInput
  }

  export type Controle_consultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
    controle_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_consultaUpdateManyMutationInput = {
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_consultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
    controle_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EstabelecimentoCountOrderByAggregateInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    uf?: SortOrder
    cidade?: SortOrder
    cep?: SortOrder
    cnpj?: SortOrder
    inscricao_estadual?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    nome_responsavel?: SortOrder
    telefone_responsavel?: SortOrder
    email_responsavel?: SortOrder
    usuarios_de_acesso?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
  }

  export type EstabelecimentoAvgOrderByAggregateInput = {
    usuarios_de_acesso?: SortOrder
  }

  export type EstabelecimentoMaxOrderByAggregateInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    uf?: SortOrder
    cidade?: SortOrder
    cep?: SortOrder
    cnpj?: SortOrder
    inscricao_estadual?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    nome_responsavel?: SortOrder
    telefone_responsavel?: SortOrder
    email_responsavel?: SortOrder
    usuarios_de_acesso?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
  }

  export type EstabelecimentoMinOrderByAggregateInput = {
    id?: SortOrder
    razao_social?: SortOrder
    nome_fantasia?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    uf?: SortOrder
    cidade?: SortOrder
    cep?: SortOrder
    cnpj?: SortOrder
    inscricao_estadual?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    nome_responsavel?: SortOrder
    telefone_responsavel?: SortOrder
    email_responsavel?: SortOrder
    usuarios_de_acesso?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
  }

  export type EstabelecimentoSumOrderByAggregateInput = {
    usuarios_de_acesso?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type licencaCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    data_vencimento?: SortOrder
    is_active?: SortOrder
  }

  export type licencaMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    data_vencimento?: SortOrder
    is_active?: SortOrder
  }

  export type licencaMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    data_vencimento?: SortOrder
    is_active?: SortOrder
  }

  export type AnamneseListRelationFilter = {
    every?: AnamneseWhereInput
    some?: AnamneseWhereInput
    none?: AnamneseWhereInput
  }

  export type ConsultaNullableRelationFilter = {
    is?: ConsultaWhereInput | null
    isNot?: ConsultaWhereInput | null
  }

  export type AnamneseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    consulta_id?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
    cep?: SortOrder
    consulta_id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    consulta_id?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    data_nascimento?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    complemento?: SortOrder
    cep?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    consulta_id?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
    cpf?: SortOrder
    numero?: SortOrder
    cep?: SortOrder
    consulta_id?: SortOrder
  }

  export type PacienteNullableRelationFilter = {
    is?: PacienteWhereInput | null
    isNot?: PacienteWhereInput | null
  }

  export type AnamneseCountOrderByAggregateInput = {
    id?: SortOrder
    infeccao_urinaria?: SortOrder
    dst?: SortOrder
    pedra_nos_rins?: SortOrder
    problema_nos_testiculos?: SortOrder
    historico_de_cancer_na_familia?: SortOrder
    doenca_cronica?: SortOrder
    utiliza_remedios?: SortOrder
    fumante?: SortOrder
    bebidas_alcoolicas?: SortOrder
    droga?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    paciente_id?: SortOrder
  }

  export type AnamneseAvgOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type AnamneseMaxOrderByAggregateInput = {
    id?: SortOrder
    infeccao_urinaria?: SortOrder
    dst?: SortOrder
    pedra_nos_rins?: SortOrder
    problema_nos_testiculos?: SortOrder
    historico_de_cancer_na_familia?: SortOrder
    doenca_cronica?: SortOrder
    utiliza_remedios?: SortOrder
    fumante?: SortOrder
    bebidas_alcoolicas?: SortOrder
    droga?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    paciente_id?: SortOrder
  }

  export type AnamneseMinOrderByAggregateInput = {
    id?: SortOrder
    infeccao_urinaria?: SortOrder
    dst?: SortOrder
    pedra_nos_rins?: SortOrder
    problema_nos_testiculos?: SortOrder
    historico_de_cancer_na_familia?: SortOrder
    doenca_cronica?: SortOrder
    utiliza_remedios?: SortOrder
    fumante?: SortOrder
    bebidas_alcoolicas?: SortOrder
    droga?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    paciente_id?: SortOrder
  }

  export type AnamneseSumOrderByAggregateInput = {
    id?: SortOrder
    paciente_id?: SortOrder
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    data_de_agendado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AgendamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    data_de_agendado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    observacao?: SortOrder
    status?: SortOrder
    data_de_agendado?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type AgendamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type PacienteListRelationFilter = {
    every?: PacienteWhereInput
    some?: PacienteWhereInput
    none?: PacienteWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    diagnostico?: SortOrder
    prescricao?: SortOrder
    convenio?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    diagnostico?: SortOrder
    prescricao?: SortOrder
    convenio?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    diagnostico?: SortOrder
    prescricao?: SortOrder
    convenio?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Controle_acessoListRelationFilter = {
    every?: Controle_acessoWhereInput
    some?: Controle_acessoWhereInput
    none?: Controle_acessoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Controle_acessoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ocupacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    Consulta_id?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    Consulta_id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ocupacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    Consulta_id?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    ocupacao?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    Consulta_id?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    Consulta_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type Controle_pacienteListRelationFilter = {
    every?: Controle_pacienteWhereInput
    some?: Controle_pacienteWhereInput
    none?: Controle_pacienteWhereInput
  }

  export type Controle_anamneseListRelationFilter = {
    every?: Controle_anamneseWhereInput
    some?: Controle_anamneseWhereInput
    none?: Controle_anamneseWhereInput
  }

  export type Controle_agendamentoListRelationFilter = {
    every?: Controle_agendamentoWhereInput
    some?: Controle_agendamentoWhereInput
    none?: Controle_agendamentoWhereInput
  }

  export type Controle_consultaListRelationFilter = {
    every?: Controle_consultaWhereInput
    some?: Controle_consultaWhereInput
    none?: Controle_consultaWhereInput
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type Controle_pacienteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Controle_anamneseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Controle_agendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Controle_consultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Controle_acessoCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    usuario_id?: SortOrder
  }

  export type Controle_acessoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type Controle_acessoMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    usuario_id?: SortOrder
  }

  export type Controle_acessoMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    is_active?: SortOrder
    usuario_id?: SortOrder
  }

  export type Controle_acessoSumOrderByAggregateInput = {
    id?: SortOrder
    usuario_id?: SortOrder
  }

  export type Controle_acessoRelationFilter = {
    is?: Controle_acessoWhereInput
    isNot?: Controle_acessoWhereInput
  }

  export type Controle_pacienteCountOrderByAggregateInput = {
    id?: SortOrder
    read_paciente?: SortOrder
    create_paciente?: SortOrder
    update_paciente?: SortOrder
    delete_paciente?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_pacienteAvgOrderByAggregateInput = {
    id?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_pacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    read_paciente?: SortOrder
    create_paciente?: SortOrder
    update_paciente?: SortOrder
    delete_paciente?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_pacienteMinOrderByAggregateInput = {
    id?: SortOrder
    read_paciente?: SortOrder
    create_paciente?: SortOrder
    update_paciente?: SortOrder
    delete_paciente?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_pacienteSumOrderByAggregateInput = {
    id?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_acessoNullableRelationFilter = {
    is?: Controle_acessoWhereInput | null
    isNot?: Controle_acessoWhereInput | null
  }

  export type Controle_anamneseCountOrderByAggregateInput = {
    id?: SortOrder
    create_anamnese?: SortOrder
    update_anamnese?: SortOrder
    read_anamnese?: SortOrder
    delete_anamnese?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_anamneseAvgOrderByAggregateInput = {
    id?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_anamneseMaxOrderByAggregateInput = {
    id?: SortOrder
    create_anamnese?: SortOrder
    update_anamnese?: SortOrder
    read_anamnese?: SortOrder
    delete_anamnese?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_anamneseMinOrderByAggregateInput = {
    id?: SortOrder
    create_anamnese?: SortOrder
    update_anamnese?: SortOrder
    read_anamnese?: SortOrder
    delete_anamnese?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_anamneseSumOrderByAggregateInput = {
    id?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_agendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    create_agendamento?: SortOrder
    update_agendamento?: SortOrder
    read_agendamento?: SortOrder
    delete_agendamento?: SortOrder
    control_id?: SortOrder
  }

  export type Controle_agendamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    control_id?: SortOrder
  }

  export type Controle_agendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    create_agendamento?: SortOrder
    update_agendamento?: SortOrder
    read_agendamento?: SortOrder
    delete_agendamento?: SortOrder
    control_id?: SortOrder
  }

  export type Controle_agendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    create_agendamento?: SortOrder
    update_agendamento?: SortOrder
    read_agendamento?: SortOrder
    delete_agendamento?: SortOrder
    control_id?: SortOrder
  }

  export type Controle_agendamentoSumOrderByAggregateInput = {
    id?: SortOrder
    control_id?: SortOrder
  }

  export type Controle_consultaCountOrderByAggregateInput = {
    id?: SortOrder
    create_consulta?: SortOrder
    update_consulta?: SortOrder
    read_consulta?: SortOrder
    delete_consulta?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_consultaAvgOrderByAggregateInput = {
    id?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_consultaMaxOrderByAggregateInput = {
    id?: SortOrder
    create_consulta?: SortOrder
    update_consulta?: SortOrder
    read_consulta?: SortOrder
    delete_consulta?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_consultaMinOrderByAggregateInput = {
    id?: SortOrder
    create_consulta?: SortOrder
    update_consulta?: SortOrder
    read_consulta?: SortOrder
    delete_consulta?: SortOrder
    controle_id?: SortOrder
  }

  export type Controle_consultaSumOrderByAggregateInput = {
    id?: SortOrder
    controle_id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnamneseCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AnamneseCreateWithoutPacienteInput, AnamneseUncheckedCreateWithoutPacienteInput> | AnamneseCreateWithoutPacienteInput[] | AnamneseUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AnamneseCreateOrConnectWithoutPacienteInput | AnamneseCreateOrConnectWithoutPacienteInput[]
    connect?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
  }

  export type ConsultaCreateNestedOneWithoutPacienteInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput
    connect?: ConsultaWhereUniqueInput
  }

  export type AnamneseUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AnamneseCreateWithoutPacienteInput, AnamneseUncheckedCreateWithoutPacienteInput> | AnamneseCreateWithoutPacienteInput[] | AnamneseUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AnamneseCreateOrConnectWithoutPacienteInput | AnamneseCreateOrConnectWithoutPacienteInput[]
    connect?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
  }

  export type AnamneseUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AnamneseCreateWithoutPacienteInput, AnamneseUncheckedCreateWithoutPacienteInput> | AnamneseCreateWithoutPacienteInput[] | AnamneseUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AnamneseCreateOrConnectWithoutPacienteInput | AnamneseCreateOrConnectWithoutPacienteInput[]
    upsert?: AnamneseUpsertWithWhereUniqueWithoutPacienteInput | AnamneseUpsertWithWhereUniqueWithoutPacienteInput[]
    set?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    disconnect?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    delete?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    connect?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    update?: AnamneseUpdateWithWhereUniqueWithoutPacienteInput | AnamneseUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AnamneseUpdateManyWithWhereWithoutPacienteInput | AnamneseUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AnamneseScalarWhereInput | AnamneseScalarWhereInput[]
  }

  export type ConsultaUpdateOneWithoutPacienteNestedInput = {
    create?: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutPacienteInput
    upsert?: ConsultaUpsertWithoutPacienteInput
    disconnect?: ConsultaWhereInput | boolean
    delete?: ConsultaWhereInput | boolean
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutPacienteInput, ConsultaUpdateWithoutPacienteInput>, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type AnamneseUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AnamneseCreateWithoutPacienteInput, AnamneseUncheckedCreateWithoutPacienteInput> | AnamneseCreateWithoutPacienteInput[] | AnamneseUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AnamneseCreateOrConnectWithoutPacienteInput | AnamneseCreateOrConnectWithoutPacienteInput[]
    upsert?: AnamneseUpsertWithWhereUniqueWithoutPacienteInput | AnamneseUpsertWithWhereUniqueWithoutPacienteInput[]
    set?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    disconnect?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    delete?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    connect?: AnamneseWhereUniqueInput | AnamneseWhereUniqueInput[]
    update?: AnamneseUpdateWithWhereUniqueWithoutPacienteInput | AnamneseUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AnamneseUpdateManyWithWhereWithoutPacienteInput | AnamneseUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AnamneseScalarWhereInput | AnamneseScalarWhereInput[]
  }

  export type PacienteCreateNestedOneWithoutAnamneseInput = {
    create?: XOR<PacienteCreateWithoutAnamneseInput, PacienteUncheckedCreateWithoutAnamneseInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAnamneseInput
    connect?: PacienteWhereUniqueInput
  }

  export type PacienteUpdateOneWithoutAnamneseNestedInput = {
    create?: XOR<PacienteCreateWithoutAnamneseInput, PacienteUncheckedCreateWithoutAnamneseInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutAnamneseInput
    upsert?: PacienteUpsertWithoutAnamneseInput
    disconnect?: PacienteWhereInput | boolean
    delete?: PacienteWhereInput | boolean
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutAnamneseInput, PacienteUpdateWithoutAnamneseInput>, PacienteUncheckedUpdateWithoutAnamneseInput>
  }

  export type UsuarioCreateNestedManyWithoutConsultaInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PacienteCreateNestedManyWithoutConsultaInput = {
    create?: XOR<PacienteCreateWithoutConsultaInput, PacienteUncheckedCreateWithoutConsultaInput> | PacienteCreateWithoutConsultaInput[] | PacienteUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultaInput | PacienteCreateOrConnectWithoutConsultaInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PacienteUncheckedCreateNestedManyWithoutConsultaInput = {
    create?: XOR<PacienteCreateWithoutConsultaInput, PacienteUncheckedCreateWithoutConsultaInput> | PacienteCreateWithoutConsultaInput[] | PacienteUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultaInput | PacienteCreateOrConnectWithoutConsultaInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutConsultaInput | UsuarioUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutConsultaInput | UsuarioUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutConsultaInput | UsuarioUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PacienteUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultaInput, PacienteUncheckedCreateWithoutConsultaInput> | PacienteCreateWithoutConsultaInput[] | PacienteUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultaInput | PacienteCreateOrConnectWithoutConsultaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutConsultaInput | PacienteUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutConsultaInput | PacienteUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutConsultaInput | PacienteUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput> | UsuarioCreateWithoutConsultaInput[] | UsuarioUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutConsultaInput | UsuarioCreateOrConnectWithoutConsultaInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutConsultaInput | UsuarioUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutConsultaInput | UsuarioUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutConsultaInput | UsuarioUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PacienteUncheckedUpdateManyWithoutConsultaNestedInput = {
    create?: XOR<PacienteCreateWithoutConsultaInput, PacienteUncheckedCreateWithoutConsultaInput> | PacienteCreateWithoutConsultaInput[] | PacienteUncheckedCreateWithoutConsultaInput[]
    connectOrCreate?: PacienteCreateOrConnectWithoutConsultaInput | PacienteCreateOrConnectWithoutConsultaInput[]
    upsert?: PacienteUpsertWithWhereUniqueWithoutConsultaInput | PacienteUpsertWithWhereUniqueWithoutConsultaInput[]
    set?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    disconnect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    delete?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    connect?: PacienteWhereUniqueInput | PacienteWhereUniqueInput[]
    update?: PacienteUpdateWithWhereUniqueWithoutConsultaInput | PacienteUpdateWithWhereUniqueWithoutConsultaInput[]
    updateMany?: PacienteUpdateManyWithWhereWithoutConsultaInput | PacienteUpdateManyWithWhereWithoutConsultaInput[]
    deleteMany?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
  }

  export type Controle_acessoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Controle_acessoCreateWithoutUsuarioInput, Controle_acessoUncheckedCreateWithoutUsuarioInput> | Controle_acessoCreateWithoutUsuarioInput[] | Controle_acessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutUsuarioInput | Controle_acessoCreateOrConnectWithoutUsuarioInput[]
    connect?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
  }

  export type ConsultaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutUsuarioInput
    connect?: ConsultaWhereUniqueInput
  }

  export type Controle_acessoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<Controle_acessoCreateWithoutUsuarioInput, Controle_acessoUncheckedCreateWithoutUsuarioInput> | Controle_acessoCreateWithoutUsuarioInput[] | Controle_acessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutUsuarioInput | Controle_acessoCreateOrConnectWithoutUsuarioInput[]
    connect?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
  }

  export type Controle_acessoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Controle_acessoCreateWithoutUsuarioInput, Controle_acessoUncheckedCreateWithoutUsuarioInput> | Controle_acessoCreateWithoutUsuarioInput[] | Controle_acessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutUsuarioInput | Controle_acessoCreateOrConnectWithoutUsuarioInput[]
    upsert?: Controle_acessoUpsertWithWhereUniqueWithoutUsuarioInput | Controle_acessoUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    disconnect?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    delete?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    connect?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    update?: Controle_acessoUpdateWithWhereUniqueWithoutUsuarioInput | Controle_acessoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Controle_acessoUpdateManyWithWhereWithoutUsuarioInput | Controle_acessoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Controle_acessoScalarWhereInput | Controle_acessoScalarWhereInput[]
  }

  export type ConsultaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: ConsultaCreateOrConnectWithoutUsuarioInput
    upsert?: ConsultaUpsertWithoutUsuarioInput
    disconnect?: ConsultaWhereInput | boolean
    delete?: ConsultaWhereInput | boolean
    connect?: ConsultaWhereUniqueInput
    update?: XOR<XOR<ConsultaUpdateToOneWithWhereWithoutUsuarioInput, ConsultaUpdateWithoutUsuarioInput>, ConsultaUncheckedUpdateWithoutUsuarioInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Controle_acessoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<Controle_acessoCreateWithoutUsuarioInput, Controle_acessoUncheckedCreateWithoutUsuarioInput> | Controle_acessoCreateWithoutUsuarioInput[] | Controle_acessoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutUsuarioInput | Controle_acessoCreateOrConnectWithoutUsuarioInput[]
    upsert?: Controle_acessoUpsertWithWhereUniqueWithoutUsuarioInput | Controle_acessoUpsertWithWhereUniqueWithoutUsuarioInput[]
    set?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    disconnect?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    delete?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    connect?: Controle_acessoWhereUniqueInput | Controle_acessoWhereUniqueInput[]
    update?: Controle_acessoUpdateWithWhereUniqueWithoutUsuarioInput | Controle_acessoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: Controle_acessoUpdateManyWithWhereWithoutUsuarioInput | Controle_acessoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: Controle_acessoScalarWhereInput | Controle_acessoScalarWhereInput[]
  }

  export type Controle_pacienteCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_pacienteCreateWithoutControleInput, Controle_pacienteUncheckedCreateWithoutControleInput> | Controle_pacienteCreateWithoutControleInput[] | Controle_pacienteUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_pacienteCreateOrConnectWithoutControleInput | Controle_pacienteCreateOrConnectWithoutControleInput[]
    connect?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
  }

  export type Controle_anamneseCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_anamneseCreateWithoutControleInput, Controle_anamneseUncheckedCreateWithoutControleInput> | Controle_anamneseCreateWithoutControleInput[] | Controle_anamneseUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_anamneseCreateOrConnectWithoutControleInput | Controle_anamneseCreateOrConnectWithoutControleInput[]
    connect?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
  }

  export type Controle_agendamentoCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_agendamentoCreateWithoutControleInput, Controle_agendamentoUncheckedCreateWithoutControleInput> | Controle_agendamentoCreateWithoutControleInput[] | Controle_agendamentoUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_agendamentoCreateOrConnectWithoutControleInput | Controle_agendamentoCreateOrConnectWithoutControleInput[]
    connect?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
  }

  export type Controle_consultaCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_consultaCreateWithoutControleInput, Controle_consultaUncheckedCreateWithoutControleInput> | Controle_consultaCreateWithoutControleInput[] | Controle_consultaUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_consultaCreateOrConnectWithoutControleInput | Controle_consultaCreateOrConnectWithoutControleInput[]
    connect?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutControleInput = {
    create?: XOR<UsuarioCreateWithoutControleInput, UsuarioUncheckedCreateWithoutControleInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutControleInput
    connect?: UsuarioWhereUniqueInput
  }

  export type Controle_pacienteUncheckedCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_pacienteCreateWithoutControleInput, Controle_pacienteUncheckedCreateWithoutControleInput> | Controle_pacienteCreateWithoutControleInput[] | Controle_pacienteUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_pacienteCreateOrConnectWithoutControleInput | Controle_pacienteCreateOrConnectWithoutControleInput[]
    connect?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
  }

  export type Controle_anamneseUncheckedCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_anamneseCreateWithoutControleInput, Controle_anamneseUncheckedCreateWithoutControleInput> | Controle_anamneseCreateWithoutControleInput[] | Controle_anamneseUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_anamneseCreateOrConnectWithoutControleInput | Controle_anamneseCreateOrConnectWithoutControleInput[]
    connect?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
  }

  export type Controle_agendamentoUncheckedCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_agendamentoCreateWithoutControleInput, Controle_agendamentoUncheckedCreateWithoutControleInput> | Controle_agendamentoCreateWithoutControleInput[] | Controle_agendamentoUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_agendamentoCreateOrConnectWithoutControleInput | Controle_agendamentoCreateOrConnectWithoutControleInput[]
    connect?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
  }

  export type Controle_consultaUncheckedCreateNestedManyWithoutControleInput = {
    create?: XOR<Controle_consultaCreateWithoutControleInput, Controle_consultaUncheckedCreateWithoutControleInput> | Controle_consultaCreateWithoutControleInput[] | Controle_consultaUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_consultaCreateOrConnectWithoutControleInput | Controle_consultaCreateOrConnectWithoutControleInput[]
    connect?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
  }

  export type Controle_pacienteUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_pacienteCreateWithoutControleInput, Controle_pacienteUncheckedCreateWithoutControleInput> | Controle_pacienteCreateWithoutControleInput[] | Controle_pacienteUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_pacienteCreateOrConnectWithoutControleInput | Controle_pacienteCreateOrConnectWithoutControleInput[]
    upsert?: Controle_pacienteUpsertWithWhereUniqueWithoutControleInput | Controle_pacienteUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    disconnect?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    delete?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    connect?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    update?: Controle_pacienteUpdateWithWhereUniqueWithoutControleInput | Controle_pacienteUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_pacienteUpdateManyWithWhereWithoutControleInput | Controle_pacienteUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_pacienteScalarWhereInput | Controle_pacienteScalarWhereInput[]
  }

  export type Controle_anamneseUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_anamneseCreateWithoutControleInput, Controle_anamneseUncheckedCreateWithoutControleInput> | Controle_anamneseCreateWithoutControleInput[] | Controle_anamneseUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_anamneseCreateOrConnectWithoutControleInput | Controle_anamneseCreateOrConnectWithoutControleInput[]
    upsert?: Controle_anamneseUpsertWithWhereUniqueWithoutControleInput | Controle_anamneseUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    disconnect?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    delete?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    connect?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    update?: Controle_anamneseUpdateWithWhereUniqueWithoutControleInput | Controle_anamneseUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_anamneseUpdateManyWithWhereWithoutControleInput | Controle_anamneseUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_anamneseScalarWhereInput | Controle_anamneseScalarWhereInput[]
  }

  export type Controle_agendamentoUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_agendamentoCreateWithoutControleInput, Controle_agendamentoUncheckedCreateWithoutControleInput> | Controle_agendamentoCreateWithoutControleInput[] | Controle_agendamentoUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_agendamentoCreateOrConnectWithoutControleInput | Controle_agendamentoCreateOrConnectWithoutControleInput[]
    upsert?: Controle_agendamentoUpsertWithWhereUniqueWithoutControleInput | Controle_agendamentoUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    disconnect?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    delete?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    connect?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    update?: Controle_agendamentoUpdateWithWhereUniqueWithoutControleInput | Controle_agendamentoUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_agendamentoUpdateManyWithWhereWithoutControleInput | Controle_agendamentoUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_agendamentoScalarWhereInput | Controle_agendamentoScalarWhereInput[]
  }

  export type Controle_consultaUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_consultaCreateWithoutControleInput, Controle_consultaUncheckedCreateWithoutControleInput> | Controle_consultaCreateWithoutControleInput[] | Controle_consultaUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_consultaCreateOrConnectWithoutControleInput | Controle_consultaCreateOrConnectWithoutControleInput[]
    upsert?: Controle_consultaUpsertWithWhereUniqueWithoutControleInput | Controle_consultaUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    disconnect?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    delete?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    connect?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    update?: Controle_consultaUpdateWithWhereUniqueWithoutControleInput | Controle_consultaUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_consultaUpdateManyWithWhereWithoutControleInput | Controle_consultaUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_consultaScalarWhereInput | Controle_consultaScalarWhereInput[]
  }

  export type UsuarioUpdateOneWithoutControleNestedInput = {
    create?: XOR<UsuarioCreateWithoutControleInput, UsuarioUncheckedCreateWithoutControleInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutControleInput
    upsert?: UsuarioUpsertWithoutControleInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutControleInput, UsuarioUpdateWithoutControleInput>, UsuarioUncheckedUpdateWithoutControleInput>
  }

  export type Controle_pacienteUncheckedUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_pacienteCreateWithoutControleInput, Controle_pacienteUncheckedCreateWithoutControleInput> | Controle_pacienteCreateWithoutControleInput[] | Controle_pacienteUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_pacienteCreateOrConnectWithoutControleInput | Controle_pacienteCreateOrConnectWithoutControleInput[]
    upsert?: Controle_pacienteUpsertWithWhereUniqueWithoutControleInput | Controle_pacienteUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    disconnect?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    delete?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    connect?: Controle_pacienteWhereUniqueInput | Controle_pacienteWhereUniqueInput[]
    update?: Controle_pacienteUpdateWithWhereUniqueWithoutControleInput | Controle_pacienteUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_pacienteUpdateManyWithWhereWithoutControleInput | Controle_pacienteUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_pacienteScalarWhereInput | Controle_pacienteScalarWhereInput[]
  }

  export type Controle_anamneseUncheckedUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_anamneseCreateWithoutControleInput, Controle_anamneseUncheckedCreateWithoutControleInput> | Controle_anamneseCreateWithoutControleInput[] | Controle_anamneseUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_anamneseCreateOrConnectWithoutControleInput | Controle_anamneseCreateOrConnectWithoutControleInput[]
    upsert?: Controle_anamneseUpsertWithWhereUniqueWithoutControleInput | Controle_anamneseUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    disconnect?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    delete?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    connect?: Controle_anamneseWhereUniqueInput | Controle_anamneseWhereUniqueInput[]
    update?: Controle_anamneseUpdateWithWhereUniqueWithoutControleInput | Controle_anamneseUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_anamneseUpdateManyWithWhereWithoutControleInput | Controle_anamneseUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_anamneseScalarWhereInput | Controle_anamneseScalarWhereInput[]
  }

  export type Controle_agendamentoUncheckedUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_agendamentoCreateWithoutControleInput, Controle_agendamentoUncheckedCreateWithoutControleInput> | Controle_agendamentoCreateWithoutControleInput[] | Controle_agendamentoUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_agendamentoCreateOrConnectWithoutControleInput | Controle_agendamentoCreateOrConnectWithoutControleInput[]
    upsert?: Controle_agendamentoUpsertWithWhereUniqueWithoutControleInput | Controle_agendamentoUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    disconnect?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    delete?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    connect?: Controle_agendamentoWhereUniqueInput | Controle_agendamentoWhereUniqueInput[]
    update?: Controle_agendamentoUpdateWithWhereUniqueWithoutControleInput | Controle_agendamentoUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_agendamentoUpdateManyWithWhereWithoutControleInput | Controle_agendamentoUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_agendamentoScalarWhereInput | Controle_agendamentoScalarWhereInput[]
  }

  export type Controle_consultaUncheckedUpdateManyWithoutControleNestedInput = {
    create?: XOR<Controle_consultaCreateWithoutControleInput, Controle_consultaUncheckedCreateWithoutControleInput> | Controle_consultaCreateWithoutControleInput[] | Controle_consultaUncheckedCreateWithoutControleInput[]
    connectOrCreate?: Controle_consultaCreateOrConnectWithoutControleInput | Controle_consultaCreateOrConnectWithoutControleInput[]
    upsert?: Controle_consultaUpsertWithWhereUniqueWithoutControleInput | Controle_consultaUpsertWithWhereUniqueWithoutControleInput[]
    set?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    disconnect?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    delete?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    connect?: Controle_consultaWhereUniqueInput | Controle_consultaWhereUniqueInput[]
    update?: Controle_consultaUpdateWithWhereUniqueWithoutControleInput | Controle_consultaUpdateWithWhereUniqueWithoutControleInput[]
    updateMany?: Controle_consultaUpdateManyWithWhereWithoutControleInput | Controle_consultaUpdateManyWithWhereWithoutControleInput[]
    deleteMany?: Controle_consultaScalarWhereInput | Controle_consultaScalarWhereInput[]
  }

  export type Controle_acessoCreateNestedOneWithoutPacienteInput = {
    create?: XOR<Controle_acessoCreateWithoutPacienteInput, Controle_acessoUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutPacienteInput
    connect?: Controle_acessoWhereUniqueInput
  }

  export type Controle_acessoUpdateOneRequiredWithoutPacienteNestedInput = {
    create?: XOR<Controle_acessoCreateWithoutPacienteInput, Controle_acessoUncheckedCreateWithoutPacienteInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutPacienteInput
    upsert?: Controle_acessoUpsertWithoutPacienteInput
    connect?: Controle_acessoWhereUniqueInput
    update?: XOR<XOR<Controle_acessoUpdateToOneWithWhereWithoutPacienteInput, Controle_acessoUpdateWithoutPacienteInput>, Controle_acessoUncheckedUpdateWithoutPacienteInput>
  }

  export type Controle_acessoCreateNestedOneWithoutAnamneseInput = {
    create?: XOR<Controle_acessoCreateWithoutAnamneseInput, Controle_acessoUncheckedCreateWithoutAnamneseInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutAnamneseInput
    connect?: Controle_acessoWhereUniqueInput
  }

  export type Controle_acessoUpdateOneWithoutAnamneseNestedInput = {
    create?: XOR<Controle_acessoCreateWithoutAnamneseInput, Controle_acessoUncheckedCreateWithoutAnamneseInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutAnamneseInput
    upsert?: Controle_acessoUpsertWithoutAnamneseInput
    disconnect?: Controle_acessoWhereInput | boolean
    delete?: Controle_acessoWhereInput | boolean
    connect?: Controle_acessoWhereUniqueInput
    update?: XOR<XOR<Controle_acessoUpdateToOneWithWhereWithoutAnamneseInput, Controle_acessoUpdateWithoutAnamneseInput>, Controle_acessoUncheckedUpdateWithoutAnamneseInput>
  }

  export type Controle_acessoCreateNestedOneWithoutAgendamentoInput = {
    create?: XOR<Controle_acessoCreateWithoutAgendamentoInput, Controle_acessoUncheckedCreateWithoutAgendamentoInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutAgendamentoInput
    connect?: Controle_acessoWhereUniqueInput
  }

  export type Controle_acessoUpdateOneWithoutAgendamentoNestedInput = {
    create?: XOR<Controle_acessoCreateWithoutAgendamentoInput, Controle_acessoUncheckedCreateWithoutAgendamentoInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutAgendamentoInput
    upsert?: Controle_acessoUpsertWithoutAgendamentoInput
    disconnect?: Controle_acessoWhereInput | boolean
    delete?: Controle_acessoWhereInput | boolean
    connect?: Controle_acessoWhereUniqueInput
    update?: XOR<XOR<Controle_acessoUpdateToOneWithWhereWithoutAgendamentoInput, Controle_acessoUpdateWithoutAgendamentoInput>, Controle_acessoUncheckedUpdateWithoutAgendamentoInput>
  }

  export type Controle_acessoCreateNestedOneWithoutConsultaInput = {
    create?: XOR<Controle_acessoCreateWithoutConsultaInput, Controle_acessoUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutConsultaInput
    connect?: Controle_acessoWhereUniqueInput
  }

  export type Controle_acessoUpdateOneWithoutConsultaNestedInput = {
    create?: XOR<Controle_acessoCreateWithoutConsultaInput, Controle_acessoUncheckedCreateWithoutConsultaInput>
    connectOrCreate?: Controle_acessoCreateOrConnectWithoutConsultaInput
    upsert?: Controle_acessoUpsertWithoutConsultaInput
    disconnect?: Controle_acessoWhereInput | boolean
    delete?: Controle_acessoWhereInput | boolean
    connect?: Controle_acessoWhereUniqueInput
    update?: XOR<XOR<Controle_acessoUpdateToOneWithWhereWithoutConsultaInput, Controle_acessoUpdateWithoutConsultaInput>, Controle_acessoUncheckedUpdateWithoutConsultaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AnamneseCreateWithoutPacienteInput = {
    infeccao_urinaria: boolean
    dst: string
    pedra_nos_rins: string
    problema_nos_testiculos: string
    historico_de_cancer_na_familia: string
    doenca_cronica: string
    utiliza_remedios: string
    fumante: string
    bebidas_alcoolicas: string
    droga: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
  }

  export type AnamneseUncheckedCreateWithoutPacienteInput = {
    id?: number
    infeccao_urinaria: boolean
    dst: string
    pedra_nos_rins: string
    problema_nos_testiculos: string
    historico_de_cancer_na_familia: string
    doenca_cronica: string
    utiliza_remedios: string
    fumante: string
    bebidas_alcoolicas: string
    droga: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
  }

  export type AnamneseCreateOrConnectWithoutPacienteInput = {
    where: AnamneseWhereUniqueInput
    create: XOR<AnamneseCreateWithoutPacienteInput, AnamneseUncheckedCreateWithoutPacienteInput>
  }

  export type ConsultaCreateWithoutPacienteInput = {
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    usuario?: UsuarioCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutPacienteInput = {
    id?: number
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    usuario?: UsuarioUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutPacienteInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
  }

  export type AnamneseUpsertWithWhereUniqueWithoutPacienteInput = {
    where: AnamneseWhereUniqueInput
    update: XOR<AnamneseUpdateWithoutPacienteInput, AnamneseUncheckedUpdateWithoutPacienteInput>
    create: XOR<AnamneseCreateWithoutPacienteInput, AnamneseUncheckedCreateWithoutPacienteInput>
  }

  export type AnamneseUpdateWithWhereUniqueWithoutPacienteInput = {
    where: AnamneseWhereUniqueInput
    data: XOR<AnamneseUpdateWithoutPacienteInput, AnamneseUncheckedUpdateWithoutPacienteInput>
  }

  export type AnamneseUpdateManyWithWhereWithoutPacienteInput = {
    where: AnamneseScalarWhereInput
    data: XOR<AnamneseUpdateManyMutationInput, AnamneseUncheckedUpdateManyWithoutPacienteInput>
  }

  export type AnamneseScalarWhereInput = {
    AND?: AnamneseScalarWhereInput | AnamneseScalarWhereInput[]
    OR?: AnamneseScalarWhereInput[]
    NOT?: AnamneseScalarWhereInput | AnamneseScalarWhereInput[]
    id?: IntFilter<"Anamnese"> | number
    infeccao_urinaria?: BoolFilter<"Anamnese"> | boolean
    dst?: StringFilter<"Anamnese"> | string
    pedra_nos_rins?: StringFilter<"Anamnese"> | string
    problema_nos_testiculos?: StringFilter<"Anamnese"> | string
    historico_de_cancer_na_familia?: StringFilter<"Anamnese"> | string
    doenca_cronica?: StringFilter<"Anamnese"> | string
    utiliza_remedios?: StringFilter<"Anamnese"> | string
    fumante?: StringFilter<"Anamnese"> | string
    bebidas_alcoolicas?: StringFilter<"Anamnese"> | string
    droga?: StringFilter<"Anamnese"> | string
    created_at?: DateTimeFilter<"Anamnese"> | Date | string
    updated_at?: DateTimeFilter<"Anamnese"> | Date | string
    deleted_at?: DateTimeFilter<"Anamnese"> | Date | string
    is_active?: BoolFilter<"Anamnese"> | boolean
    paciente_id?: IntFilter<"Anamnese"> | number
  }

  export type ConsultaUpsertWithoutPacienteInput = {
    update: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
    create: XOR<ConsultaCreateWithoutPacienteInput, ConsultaUncheckedCreateWithoutPacienteInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutPacienteInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutPacienteInput, ConsultaUncheckedUpdateWithoutPacienteInput>
  }

  export type ConsultaUpdateWithoutPacienteInput = {
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type PacienteCreateWithoutAnamneseInput = {
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    consulta?: ConsultaCreateNestedOneWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutAnamneseInput = {
    id?: number
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    consulta_id: number
  }

  export type PacienteCreateOrConnectWithoutAnamneseInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutAnamneseInput, PacienteUncheckedCreateWithoutAnamneseInput>
  }

  export type PacienteUpsertWithoutAnamneseInput = {
    update: XOR<PacienteUpdateWithoutAnamneseInput, PacienteUncheckedUpdateWithoutAnamneseInput>
    create: XOR<PacienteCreateWithoutAnamneseInput, PacienteUncheckedCreateWithoutAnamneseInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutAnamneseInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutAnamneseInput, PacienteUncheckedUpdateWithoutAnamneseInput>
  }

  export type PacienteUpdateWithoutAnamneseInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    consulta?: ConsultaUpdateOneWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutAnamneseInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    consulta_id?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutConsultaInput = {
    nome: string
    senha: string
    ocupacao: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    controle?: Controle_acessoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutConsultaInput = {
    id?: number
    nome: string
    senha: string
    ocupacao: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    controle?: Controle_acessoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutConsultaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput>
  }

  export type PacienteCreateWithoutConsultaInput = {
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    anamnese?: AnamneseCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutConsultaInput = {
    id?: number
    nome: string
    cpf: number
    data_nascimento: string
    endereco: string
    numero: number
    bairro: string
    complemento: string
    cep: number
    telefone: string
    email: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    anamnese?: AnamneseUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutConsultaInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutConsultaInput, PacienteUncheckedCreateWithoutConsultaInput>
  }

  export type UsuarioUpsertWithWhereUniqueWithoutConsultaInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutConsultaInput, UsuarioUncheckedUpdateWithoutConsultaInput>
    create: XOR<UsuarioCreateWithoutConsultaInput, UsuarioUncheckedCreateWithoutConsultaInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutConsultaInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutConsultaInput, UsuarioUncheckedUpdateWithoutConsultaInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutConsultaInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutConsultaInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    ocupacao?: StringFilter<"Usuario"> | string
    created_at?: DateTimeFilter<"Usuario"> | Date | string
    updated_at?: DateTimeFilter<"Usuario"> | Date | string
    deleted_at?: DateTimeFilter<"Usuario"> | Date | string
    is_active?: BoolFilter<"Usuario"> | boolean
    Consulta_id?: IntNullableFilter<"Usuario"> | number | null
  }

  export type PacienteUpsertWithWhereUniqueWithoutConsultaInput = {
    where: PacienteWhereUniqueInput
    update: XOR<PacienteUpdateWithoutConsultaInput, PacienteUncheckedUpdateWithoutConsultaInput>
    create: XOR<PacienteCreateWithoutConsultaInput, PacienteUncheckedCreateWithoutConsultaInput>
  }

  export type PacienteUpdateWithWhereUniqueWithoutConsultaInput = {
    where: PacienteWhereUniqueInput
    data: XOR<PacienteUpdateWithoutConsultaInput, PacienteUncheckedUpdateWithoutConsultaInput>
  }

  export type PacienteUpdateManyWithWhereWithoutConsultaInput = {
    where: PacienteScalarWhereInput
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyWithoutConsultaInput>
  }

  export type PacienteScalarWhereInput = {
    AND?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    OR?: PacienteScalarWhereInput[]
    NOT?: PacienteScalarWhereInput | PacienteScalarWhereInput[]
    id?: IntFilter<"Paciente"> | number
    nome?: StringFilter<"Paciente"> | string
    cpf?: IntFilter<"Paciente"> | number
    data_nascimento?: StringFilter<"Paciente"> | string
    endereco?: StringFilter<"Paciente"> | string
    numero?: IntFilter<"Paciente"> | number
    bairro?: StringFilter<"Paciente"> | string
    complemento?: StringFilter<"Paciente"> | string
    cep?: IntFilter<"Paciente"> | number
    telefone?: StringFilter<"Paciente"> | string
    email?: StringFilter<"Paciente"> | string
    created_at?: DateTimeFilter<"Paciente"> | Date | string
    updated_at?: DateTimeFilter<"Paciente"> | Date | string
    deleted_at?: DateTimeFilter<"Paciente"> | Date | string
    is_active?: BoolFilter<"Paciente"> | boolean
    consulta_id?: IntFilter<"Paciente"> | number
  }

  export type Controle_acessoCreateWithoutUsuarioInput = {
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: Controle_pacienteCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: Controle_pacienteUncheckedCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseUncheckedCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoUncheckedCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaUncheckedCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoCreateOrConnectWithoutUsuarioInput = {
    where: Controle_acessoWhereUniqueInput
    create: XOR<Controle_acessoCreateWithoutUsuarioInput, Controle_acessoUncheckedCreateWithoutUsuarioInput>
  }

  export type ConsultaCreateWithoutUsuarioInput = {
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    paciente?: PacienteCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    diagnostico: string
    prescricao: string
    convenio: string
    status: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    paciente?: PacienteUncheckedCreateNestedManyWithoutConsultaInput
  }

  export type ConsultaCreateOrConnectWithoutUsuarioInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput>
  }

  export type Controle_acessoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Controle_acessoWhereUniqueInput
    update: XOR<Controle_acessoUpdateWithoutUsuarioInput, Controle_acessoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<Controle_acessoCreateWithoutUsuarioInput, Controle_acessoUncheckedCreateWithoutUsuarioInput>
  }

  export type Controle_acessoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Controle_acessoWhereUniqueInput
    data: XOR<Controle_acessoUpdateWithoutUsuarioInput, Controle_acessoUncheckedUpdateWithoutUsuarioInput>
  }

  export type Controle_acessoUpdateManyWithWhereWithoutUsuarioInput = {
    where: Controle_acessoScalarWhereInput
    data: XOR<Controle_acessoUpdateManyMutationInput, Controle_acessoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type Controle_acessoScalarWhereInput = {
    AND?: Controle_acessoScalarWhereInput | Controle_acessoScalarWhereInput[]
    OR?: Controle_acessoScalarWhereInput[]
    NOT?: Controle_acessoScalarWhereInput | Controle_acessoScalarWhereInput[]
    id?: IntFilter<"Controle_acesso"> | number
    created_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    updated_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    deleted_at?: DateTimeFilter<"Controle_acesso"> | Date | string
    is_active?: BoolFilter<"Controle_acesso"> | boolean
    usuario_id?: IntNullableFilter<"Controle_acesso"> | number | null
  }

  export type ConsultaUpsertWithoutUsuarioInput = {
    update: XOR<ConsultaUpdateWithoutUsuarioInput, ConsultaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ConsultaCreateWithoutUsuarioInput, ConsultaUncheckedCreateWithoutUsuarioInput>
    where?: ConsultaWhereInput
  }

  export type ConsultaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: ConsultaWhereInput
    data: XOR<ConsultaUpdateWithoutUsuarioInput, ConsultaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ConsultaUpdateWithoutUsuarioInput = {
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUpdateManyWithoutConsultaNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    diagnostico?: StringFieldUpdateOperationsInput | string
    prescricao?: StringFieldUpdateOperationsInput | string
    convenio?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PacienteUncheckedUpdateManyWithoutConsultaNestedInput
  }

  export type Controle_pacienteCreateWithoutControleInput = {
    read_paciente: boolean
    create_paciente: boolean
    update_paciente: boolean
    delete_paciente: boolean
  }

  export type Controle_pacienteUncheckedCreateWithoutControleInput = {
    id?: number
    read_paciente: boolean
    create_paciente: boolean
    update_paciente: boolean
    delete_paciente: boolean
  }

  export type Controle_pacienteCreateOrConnectWithoutControleInput = {
    where: Controle_pacienteWhereUniqueInput
    create: XOR<Controle_pacienteCreateWithoutControleInput, Controle_pacienteUncheckedCreateWithoutControleInput>
  }

  export type Controle_anamneseCreateWithoutControleInput = {
    create_anamnese: boolean
    update_anamnese: boolean
    read_anamnese: boolean
    delete_anamnese: boolean
  }

  export type Controle_anamneseUncheckedCreateWithoutControleInput = {
    id?: number
    create_anamnese: boolean
    update_anamnese: boolean
    read_anamnese: boolean
    delete_anamnese: boolean
  }

  export type Controle_anamneseCreateOrConnectWithoutControleInput = {
    where: Controle_anamneseWhereUniqueInput
    create: XOR<Controle_anamneseCreateWithoutControleInput, Controle_anamneseUncheckedCreateWithoutControleInput>
  }

  export type Controle_agendamentoCreateWithoutControleInput = {
    create_agendamento: boolean
    update_agendamento: boolean
    read_agendamento: boolean
    delete_agendamento: boolean
  }

  export type Controle_agendamentoUncheckedCreateWithoutControleInput = {
    id?: number
    create_agendamento: boolean
    update_agendamento: boolean
    read_agendamento: boolean
    delete_agendamento: boolean
  }

  export type Controle_agendamentoCreateOrConnectWithoutControleInput = {
    where: Controle_agendamentoWhereUniqueInput
    create: XOR<Controle_agendamentoCreateWithoutControleInput, Controle_agendamentoUncheckedCreateWithoutControleInput>
  }

  export type Controle_consultaCreateWithoutControleInput = {
    create_consulta: boolean
    update_consulta: boolean
    read_consulta: boolean
    delete_consulta: boolean
  }

  export type Controle_consultaUncheckedCreateWithoutControleInput = {
    id?: number
    create_consulta: boolean
    update_consulta: boolean
    read_consulta: boolean
    delete_consulta: boolean
  }

  export type Controle_consultaCreateOrConnectWithoutControleInput = {
    where: Controle_consultaWhereUniqueInput
    create: XOR<Controle_consultaCreateWithoutControleInput, Controle_consultaUncheckedCreateWithoutControleInput>
  }

  export type UsuarioCreateWithoutControleInput = {
    nome: string
    senha: string
    ocupacao: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    Consulta?: ConsultaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutControleInput = {
    id?: number
    nome: string
    senha: string
    ocupacao: string
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    Consulta_id?: number | null
  }

  export type UsuarioCreateOrConnectWithoutControleInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutControleInput, UsuarioUncheckedCreateWithoutControleInput>
  }

  export type Controle_pacienteUpsertWithWhereUniqueWithoutControleInput = {
    where: Controle_pacienteWhereUniqueInput
    update: XOR<Controle_pacienteUpdateWithoutControleInput, Controle_pacienteUncheckedUpdateWithoutControleInput>
    create: XOR<Controle_pacienteCreateWithoutControleInput, Controle_pacienteUncheckedCreateWithoutControleInput>
  }

  export type Controle_pacienteUpdateWithWhereUniqueWithoutControleInput = {
    where: Controle_pacienteWhereUniqueInput
    data: XOR<Controle_pacienteUpdateWithoutControleInput, Controle_pacienteUncheckedUpdateWithoutControleInput>
  }

  export type Controle_pacienteUpdateManyWithWhereWithoutControleInput = {
    where: Controle_pacienteScalarWhereInput
    data: XOR<Controle_pacienteUpdateManyMutationInput, Controle_pacienteUncheckedUpdateManyWithoutControleInput>
  }

  export type Controle_pacienteScalarWhereInput = {
    AND?: Controle_pacienteScalarWhereInput | Controle_pacienteScalarWhereInput[]
    OR?: Controle_pacienteScalarWhereInput[]
    NOT?: Controle_pacienteScalarWhereInput | Controle_pacienteScalarWhereInput[]
    id?: IntFilter<"Controle_paciente"> | number
    read_paciente?: BoolFilter<"Controle_paciente"> | boolean
    create_paciente?: BoolFilter<"Controle_paciente"> | boolean
    update_paciente?: BoolFilter<"Controle_paciente"> | boolean
    delete_paciente?: BoolFilter<"Controle_paciente"> | boolean
    controle_id?: IntFilter<"Controle_paciente"> | number
  }

  export type Controle_anamneseUpsertWithWhereUniqueWithoutControleInput = {
    where: Controle_anamneseWhereUniqueInput
    update: XOR<Controle_anamneseUpdateWithoutControleInput, Controle_anamneseUncheckedUpdateWithoutControleInput>
    create: XOR<Controle_anamneseCreateWithoutControleInput, Controle_anamneseUncheckedCreateWithoutControleInput>
  }

  export type Controle_anamneseUpdateWithWhereUniqueWithoutControleInput = {
    where: Controle_anamneseWhereUniqueInput
    data: XOR<Controle_anamneseUpdateWithoutControleInput, Controle_anamneseUncheckedUpdateWithoutControleInput>
  }

  export type Controle_anamneseUpdateManyWithWhereWithoutControleInput = {
    where: Controle_anamneseScalarWhereInput
    data: XOR<Controle_anamneseUpdateManyMutationInput, Controle_anamneseUncheckedUpdateManyWithoutControleInput>
  }

  export type Controle_anamneseScalarWhereInput = {
    AND?: Controle_anamneseScalarWhereInput | Controle_anamneseScalarWhereInput[]
    OR?: Controle_anamneseScalarWhereInput[]
    NOT?: Controle_anamneseScalarWhereInput | Controle_anamneseScalarWhereInput[]
    id?: IntFilter<"Controle_anamnese"> | number
    create_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    update_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    read_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    delete_anamnese?: BoolFilter<"Controle_anamnese"> | boolean
    controle_id?: IntNullableFilter<"Controle_anamnese"> | number | null
  }

  export type Controle_agendamentoUpsertWithWhereUniqueWithoutControleInput = {
    where: Controle_agendamentoWhereUniqueInput
    update: XOR<Controle_agendamentoUpdateWithoutControleInput, Controle_agendamentoUncheckedUpdateWithoutControleInput>
    create: XOR<Controle_agendamentoCreateWithoutControleInput, Controle_agendamentoUncheckedCreateWithoutControleInput>
  }

  export type Controle_agendamentoUpdateWithWhereUniqueWithoutControleInput = {
    where: Controle_agendamentoWhereUniqueInput
    data: XOR<Controle_agendamentoUpdateWithoutControleInput, Controle_agendamentoUncheckedUpdateWithoutControleInput>
  }

  export type Controle_agendamentoUpdateManyWithWhereWithoutControleInput = {
    where: Controle_agendamentoScalarWhereInput
    data: XOR<Controle_agendamentoUpdateManyMutationInput, Controle_agendamentoUncheckedUpdateManyWithoutControleInput>
  }

  export type Controle_agendamentoScalarWhereInput = {
    AND?: Controle_agendamentoScalarWhereInput | Controle_agendamentoScalarWhereInput[]
    OR?: Controle_agendamentoScalarWhereInput[]
    NOT?: Controle_agendamentoScalarWhereInput | Controle_agendamentoScalarWhereInput[]
    id?: IntFilter<"Controle_agendamento"> | number
    create_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    update_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    read_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    delete_agendamento?: BoolFilter<"Controle_agendamento"> | boolean
    control_id?: IntNullableFilter<"Controle_agendamento"> | number | null
  }

  export type Controle_consultaUpsertWithWhereUniqueWithoutControleInput = {
    where: Controle_consultaWhereUniqueInput
    update: XOR<Controle_consultaUpdateWithoutControleInput, Controle_consultaUncheckedUpdateWithoutControleInput>
    create: XOR<Controle_consultaCreateWithoutControleInput, Controle_consultaUncheckedCreateWithoutControleInput>
  }

  export type Controle_consultaUpdateWithWhereUniqueWithoutControleInput = {
    where: Controle_consultaWhereUniqueInput
    data: XOR<Controle_consultaUpdateWithoutControleInput, Controle_consultaUncheckedUpdateWithoutControleInput>
  }

  export type Controle_consultaUpdateManyWithWhereWithoutControleInput = {
    where: Controle_consultaScalarWhereInput
    data: XOR<Controle_consultaUpdateManyMutationInput, Controle_consultaUncheckedUpdateManyWithoutControleInput>
  }

  export type Controle_consultaScalarWhereInput = {
    AND?: Controle_consultaScalarWhereInput | Controle_consultaScalarWhereInput[]
    OR?: Controle_consultaScalarWhereInput[]
    NOT?: Controle_consultaScalarWhereInput | Controle_consultaScalarWhereInput[]
    id?: IntFilter<"Controle_consulta"> | number
    create_consulta?: BoolFilter<"Controle_consulta"> | boolean
    update_consulta?: BoolFilter<"Controle_consulta"> | boolean
    read_consulta?: BoolFilter<"Controle_consulta"> | boolean
    delete_consulta?: BoolFilter<"Controle_consulta"> | boolean
    controle_id?: IntNullableFilter<"Controle_consulta"> | number | null
  }

  export type UsuarioUpsertWithoutControleInput = {
    update: XOR<UsuarioUpdateWithoutControleInput, UsuarioUncheckedUpdateWithoutControleInput>
    create: XOR<UsuarioCreateWithoutControleInput, UsuarioUncheckedCreateWithoutControleInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutControleInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutControleInput, UsuarioUncheckedUpdateWithoutControleInput>
  }

  export type UsuarioUpdateWithoutControleInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Consulta?: ConsultaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    Consulta_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type Controle_acessoCreateWithoutPacienteInput = {
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    anamnese?: Controle_anamneseCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaCreateNestedManyWithoutControleInput
    usuario?: UsuarioCreateNestedOneWithoutControleInput
  }

  export type Controle_acessoUncheckedCreateWithoutPacienteInput = {
    id?: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    usuario_id?: number | null
    anamnese?: Controle_anamneseUncheckedCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoUncheckedCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaUncheckedCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoCreateOrConnectWithoutPacienteInput = {
    where: Controle_acessoWhereUniqueInput
    create: XOR<Controle_acessoCreateWithoutPacienteInput, Controle_acessoUncheckedCreateWithoutPacienteInput>
  }

  export type Controle_acessoUpsertWithoutPacienteInput = {
    update: XOR<Controle_acessoUpdateWithoutPacienteInput, Controle_acessoUncheckedUpdateWithoutPacienteInput>
    create: XOR<Controle_acessoCreateWithoutPacienteInput, Controle_acessoUncheckedCreateWithoutPacienteInput>
    where?: Controle_acessoWhereInput
  }

  export type Controle_acessoUpdateToOneWithWhereWithoutPacienteInput = {
    where?: Controle_acessoWhereInput
    data: XOR<Controle_acessoUpdateWithoutPacienteInput, Controle_acessoUncheckedUpdateWithoutPacienteInput>
  }

  export type Controle_acessoUpdateWithoutPacienteInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    anamnese?: Controle_anamneseUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUpdateManyWithoutControleNestedInput
    usuario?: UsuarioUpdateOneWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    anamnese?: Controle_anamneseUncheckedUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUncheckedUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUncheckedUpdateManyWithoutControleNestedInput
  }

  export type Controle_acessoCreateWithoutAnamneseInput = {
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: Controle_pacienteCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaCreateNestedManyWithoutControleInput
    usuario?: UsuarioCreateNestedOneWithoutControleInput
  }

  export type Controle_acessoUncheckedCreateWithoutAnamneseInput = {
    id?: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    usuario_id?: number | null
    paciente?: Controle_pacienteUncheckedCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoUncheckedCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaUncheckedCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoCreateOrConnectWithoutAnamneseInput = {
    where: Controle_acessoWhereUniqueInput
    create: XOR<Controle_acessoCreateWithoutAnamneseInput, Controle_acessoUncheckedCreateWithoutAnamneseInput>
  }

  export type Controle_acessoUpsertWithoutAnamneseInput = {
    update: XOR<Controle_acessoUpdateWithoutAnamneseInput, Controle_acessoUncheckedUpdateWithoutAnamneseInput>
    create: XOR<Controle_acessoCreateWithoutAnamneseInput, Controle_acessoUncheckedCreateWithoutAnamneseInput>
    where?: Controle_acessoWhereInput
  }

  export type Controle_acessoUpdateToOneWithWhereWithoutAnamneseInput = {
    where?: Controle_acessoWhereInput
    data: XOR<Controle_acessoUpdateWithoutAnamneseInput, Controle_acessoUncheckedUpdateWithoutAnamneseInput>
  }

  export type Controle_acessoUpdateWithoutAnamneseInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: Controle_pacienteUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUpdateManyWithoutControleNestedInput
    usuario?: UsuarioUpdateOneWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateWithoutAnamneseInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    paciente?: Controle_pacienteUncheckedUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUncheckedUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUncheckedUpdateManyWithoutControleNestedInput
  }

  export type Controle_acessoCreateWithoutAgendamentoInput = {
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: Controle_pacienteCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaCreateNestedManyWithoutControleInput
    usuario?: UsuarioCreateNestedOneWithoutControleInput
  }

  export type Controle_acessoUncheckedCreateWithoutAgendamentoInput = {
    id?: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    usuario_id?: number | null
    paciente?: Controle_pacienteUncheckedCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseUncheckedCreateNestedManyWithoutControleInput
    consulta?: Controle_consultaUncheckedCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoCreateOrConnectWithoutAgendamentoInput = {
    where: Controle_acessoWhereUniqueInput
    create: XOR<Controle_acessoCreateWithoutAgendamentoInput, Controle_acessoUncheckedCreateWithoutAgendamentoInput>
  }

  export type Controle_acessoUpsertWithoutAgendamentoInput = {
    update: XOR<Controle_acessoUpdateWithoutAgendamentoInput, Controle_acessoUncheckedUpdateWithoutAgendamentoInput>
    create: XOR<Controle_acessoCreateWithoutAgendamentoInput, Controle_acessoUncheckedCreateWithoutAgendamentoInput>
    where?: Controle_acessoWhereInput
  }

  export type Controle_acessoUpdateToOneWithWhereWithoutAgendamentoInput = {
    where?: Controle_acessoWhereInput
    data: XOR<Controle_acessoUpdateWithoutAgendamentoInput, Controle_acessoUncheckedUpdateWithoutAgendamentoInput>
  }

  export type Controle_acessoUpdateWithoutAgendamentoInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: Controle_pacienteUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUpdateManyWithoutControleNestedInput
    usuario?: UsuarioUpdateOneWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateWithoutAgendamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    paciente?: Controle_pacienteUncheckedUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUncheckedUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUncheckedUpdateManyWithoutControleNestedInput
  }

  export type Controle_acessoCreateWithoutConsultaInput = {
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    paciente?: Controle_pacienteCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoCreateNestedManyWithoutControleInput
    usuario?: UsuarioCreateNestedOneWithoutControleInput
  }

  export type Controle_acessoUncheckedCreateWithoutConsultaInput = {
    id?: number
    created_at: Date | string
    updated_at: Date | string
    deleted_at: Date | string
    is_active: boolean
    usuario_id?: number | null
    paciente?: Controle_pacienteUncheckedCreateNestedManyWithoutControleInput
    anamnese?: Controle_anamneseUncheckedCreateNestedManyWithoutControleInput
    agendamento?: Controle_agendamentoUncheckedCreateNestedManyWithoutControleInput
  }

  export type Controle_acessoCreateOrConnectWithoutConsultaInput = {
    where: Controle_acessoWhereUniqueInput
    create: XOR<Controle_acessoCreateWithoutConsultaInput, Controle_acessoUncheckedCreateWithoutConsultaInput>
  }

  export type Controle_acessoUpsertWithoutConsultaInput = {
    update: XOR<Controle_acessoUpdateWithoutConsultaInput, Controle_acessoUncheckedUpdateWithoutConsultaInput>
    create: XOR<Controle_acessoCreateWithoutConsultaInput, Controle_acessoUncheckedCreateWithoutConsultaInput>
    where?: Controle_acessoWhereInput
  }

  export type Controle_acessoUpdateToOneWithWhereWithoutConsultaInput = {
    where?: Controle_acessoWhereInput
    data: XOR<Controle_acessoUpdateWithoutConsultaInput, Controle_acessoUncheckedUpdateWithoutConsultaInput>
  }

  export type Controle_acessoUpdateWithoutConsultaInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: Controle_pacienteUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUpdateManyWithoutControleNestedInput
    usuario?: UsuarioUpdateOneWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    usuario_id?: NullableIntFieldUpdateOperationsInput | number | null
    paciente?: Controle_pacienteUncheckedUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUncheckedUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUncheckedUpdateManyWithoutControleNestedInput
  }

  export type AnamneseUpdateWithoutPacienteInput = {
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnamneseUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AnamneseUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    infeccao_urinaria?: BoolFieldUpdateOperationsInput | boolean
    dst?: StringFieldUpdateOperationsInput | string
    pedra_nos_rins?: StringFieldUpdateOperationsInput | string
    problema_nos_testiculos?: StringFieldUpdateOperationsInput | string
    historico_de_cancer_na_familia?: StringFieldUpdateOperationsInput | string
    doenca_cronica?: StringFieldUpdateOperationsInput | string
    utiliza_remedios?: StringFieldUpdateOperationsInput | string
    fumante?: StringFieldUpdateOperationsInput | string
    bebidas_alcoolicas?: StringFieldUpdateOperationsInput | string
    droga?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpdateWithoutConsultaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    controle?: Controle_acessoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    ocupacao?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PacienteUpdateWithoutConsultaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    anamnese?: AnamneseUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    anamnese?: AnamneseUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateManyWithoutConsultaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: IntFieldUpdateOperationsInput | number
    data_nascimento?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: IntFieldUpdateOperationsInput | number
    bairro?: StringFieldUpdateOperationsInput | string
    complemento?: StringFieldUpdateOperationsInput | string
    cep?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_acessoUpdateWithoutUsuarioInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: Controle_pacienteUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUpdateManyWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    paciente?: Controle_pacienteUncheckedUpdateManyWithoutControleNestedInput
    anamnese?: Controle_anamneseUncheckedUpdateManyWithoutControleNestedInput
    agendamento?: Controle_agendamentoUncheckedUpdateManyWithoutControleNestedInput
    consulta?: Controle_consultaUncheckedUpdateManyWithoutControleNestedInput
  }

  export type Controle_acessoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_pacienteUpdateWithoutControleInput = {
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_pacienteUncheckedUpdateWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_pacienteUncheckedUpdateManyWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    read_paciente?: BoolFieldUpdateOperationsInput | boolean
    create_paciente?: BoolFieldUpdateOperationsInput | boolean
    update_paciente?: BoolFieldUpdateOperationsInput | boolean
    delete_paciente?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_anamneseUpdateWithoutControleInput = {
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_anamneseUncheckedUpdateWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_anamneseUncheckedUpdateManyWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_anamnese?: BoolFieldUpdateOperationsInput | boolean
    update_anamnese?: BoolFieldUpdateOperationsInput | boolean
    read_anamnese?: BoolFieldUpdateOperationsInput | boolean
    delete_anamnese?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_agendamentoUpdateWithoutControleInput = {
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_agendamentoUncheckedUpdateWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_agendamentoUncheckedUpdateManyWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_agendamento?: BoolFieldUpdateOperationsInput | boolean
    update_agendamento?: BoolFieldUpdateOperationsInput | boolean
    read_agendamento?: BoolFieldUpdateOperationsInput | boolean
    delete_agendamento?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_consultaUpdateWithoutControleInput = {
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_consultaUncheckedUpdateWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Controle_consultaUncheckedUpdateManyWithoutControleInput = {
    id?: IntFieldUpdateOperationsInput | number
    create_consulta?: BoolFieldUpdateOperationsInput | boolean
    update_consulta?: BoolFieldUpdateOperationsInput | boolean
    read_consulta?: BoolFieldUpdateOperationsInput | boolean
    delete_consulta?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PacienteCountOutputTypeDefaultArgs instead
     */
    export type PacienteCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PacienteCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultaCountOutputTypeDefaultArgs instead
     */
    export type ConsultaCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConsultaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioCountOutputTypeDefaultArgs instead
     */
    export type UsuarioCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsuarioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Controle_acessoCountOutputTypeDefaultArgs instead
     */
    export type Controle_acessoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Controle_acessoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstabelecimentoDefaultArgs instead
     */
    export type EstabelecimentoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EstabelecimentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use licencaDefaultArgs instead
     */
    export type licencaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = licencaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PacienteDefaultArgs instead
     */
    export type PacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnamneseDefaultArgs instead
     */
    export type AnamneseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AnamneseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgendamentoDefaultArgs instead
     */
    export type AgendamentoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AgendamentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConsultaDefaultArgs instead
     */
    export type ConsultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ConsultaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Controle_acessoDefaultArgs instead
     */
    export type Controle_acessoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Controle_acessoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Controle_pacienteDefaultArgs instead
     */
    export type Controle_pacienteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Controle_pacienteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Controle_anamneseDefaultArgs instead
     */
    export type Controle_anamneseArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Controle_anamneseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Controle_agendamentoDefaultArgs instead
     */
    export type Controle_agendamentoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Controle_agendamentoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Controle_consultaDefaultArgs instead
     */
    export type Controle_consultaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = Controle_consultaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}