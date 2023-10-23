import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserModel extends BaseModel {
  @column({ isPrimary: true })
  public id_usuario: number

  @column()
  public email: string
  
  @column()
  public senha: string

  @column()
  public nome: string

  @column()
  public sobrenome: string

  @column()
  public data_nascimento: DateTime

  @column()
  public sexo: string

  @column()
  public telefone: number

  @column()
  public estado: string

  @column()
  public cep: number

  @column()
  public rua: string

  @column()
  public num_casa: number

  @column()
  public bairro: string

  @column()
  public complemento: string

  @column()
  public id_ubs: number



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
