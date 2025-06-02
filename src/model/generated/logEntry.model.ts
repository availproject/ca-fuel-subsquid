import {
    Entity as Entity_,
    Column as Column_,
    PrimaryColumn as PrimaryColumn_,
    IntColumn as IntColumn_,
    BytesColumn as BytesColumn_,
    BigIntColumn as BigIntColumn_,
    Index as Index_,
    Index
} from "@subsquid/typeorm-store"

@Entity_()
@Index(["foundAt", "contract"]) // primary lookup
export class LogEntry {
    constructor(props?: Partial<LogEntry>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @IntColumn_({nullable: false})
    @Index()
    foundAt!: number

    @BytesColumn_({nullable: false})
    contract!: Uint8Array

    @BigIntColumn_({nullable: false})
    rb!: bigint

    @BytesColumn_({nullable: false})
    data!: Uint8Array
}
