import { DateTime } from 'luxon'
import { beforeSave, column, computed, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import BaseModel from 'App/Models/BaseModel'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { Deletable } from 'App/Models/Traits/Deletable'
import Feeling from 'App/Models/Feeling'
import Hobby from 'App/Models/Hobby'
import Image from 'App/Models/Images'

export default class User extends compose(BaseModel, Deletable) {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string | undefined

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime()
  public deletedAt: DateTime | null

  // Relationships
  @manyToMany(() => Feeling, {
    pivotTable: 'UserFeelings',
    pivotForeignKey: 'userId',
    pivotRelatedForeignKey: 'feelingId',
  })
  public selectedFeelings: ManyToMany<typeof Feeling>

  @manyToMany(() => Hobby, {
    pivotTable: 'UserHobbies',
    pivotForeignKey: 'userId',
    pivotRelatedForeignKey: 'hobbyId',
  })
  public hobbies: ManyToMany<typeof Hobby>

  @manyToMany(() => Image, {
    pivotTable: 'UserImages',
    pivotForeignKey: 'userId',
    pivotRelatedForeignKey: 'imageId',
  })
  public images: ManyToMany<typeof Image>

  // Computed properties
  @computed()
  public get fullName() {
    return `${this.firstName}${(' ' && this.lastName) ?? ''}`
  }

  // Functions
  @beforeSave()
  public static async hashPassword(User: User) {
    if (User.password && User.$dirty.password) {
      User.password = await Hash.make(User.password)
    }
  }
}
