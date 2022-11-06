import { DateTime } from 'luxon'
import { beforeSave, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
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

  @column({ serialize: (value: string) => value.split(',').map((item) => item.trim()) })
  public tags: string

  @column()
  public description: string

  @column()
  public meta: string | Record<any, any>

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

  // Functions
  @beforeSave()
  public static parseMeta(suggestion: Suggestion) {
    if (typeof suggestion.meta !== 'string') {
      suggestion.meta = JSON.stringify(suggestion.meta)
    }
  }
}
