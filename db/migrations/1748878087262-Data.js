module.exports = class Data1748878087262 {
  name = 'Data1748878087262'

  async up (db) {
    await db.query('ALTER TABLE "log_entry" ADD "tx_hash" bytea NOT NULL')
  }

  async down (db) {
    await db.query('ALTER TABLE "log_entry" DROP COLUMN "tx_hash"')
  }
}
