import { DateTime } from 'luxon'
import { column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import BaseModel from 'App/Models/BaseModel'
import User from 'App/Models/User'
import { DriveTypes } from 'Config/drive'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public drive: typeof DriveTypes[number]

  @column()
  public url: string | null

  @column()
  public path: string | null

  @column({ serialize: (value: string) => value.split(',').map((item) => item.trim()) })
  public tags: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // Relationships
  @manyToMany(() => User, {
    pivotTable: 'UserImages',
    pivotForeignKey: 'imageId',
    pivotRelatedForeignKey: 'userId',
  })
  public users: ManyToMany<typeof User>
}
