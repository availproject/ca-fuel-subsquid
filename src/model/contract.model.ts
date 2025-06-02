import {BigIntColumn, BytesColumn, Entity, IntColumn, PrimaryColumn, Index} from '@subsquid/typeorm-store'

// Here we define `exchange` database table as TypeORM entity class.
//
// We do that with the help of decorators from `@subsquid/typeorm-store` package.
//
// Those decorators are convenience and restrictive wrappers around decorators from `typeorm`.
//
// All restrictions are related to the fact, that `@subsquid/typeorm-store`
// supports only primitive DML operations (insert, upsert, update and delete)
// without cascading.
@Entity()
@Index(["foundAt", "contract"]) // primary lookup
export class LogEntry {
  constructor(props?: Partial<LogEntry>) {
    Object.assign(this, props)
  }

  // All entities must have single column primary key named `id`.
  @PrimaryColumn()
  id!: string

  @IntColumn({nullable: false})
  @Index()
  foundAt!: number

  @BytesColumn({nullable: false})
  contract!: Uint8Array

  @BigIntColumn({nullable: false})
  rb!: bigint

  @BytesColumn({nullable: false})
  data!: Uint8Array
}
