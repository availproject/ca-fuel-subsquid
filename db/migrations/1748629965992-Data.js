module.exports = class Data1748629965992 {
    name = 'Data1748629965992'

    async up(db) {
        await db.query(`CREATE TABLE "log_entry" ("id" character varying NOT NULL, "found_at" integer NOT NULL, "contract" bytea NOT NULL, "rb" numeric NOT NULL, "data" bytea NOT NULL, CONSTRAINT "PK_45e2f8fa5e70dd60266d2f94d49" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "log_entry"`)
    }
}
