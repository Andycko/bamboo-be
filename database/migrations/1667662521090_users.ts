import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'Users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('firstName', 50).nullable()

      table.string('lastName', 50).nullable()

      table.string('email', 255).unique().notNullable()

      table.string('password', 180).nullable()

      table.string('rememberMeToken').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('createdAt', { useTz: true })

      table.timestamp('updatedAt', { useTz: true })

      table.timestamp('deletedAt', { useTz: true }).nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
