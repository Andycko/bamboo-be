import { NormalizeConstructor } from '@ioc:Adonis/Core/Helpers'
import BaseModel from 'App/Models/BaseModel'
import { ModelQueryBuilderContract, scope } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

type Builder = ModelQueryBuilderContract<typeof BaseModel>

export const Deletable = <T extends NormalizeConstructor<typeof BaseModel>>(superclass: T) => {
  return class extends superclass {
    public deletedAt: DateTime | null

    public static active = scope((query: Builder) => {
      query.whereNull('deletedAt')
    })
  }
}
