import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'timelines'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cronograma').primary()
      table.integer('dia_semana',255).notNullable()
      table.integer('id_ubs').unsigned().references('id_ubs').inTable('ubs').onDelete('CASCADE')

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
