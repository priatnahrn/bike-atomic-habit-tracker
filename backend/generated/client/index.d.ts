
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Onboarding
 * 
 */
export type Onboarding = $Result.DefaultSelection<Prisma.$OnboardingPayload>
/**
 * Model Habit
 * 
 */
export type Habit = $Result.DefaultSelection<Prisma.$HabitPayload>
/**
 * Model HabitLog
 * 
 */
export type HabitLog = $Result.DefaultSelection<Prisma.$HabitLogPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionLabel: {
  CRUISER: 'CRUISER',
  SPRINTER: 'SPRINTER',
  TOUR: 'TOUR'
};

export type SubscriptionLabel = (typeof SubscriptionLabel)[keyof typeof SubscriptionLabel]

}

export type SubscriptionLabel = $Enums.SubscriptionLabel

export const SubscriptionLabel: typeof $Enums.SubscriptionLabel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onboarding`: Exposes CRUD operations for the **Onboarding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Onboardings
    * const onboardings = await prisma.onboarding.findMany()
    * ```
    */
  get onboarding(): Prisma.OnboardingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit`: Exposes CRUD operations for the **Habit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habit.findMany()
    * ```
    */
  get habit(): Prisma.HabitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitLog`: Exposes CRUD operations for the **HabitLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HabitLogs
    * const habitLogs = await prisma.habitLog.findMany()
    * ```
    */
  get habitLog(): Prisma.HabitLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Onboarding: 'Onboarding',
    Habit: 'Habit',
    HabitLog: 'HabitLog',
    Feedback: 'Feedback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "onboarding" | "habit" | "habitLog" | "feedback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Onboarding: {
        payload: Prisma.$OnboardingPayload<ExtArgs>
        fields: Prisma.OnboardingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnboardingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnboardingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          findFirst: {
            args: Prisma.OnboardingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnboardingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          findMany: {
            args: Prisma.OnboardingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>[]
          }
          create: {
            args: Prisma.OnboardingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          createMany: {
            args: Prisma.OnboardingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnboardingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>[]
          }
          delete: {
            args: Prisma.OnboardingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          update: {
            args: Prisma.OnboardingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          deleteMany: {
            args: Prisma.OnboardingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnboardingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnboardingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>[]
          }
          upsert: {
            args: Prisma.OnboardingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnboardingPayload>
          }
          aggregate: {
            args: Prisma.OnboardingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnboarding>
          }
          groupBy: {
            args: Prisma.OnboardingGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnboardingGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnboardingCountArgs<ExtArgs>
            result: $Utils.Optional<OnboardingCountAggregateOutputType> | number
          }
        }
      }
      Habit: {
        payload: Prisma.$HabitPayload<ExtArgs>
        fields: Prisma.HabitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findFirst: {
            args: Prisma.HabitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          findMany: {
            args: Prisma.HabitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          create: {
            args: Prisma.HabitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          createMany: {
            args: Prisma.HabitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          delete: {
            args: Prisma.HabitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          update: {
            args: Prisma.HabitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          deleteMany: {
            args: Prisma.HabitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>[]
          }
          upsert: {
            args: Prisma.HabitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitPayload>
          }
          aggregate: {
            args: Prisma.HabitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit>
          }
          groupBy: {
            args: Prisma.HabitGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitCountArgs<ExtArgs>
            result: $Utils.Optional<HabitCountAggregateOutputType> | number
          }
        }
      }
      HabitLog: {
        payload: Prisma.$HabitLogPayload<ExtArgs>
        fields: Prisma.HabitLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findFirst: {
            args: Prisma.HabitLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          findMany: {
            args: Prisma.HabitLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          create: {
            args: Prisma.HabitLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          createMany: {
            args: Prisma.HabitLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          delete: {
            args: Prisma.HabitLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          update: {
            args: Prisma.HabitLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          deleteMany: {
            args: Prisma.HabitLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>[]
          }
          upsert: {
            args: Prisma.HabitLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitLogPayload>
          }
          aggregate: {
            args: Prisma.HabitLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitLog>
          }
          groupBy: {
            args: Prisma.HabitLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitLogCountArgs<ExtArgs>
            result: $Utils.Optional<HabitLogCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    onboarding?: OnboardingOmit
    habit?: HabitOmit
    habitLog?: HabitLogOmit
    feedback?: FeedbackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    habits: number
    feedback: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    feedback?: boolean | UserCountOutputTypeCountFeedbackArgs
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
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type HabitCountOutputType
   */

  export type HabitCountOutputType = {
    logs: number
  }

  export type HabitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | HabitCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitCountOutputType
     */
    select?: HabitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitCountOutputType without action
   */
  export type HabitCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    profilePhoto: string | null
    subscriptionLabel: $Enums.SubscriptionLabel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    profilePhoto: string | null
    subscriptionLabel: $Enums.SubscriptionLabel | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    profilePhoto: number
    subscriptionLabel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    profilePhoto?: true
    subscriptionLabel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    profilePhoto?: true
    subscriptionLabel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    profilePhoto?: true
    subscriptionLabel?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    profilePhoto: string | null
    subscriptionLabel: $Enums.SubscriptionLabel
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    profilePhoto?: boolean
    subscriptionLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    onboarding?: boolean | User$onboardingArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    feedback?: boolean | User$feedbackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    profilePhoto?: boolean
    subscriptionLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    profilePhoto?: boolean
    subscriptionLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    profilePhoto?: boolean
    subscriptionLabel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "profilePhoto" | "subscriptionLabel" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    onboarding?: boolean | User$onboardingArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    feedback?: boolean | User$feedbackArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      onboarding: Prisma.$OnboardingPayload<ExtArgs> | null
      habits: Prisma.$HabitPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      profilePhoto: string | null
      subscriptionLabel: $Enums.SubscriptionLabel
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
    onboarding<T extends User$onboardingArgs<ExtArgs> = {}>(args?: Subset<T, User$onboardingArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedback<T extends User$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly profilePhoto: FieldRef<"User", 'String'>
    readonly subscriptionLabel: FieldRef<"User", 'SubscriptionLabel'>
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
   * User.onboarding
   */
  export type User$onboardingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    where?: OnboardingWhereInput
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    cursor?: HabitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * User.feedback
   */
  export type User$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
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
   * Model Onboarding
   */

  export type AggregateOnboarding = {
    _count: OnboardingCountAggregateOutputType | null
    _min: OnboardingMinAggregateOutputType | null
    _max: OnboardingMaxAggregateOutputType | null
  }

  export type OnboardingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    goal: string | null
    createdAt: Date | null
  }

  export type OnboardingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    goal: string | null
    createdAt: Date | null
  }

  export type OnboardingCountAggregateOutputType = {
    id: number
    userId: number
    goal: number
    focusAreas: number
    createdAt: number
    _all: number
  }


  export type OnboardingMinAggregateInputType = {
    id?: true
    userId?: true
    goal?: true
    createdAt?: true
  }

  export type OnboardingMaxAggregateInputType = {
    id?: true
    userId?: true
    goal?: true
    createdAt?: true
  }

  export type OnboardingCountAggregateInputType = {
    id?: true
    userId?: true
    goal?: true
    focusAreas?: true
    createdAt?: true
    _all?: true
  }

  export type OnboardingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Onboarding to aggregate.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Onboardings
    **/
    _count?: true | OnboardingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnboardingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnboardingMaxAggregateInputType
  }

  export type GetOnboardingAggregateType<T extends OnboardingAggregateArgs> = {
        [P in keyof T & keyof AggregateOnboarding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnboarding[P]>
      : GetScalarType<T[P], AggregateOnboarding[P]>
  }




  export type OnboardingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnboardingWhereInput
    orderBy?: OnboardingOrderByWithAggregationInput | OnboardingOrderByWithAggregationInput[]
    by: OnboardingScalarFieldEnum[] | OnboardingScalarFieldEnum
    having?: OnboardingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnboardingCountAggregateInputType | true
    _min?: OnboardingMinAggregateInputType
    _max?: OnboardingMaxAggregateInputType
  }

  export type OnboardingGroupByOutputType = {
    id: string
    userId: string
    goal: string
    focusAreas: string[]
    createdAt: Date
    _count: OnboardingCountAggregateOutputType | null
    _min: OnboardingMinAggregateOutputType | null
    _max: OnboardingMaxAggregateOutputType | null
  }

  type GetOnboardingGroupByPayload<T extends OnboardingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnboardingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnboardingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnboardingGroupByOutputType[P]>
            : GetScalarType<T[P], OnboardingGroupByOutputType[P]>
        }
      >
    >


  export type OnboardingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goal?: boolean
    focusAreas?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboarding"]>

  export type OnboardingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goal?: boolean
    focusAreas?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboarding"]>

  export type OnboardingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    goal?: boolean
    focusAreas?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onboarding"]>

  export type OnboardingSelectScalar = {
    id?: boolean
    userId?: boolean
    goal?: boolean
    focusAreas?: boolean
    createdAt?: boolean
  }

  export type OnboardingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "goal" | "focusAreas" | "createdAt", ExtArgs["result"]["onboarding"]>
  export type OnboardingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnboardingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OnboardingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OnboardingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Onboarding"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      goal: string
      focusAreas: string[]
      createdAt: Date
    }, ExtArgs["result"]["onboarding"]>
    composites: {}
  }

  type OnboardingGetPayload<S extends boolean | null | undefined | OnboardingDefaultArgs> = $Result.GetResult<Prisma.$OnboardingPayload, S>

  type OnboardingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnboardingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnboardingCountAggregateInputType | true
    }

  export interface OnboardingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Onboarding'], meta: { name: 'Onboarding' } }
    /**
     * Find zero or one Onboarding that matches the filter.
     * @param {OnboardingFindUniqueArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnboardingFindUniqueArgs>(args: SelectSubset<T, OnboardingFindUniqueArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Onboarding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnboardingFindUniqueOrThrowArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnboardingFindUniqueOrThrowArgs>(args: SelectSubset<T, OnboardingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Onboarding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingFindFirstArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnboardingFindFirstArgs>(args?: SelectSubset<T, OnboardingFindFirstArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Onboarding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingFindFirstOrThrowArgs} args - Arguments to find a Onboarding
     * @example
     * // Get one Onboarding
     * const onboarding = await prisma.onboarding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnboardingFindFirstOrThrowArgs>(args?: SelectSubset<T, OnboardingFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Onboardings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Onboardings
     * const onboardings = await prisma.onboarding.findMany()
     * 
     * // Get first 10 Onboardings
     * const onboardings = await prisma.onboarding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onboardingWithIdOnly = await prisma.onboarding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnboardingFindManyArgs>(args?: SelectSubset<T, OnboardingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Onboarding.
     * @param {OnboardingCreateArgs} args - Arguments to create a Onboarding.
     * @example
     * // Create one Onboarding
     * const Onboarding = await prisma.onboarding.create({
     *   data: {
     *     // ... data to create a Onboarding
     *   }
     * })
     * 
     */
    create<T extends OnboardingCreateArgs>(args: SelectSubset<T, OnboardingCreateArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Onboardings.
     * @param {OnboardingCreateManyArgs} args - Arguments to create many Onboardings.
     * @example
     * // Create many Onboardings
     * const onboarding = await prisma.onboarding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnboardingCreateManyArgs>(args?: SelectSubset<T, OnboardingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Onboardings and returns the data saved in the database.
     * @param {OnboardingCreateManyAndReturnArgs} args - Arguments to create many Onboardings.
     * @example
     * // Create many Onboardings
     * const onboarding = await prisma.onboarding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Onboardings and only return the `id`
     * const onboardingWithIdOnly = await prisma.onboarding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnboardingCreateManyAndReturnArgs>(args?: SelectSubset<T, OnboardingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Onboarding.
     * @param {OnboardingDeleteArgs} args - Arguments to delete one Onboarding.
     * @example
     * // Delete one Onboarding
     * const Onboarding = await prisma.onboarding.delete({
     *   where: {
     *     // ... filter to delete one Onboarding
     *   }
     * })
     * 
     */
    delete<T extends OnboardingDeleteArgs>(args: SelectSubset<T, OnboardingDeleteArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Onboarding.
     * @param {OnboardingUpdateArgs} args - Arguments to update one Onboarding.
     * @example
     * // Update one Onboarding
     * const onboarding = await prisma.onboarding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnboardingUpdateArgs>(args: SelectSubset<T, OnboardingUpdateArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Onboardings.
     * @param {OnboardingDeleteManyArgs} args - Arguments to filter Onboardings to delete.
     * @example
     * // Delete a few Onboardings
     * const { count } = await prisma.onboarding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnboardingDeleteManyArgs>(args?: SelectSubset<T, OnboardingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Onboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Onboardings
     * const onboarding = await prisma.onboarding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnboardingUpdateManyArgs>(args: SelectSubset<T, OnboardingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Onboardings and returns the data updated in the database.
     * @param {OnboardingUpdateManyAndReturnArgs} args - Arguments to update many Onboardings.
     * @example
     * // Update many Onboardings
     * const onboarding = await prisma.onboarding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Onboardings and only return the `id`
     * const onboardingWithIdOnly = await prisma.onboarding.updateManyAndReturn({
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
    updateManyAndReturn<T extends OnboardingUpdateManyAndReturnArgs>(args: SelectSubset<T, OnboardingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Onboarding.
     * @param {OnboardingUpsertArgs} args - Arguments to update or create a Onboarding.
     * @example
     * // Update or create a Onboarding
     * const onboarding = await prisma.onboarding.upsert({
     *   create: {
     *     // ... data to create a Onboarding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Onboarding we want to update
     *   }
     * })
     */
    upsert<T extends OnboardingUpsertArgs>(args: SelectSubset<T, OnboardingUpsertArgs<ExtArgs>>): Prisma__OnboardingClient<$Result.GetResult<Prisma.$OnboardingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Onboardings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingCountArgs} args - Arguments to filter Onboardings to count.
     * @example
     * // Count the number of Onboardings
     * const count = await prisma.onboarding.count({
     *   where: {
     *     // ... the filter for the Onboardings we want to count
     *   }
     * })
    **/
    count<T extends OnboardingCountArgs>(
      args?: Subset<T, OnboardingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnboardingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Onboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnboardingAggregateArgs>(args: Subset<T, OnboardingAggregateArgs>): Prisma.PrismaPromise<GetOnboardingAggregateType<T>>

    /**
     * Group by Onboarding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnboardingGroupByArgs} args - Group by arguments.
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
      T extends OnboardingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnboardingGroupByArgs['orderBy'] }
        : { orderBy?: OnboardingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OnboardingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnboardingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Onboarding model
   */
  readonly fields: OnboardingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Onboarding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnboardingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Onboarding model
   */
  interface OnboardingFieldRefs {
    readonly id: FieldRef<"Onboarding", 'String'>
    readonly userId: FieldRef<"Onboarding", 'String'>
    readonly goal: FieldRef<"Onboarding", 'String'>
    readonly focusAreas: FieldRef<"Onboarding", 'String[]'>
    readonly createdAt: FieldRef<"Onboarding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Onboarding findUnique
   */
  export type OnboardingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding findUniqueOrThrow
   */
  export type OnboardingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding findFirst
   */
  export type OnboardingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Onboardings.
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Onboardings.
     */
    distinct?: OnboardingScalarFieldEnum | OnboardingScalarFieldEnum[]
  }

  /**
   * Onboarding findFirstOrThrow
   */
  export type OnboardingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * Filter, which Onboarding to fetch.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Onboardings.
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Onboardings.
     */
    distinct?: OnboardingScalarFieldEnum | OnboardingScalarFieldEnum[]
  }

  /**
   * Onboarding findMany
   */
  export type OnboardingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * Filter, which Onboardings to fetch.
     */
    where?: OnboardingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Onboardings to fetch.
     */
    orderBy?: OnboardingOrderByWithRelationInput | OnboardingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Onboardings.
     */
    cursor?: OnboardingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Onboardings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Onboardings.
     */
    skip?: number
    distinct?: OnboardingScalarFieldEnum | OnboardingScalarFieldEnum[]
  }

  /**
   * Onboarding create
   */
  export type OnboardingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * The data needed to create a Onboarding.
     */
    data: XOR<OnboardingCreateInput, OnboardingUncheckedCreateInput>
  }

  /**
   * Onboarding createMany
   */
  export type OnboardingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Onboardings.
     */
    data: OnboardingCreateManyInput | OnboardingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Onboarding createManyAndReturn
   */
  export type OnboardingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * The data used to create many Onboardings.
     */
    data: OnboardingCreateManyInput | OnboardingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Onboarding update
   */
  export type OnboardingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * The data needed to update a Onboarding.
     */
    data: XOR<OnboardingUpdateInput, OnboardingUncheckedUpdateInput>
    /**
     * Choose, which Onboarding to update.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding updateMany
   */
  export type OnboardingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Onboardings.
     */
    data: XOR<OnboardingUpdateManyMutationInput, OnboardingUncheckedUpdateManyInput>
    /**
     * Filter which Onboardings to update
     */
    where?: OnboardingWhereInput
    /**
     * Limit how many Onboardings to update.
     */
    limit?: number
  }

  /**
   * Onboarding updateManyAndReturn
   */
  export type OnboardingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * The data used to update Onboardings.
     */
    data: XOR<OnboardingUpdateManyMutationInput, OnboardingUncheckedUpdateManyInput>
    /**
     * Filter which Onboardings to update
     */
    where?: OnboardingWhereInput
    /**
     * Limit how many Onboardings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Onboarding upsert
   */
  export type OnboardingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * The filter to search for the Onboarding to update in case it exists.
     */
    where: OnboardingWhereUniqueInput
    /**
     * In case the Onboarding found by the `where` argument doesn't exist, create a new Onboarding with this data.
     */
    create: XOR<OnboardingCreateInput, OnboardingUncheckedCreateInput>
    /**
     * In case the Onboarding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnboardingUpdateInput, OnboardingUncheckedUpdateInput>
  }

  /**
   * Onboarding delete
   */
  export type OnboardingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
    /**
     * Filter which Onboarding to delete.
     */
    where: OnboardingWhereUniqueInput
  }

  /**
   * Onboarding deleteMany
   */
  export type OnboardingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Onboardings to delete
     */
    where?: OnboardingWhereInput
    /**
     * Limit how many Onboardings to delete.
     */
    limit?: number
  }

  /**
   * Onboarding without action
   */
  export type OnboardingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Onboarding
     */
    select?: OnboardingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Onboarding
     */
    omit?: OnboardingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OnboardingInclude<ExtArgs> | null
  }


  /**
   * Model Habit
   */

  export type AggregateHabit = {
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  export type HabitAvgAggregateOutputType = {
    streak: number | null
  }

  export type HabitSumAggregateOutputType = {
    streak: number | null
  }

  export type HabitMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    subtitle: string | null
    iconName: string | null
    color: string | null
    frequency: string | null
    target: string | null
    time: string | null
    location: string | null
    stackingCue: string | null
    streak: number | null
    isCompleted: boolean | null
    lastCompletedDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    subtitle: string | null
    iconName: string | null
    color: string | null
    frequency: string | null
    target: string | null
    time: string | null
    location: string | null
    stackingCue: string | null
    streak: number | null
    isCompleted: boolean | null
    lastCompletedDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HabitCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    subtitle: number
    iconName: number
    color: number
    frequency: number
    target: number
    time: number
    location: number
    stackingCue: number
    streak: number
    isCompleted: number
    lastCompletedDate: number
    repeatDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HabitAvgAggregateInputType = {
    streak?: true
  }

  export type HabitSumAggregateInputType = {
    streak?: true
  }

  export type HabitMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    subtitle?: true
    iconName?: true
    color?: true
    frequency?: true
    target?: true
    time?: true
    location?: true
    stackingCue?: true
    streak?: true
    isCompleted?: true
    lastCompletedDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    subtitle?: true
    iconName?: true
    color?: true
    frequency?: true
    target?: true
    time?: true
    location?: true
    stackingCue?: true
    streak?: true
    isCompleted?: true
    lastCompletedDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HabitCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    subtitle?: true
    iconName?: true
    color?: true
    frequency?: true
    target?: true
    time?: true
    location?: true
    stackingCue?: true
    streak?: true
    isCompleted?: true
    lastCompletedDate?: true
    repeatDays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HabitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit to aggregate.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitMaxAggregateInputType
  }

  export type GetHabitAggregateType<T extends HabitAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit[P]>
      : GetScalarType<T[P], AggregateHabit[P]>
  }




  export type HabitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitWhereInput
    orderBy?: HabitOrderByWithAggregationInput | HabitOrderByWithAggregationInput[]
    by: HabitScalarFieldEnum[] | HabitScalarFieldEnum
    having?: HabitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitCountAggregateInputType | true
    _avg?: HabitAvgAggregateInputType
    _sum?: HabitSumAggregateInputType
    _min?: HabitMinAggregateInputType
    _max?: HabitMaxAggregateInputType
  }

  export type HabitGroupByOutputType = {
    id: string
    userId: string
    title: string
    subtitle: string | null
    iconName: string
    color: string
    frequency: string
    target: string | null
    time: string | null
    location: string | null
    stackingCue: string | null
    streak: number
    isCompleted: boolean
    lastCompletedDate: Date | null
    repeatDays: string[]
    createdAt: Date
    updatedAt: Date
    _count: HabitCountAggregateOutputType | null
    _avg: HabitAvgAggregateOutputType | null
    _sum: HabitSumAggregateOutputType | null
    _min: HabitMinAggregateOutputType | null
    _max: HabitMaxAggregateOutputType | null
  }

  type GetHabitGroupByPayload<T extends HabitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitGroupByOutputType[P]>
            : GetScalarType<T[P], HabitGroupByOutputType[P]>
        }
      >
    >


  export type HabitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    subtitle?: boolean
    iconName?: boolean
    color?: boolean
    frequency?: boolean
    target?: boolean
    time?: boolean
    location?: boolean
    stackingCue?: boolean
    streak?: boolean
    isCompleted?: boolean
    lastCompletedDate?: boolean
    repeatDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    logs?: boolean | Habit$logsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    subtitle?: boolean
    iconName?: boolean
    color?: boolean
    frequency?: boolean
    target?: boolean
    time?: boolean
    location?: boolean
    stackingCue?: boolean
    streak?: boolean
    isCompleted?: boolean
    lastCompletedDate?: boolean
    repeatDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    subtitle?: boolean
    iconName?: boolean
    color?: boolean
    frequency?: boolean
    target?: boolean
    time?: boolean
    location?: boolean
    stackingCue?: boolean
    streak?: boolean
    isCompleted?: boolean
    lastCompletedDate?: boolean
    repeatDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habit"]>

  export type HabitSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    subtitle?: boolean
    iconName?: boolean
    color?: boolean
    frequency?: boolean
    target?: boolean
    time?: boolean
    location?: boolean
    stackingCue?: boolean
    streak?: boolean
    isCompleted?: boolean
    lastCompletedDate?: boolean
    repeatDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HabitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "subtitle" | "iconName" | "color" | "frequency" | "target" | "time" | "location" | "stackingCue" | "streak" | "isCompleted" | "lastCompletedDate" | "repeatDays" | "createdAt" | "updatedAt", ExtArgs["result"]["habit"]>
  export type HabitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    logs?: boolean | Habit$logsArgs<ExtArgs>
    _count?: boolean | HabitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HabitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      logs: Prisma.$HabitLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      subtitle: string | null
      iconName: string
      color: string
      frequency: string
      target: string | null
      time: string | null
      location: string | null
      stackingCue: string | null
      streak: number
      isCompleted: boolean
      lastCompletedDate: Date | null
      repeatDays: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["habit"]>
    composites: {}
  }

  type HabitGetPayload<S extends boolean | null | undefined | HabitDefaultArgs> = $Result.GetResult<Prisma.$HabitPayload, S>

  type HabitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitCountAggregateInputType | true
    }

  export interface HabitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit'], meta: { name: 'Habit' } }
    /**
     * Find zero or one Habit that matches the filter.
     * @param {HabitFindUniqueArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitFindUniqueArgs>(args: SelectSubset<T, HabitFindUniqueArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitFindUniqueOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitFindFirstArgs>(args?: SelectSubset<T, HabitFindFirstArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindFirstOrThrowArgs} args - Arguments to find a Habit
     * @example
     * // Get one Habit
     * const habit = await prisma.habit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habit.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitWithIdOnly = await prisma.habit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitFindManyArgs>(args?: SelectSubset<T, HabitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit.
     * @param {HabitCreateArgs} args - Arguments to create a Habit.
     * @example
     * // Create one Habit
     * const Habit = await prisma.habit.create({
     *   data: {
     *     // ... data to create a Habit
     *   }
     * })
     * 
     */
    create<T extends HabitCreateArgs>(args: SelectSubset<T, HabitCreateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitCreateManyArgs>(args?: SelectSubset<T, HabitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habit = await prisma.habit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit.
     * @param {HabitDeleteArgs} args - Arguments to delete one Habit.
     * @example
     * // Delete one Habit
     * const Habit = await prisma.habit.delete({
     *   where: {
     *     // ... filter to delete one Habit
     *   }
     * })
     * 
     */
    delete<T extends HabitDeleteArgs>(args: SelectSubset<T, HabitDeleteArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit.
     * @param {HabitUpdateArgs} args - Arguments to update one Habit.
     * @example
     * // Update one Habit
     * const habit = await prisma.habit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitUpdateArgs>(args: SelectSubset<T, HabitUpdateArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitDeleteManyArgs>(args?: SelectSubset<T, HabitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitUpdateManyArgs>(args: SelectSubset<T, HabitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habit = await prisma.habit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitWithIdOnly = await prisma.habit.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabitUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit.
     * @param {HabitUpsertArgs} args - Arguments to update or create a Habit.
     * @example
     * // Update or create a Habit
     * const habit = await prisma.habit.upsert({
     *   create: {
     *     // ... data to create a Habit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit we want to update
     *   }
     * })
     */
    upsert<T extends HabitUpsertArgs>(args: SelectSubset<T, HabitUpsertArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habit.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitCountArgs>(
      args?: Subset<T, HabitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitAggregateArgs>(args: Subset<T, HabitAggregateArgs>): Prisma.PrismaPromise<GetHabitAggregateType<T>>

    /**
     * Group by Habit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitGroupByArgs} args - Group by arguments.
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
      T extends HabitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitGroupByArgs['orderBy'] }
        : { orderBy?: HabitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit model
   */
  readonly fields: HabitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends Habit$logsArgs<ExtArgs> = {}>(args?: Subset<T, Habit$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Habit model
   */
  interface HabitFieldRefs {
    readonly id: FieldRef<"Habit", 'String'>
    readonly userId: FieldRef<"Habit", 'String'>
    readonly title: FieldRef<"Habit", 'String'>
    readonly subtitle: FieldRef<"Habit", 'String'>
    readonly iconName: FieldRef<"Habit", 'String'>
    readonly color: FieldRef<"Habit", 'String'>
    readonly frequency: FieldRef<"Habit", 'String'>
    readonly target: FieldRef<"Habit", 'String'>
    readonly time: FieldRef<"Habit", 'String'>
    readonly location: FieldRef<"Habit", 'String'>
    readonly stackingCue: FieldRef<"Habit", 'String'>
    readonly streak: FieldRef<"Habit", 'Int'>
    readonly isCompleted: FieldRef<"Habit", 'Boolean'>
    readonly lastCompletedDate: FieldRef<"Habit", 'DateTime'>
    readonly repeatDays: FieldRef<"Habit", 'String[]'>
    readonly createdAt: FieldRef<"Habit", 'DateTime'>
    readonly updatedAt: FieldRef<"Habit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Habit findUnique
   */
  export type HabitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findUniqueOrThrow
   */
  export type HabitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit findFirst
   */
  export type HabitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findFirstOrThrow
   */
  export type HabitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habit to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit findMany
   */
  export type HabitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitOrderByWithRelationInput | HabitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    distinct?: HabitScalarFieldEnum | HabitScalarFieldEnum[]
  }

  /**
   * Habit create
   */
  export type HabitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit.
     */
    data: XOR<HabitCreateInput, HabitUncheckedCreateInput>
  }

  /**
   * Habit createMany
   */
  export type HabitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit createManyAndReturn
   */
  export type HabitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitCreateManyInput | HabitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit update
   */
  export type HabitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit.
     */
    data: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
    /**
     * Choose, which Habit to update.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit updateMany
   */
  export type HabitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habit updateManyAndReturn
   */
  export type HabitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit upsert
   */
  export type HabitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit to update in case it exists.
     */
    where: HabitWhereUniqueInput
    /**
     * In case the Habit found by the `where` argument doesn't exist, create a new Habit with this data.
     */
    create: XOR<HabitCreateInput, HabitUncheckedCreateInput>
    /**
     * In case the Habit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitUpdateInput, HabitUncheckedUpdateInput>
  }

  /**
   * Habit delete
   */
  export type HabitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
    /**
     * Filter which Habit to delete.
     */
    where: HabitWhereUniqueInput
  }

  /**
   * Habit deleteMany
   */
  export type HabitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habit.logs
   */
  export type Habit$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    cursor?: HabitLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * Habit without action
   */
  export type HabitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit
     */
    select?: HabitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit
     */
    omit?: HabitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitInclude<ExtArgs> | null
  }


  /**
   * Model HabitLog
   */

  export type AggregateHabitLog = {
    _count: HabitLogCountAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  export type HabitLogMinAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: Date | null
    isCompleted: boolean | null
    createdAt: Date | null
  }

  export type HabitLogMaxAggregateOutputType = {
    id: string | null
    habitId: string | null
    date: Date | null
    isCompleted: boolean | null
    createdAt: Date | null
  }

  export type HabitLogCountAggregateOutputType = {
    id: number
    habitId: number
    date: number
    isCompleted: number
    createdAt: number
    _all: number
  }


  export type HabitLogMinAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    isCompleted?: true
    createdAt?: true
  }

  export type HabitLogMaxAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    isCompleted?: true
    createdAt?: true
  }

  export type HabitLogCountAggregateInputType = {
    id?: true
    habitId?: true
    date?: true
    isCompleted?: true
    createdAt?: true
    _all?: true
  }

  export type HabitLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLog to aggregate.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HabitLogs
    **/
    _count?: true | HabitLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitLogMaxAggregateInputType
  }

  export type GetHabitLogAggregateType<T extends HabitLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitLog[P]>
      : GetScalarType<T[P], AggregateHabitLog[P]>
  }




  export type HabitLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitLogWhereInput
    orderBy?: HabitLogOrderByWithAggregationInput | HabitLogOrderByWithAggregationInput[]
    by: HabitLogScalarFieldEnum[] | HabitLogScalarFieldEnum
    having?: HabitLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitLogCountAggregateInputType | true
    _min?: HabitLogMinAggregateInputType
    _max?: HabitLogMaxAggregateInputType
  }

  export type HabitLogGroupByOutputType = {
    id: string
    habitId: string
    date: Date
    isCompleted: boolean
    createdAt: Date
    _count: HabitLogCountAggregateOutputType | null
    _min: HabitLogMinAggregateOutputType | null
    _max: HabitLogMaxAggregateOutputType | null
  }

  type GetHabitLogGroupByPayload<T extends HabitLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
            : GetScalarType<T[P], HabitLogGroupByOutputType[P]>
        }
      >
    >


  export type HabitLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    habitId?: boolean
    date?: boolean
    isCompleted?: boolean
    createdAt?: boolean
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitLog"]>

  export type HabitLogSelectScalar = {
    id?: boolean
    habitId?: boolean
    date?: boolean
    isCompleted?: boolean
    createdAt?: boolean
  }

  export type HabitLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "habitId" | "date" | "isCompleted" | "createdAt", ExtArgs["result"]["habitLog"]>
  export type HabitLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }
  export type HabitLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habit?: boolean | HabitDefaultArgs<ExtArgs>
  }

  export type $HabitLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HabitLog"
    objects: {
      habit: Prisma.$HabitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      habitId: string
      date: Date
      isCompleted: boolean
      createdAt: Date
    }, ExtArgs["result"]["habitLog"]>
    composites: {}
  }

  type HabitLogGetPayload<S extends boolean | null | undefined | HabitLogDefaultArgs> = $Result.GetResult<Prisma.$HabitLogPayload, S>

  type HabitLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitLogCountAggregateInputType | true
    }

  export interface HabitLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HabitLog'], meta: { name: 'HabitLog' } }
    /**
     * Find zero or one HabitLog that matches the filter.
     * @param {HabitLogFindUniqueArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitLogFindUniqueArgs>(args: SelectSubset<T, HabitLogFindUniqueArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HabitLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitLogFindUniqueOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitLogFindFirstArgs>(args?: SelectSubset<T, HabitLogFindFirstArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HabitLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindFirstOrThrowArgs} args - Arguments to find a HabitLog
     * @example
     * // Get one HabitLog
     * const habitLog = await prisma.habitLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HabitLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HabitLogs
     * const habitLogs = await prisma.habitLog.findMany()
     * 
     * // Get first 10 HabitLogs
     * const habitLogs = await prisma.habitLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitLogFindManyArgs>(args?: SelectSubset<T, HabitLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HabitLog.
     * @param {HabitLogCreateArgs} args - Arguments to create a HabitLog.
     * @example
     * // Create one HabitLog
     * const HabitLog = await prisma.habitLog.create({
     *   data: {
     *     // ... data to create a HabitLog
     *   }
     * })
     * 
     */
    create<T extends HabitLogCreateArgs>(args: SelectSubset<T, HabitLogCreateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HabitLogs.
     * @param {HabitLogCreateManyArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitLogCreateManyArgs>(args?: SelectSubset<T, HabitLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HabitLogs and returns the data saved in the database.
     * @param {HabitLogCreateManyAndReturnArgs} args - Arguments to create many HabitLogs.
     * @example
     * // Create many HabitLogs
     * const habitLog = await prisma.habitLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HabitLog.
     * @param {HabitLogDeleteArgs} args - Arguments to delete one HabitLog.
     * @example
     * // Delete one HabitLog
     * const HabitLog = await prisma.habitLog.delete({
     *   where: {
     *     // ... filter to delete one HabitLog
     *   }
     * })
     * 
     */
    delete<T extends HabitLogDeleteArgs>(args: SelectSubset<T, HabitLogDeleteArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HabitLog.
     * @param {HabitLogUpdateArgs} args - Arguments to update one HabitLog.
     * @example
     * // Update one HabitLog
     * const habitLog = await prisma.habitLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitLogUpdateArgs>(args: SelectSubset<T, HabitLogUpdateArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HabitLogs.
     * @param {HabitLogDeleteManyArgs} args - Arguments to filter HabitLogs to delete.
     * @example
     * // Delete a few HabitLogs
     * const { count } = await prisma.habitLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitLogDeleteManyArgs>(args?: SelectSubset<T, HabitLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitLogUpdateManyArgs>(args: SelectSubset<T, HabitLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HabitLogs and returns the data updated in the database.
     * @param {HabitLogUpdateManyAndReturnArgs} args - Arguments to update many HabitLogs.
     * @example
     * // Update many HabitLogs
     * const habitLog = await prisma.habitLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HabitLogs and only return the `id`
     * const habitLogWithIdOnly = await prisma.habitLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends HabitLogUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HabitLog.
     * @param {HabitLogUpsertArgs} args - Arguments to update or create a HabitLog.
     * @example
     * // Update or create a HabitLog
     * const habitLog = await prisma.habitLog.upsert({
     *   create: {
     *     // ... data to create a HabitLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HabitLog we want to update
     *   }
     * })
     */
    upsert<T extends HabitLogUpsertArgs>(args: SelectSubset<T, HabitLogUpsertArgs<ExtArgs>>): Prisma__HabitLogClient<$Result.GetResult<Prisma.$HabitLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HabitLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogCountArgs} args - Arguments to filter HabitLogs to count.
     * @example
     * // Count the number of HabitLogs
     * const count = await prisma.habitLog.count({
     *   where: {
     *     // ... the filter for the HabitLogs we want to count
     *   }
     * })
    **/
    count<T extends HabitLogCountArgs>(
      args?: Subset<T, HabitLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HabitLogAggregateArgs>(args: Subset<T, HabitLogAggregateArgs>): Prisma.PrismaPromise<GetHabitLogAggregateType<T>>

    /**
     * Group by HabitLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitLogGroupByArgs} args - Group by arguments.
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
      T extends HabitLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitLogGroupByArgs['orderBy'] }
        : { orderBy?: HabitLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HabitLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HabitLog model
   */
  readonly fields: HabitLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HabitLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habit<T extends HabitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitDefaultArgs<ExtArgs>>): Prisma__HabitClient<$Result.GetResult<Prisma.$HabitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HabitLog model
   */
  interface HabitLogFieldRefs {
    readonly id: FieldRef<"HabitLog", 'String'>
    readonly habitId: FieldRef<"HabitLog", 'String'>
    readonly date: FieldRef<"HabitLog", 'DateTime'>
    readonly isCompleted: FieldRef<"HabitLog", 'Boolean'>
    readonly createdAt: FieldRef<"HabitLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HabitLog findUnique
   */
  export type HabitLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findUniqueOrThrow
   */
  export type HabitLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog findFirst
   */
  export type HabitLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findFirstOrThrow
   */
  export type HabitLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLog to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HabitLogs.
     */
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog findMany
   */
  export type HabitLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter, which HabitLogs to fetch.
     */
    where?: HabitLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HabitLogs to fetch.
     */
    orderBy?: HabitLogOrderByWithRelationInput | HabitLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HabitLogs.
     */
    cursor?: HabitLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HabitLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HabitLogs.
     */
    skip?: number
    distinct?: HabitLogScalarFieldEnum | HabitLogScalarFieldEnum[]
  }

  /**
   * HabitLog create
   */
  export type HabitLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to create a HabitLog.
     */
    data: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
  }

  /**
   * HabitLog createMany
   */
  export type HabitLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HabitLog createManyAndReturn
   */
  export type HabitLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to create many HabitLogs.
     */
    data: HabitLogCreateManyInput | HabitLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog update
   */
  export type HabitLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The data needed to update a HabitLog.
     */
    data: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
    /**
     * Choose, which HabitLog to update.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog updateMany
   */
  export type HabitLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
  }

  /**
   * HabitLog updateManyAndReturn
   */
  export type HabitLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * The data used to update HabitLogs.
     */
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyInput>
    /**
     * Filter which HabitLogs to update
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HabitLog upsert
   */
  export type HabitLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * The filter to search for the HabitLog to update in case it exists.
     */
    where: HabitLogWhereUniqueInput
    /**
     * In case the HabitLog found by the `where` argument doesn't exist, create a new HabitLog with this data.
     */
    create: XOR<HabitLogCreateInput, HabitLogUncheckedCreateInput>
    /**
     * In case the HabitLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitLogUpdateInput, HabitLogUncheckedUpdateInput>
  }

  /**
   * HabitLog delete
   */
  export type HabitLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
    /**
     * Filter which HabitLog to delete.
     */
    where: HabitLogWhereUniqueInput
  }

  /**
   * HabitLog deleteMany
   */
  export type HabitLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HabitLogs to delete
     */
    where?: HabitLogWhereInput
    /**
     * Limit how many HabitLogs to delete.
     */
    limit?: number
  }

  /**
   * HabitLog without action
   */
  export type HabitLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitLog
     */
    select?: HabitLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HabitLog
     */
    omit?: HabitLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitLogInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    category: string | null
    subject: string | null
    message: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    category: number
    subject: number
    message: number
    createdAt: number
    _all: number
  }


  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    subject?: true
    message?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    category?: true
    subject?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    userId: string
    category: string
    subject: string
    message: string
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    category?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    category?: boolean
    subject?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "category" | "subject" | "message" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      category: string
      subject: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
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
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly userId: FieldRef<"Feedback", 'String'>
    readonly category: FieldRef<"Feedback", 'String'>
    readonly subject: FieldRef<"Feedback", 'String'>
    readonly message: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    profilePhoto: 'profilePhoto',
    subscriptionLabel: 'subscriptionLabel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OnboardingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    goal: 'goal',
    focusAreas: 'focusAreas',
    createdAt: 'createdAt'
  };

  export type OnboardingScalarFieldEnum = (typeof OnboardingScalarFieldEnum)[keyof typeof OnboardingScalarFieldEnum]


  export const HabitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    subtitle: 'subtitle',
    iconName: 'iconName',
    color: 'color',
    frequency: 'frequency',
    target: 'target',
    time: 'time',
    location: 'location',
    stackingCue: 'stackingCue',
    streak: 'streak',
    isCompleted: 'isCompleted',
    lastCompletedDate: 'lastCompletedDate',
    repeatDays: 'repeatDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HabitScalarFieldEnum = (typeof HabitScalarFieldEnum)[keyof typeof HabitScalarFieldEnum]


  export const HabitLogScalarFieldEnum: {
    id: 'id',
    habitId: 'habitId',
    date: 'date',
    isCompleted: 'isCompleted',
    createdAt: 'createdAt'
  };

  export type HabitLogScalarFieldEnum = (typeof HabitLogScalarFieldEnum)[keyof typeof HabitLogScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    category: 'category',
    subject: 'subject',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'SubscriptionLabel'
   */
  export type EnumSubscriptionLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionLabel'>
    


  /**
   * Reference to a field of type 'SubscriptionLabel[]'
   */
  export type ListEnumSubscriptionLabelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionLabel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    profilePhoto?: StringNullableFilter<"User"> | string | null
    subscriptionLabel?: EnumSubscriptionLabelFilter<"User"> | $Enums.SubscriptionLabel
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    onboarding?: XOR<OnboardingNullableScalarRelationFilter, OnboardingWhereInput> | null
    habits?: HabitListRelationFilter
    feedback?: FeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    subscriptionLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    onboarding?: OnboardingOrderByWithRelationInput
    habits?: HabitOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    profilePhoto?: StringNullableFilter<"User"> | string | null
    subscriptionLabel?: EnumSubscriptionLabelFilter<"User"> | $Enums.SubscriptionLabel
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    onboarding?: XOR<OnboardingNullableScalarRelationFilter, OnboardingWhereInput> | null
    habits?: HabitListRelationFilter
    feedback?: FeedbackListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    subscriptionLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscriptionLabel?: EnumSubscriptionLabelWithAggregatesFilter<"User"> | $Enums.SubscriptionLabel
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OnboardingWhereInput = {
    AND?: OnboardingWhereInput | OnboardingWhereInput[]
    OR?: OnboardingWhereInput[]
    NOT?: OnboardingWhereInput | OnboardingWhereInput[]
    id?: StringFilter<"Onboarding"> | string
    userId?: StringFilter<"Onboarding"> | string
    goal?: StringFilter<"Onboarding"> | string
    focusAreas?: StringNullableListFilter<"Onboarding">
    createdAt?: DateTimeFilter<"Onboarding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OnboardingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    focusAreas?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OnboardingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: OnboardingWhereInput | OnboardingWhereInput[]
    OR?: OnboardingWhereInput[]
    NOT?: OnboardingWhereInput | OnboardingWhereInput[]
    goal?: StringFilter<"Onboarding"> | string
    focusAreas?: StringNullableListFilter<"Onboarding">
    createdAt?: DateTimeFilter<"Onboarding"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type OnboardingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    focusAreas?: SortOrder
    createdAt?: SortOrder
    _count?: OnboardingCountOrderByAggregateInput
    _max?: OnboardingMaxOrderByAggregateInput
    _min?: OnboardingMinOrderByAggregateInput
  }

  export type OnboardingScalarWhereWithAggregatesInput = {
    AND?: OnboardingScalarWhereWithAggregatesInput | OnboardingScalarWhereWithAggregatesInput[]
    OR?: OnboardingScalarWhereWithAggregatesInput[]
    NOT?: OnboardingScalarWhereWithAggregatesInput | OnboardingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Onboarding"> | string
    userId?: StringWithAggregatesFilter<"Onboarding"> | string
    goal?: StringWithAggregatesFilter<"Onboarding"> | string
    focusAreas?: StringNullableListFilter<"Onboarding">
    createdAt?: DateTimeWithAggregatesFilter<"Onboarding"> | Date | string
  }

  export type HabitWhereInput = {
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    id?: StringFilter<"Habit"> | string
    userId?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    subtitle?: StringNullableFilter<"Habit"> | string | null
    iconName?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    frequency?: StringFilter<"Habit"> | string
    target?: StringNullableFilter<"Habit"> | string | null
    time?: StringNullableFilter<"Habit"> | string | null
    location?: StringNullableFilter<"Habit"> | string | null
    stackingCue?: StringNullableFilter<"Habit"> | string | null
    streak?: IntFilter<"Habit"> | number
    isCompleted?: BoolFilter<"Habit"> | boolean
    lastCompletedDate?: DateTimeNullableFilter<"Habit"> | Date | string | null
    repeatDays?: StringNullableListFilter<"Habit">
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    logs?: HabitLogListRelationFilter
  }

  export type HabitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    iconName?: SortOrder
    color?: SortOrder
    frequency?: SortOrder
    target?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    stackingCue?: SortOrderInput | SortOrder
    streak?: SortOrder
    isCompleted?: SortOrder
    lastCompletedDate?: SortOrderInput | SortOrder
    repeatDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    logs?: HabitLogOrderByRelationAggregateInput
  }

  export type HabitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitWhereInput | HabitWhereInput[]
    OR?: HabitWhereInput[]
    NOT?: HabitWhereInput | HabitWhereInput[]
    userId?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    subtitle?: StringNullableFilter<"Habit"> | string | null
    iconName?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    frequency?: StringFilter<"Habit"> | string
    target?: StringNullableFilter<"Habit"> | string | null
    time?: StringNullableFilter<"Habit"> | string | null
    location?: StringNullableFilter<"Habit"> | string | null
    stackingCue?: StringNullableFilter<"Habit"> | string | null
    streak?: IntFilter<"Habit"> | number
    isCompleted?: BoolFilter<"Habit"> | boolean
    lastCompletedDate?: DateTimeNullableFilter<"Habit"> | Date | string | null
    repeatDays?: StringNullableListFilter<"Habit">
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    logs?: HabitLogListRelationFilter
  }, "id">

  export type HabitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    iconName?: SortOrder
    color?: SortOrder
    frequency?: SortOrder
    target?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    stackingCue?: SortOrderInput | SortOrder
    streak?: SortOrder
    isCompleted?: SortOrder
    lastCompletedDate?: SortOrderInput | SortOrder
    repeatDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HabitCountOrderByAggregateInput
    _avg?: HabitAvgOrderByAggregateInput
    _max?: HabitMaxOrderByAggregateInput
    _min?: HabitMinOrderByAggregateInput
    _sum?: HabitSumOrderByAggregateInput
  }

  export type HabitScalarWhereWithAggregatesInput = {
    AND?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    OR?: HabitScalarWhereWithAggregatesInput[]
    NOT?: HabitScalarWhereWithAggregatesInput | HabitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Habit"> | string
    userId?: StringWithAggregatesFilter<"Habit"> | string
    title?: StringWithAggregatesFilter<"Habit"> | string
    subtitle?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    iconName?: StringWithAggregatesFilter<"Habit"> | string
    color?: StringWithAggregatesFilter<"Habit"> | string
    frequency?: StringWithAggregatesFilter<"Habit"> | string
    target?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    time?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    location?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    stackingCue?: StringNullableWithAggregatesFilter<"Habit"> | string | null
    streak?: IntWithAggregatesFilter<"Habit"> | number
    isCompleted?: BoolWithAggregatesFilter<"Habit"> | boolean
    lastCompletedDate?: DateTimeNullableWithAggregatesFilter<"Habit"> | Date | string | null
    repeatDays?: StringNullableListFilter<"Habit">
    createdAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Habit"> | Date | string
  }

  export type HabitLogWhereInput = {
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    habitId?: StringFilter<"HabitLog"> | string
    date?: DateTimeFilter<"HabitLog"> | Date | string
    isCompleted?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }

  export type HabitLogOrderByWithRelationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    habit?: HabitOrderByWithRelationInput
  }

  export type HabitLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HabitLogWhereInput | HabitLogWhereInput[]
    OR?: HabitLogWhereInput[]
    NOT?: HabitLogWhereInput | HabitLogWhereInput[]
    habitId?: StringFilter<"HabitLog"> | string
    date?: DateTimeFilter<"HabitLog"> | Date | string
    isCompleted?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
    habit?: XOR<HabitScalarRelationFilter, HabitWhereInput>
  }, "id">

  export type HabitLogOrderByWithAggregationInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
    _count?: HabitLogCountOrderByAggregateInput
    _max?: HabitLogMaxOrderByAggregateInput
    _min?: HabitLogMinOrderByAggregateInput
  }

  export type HabitLogScalarWhereWithAggregatesInput = {
    AND?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    OR?: HabitLogScalarWhereWithAggregatesInput[]
    NOT?: HabitLogScalarWhereWithAggregatesInput | HabitLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HabitLog"> | string
    habitId?: StringWithAggregatesFilter<"HabitLog"> | string
    date?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"HabitLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HabitLog"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    category?: StringFilter<"Feedback"> | string
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: StringFilter<"Feedback"> | string
    category?: StringFilter<"Feedback"> | string
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    userId?: StringWithAggregatesFilter<"Feedback"> | string
    category?: StringWithAggregatesFilter<"Feedback"> | string
    subject?: StringWithAggregatesFilter<"Feedback"> | string
    message?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarding?: OnboardingCreateNestedOneWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarding?: OnboardingUncheckedCreateNestedOneWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding?: OnboardingUpdateOneWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding?: OnboardingUncheckedUpdateOneWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingCreateInput = {
    id?: string
    goal: string
    focusAreas?: OnboardingCreatefocusAreasInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOnboardingInput
  }

  export type OnboardingUncheckedCreateInput = {
    id?: string
    userId: string
    goal: string
    focusAreas?: OnboardingCreatefocusAreasInput | string[]
    createdAt?: Date | string
  }

  export type OnboardingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    focusAreas?: OnboardingUpdatefocusAreasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnboardingNestedInput
  }

  export type OnboardingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    focusAreas?: OnboardingUpdatefocusAreasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingCreateManyInput = {
    id?: string
    userId: string
    goal: string
    focusAreas?: OnboardingCreatefocusAreasInput | string[]
    createdAt?: Date | string
  }

  export type OnboardingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    focusAreas?: OnboardingUpdatefocusAreasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    focusAreas?: OnboardingUpdatefocusAreasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitCreateInput = {
    id?: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
    logs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
    logs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitCreateManyInput = {
    id?: string
    userId: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateInput = {
    id?: string
    date: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
    habit: HabitCreateNestedOneWithoutLogsInput
  }

  export type HabitLogUncheckedCreateInput = {
    id?: string
    habitId: string
    date: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habit?: HabitUpdateOneRequiredWithoutLogsNestedInput
  }

  export type HabitLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyInput = {
    id?: string
    habitId: string
    date: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    habitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    category: string
    subject: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    category: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    userId: string
    category: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumSubscriptionLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLabel | EnumSubscriptionLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLabelFilter<$PrismaModel> | $Enums.SubscriptionLabel
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

  export type OnboardingNullableScalarRelationFilter = {
    is?: OnboardingWhereInput | null
    isNot?: OnboardingWhereInput | null
  }

  export type HabitListRelationFilter = {
    every?: HabitWhereInput
    some?: HabitWhereInput
    none?: HabitWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HabitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    subscriptionLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    subscriptionLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    profilePhoto?: SortOrder
    subscriptionLabel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumSubscriptionLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLabel | EnumSubscriptionLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLabelWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionLabelFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionLabelFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OnboardingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    focusAreas?: SortOrder
    createdAt?: SortOrder
  }

  export type OnboardingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
  }

  export type OnboardingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    goal?: SortOrder
    createdAt?: SortOrder
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

  export type HabitLogListRelationFilter = {
    every?: HabitLogWhereInput
    some?: HabitLogWhereInput
    none?: HabitLogWhereInput
  }

  export type HabitLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    iconName?: SortOrder
    color?: SortOrder
    frequency?: SortOrder
    target?: SortOrder
    time?: SortOrder
    location?: SortOrder
    stackingCue?: SortOrder
    streak?: SortOrder
    isCompleted?: SortOrder
    lastCompletedDate?: SortOrder
    repeatDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitAvgOrderByAggregateInput = {
    streak?: SortOrder
  }

  export type HabitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    iconName?: SortOrder
    color?: SortOrder
    frequency?: SortOrder
    target?: SortOrder
    time?: SortOrder
    location?: SortOrder
    stackingCue?: SortOrder
    streak?: SortOrder
    isCompleted?: SortOrder
    lastCompletedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    iconName?: SortOrder
    color?: SortOrder
    frequency?: SortOrder
    target?: SortOrder
    time?: SortOrder
    location?: SortOrder
    stackingCue?: SortOrder
    streak?: SortOrder
    isCompleted?: SortOrder
    lastCompletedDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HabitSumOrderByAggregateInput = {
    streak?: SortOrder
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

  export type HabitScalarRelationFilter = {
    is?: HabitWhereInput
    isNot?: HabitWhereInput
  }

  export type HabitLogCountOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogMaxOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
  }

  export type HabitLogMinOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
    date?: SortOrder
    isCompleted?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    category?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type OnboardingCreateNestedOneWithoutUserInput = {
    create?: XOR<OnboardingCreateWithoutUserInput, OnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingCreateOrConnectWithoutUserInput
    connect?: OnboardingWhereUniqueInput
  }

  export type HabitCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type OnboardingUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<OnboardingCreateWithoutUserInput, OnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingCreateOrConnectWithoutUserInput
    connect?: OnboardingWhereUniqueInput
  }

  export type HabitUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumSubscriptionLabelFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionLabel
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OnboardingUpdateOneWithoutUserNestedInput = {
    create?: XOR<OnboardingCreateWithoutUserInput, OnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingCreateOrConnectWithoutUserInput
    upsert?: OnboardingUpsertWithoutUserInput
    disconnect?: OnboardingWhereInput | boolean
    delete?: OnboardingWhereInput | boolean
    connect?: OnboardingWhereUniqueInput
    update?: XOR<XOR<OnboardingUpdateToOneWithWhereWithoutUserInput, OnboardingUpdateWithoutUserInput>, OnboardingUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type OnboardingUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<OnboardingCreateWithoutUserInput, OnboardingUncheckedCreateWithoutUserInput>
    connectOrCreate?: OnboardingCreateOrConnectWithoutUserInput
    upsert?: OnboardingUpsertWithoutUserInput
    disconnect?: OnboardingWhereInput | boolean
    delete?: OnboardingWhereInput | boolean
    connect?: OnboardingWhereUniqueInput
    update?: XOR<XOR<OnboardingUpdateToOneWithWhereWithoutUserInput, OnboardingUpdateWithoutUserInput>, OnboardingUncheckedUpdateWithoutUserInput>
  }

  export type HabitUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput> | HabitCreateWithoutUserInput[] | HabitUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HabitCreateOrConnectWithoutUserInput | HabitCreateOrConnectWithoutUserInput[]
    upsert?: HabitUpsertWithWhereUniqueWithoutUserInput | HabitUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HabitCreateManyUserInputEnvelope
    set?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    disconnect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    delete?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    connect?: HabitWhereUniqueInput | HabitWhereUniqueInput[]
    update?: HabitUpdateWithWhereUniqueWithoutUserInput | HabitUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HabitUpdateManyWithWhereWithoutUserInput | HabitUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HabitScalarWhereInput | HabitScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type OnboardingCreatefocusAreasInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutOnboardingInput = {
    create?: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardingInput
    connect?: UserWhereUniqueInput
  }

  export type OnboardingUpdatefocusAreasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutOnboardingNestedInput = {
    create?: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnboardingInput
    upsert?: UserUpsertWithoutOnboardingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnboardingInput, UserUpdateWithoutOnboardingInput>, UserUncheckedUpdateWithoutOnboardingInput>
  }

  export type HabitCreaterepeatDaysInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitLogCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type HabitLogUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type HabitUpdaterepeatDaysInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type HabitLogUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput> | HabitLogCreateWithoutHabitInput[] | HabitLogUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: HabitLogCreateOrConnectWithoutHabitInput | HabitLogCreateOrConnectWithoutHabitInput[]
    upsert?: HabitLogUpsertWithWhereUniqueWithoutHabitInput | HabitLogUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: HabitLogCreateManyHabitInputEnvelope
    set?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    disconnect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    delete?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    connect?: HabitLogWhereUniqueInput | HabitLogWhereUniqueInput[]
    update?: HabitLogUpdateWithWhereUniqueWithoutHabitInput | HabitLogUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: HabitLogUpdateManyWithWhereWithoutHabitInput | HabitLogUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
  }

  export type HabitCreateNestedOneWithoutLogsInput = {
    create?: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutLogsInput
    connect?: HabitWhereUniqueInput
  }

  export type HabitUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitCreateOrConnectWithoutLogsInput
    upsert?: HabitUpsertWithoutLogsInput
    connect?: HabitWhereUniqueInput
    update?: XOR<XOR<HabitUpdateToOneWithWhereWithoutLogsInput, HabitUpdateWithoutLogsInput>, HabitUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
    upsert?: UserUpsertWithoutFeedbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbackInput, UserUpdateWithoutFeedbackInput>, UserUncheckedUpdateWithoutFeedbackInput>
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

  export type NestedEnumSubscriptionLabelFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLabel | EnumSubscriptionLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLabelFilter<$PrismaModel> | $Enums.SubscriptionLabel
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

  export type NestedEnumSubscriptionLabelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionLabel | EnumSubscriptionLabelFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionLabel[] | ListEnumSubscriptionLabelFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionLabelWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionLabel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionLabelFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionLabelFilter<$PrismaModel>
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

  export type OnboardingCreateWithoutUserInput = {
    id?: string
    goal: string
    focusAreas?: OnboardingCreatefocusAreasInput | string[]
    createdAt?: Date | string
  }

  export type OnboardingUncheckedCreateWithoutUserInput = {
    id?: string
    goal: string
    focusAreas?: OnboardingCreatefocusAreasInput | string[]
    createdAt?: Date | string
  }

  export type OnboardingCreateOrConnectWithoutUserInput = {
    where: OnboardingWhereUniqueInput
    create: XOR<OnboardingCreateWithoutUserInput, OnboardingUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateWithoutUserInput = {
    id?: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HabitLogCreateNestedManyWithoutHabitInput
  }

  export type HabitUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    logs?: HabitLogUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitCreateOrConnectWithoutUserInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitCreateManyUserInputEnvelope = {
    data: HabitCreateManyUserInput | HabitCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    id?: string
    category: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: string
    category: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OnboardingUpsertWithoutUserInput = {
    update: XOR<OnboardingUpdateWithoutUserInput, OnboardingUncheckedUpdateWithoutUserInput>
    create: XOR<OnboardingCreateWithoutUserInput, OnboardingUncheckedCreateWithoutUserInput>
    where?: OnboardingWhereInput
  }

  export type OnboardingUpdateToOneWithWhereWithoutUserInput = {
    where?: OnboardingWhereInput
    data: XOR<OnboardingUpdateWithoutUserInput, OnboardingUncheckedUpdateWithoutUserInput>
  }

  export type OnboardingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    focusAreas?: OnboardingUpdatefocusAreasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OnboardingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    focusAreas?: OnboardingUpdatefocusAreasInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitUpsertWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    update: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
    create: XOR<HabitCreateWithoutUserInput, HabitUncheckedCreateWithoutUserInput>
  }

  export type HabitUpdateWithWhereUniqueWithoutUserInput = {
    where: HabitWhereUniqueInput
    data: XOR<HabitUpdateWithoutUserInput, HabitUncheckedUpdateWithoutUserInput>
  }

  export type HabitUpdateManyWithWhereWithoutUserInput = {
    where: HabitScalarWhereInput
    data: XOR<HabitUpdateManyMutationInput, HabitUncheckedUpdateManyWithoutUserInput>
  }

  export type HabitScalarWhereInput = {
    AND?: HabitScalarWhereInput | HabitScalarWhereInput[]
    OR?: HabitScalarWhereInput[]
    NOT?: HabitScalarWhereInput | HabitScalarWhereInput[]
    id?: StringFilter<"Habit"> | string
    userId?: StringFilter<"Habit"> | string
    title?: StringFilter<"Habit"> | string
    subtitle?: StringNullableFilter<"Habit"> | string | null
    iconName?: StringFilter<"Habit"> | string
    color?: StringFilter<"Habit"> | string
    frequency?: StringFilter<"Habit"> | string
    target?: StringNullableFilter<"Habit"> | string | null
    time?: StringNullableFilter<"Habit"> | string | null
    location?: StringNullableFilter<"Habit"> | string | null
    stackingCue?: StringNullableFilter<"Habit"> | string | null
    streak?: IntFilter<"Habit"> | number
    isCompleted?: BoolFilter<"Habit"> | boolean
    lastCompletedDate?: DateTimeNullableFilter<"Habit"> | Date | string | null
    repeatDays?: StringNullableListFilter<"Habit">
    createdAt?: DateTimeFilter<"Habit"> | Date | string
    updatedAt?: DateTimeFilter<"Habit"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    category?: StringFilter<"Feedback"> | string
    subject?: StringFilter<"Feedback"> | string
    message?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type UserCreateWithoutOnboardingInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitCreateNestedManyWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOnboardingInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOnboardingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
  }

  export type UserUpsertWithoutOnboardingInput = {
    update: XOR<UserUpdateWithoutOnboardingInput, UserUncheckedUpdateWithoutOnboardingInput>
    create: XOR<UserCreateWithoutOnboardingInput, UserUncheckedCreateWithoutOnboardingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnboardingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnboardingInput, UserUncheckedUpdateWithoutOnboardingInput>
  }

  export type UserUpdateWithoutOnboardingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOnboardingInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHabitsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarding?: OnboardingCreateNestedOneWithoutUserInput
    feedback?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarding?: OnboardingUncheckedCreateNestedOneWithoutUserInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type HabitLogCreateWithoutHabitInput = {
    id?: string
    date: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUncheckedCreateWithoutHabitInput = {
    id?: string
    date: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type HabitLogCreateOrConnectWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogCreateManyHabitInputEnvelope = {
    data: HabitLogCreateManyHabitInput | HabitLogCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding?: OnboardingUpdateOneWithoutUserNestedInput
    feedback?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding?: OnboardingUncheckedUpdateOneWithoutUserNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitLogUpsertWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    update: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
    create: XOR<HabitLogCreateWithoutHabitInput, HabitLogUncheckedCreateWithoutHabitInput>
  }

  export type HabitLogUpdateWithWhereUniqueWithoutHabitInput = {
    where: HabitLogWhereUniqueInput
    data: XOR<HabitLogUpdateWithoutHabitInput, HabitLogUncheckedUpdateWithoutHabitInput>
  }

  export type HabitLogUpdateManyWithWhereWithoutHabitInput = {
    where: HabitLogScalarWhereInput
    data: XOR<HabitLogUpdateManyMutationInput, HabitLogUncheckedUpdateManyWithoutHabitInput>
  }

  export type HabitLogScalarWhereInput = {
    AND?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    OR?: HabitLogScalarWhereInput[]
    NOT?: HabitLogScalarWhereInput | HabitLogScalarWhereInput[]
    id?: StringFilter<"HabitLog"> | string
    habitId?: StringFilter<"HabitLog"> | string
    date?: DateTimeFilter<"HabitLog"> | Date | string
    isCompleted?: BoolFilter<"HabitLog"> | boolean
    createdAt?: DateTimeFilter<"HabitLog"> | Date | string
  }

  export type HabitCreateWithoutLogsInput = {
    id?: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHabitsInput
  }

  export type HabitUncheckedCreateWithoutLogsInput = {
    id?: string
    userId: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HabitCreateOrConnectWithoutLogsInput = {
    where: HabitWhereUniqueInput
    create: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
  }

  export type HabitUpsertWithoutLogsInput = {
    update: XOR<HabitUpdateWithoutLogsInput, HabitUncheckedUpdateWithoutLogsInput>
    create: XOR<HabitCreateWithoutLogsInput, HabitUncheckedCreateWithoutLogsInput>
    where?: HabitWhereInput
  }

  export type HabitUpdateToOneWithWhereWithoutLogsInput = {
    where?: HabitWhereInput
    data: XOR<HabitUpdateWithoutLogsInput, HabitUncheckedUpdateWithoutLogsInput>
  }

  export type HabitUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFeedbackInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarding?: OnboardingCreateNestedOneWithoutUserInput
    habits?: HabitCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbackInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    profilePhoto?: string | null
    subscriptionLabel?: $Enums.SubscriptionLabel
    createdAt?: Date | string
    updatedAt?: Date | string
    onboarding?: OnboardingUncheckedCreateNestedOneWithoutUserInput
    habits?: HabitUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
  }

  export type UserUpsertWithoutFeedbackInput = {
    update: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
    create: XOR<UserCreateWithoutFeedbackInput, UserUncheckedCreateWithoutFeedbackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbackInput, UserUncheckedUpdateWithoutFeedbackInput>
  }

  export type UserUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding?: OnboardingUpdateOneWithoutUserNestedInput
    habits?: HabitUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionLabel?: EnumSubscriptionLabelFieldUpdateOperationsInput | $Enums.SubscriptionLabel
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    onboarding?: OnboardingUncheckedUpdateOneWithoutUserNestedInput
    habits?: HabitUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitCreateManyUserInput = {
    id?: string
    title: string
    subtitle?: string | null
    iconName?: string
    color?: string
    frequency?: string
    target?: string | null
    time?: string | null
    location?: string | null
    stackingCue?: string | null
    streak?: number
    isCompleted?: boolean
    lastCompletedDate?: Date | string | null
    repeatDays?: HabitCreaterepeatDaysInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeedbackCreateManyUserInput = {
    id?: string
    category: string
    subject: string
    message: string
    createdAt?: Date | string
  }

  export type HabitUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: HabitLogUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    iconName?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    frequency?: StringFieldUpdateOperationsInput | string
    target?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    stackingCue?: NullableStringFieldUpdateOperationsInput | string | null
    streak?: IntFieldUpdateOperationsInput | number
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    lastCompletedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repeatDays?: HabitUpdaterepeatDaysInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogCreateManyHabitInput = {
    id?: string
    date: Date | string
    isCompleted?: boolean
    createdAt?: Date | string
  }

  export type HabitLogUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitLogUncheckedUpdateManyWithoutHabitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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