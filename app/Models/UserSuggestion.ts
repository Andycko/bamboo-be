import { DateTime } from 'luxon'
import { BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import BaseModel from 'App/Models/BaseModel'
import Suggestion from 'App/Models/Suggestion'

export default class UserSuggestion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public suggestionId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Suggestion)
  public suggestion: BelongsTo<typeof Suggestion>
}
