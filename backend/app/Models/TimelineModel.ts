import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TimelineModel extends BaseModel {
  @column({ isPrimary: true })
  public id_cronograma: number

  @column()
  public dia_semana: string

  @column()
  public id_ubs: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
