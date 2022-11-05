import { DateTime } from 'luxon'
import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import BaseModel from 'App/Models/BaseModel'
import User from 'App/Models/User'

const SuggestionTypes = ['activity', 'excercise', 'rest', 'read', 'other'] as const
export type SuggestionType = typeof SuggestionTypes[number]

export default class Suggestion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public type: SuggestionType

  @column()
  public tags: string

  @column()
  public description: string

  @column()
  public meta: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships
  @manyToMany(() => User, {
    pivotTable: 'UserSuggestions',
    pivotForeignKey: 'suggestionId',
    pivotRelatedForeignKey: 'userId',
  })
  public users: ManyToMany<typeof User>
}
