import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_usuario').primary()
      table.string('email',50).unique()
      table.string('senha',30).notNullable()
      table.string('nome',30).notNullable()
      table.string('sobrenome',30).notNullable()
      table.time('data_nascimento').notNullable()
      table.string('sexo',10).notNullable()
      table.smallint('telefone')
      table.string('estado',30).notNullable()
      table.integer('cep').notNullable()
      table.string('rua').notNullable()
      table.smallint('num_casa')
      table.string('bairro',40).notNullable()
      table.string('complemento')
      table.integer('id_ubs').unsigned().references('id_ubs').inTable('ubs').onDelete('RESTRICT')

     
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
