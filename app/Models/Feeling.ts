import { DateTime } from 'luxon'
import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import BaseModel from 'App/Models/BaseModel'

export default class Feeling extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public positive: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships
  @manyToMany(() => User, {
    pivotTable: 'UserFeelings',
    pivotForeignKey: 'feelingId',
    pivotRelatedForeignKey: 'userId',
  })
  public users: ManyToMany<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'UserFeelingLogs',
    pivotForeignKey: 'feelingId',
    pivotRelatedForeignKey: 'userId',
  })
  public loggedByUsers: ManyToMany<typeof User>
}
