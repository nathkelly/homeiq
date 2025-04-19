
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Chore
 * 
 */
export type Chore = $Result.DefaultSelection<Prisma.$ChorePayload>
/**
 * Model ChoreAssignment
 * 
 */
export type ChoreAssignment = $Result.DefaultSelection<Prisma.$ChoreAssignmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  PARENT: 'PARENT',
  CHILD: 'CHILD',
  ADMIN: 'ADMIN',
  GUEST: 'GUEST'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Chores
 * const chores = await prisma.chore.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Chores
   * const chores = await prisma.chore.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.chore`: Exposes CRUD operations for the **Chore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chores
    * const chores = await prisma.chore.findMany()
    * ```
    */
  get chore(): Prisma.ChoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.choreAssignment`: Exposes CRUD operations for the **ChoreAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChoreAssignments
    * const choreAssignments = await prisma.choreAssignment.findMany()
    * ```
    */
  get choreAssignment(): Prisma.ChoreAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Chore: 'Chore',
    ChoreAssignment: 'ChoreAssignment',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "chore" | "choreAssignment" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Chore: {
        payload: Prisma.$ChorePayload<ExtArgs>
        fields: Prisma.ChoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          findFirst: {
            args: Prisma.ChoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          findMany: {
            args: Prisma.ChoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          create: {
            args: Prisma.ChoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          createMany: {
            args: Prisma.ChoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          delete: {
            args: Prisma.ChoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          update: {
            args: Prisma.ChoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          deleteMany: {
            args: Prisma.ChoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>[]
          }
          upsert: {
            args: Prisma.ChoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChorePayload>
          }
          aggregate: {
            args: Prisma.ChoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChore>
          }
          groupBy: {
            args: Prisma.ChoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoreCountArgs<ExtArgs>
            result: $Utils.Optional<ChoreCountAggregateOutputType> | number
          }
        }
      }
      ChoreAssignment: {
        payload: Prisma.$ChoreAssignmentPayload<ExtArgs>
        fields: Prisma.ChoreAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoreAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoreAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ChoreAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoreAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>
          }
          findMany: {
            args: Prisma.ChoreAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>[]
          }
          create: {
            args: Prisma.ChoreAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>
          }
          createMany: {
            args: Prisma.ChoreAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoreAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>[]
          }
          delete: {
            args: Prisma.ChoreAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>
          }
          update: {
            args: Prisma.ChoreAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ChoreAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoreAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChoreAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.ChoreAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoreAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ChoreAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoreAssignment>
          }
          groupBy: {
            args: Prisma.ChoreAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoreAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoreAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ChoreAssignmentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    chore?: ChoreOmit
    choreAssignment?: ChoreAssignmentOmit
    user?: UserOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type ChoreCountOutputType
   */

  export type ChoreCountOutputType = {
    assignments: number
  }

  export type ChoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ChoreCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * ChoreCountOutputType without action
   */
  export type ChoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreCountOutputType
     */
    select?: ChoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoreCountOutputType without action
   */
  export type ChoreCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreAssignmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    chores: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chores?: boolean | UserCountOutputTypeCountChoresArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreAssignmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Chore
   */

  export type AggregateChore = {
    _count: ChoreCountAggregateOutputType | null
    _avg: ChoreAvgAggregateOutputType | null
    _sum: ChoreSumAggregateOutputType | null
    _min: ChoreMinAggregateOutputType | null
    _max: ChoreMaxAggregateOutputType | null
  }

  export type ChoreAvgAggregateOutputType = {
    id: number | null
  }

  export type ChoreSumAggregateOutputType = {
    id: number | null
  }

  export type ChoreMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isDone: boolean | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    isDone: boolean | null
    dueDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoreCountAggregateOutputType = {
    id: number
    title: number
    description: number
    isDone: number
    dueDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoreAvgAggregateInputType = {
    id?: true
  }

  export type ChoreSumAggregateInputType = {
    id?: true
  }

  export type ChoreMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDone?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDone?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoreCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    isDone?: true
    dueDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chore to aggregate.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chores
    **/
    _count?: true | ChoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoreMaxAggregateInputType
  }

  export type GetChoreAggregateType<T extends ChoreAggregateArgs> = {
        [P in keyof T & keyof AggregateChore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChore[P]>
      : GetScalarType<T[P], AggregateChore[P]>
  }




  export type ChoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreWhereInput
    orderBy?: ChoreOrderByWithAggregationInput | ChoreOrderByWithAggregationInput[]
    by: ChoreScalarFieldEnum[] | ChoreScalarFieldEnum
    having?: ChoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoreCountAggregateInputType | true
    _avg?: ChoreAvgAggregateInputType
    _sum?: ChoreSumAggregateInputType
    _min?: ChoreMinAggregateInputType
    _max?: ChoreMaxAggregateInputType
  }

  export type ChoreGroupByOutputType = {
    id: number
    title: string
    description: string | null
    isDone: boolean
    dueDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ChoreCountAggregateOutputType | null
    _avg: ChoreAvgAggregateOutputType | null
    _sum: ChoreSumAggregateOutputType | null
    _min: ChoreMinAggregateOutputType | null
    _max: ChoreMaxAggregateOutputType | null
  }

  type GetChoreGroupByPayload<T extends ChoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoreGroupByOutputType[P]>
            : GetScalarType<T[P], ChoreGroupByOutputType[P]>
        }
      >
    >


  export type ChoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDone?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignments?: boolean | Chore$assignmentsArgs<ExtArgs>
    _count?: boolean | ChoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDone?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    isDone?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chore"]>

  export type ChoreSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    isDone?: boolean
    dueDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "isDone" | "dueDate" | "createdAt" | "updatedAt", ExtArgs["result"]["chore"]>
  export type ChoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | Chore$assignmentsArgs<ExtArgs>
    _count?: boolean | ChoreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chore"
    objects: {
      assignments: Prisma.$ChoreAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      isDone: boolean
      dueDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chore"]>
    composites: {}
  }

  type ChoreGetPayload<S extends boolean | null | undefined | ChoreDefaultArgs> = $Result.GetResult<Prisma.$ChorePayload, S>

  type ChoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoreCountAggregateInputType | true
    }

  export interface ChoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chore'], meta: { name: 'Chore' } }
    /**
     * Find zero or one Chore that matches the filter.
     * @param {ChoreFindUniqueArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoreFindUniqueArgs>(args: SelectSubset<T, ChoreFindUniqueArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoreFindUniqueOrThrowArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoreFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindFirstArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoreFindFirstArgs>(args?: SelectSubset<T, ChoreFindFirstArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindFirstOrThrowArgs} args - Arguments to find a Chore
     * @example
     * // Get one Chore
     * const chore = await prisma.chore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoreFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chores
     * const chores = await prisma.chore.findMany()
     * 
     * // Get first 10 Chores
     * const chores = await prisma.chore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choreWithIdOnly = await prisma.chore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoreFindManyArgs>(args?: SelectSubset<T, ChoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chore.
     * @param {ChoreCreateArgs} args - Arguments to create a Chore.
     * @example
     * // Create one Chore
     * const Chore = await prisma.chore.create({
     *   data: {
     *     // ... data to create a Chore
     *   }
     * })
     * 
     */
    create<T extends ChoreCreateArgs>(args: SelectSubset<T, ChoreCreateArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chores.
     * @param {ChoreCreateManyArgs} args - Arguments to create many Chores.
     * @example
     * // Create many Chores
     * const chore = await prisma.chore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoreCreateManyArgs>(args?: SelectSubset<T, ChoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chores and returns the data saved in the database.
     * @param {ChoreCreateManyAndReturnArgs} args - Arguments to create many Chores.
     * @example
     * // Create many Chores
     * const chore = await prisma.chore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chores and only return the `id`
     * const choreWithIdOnly = await prisma.chore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoreCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chore.
     * @param {ChoreDeleteArgs} args - Arguments to delete one Chore.
     * @example
     * // Delete one Chore
     * const Chore = await prisma.chore.delete({
     *   where: {
     *     // ... filter to delete one Chore
     *   }
     * })
     * 
     */
    delete<T extends ChoreDeleteArgs>(args: SelectSubset<T, ChoreDeleteArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chore.
     * @param {ChoreUpdateArgs} args - Arguments to update one Chore.
     * @example
     * // Update one Chore
     * const chore = await prisma.chore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoreUpdateArgs>(args: SelectSubset<T, ChoreUpdateArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chores.
     * @param {ChoreDeleteManyArgs} args - Arguments to filter Chores to delete.
     * @example
     * // Delete a few Chores
     * const { count } = await prisma.chore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoreDeleteManyArgs>(args?: SelectSubset<T, ChoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chores
     * const chore = await prisma.chore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoreUpdateManyArgs>(args: SelectSubset<T, ChoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chores and returns the data updated in the database.
     * @param {ChoreUpdateManyAndReturnArgs} args - Arguments to update many Chores.
     * @example
     * // Update many Chores
     * const chore = await prisma.chore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chores and only return the `id`
     * const choreWithIdOnly = await prisma.chore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoreUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chore.
     * @param {ChoreUpsertArgs} args - Arguments to update or create a Chore.
     * @example
     * // Update or create a Chore
     * const chore = await prisma.chore.upsert({
     *   create: {
     *     // ... data to create a Chore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chore we want to update
     *   }
     * })
     */
    upsert<T extends ChoreUpsertArgs>(args: SelectSubset<T, ChoreUpsertArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreCountArgs} args - Arguments to filter Chores to count.
     * @example
     * // Count the number of Chores
     * const count = await prisma.chore.count({
     *   where: {
     *     // ... the filter for the Chores we want to count
     *   }
     * })
    **/
    count<T extends ChoreCountArgs>(
      args?: Subset<T, ChoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoreAggregateArgs>(args: Subset<T, ChoreAggregateArgs>): Prisma.PrismaPromise<GetChoreAggregateType<T>>

    /**
     * Group by Chore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreGroupByArgs} args - Group by arguments.
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
      T extends ChoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoreGroupByArgs['orderBy'] }
        : { orderBy?: ChoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chore model
   */
  readonly fields: ChoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignments<T extends Chore$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Chore$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chore model
   */
  interface ChoreFieldRefs {
    readonly id: FieldRef<"Chore", 'Int'>
    readonly title: FieldRef<"Chore", 'String'>
    readonly description: FieldRef<"Chore", 'String'>
    readonly isDone: FieldRef<"Chore", 'Boolean'>
    readonly dueDate: FieldRef<"Chore", 'DateTime'>
    readonly createdAt: FieldRef<"Chore", 'DateTime'>
    readonly updatedAt: FieldRef<"Chore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chore findUnique
   */
  export type ChoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore findUniqueOrThrow
   */
  export type ChoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore findFirst
   */
  export type ChoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chores.
     */
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore findFirstOrThrow
   */
  export type ChoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chore to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chores.
     */
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore findMany
   */
  export type ChoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter, which Chores to fetch.
     */
    where?: ChoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chores to fetch.
     */
    orderBy?: ChoreOrderByWithRelationInput | ChoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chores.
     */
    cursor?: ChoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chores.
     */
    skip?: number
    distinct?: ChoreScalarFieldEnum | ChoreScalarFieldEnum[]
  }

  /**
   * Chore create
   */
  export type ChoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Chore.
     */
    data: XOR<ChoreCreateInput, ChoreUncheckedCreateInput>
  }

  /**
   * Chore createMany
   */
  export type ChoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chores.
     */
    data: ChoreCreateManyInput | ChoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chore createManyAndReturn
   */
  export type ChoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * The data used to create many Chores.
     */
    data: ChoreCreateManyInput | ChoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chore update
   */
  export type ChoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Chore.
     */
    data: XOR<ChoreUpdateInput, ChoreUncheckedUpdateInput>
    /**
     * Choose, which Chore to update.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore updateMany
   */
  export type ChoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chores.
     */
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyInput>
    /**
     * Filter which Chores to update
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to update.
     */
    limit?: number
  }

  /**
   * Chore updateManyAndReturn
   */
  export type ChoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * The data used to update Chores.
     */
    data: XOR<ChoreUpdateManyMutationInput, ChoreUncheckedUpdateManyInput>
    /**
     * Filter which Chores to update
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to update.
     */
    limit?: number
  }

  /**
   * Chore upsert
   */
  export type ChoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Chore to update in case it exists.
     */
    where: ChoreWhereUniqueInput
    /**
     * In case the Chore found by the `where` argument doesn't exist, create a new Chore with this data.
     */
    create: XOR<ChoreCreateInput, ChoreUncheckedCreateInput>
    /**
     * In case the Chore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoreUpdateInput, ChoreUncheckedUpdateInput>
  }

  /**
   * Chore delete
   */
  export type ChoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
    /**
     * Filter which Chore to delete.
     */
    where: ChoreWhereUniqueInput
  }

  /**
   * Chore deleteMany
   */
  export type ChoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chores to delete
     */
    where?: ChoreWhereInput
    /**
     * Limit how many Chores to delete.
     */
    limit?: number
  }

  /**
   * Chore.assignments
   */
  export type Chore$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    where?: ChoreAssignmentWhereInput
    orderBy?: ChoreAssignmentOrderByWithRelationInput | ChoreAssignmentOrderByWithRelationInput[]
    cursor?: ChoreAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreAssignmentScalarFieldEnum | ChoreAssignmentScalarFieldEnum[]
  }

  /**
   * Chore without action
   */
  export type ChoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chore
     */
    select?: ChoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chore
     */
    omit?: ChoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreInclude<ExtArgs> | null
  }


  /**
   * Model ChoreAssignment
   */

  export type AggregateChoreAssignment = {
    _count: ChoreAssignmentCountAggregateOutputType | null
    _avg: ChoreAssignmentAvgAggregateOutputType | null
    _sum: ChoreAssignmentSumAggregateOutputType | null
    _min: ChoreAssignmentMinAggregateOutputType | null
    _max: ChoreAssignmentMaxAggregateOutputType | null
  }

  export type ChoreAssignmentAvgAggregateOutputType = {
    id: number | null
    choreId: number | null
    userId: number | null
  }

  export type ChoreAssignmentSumAggregateOutputType = {
    id: number | null
    choreId: number | null
    userId: number | null
  }

  export type ChoreAssignmentMinAggregateOutputType = {
    id: number | null
    choreId: number | null
    userId: number | null
    weekStart: Date | null
  }

  export type ChoreAssignmentMaxAggregateOutputType = {
    id: number | null
    choreId: number | null
    userId: number | null
    weekStart: Date | null
  }

  export type ChoreAssignmentCountAggregateOutputType = {
    id: number
    choreId: number
    userId: number
    weekStart: number
    _all: number
  }


  export type ChoreAssignmentAvgAggregateInputType = {
    id?: true
    choreId?: true
    userId?: true
  }

  export type ChoreAssignmentSumAggregateInputType = {
    id?: true
    choreId?: true
    userId?: true
  }

  export type ChoreAssignmentMinAggregateInputType = {
    id?: true
    choreId?: true
    userId?: true
    weekStart?: true
  }

  export type ChoreAssignmentMaxAggregateInputType = {
    id?: true
    choreId?: true
    userId?: true
    weekStart?: true
  }

  export type ChoreAssignmentCountAggregateInputType = {
    id?: true
    choreId?: true
    userId?: true
    weekStart?: true
    _all?: true
  }

  export type ChoreAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoreAssignment to aggregate.
     */
    where?: ChoreAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreAssignments to fetch.
     */
    orderBy?: ChoreAssignmentOrderByWithRelationInput | ChoreAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoreAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChoreAssignments
    **/
    _count?: true | ChoreAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChoreAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChoreAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoreAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoreAssignmentMaxAggregateInputType
  }

  export type GetChoreAssignmentAggregateType<T extends ChoreAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateChoreAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoreAssignment[P]>
      : GetScalarType<T[P], AggregateChoreAssignment[P]>
  }




  export type ChoreAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoreAssignmentWhereInput
    orderBy?: ChoreAssignmentOrderByWithAggregationInput | ChoreAssignmentOrderByWithAggregationInput[]
    by: ChoreAssignmentScalarFieldEnum[] | ChoreAssignmentScalarFieldEnum
    having?: ChoreAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoreAssignmentCountAggregateInputType | true
    _avg?: ChoreAssignmentAvgAggregateInputType
    _sum?: ChoreAssignmentSumAggregateInputType
    _min?: ChoreAssignmentMinAggregateInputType
    _max?: ChoreAssignmentMaxAggregateInputType
  }

  export type ChoreAssignmentGroupByOutputType = {
    id: number
    choreId: number
    userId: number
    weekStart: Date
    _count: ChoreAssignmentCountAggregateOutputType | null
    _avg: ChoreAssignmentAvgAggregateOutputType | null
    _sum: ChoreAssignmentSumAggregateOutputType | null
    _min: ChoreAssignmentMinAggregateOutputType | null
    _max: ChoreAssignmentMaxAggregateOutputType | null
  }

  type GetChoreAssignmentGroupByPayload<T extends ChoreAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoreAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoreAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoreAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ChoreAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ChoreAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    userId?: boolean
    weekStart?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choreAssignment"]>

  export type ChoreAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    userId?: boolean
    weekStart?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choreAssignment"]>

  export type ChoreAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    choreId?: boolean
    userId?: boolean
    weekStart?: boolean
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choreAssignment"]>

  export type ChoreAssignmentSelectScalar = {
    id?: boolean
    choreId?: boolean
    userId?: boolean
    weekStart?: boolean
  }

  export type ChoreAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "choreId" | "userId" | "weekStart", ExtArgs["result"]["choreAssignment"]>
  export type ChoreAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChoreAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChoreAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chore?: boolean | ChoreDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChoreAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChoreAssignment"
    objects: {
      chore: Prisma.$ChorePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      choreId: number
      userId: number
      weekStart: Date
    }, ExtArgs["result"]["choreAssignment"]>
    composites: {}
  }

  type ChoreAssignmentGetPayload<S extends boolean | null | undefined | ChoreAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ChoreAssignmentPayload, S>

  type ChoreAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChoreAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChoreAssignmentCountAggregateInputType | true
    }

  export interface ChoreAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChoreAssignment'], meta: { name: 'ChoreAssignment' } }
    /**
     * Find zero or one ChoreAssignment that matches the filter.
     * @param {ChoreAssignmentFindUniqueArgs} args - Arguments to find a ChoreAssignment
     * @example
     * // Get one ChoreAssignment
     * const choreAssignment = await prisma.choreAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoreAssignmentFindUniqueArgs>(args: SelectSubset<T, ChoreAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChoreAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChoreAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ChoreAssignment
     * @example
     * // Get one ChoreAssignment
     * const choreAssignment = await prisma.choreAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoreAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoreAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoreAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentFindFirstArgs} args - Arguments to find a ChoreAssignment
     * @example
     * // Get one ChoreAssignment
     * const choreAssignment = await prisma.choreAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoreAssignmentFindFirstArgs>(args?: SelectSubset<T, ChoreAssignmentFindFirstArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChoreAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentFindFirstOrThrowArgs} args - Arguments to find a ChoreAssignment
     * @example
     * // Get one ChoreAssignment
     * const choreAssignment = await prisma.choreAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoreAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoreAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChoreAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChoreAssignments
     * const choreAssignments = await prisma.choreAssignment.findMany()
     * 
     * // Get first 10 ChoreAssignments
     * const choreAssignments = await prisma.choreAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choreAssignmentWithIdOnly = await prisma.choreAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoreAssignmentFindManyArgs>(args?: SelectSubset<T, ChoreAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChoreAssignment.
     * @param {ChoreAssignmentCreateArgs} args - Arguments to create a ChoreAssignment.
     * @example
     * // Create one ChoreAssignment
     * const ChoreAssignment = await prisma.choreAssignment.create({
     *   data: {
     *     // ... data to create a ChoreAssignment
     *   }
     * })
     * 
     */
    create<T extends ChoreAssignmentCreateArgs>(args: SelectSubset<T, ChoreAssignmentCreateArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChoreAssignments.
     * @param {ChoreAssignmentCreateManyArgs} args - Arguments to create many ChoreAssignments.
     * @example
     * // Create many ChoreAssignments
     * const choreAssignment = await prisma.choreAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoreAssignmentCreateManyArgs>(args?: SelectSubset<T, ChoreAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChoreAssignments and returns the data saved in the database.
     * @param {ChoreAssignmentCreateManyAndReturnArgs} args - Arguments to create many ChoreAssignments.
     * @example
     * // Create many ChoreAssignments
     * const choreAssignment = await prisma.choreAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChoreAssignments and only return the `id`
     * const choreAssignmentWithIdOnly = await prisma.choreAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoreAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoreAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChoreAssignment.
     * @param {ChoreAssignmentDeleteArgs} args - Arguments to delete one ChoreAssignment.
     * @example
     * // Delete one ChoreAssignment
     * const ChoreAssignment = await prisma.choreAssignment.delete({
     *   where: {
     *     // ... filter to delete one ChoreAssignment
     *   }
     * })
     * 
     */
    delete<T extends ChoreAssignmentDeleteArgs>(args: SelectSubset<T, ChoreAssignmentDeleteArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChoreAssignment.
     * @param {ChoreAssignmentUpdateArgs} args - Arguments to update one ChoreAssignment.
     * @example
     * // Update one ChoreAssignment
     * const choreAssignment = await prisma.choreAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoreAssignmentUpdateArgs>(args: SelectSubset<T, ChoreAssignmentUpdateArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChoreAssignments.
     * @param {ChoreAssignmentDeleteManyArgs} args - Arguments to filter ChoreAssignments to delete.
     * @example
     * // Delete a few ChoreAssignments
     * const { count } = await prisma.choreAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoreAssignmentDeleteManyArgs>(args?: SelectSubset<T, ChoreAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoreAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChoreAssignments
     * const choreAssignment = await prisma.choreAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoreAssignmentUpdateManyArgs>(args: SelectSubset<T, ChoreAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChoreAssignments and returns the data updated in the database.
     * @param {ChoreAssignmentUpdateManyAndReturnArgs} args - Arguments to update many ChoreAssignments.
     * @example
     * // Update many ChoreAssignments
     * const choreAssignment = await prisma.choreAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChoreAssignments and only return the `id`
     * const choreAssignmentWithIdOnly = await prisma.choreAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChoreAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ChoreAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChoreAssignment.
     * @param {ChoreAssignmentUpsertArgs} args - Arguments to update or create a ChoreAssignment.
     * @example
     * // Update or create a ChoreAssignment
     * const choreAssignment = await prisma.choreAssignment.upsert({
     *   create: {
     *     // ... data to create a ChoreAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChoreAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ChoreAssignmentUpsertArgs>(args: SelectSubset<T, ChoreAssignmentUpsertArgs<ExtArgs>>): Prisma__ChoreAssignmentClient<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChoreAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentCountArgs} args - Arguments to filter ChoreAssignments to count.
     * @example
     * // Count the number of ChoreAssignments
     * const count = await prisma.choreAssignment.count({
     *   where: {
     *     // ... the filter for the ChoreAssignments we want to count
     *   }
     * })
    **/
    count<T extends ChoreAssignmentCountArgs>(
      args?: Subset<T, ChoreAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoreAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChoreAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChoreAssignmentAggregateArgs>(args: Subset<T, ChoreAssignmentAggregateArgs>): Prisma.PrismaPromise<GetChoreAssignmentAggregateType<T>>

    /**
     * Group by ChoreAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoreAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ChoreAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoreAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ChoreAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChoreAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoreAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChoreAssignment model
   */
  readonly fields: ChoreAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChoreAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoreAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chore<T extends ChoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoreDefaultArgs<ExtArgs>>): Prisma__ChoreClient<$Result.GetResult<Prisma.$ChorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChoreAssignment model
   */
  interface ChoreAssignmentFieldRefs {
    readonly id: FieldRef<"ChoreAssignment", 'Int'>
    readonly choreId: FieldRef<"ChoreAssignment", 'Int'>
    readonly userId: FieldRef<"ChoreAssignment", 'Int'>
    readonly weekStart: FieldRef<"ChoreAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChoreAssignment findUnique
   */
  export type ChoreAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ChoreAssignment to fetch.
     */
    where: ChoreAssignmentWhereUniqueInput
  }

  /**
   * ChoreAssignment findUniqueOrThrow
   */
  export type ChoreAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ChoreAssignment to fetch.
     */
    where: ChoreAssignmentWhereUniqueInput
  }

  /**
   * ChoreAssignment findFirst
   */
  export type ChoreAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ChoreAssignment to fetch.
     */
    where?: ChoreAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreAssignments to fetch.
     */
    orderBy?: ChoreAssignmentOrderByWithRelationInput | ChoreAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoreAssignments.
     */
    cursor?: ChoreAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoreAssignments.
     */
    distinct?: ChoreAssignmentScalarFieldEnum | ChoreAssignmentScalarFieldEnum[]
  }

  /**
   * ChoreAssignment findFirstOrThrow
   */
  export type ChoreAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ChoreAssignment to fetch.
     */
    where?: ChoreAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreAssignments to fetch.
     */
    orderBy?: ChoreAssignmentOrderByWithRelationInput | ChoreAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChoreAssignments.
     */
    cursor?: ChoreAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChoreAssignments.
     */
    distinct?: ChoreAssignmentScalarFieldEnum | ChoreAssignmentScalarFieldEnum[]
  }

  /**
   * ChoreAssignment findMany
   */
  export type ChoreAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ChoreAssignments to fetch.
     */
    where?: ChoreAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChoreAssignments to fetch.
     */
    orderBy?: ChoreAssignmentOrderByWithRelationInput | ChoreAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChoreAssignments.
     */
    cursor?: ChoreAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChoreAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChoreAssignments.
     */
    skip?: number
    distinct?: ChoreAssignmentScalarFieldEnum | ChoreAssignmentScalarFieldEnum[]
  }

  /**
   * ChoreAssignment create
   */
  export type ChoreAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ChoreAssignment.
     */
    data: XOR<ChoreAssignmentCreateInput, ChoreAssignmentUncheckedCreateInput>
  }

  /**
   * ChoreAssignment createMany
   */
  export type ChoreAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChoreAssignments.
     */
    data: ChoreAssignmentCreateManyInput | ChoreAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChoreAssignment createManyAndReturn
   */
  export type ChoreAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many ChoreAssignments.
     */
    data: ChoreAssignmentCreateManyInput | ChoreAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChoreAssignment update
   */
  export type ChoreAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ChoreAssignment.
     */
    data: XOR<ChoreAssignmentUpdateInput, ChoreAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ChoreAssignment to update.
     */
    where: ChoreAssignmentWhereUniqueInput
  }

  /**
   * ChoreAssignment updateMany
   */
  export type ChoreAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChoreAssignments.
     */
    data: XOR<ChoreAssignmentUpdateManyMutationInput, ChoreAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ChoreAssignments to update
     */
    where?: ChoreAssignmentWhereInput
    /**
     * Limit how many ChoreAssignments to update.
     */
    limit?: number
  }

  /**
   * ChoreAssignment updateManyAndReturn
   */
  export type ChoreAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update ChoreAssignments.
     */
    data: XOR<ChoreAssignmentUpdateManyMutationInput, ChoreAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ChoreAssignments to update
     */
    where?: ChoreAssignmentWhereInput
    /**
     * Limit how many ChoreAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChoreAssignment upsert
   */
  export type ChoreAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ChoreAssignment to update in case it exists.
     */
    where: ChoreAssignmentWhereUniqueInput
    /**
     * In case the ChoreAssignment found by the `where` argument doesn't exist, create a new ChoreAssignment with this data.
     */
    create: XOR<ChoreAssignmentCreateInput, ChoreAssignmentUncheckedCreateInput>
    /**
     * In case the ChoreAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoreAssignmentUpdateInput, ChoreAssignmentUncheckedUpdateInput>
  }

  /**
   * ChoreAssignment delete
   */
  export type ChoreAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ChoreAssignment to delete.
     */
    where: ChoreAssignmentWhereUniqueInput
  }

  /**
   * ChoreAssignment deleteMany
   */
  export type ChoreAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChoreAssignments to delete
     */
    where?: ChoreAssignmentWhereInput
    /**
     * Limit how many ChoreAssignments to delete.
     */
    limit?: number
  }

  /**
   * ChoreAssignment without action
   */
  export type ChoreAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chores?: boolean | User$choresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chores?: boolean | User$choresArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      chores: Prisma.$ChoreAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chores<T extends User$choresArgs<ExtArgs> = {}>(args?: Subset<T, User$choresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoreAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.chores
   */
  export type User$choresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoreAssignment
     */
    select?: ChoreAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChoreAssignment
     */
    omit?: ChoreAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoreAssignmentInclude<ExtArgs> | null
    where?: ChoreAssignmentWhereInput
    orderBy?: ChoreAssignmentOrderByWithRelationInput | ChoreAssignmentOrderByWithRelationInput[]
    cursor?: ChoreAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoreAssignmentScalarFieldEnum | ChoreAssignmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChoreScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    isDone: 'isDone',
    dueDate: 'dueDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoreScalarFieldEnum = (typeof ChoreScalarFieldEnum)[keyof typeof ChoreScalarFieldEnum]


  export const ChoreAssignmentScalarFieldEnum: {
    id: 'id',
    choreId: 'choreId',
    userId: 'userId',
    weekStart: 'weekStart'
  };

  export type ChoreAssignmentScalarFieldEnum = (typeof ChoreAssignmentScalarFieldEnum)[keyof typeof ChoreAssignmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ChoreWhereInput = {
    AND?: ChoreWhereInput | ChoreWhereInput[]
    OR?: ChoreWhereInput[]
    NOT?: ChoreWhereInput | ChoreWhereInput[]
    id?: IntFilter<"Chore"> | number
    title?: StringFilter<"Chore"> | string
    description?: StringNullableFilter<"Chore"> | string | null
    isDone?: BoolFilter<"Chore"> | boolean
    dueDate?: DateTimeNullableFilter<"Chore"> | Date | string | null
    createdAt?: DateTimeFilter<"Chore"> | Date | string
    updatedAt?: DateTimeFilter<"Chore"> | Date | string
    assignments?: ChoreAssignmentListRelationFilter
  }

  export type ChoreOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isDone?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignments?: ChoreAssignmentOrderByRelationAggregateInput
  }

  export type ChoreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChoreWhereInput | ChoreWhereInput[]
    OR?: ChoreWhereInput[]
    NOT?: ChoreWhereInput | ChoreWhereInput[]
    title?: StringFilter<"Chore"> | string
    description?: StringNullableFilter<"Chore"> | string | null
    isDone?: BoolFilter<"Chore"> | boolean
    dueDate?: DateTimeNullableFilter<"Chore"> | Date | string | null
    createdAt?: DateTimeFilter<"Chore"> | Date | string
    updatedAt?: DateTimeFilter<"Chore"> | Date | string
    assignments?: ChoreAssignmentListRelationFilter
  }, "id">

  export type ChoreOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isDone?: SortOrder
    dueDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoreCountOrderByAggregateInput
    _avg?: ChoreAvgOrderByAggregateInput
    _max?: ChoreMaxOrderByAggregateInput
    _min?: ChoreMinOrderByAggregateInput
    _sum?: ChoreSumOrderByAggregateInput
  }

  export type ChoreScalarWhereWithAggregatesInput = {
    AND?: ChoreScalarWhereWithAggregatesInput | ChoreScalarWhereWithAggregatesInput[]
    OR?: ChoreScalarWhereWithAggregatesInput[]
    NOT?: ChoreScalarWhereWithAggregatesInput | ChoreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chore"> | number
    title?: StringWithAggregatesFilter<"Chore"> | string
    description?: StringNullableWithAggregatesFilter<"Chore"> | string | null
    isDone?: BoolWithAggregatesFilter<"Chore"> | boolean
    dueDate?: DateTimeNullableWithAggregatesFilter<"Chore"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Chore"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chore"> | Date | string
  }

  export type ChoreAssignmentWhereInput = {
    AND?: ChoreAssignmentWhereInput | ChoreAssignmentWhereInput[]
    OR?: ChoreAssignmentWhereInput[]
    NOT?: ChoreAssignmentWhereInput | ChoreAssignmentWhereInput[]
    id?: IntFilter<"ChoreAssignment"> | number
    choreId?: IntFilter<"ChoreAssignment"> | number
    userId?: IntFilter<"ChoreAssignment"> | number
    weekStart?: DateTimeFilter<"ChoreAssignment"> | Date | string
    chore?: XOR<ChoreScalarRelationFilter, ChoreWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChoreAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    chore?: ChoreOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ChoreAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChoreAssignmentWhereInput | ChoreAssignmentWhereInput[]
    OR?: ChoreAssignmentWhereInput[]
    NOT?: ChoreAssignmentWhereInput | ChoreAssignmentWhereInput[]
    choreId?: IntFilter<"ChoreAssignment"> | number
    userId?: IntFilter<"ChoreAssignment"> | number
    weekStart?: DateTimeFilter<"ChoreAssignment"> | Date | string
    chore?: XOR<ChoreScalarRelationFilter, ChoreWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChoreAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    _count?: ChoreAssignmentCountOrderByAggregateInput
    _avg?: ChoreAssignmentAvgOrderByAggregateInput
    _max?: ChoreAssignmentMaxOrderByAggregateInput
    _min?: ChoreAssignmentMinOrderByAggregateInput
    _sum?: ChoreAssignmentSumOrderByAggregateInput
  }

  export type ChoreAssignmentScalarWhereWithAggregatesInput = {
    AND?: ChoreAssignmentScalarWhereWithAggregatesInput | ChoreAssignmentScalarWhereWithAggregatesInput[]
    OR?: ChoreAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ChoreAssignmentScalarWhereWithAggregatesInput | ChoreAssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChoreAssignment"> | number
    choreId?: IntWithAggregatesFilter<"ChoreAssignment"> | number
    userId?: IntWithAggregatesFilter<"ChoreAssignment"> | number
    weekStart?: DateTimeWithAggregatesFilter<"ChoreAssignment"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chores?: ChoreAssignmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chores?: ChoreAssignmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    chores?: ChoreAssignmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChoreCreateInput = {
    title: string
    description?: string | null
    isDone?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ChoreAssignmentCreateNestedManyWithoutChoreInput
  }

  export type ChoreUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    isDone?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: ChoreAssignmentUncheckedCreateNestedManyWithoutChoreInput
  }

  export type ChoreUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ChoreAssignmentUpdateManyWithoutChoreNestedInput
  }

  export type ChoreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ChoreAssignmentUncheckedUpdateManyWithoutChoreNestedInput
  }

  export type ChoreCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    isDone?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentCreateInput = {
    weekStart: Date | string
    chore: ChoreCreateNestedOneWithoutAssignmentsInput
    user: UserCreateNestedOneWithoutChoresInput
  }

  export type ChoreAssignmentUncheckedCreateInput = {
    id?: number
    choreId: number
    userId: number
    weekStart: Date | string
  }

  export type ChoreAssignmentUpdateInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    chore?: ChoreUpdateOneRequiredWithoutAssignmentsNestedInput
    user?: UserUpdateOneRequiredWithoutChoresNestedInput
  }

  export type ChoreAssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    choreId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentCreateManyInput = {
    id?: number
    choreId: number
    userId: number
    weekStart: Date | string
  }

  export type ChoreAssignmentUpdateManyMutationInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    choreId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    chores?: ChoreAssignmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    chores?: ChoreAssignmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chores?: ChoreAssignmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chores?: ChoreAssignmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ChoreAssignmentListRelationFilter = {
    every?: ChoreAssignmentWhereInput
    some?: ChoreAssignmentWhereInput
    none?: ChoreAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChoreAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChoreCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDone?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChoreMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDone?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isDone?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ChoreScalarRelationFilter = {
    is?: ChoreWhereInput
    isNot?: ChoreWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChoreAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
  }

  export type ChoreAssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
  }

  export type ChoreAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
  }

  export type ChoreAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
  }

  export type ChoreAssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    choreId?: SortOrder
    userId?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type ChoreAssignmentCreateNestedManyWithoutChoreInput = {
    create?: XOR<ChoreAssignmentCreateWithoutChoreInput, ChoreAssignmentUncheckedCreateWithoutChoreInput> | ChoreAssignmentCreateWithoutChoreInput[] | ChoreAssignmentUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutChoreInput | ChoreAssignmentCreateOrConnectWithoutChoreInput[]
    createMany?: ChoreAssignmentCreateManyChoreInputEnvelope
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
  }

  export type ChoreAssignmentUncheckedCreateNestedManyWithoutChoreInput = {
    create?: XOR<ChoreAssignmentCreateWithoutChoreInput, ChoreAssignmentUncheckedCreateWithoutChoreInput> | ChoreAssignmentCreateWithoutChoreInput[] | ChoreAssignmentUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutChoreInput | ChoreAssignmentCreateOrConnectWithoutChoreInput[]
    createMany?: ChoreAssignmentCreateManyChoreInputEnvelope
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChoreAssignmentUpdateManyWithoutChoreNestedInput = {
    create?: XOR<ChoreAssignmentCreateWithoutChoreInput, ChoreAssignmentUncheckedCreateWithoutChoreInput> | ChoreAssignmentCreateWithoutChoreInput[] | ChoreAssignmentUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutChoreInput | ChoreAssignmentCreateOrConnectWithoutChoreInput[]
    upsert?: ChoreAssignmentUpsertWithWhereUniqueWithoutChoreInput | ChoreAssignmentUpsertWithWhereUniqueWithoutChoreInput[]
    createMany?: ChoreAssignmentCreateManyChoreInputEnvelope
    set?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    disconnect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    delete?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    update?: ChoreAssignmentUpdateWithWhereUniqueWithoutChoreInput | ChoreAssignmentUpdateWithWhereUniqueWithoutChoreInput[]
    updateMany?: ChoreAssignmentUpdateManyWithWhereWithoutChoreInput | ChoreAssignmentUpdateManyWithWhereWithoutChoreInput[]
    deleteMany?: ChoreAssignmentScalarWhereInput | ChoreAssignmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ChoreAssignmentUncheckedUpdateManyWithoutChoreNestedInput = {
    create?: XOR<ChoreAssignmentCreateWithoutChoreInput, ChoreAssignmentUncheckedCreateWithoutChoreInput> | ChoreAssignmentCreateWithoutChoreInput[] | ChoreAssignmentUncheckedCreateWithoutChoreInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutChoreInput | ChoreAssignmentCreateOrConnectWithoutChoreInput[]
    upsert?: ChoreAssignmentUpsertWithWhereUniqueWithoutChoreInput | ChoreAssignmentUpsertWithWhereUniqueWithoutChoreInput[]
    createMany?: ChoreAssignmentCreateManyChoreInputEnvelope
    set?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    disconnect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    delete?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    update?: ChoreAssignmentUpdateWithWhereUniqueWithoutChoreInput | ChoreAssignmentUpdateWithWhereUniqueWithoutChoreInput[]
    updateMany?: ChoreAssignmentUpdateManyWithWhereWithoutChoreInput | ChoreAssignmentUpdateManyWithWhereWithoutChoreInput[]
    deleteMany?: ChoreAssignmentScalarWhereInput | ChoreAssignmentScalarWhereInput[]
  }

  export type ChoreCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ChoreCreateWithoutAssignmentsInput, ChoreUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ChoreCreateOrConnectWithoutAssignmentsInput
    connect?: ChoreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChoresInput = {
    create?: XOR<UserCreateWithoutChoresInput, UserUncheckedCreateWithoutChoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutChoresInput
    connect?: UserWhereUniqueInput
  }

  export type ChoreUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ChoreCreateWithoutAssignmentsInput, ChoreUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ChoreCreateOrConnectWithoutAssignmentsInput
    upsert?: ChoreUpsertWithoutAssignmentsInput
    connect?: ChoreWhereUniqueInput
    update?: XOR<XOR<ChoreUpdateToOneWithWhereWithoutAssignmentsInput, ChoreUpdateWithoutAssignmentsInput>, ChoreUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutChoresNestedInput = {
    create?: XOR<UserCreateWithoutChoresInput, UserUncheckedCreateWithoutChoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutChoresInput
    upsert?: UserUpsertWithoutChoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChoresInput, UserUpdateWithoutChoresInput>, UserUncheckedUpdateWithoutChoresInput>
  }

  export type ChoreAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ChoreAssignmentCreateWithoutUserInput, ChoreAssignmentUncheckedCreateWithoutUserInput> | ChoreAssignmentCreateWithoutUserInput[] | ChoreAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutUserInput | ChoreAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ChoreAssignmentCreateManyUserInputEnvelope
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
  }

  export type ChoreAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChoreAssignmentCreateWithoutUserInput, ChoreAssignmentUncheckedCreateWithoutUserInput> | ChoreAssignmentCreateWithoutUserInput[] | ChoreAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutUserInput | ChoreAssignmentCreateOrConnectWithoutUserInput[]
    createMany?: ChoreAssignmentCreateManyUserInputEnvelope
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type ChoreAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChoreAssignmentCreateWithoutUserInput, ChoreAssignmentUncheckedCreateWithoutUserInput> | ChoreAssignmentCreateWithoutUserInput[] | ChoreAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutUserInput | ChoreAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ChoreAssignmentUpsertWithWhereUniqueWithoutUserInput | ChoreAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChoreAssignmentCreateManyUserInputEnvelope
    set?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    disconnect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    delete?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    update?: ChoreAssignmentUpdateWithWhereUniqueWithoutUserInput | ChoreAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChoreAssignmentUpdateManyWithWhereWithoutUserInput | ChoreAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChoreAssignmentScalarWhereInput | ChoreAssignmentScalarWhereInput[]
  }

  export type ChoreAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChoreAssignmentCreateWithoutUserInput, ChoreAssignmentUncheckedCreateWithoutUserInput> | ChoreAssignmentCreateWithoutUserInput[] | ChoreAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChoreAssignmentCreateOrConnectWithoutUserInput | ChoreAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ChoreAssignmentUpsertWithWhereUniqueWithoutUserInput | ChoreAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChoreAssignmentCreateManyUserInputEnvelope
    set?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    disconnect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    delete?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    connect?: ChoreAssignmentWhereUniqueInput | ChoreAssignmentWhereUniqueInput[]
    update?: ChoreAssignmentUpdateWithWhereUniqueWithoutUserInput | ChoreAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChoreAssignmentUpdateManyWithWhereWithoutUserInput | ChoreAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChoreAssignmentScalarWhereInput | ChoreAssignmentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type ChoreAssignmentCreateWithoutChoreInput = {
    weekStart: Date | string
    user: UserCreateNestedOneWithoutChoresInput
  }

  export type ChoreAssignmentUncheckedCreateWithoutChoreInput = {
    id?: number
    userId: number
    weekStart: Date | string
  }

  export type ChoreAssignmentCreateOrConnectWithoutChoreInput = {
    where: ChoreAssignmentWhereUniqueInput
    create: XOR<ChoreAssignmentCreateWithoutChoreInput, ChoreAssignmentUncheckedCreateWithoutChoreInput>
  }

  export type ChoreAssignmentCreateManyChoreInputEnvelope = {
    data: ChoreAssignmentCreateManyChoreInput | ChoreAssignmentCreateManyChoreInput[]
    skipDuplicates?: boolean
  }

  export type ChoreAssignmentUpsertWithWhereUniqueWithoutChoreInput = {
    where: ChoreAssignmentWhereUniqueInput
    update: XOR<ChoreAssignmentUpdateWithoutChoreInput, ChoreAssignmentUncheckedUpdateWithoutChoreInput>
    create: XOR<ChoreAssignmentCreateWithoutChoreInput, ChoreAssignmentUncheckedCreateWithoutChoreInput>
  }

  export type ChoreAssignmentUpdateWithWhereUniqueWithoutChoreInput = {
    where: ChoreAssignmentWhereUniqueInput
    data: XOR<ChoreAssignmentUpdateWithoutChoreInput, ChoreAssignmentUncheckedUpdateWithoutChoreInput>
  }

  export type ChoreAssignmentUpdateManyWithWhereWithoutChoreInput = {
    where: ChoreAssignmentScalarWhereInput
    data: XOR<ChoreAssignmentUpdateManyMutationInput, ChoreAssignmentUncheckedUpdateManyWithoutChoreInput>
  }

  export type ChoreAssignmentScalarWhereInput = {
    AND?: ChoreAssignmentScalarWhereInput | ChoreAssignmentScalarWhereInput[]
    OR?: ChoreAssignmentScalarWhereInput[]
    NOT?: ChoreAssignmentScalarWhereInput | ChoreAssignmentScalarWhereInput[]
    id?: IntFilter<"ChoreAssignment"> | number
    choreId?: IntFilter<"ChoreAssignment"> | number
    userId?: IntFilter<"ChoreAssignment"> | number
    weekStart?: DateTimeFilter<"ChoreAssignment"> | Date | string
  }

  export type ChoreCreateWithoutAssignmentsInput = {
    title: string
    description?: string | null
    isDone?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    title: string
    description?: string | null
    isDone?: boolean
    dueDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoreCreateOrConnectWithoutAssignmentsInput = {
    where: ChoreWhereUniqueInput
    create: XOR<ChoreCreateWithoutAssignmentsInput, ChoreUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutChoresInput = {
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutChoresInput = {
    id?: number
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutChoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChoresInput, UserUncheckedCreateWithoutChoresInput>
  }

  export type ChoreUpsertWithoutAssignmentsInput = {
    update: XOR<ChoreUpdateWithoutAssignmentsInput, ChoreUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ChoreCreateWithoutAssignmentsInput, ChoreUncheckedCreateWithoutAssignmentsInput>
    where?: ChoreWhereInput
  }

  export type ChoreUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ChoreWhereInput
    data: XOR<ChoreUpdateWithoutAssignmentsInput, ChoreUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ChoreUpdateWithoutAssignmentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDone?: BoolFieldUpdateOperationsInput | boolean
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutChoresInput = {
    update: XOR<UserUpdateWithoutChoresInput, UserUncheckedUpdateWithoutChoresInput>
    create: XOR<UserCreateWithoutChoresInput, UserUncheckedCreateWithoutChoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChoresInput, UserUncheckedUpdateWithoutChoresInput>
  }

  export type UserUpdateWithoutChoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutChoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentCreateWithoutUserInput = {
    weekStart: Date | string
    chore: ChoreCreateNestedOneWithoutAssignmentsInput
  }

  export type ChoreAssignmentUncheckedCreateWithoutUserInput = {
    id?: number
    choreId: number
    weekStart: Date | string
  }

  export type ChoreAssignmentCreateOrConnectWithoutUserInput = {
    where: ChoreAssignmentWhereUniqueInput
    create: XOR<ChoreAssignmentCreateWithoutUserInput, ChoreAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ChoreAssignmentCreateManyUserInputEnvelope = {
    data: ChoreAssignmentCreateManyUserInput | ChoreAssignmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChoreAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ChoreAssignmentWhereUniqueInput
    update: XOR<ChoreAssignmentUpdateWithoutUserInput, ChoreAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<ChoreAssignmentCreateWithoutUserInput, ChoreAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ChoreAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ChoreAssignmentWhereUniqueInput
    data: XOR<ChoreAssignmentUpdateWithoutUserInput, ChoreAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type ChoreAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: ChoreAssignmentScalarWhereInput
    data: XOR<ChoreAssignmentUpdateManyMutationInput, ChoreAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ChoreAssignmentCreateManyChoreInput = {
    id?: number
    userId: number
    weekStart: Date | string
  }

  export type ChoreAssignmentUpdateWithoutChoreInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChoresNestedInput
  }

  export type ChoreAssignmentUncheckedUpdateWithoutChoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentUncheckedUpdateManyWithoutChoreInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentCreateManyUserInput = {
    id?: number
    choreId: number
    weekStart: Date | string
  }

  export type ChoreAssignmentUpdateWithoutUserInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    chore?: ChoreUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ChoreAssignmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    choreId?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoreAssignmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    choreId?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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