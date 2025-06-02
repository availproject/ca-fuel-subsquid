module.exports = class Data1748867417201 {
    name = 'Data1748867417201'

    async up(db) {
        await db.query(`CREATE TABLE "log_entry" ("id" character varying NOT NULL, "found_at" integer NOT NULL, "contract" bytea NOT NULL, "rb" numeric NOT NULL, "data" bytea NOT NULL, CONSTRAINT "PK_45e2f8fa5e70dd60266d2f94d49" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_ebe32d13f65bec3bdda75056ce" ON "log_entry" ("found_at") `)
        await db.query(`CREATE INDEX "IDX_c5e50ce2920c601df63f5bba6c" ON "log_entry" ("found_at", "contract") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "log_entry"`)
        await db.query(`DROP INDEX "public"."IDX_ebe32d13f65bec3bdda75056ce"`)
        await db.query(`DROP INDEX "public"."IDX_c5e50ce2920c601df63f5bba6c"`)
    }
}
