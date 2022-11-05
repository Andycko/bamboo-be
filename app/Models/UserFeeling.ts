import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Feeling from 'App/Models/Feeling'
import BaseModel from 'App/Models/BaseModel'

export default class UserFeeling extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public feelingId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Feeling)
  public feeling: BelongsTo<typeof Feeling>
}
