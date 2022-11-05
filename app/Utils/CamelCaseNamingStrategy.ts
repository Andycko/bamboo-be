import { string } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, NamingStrategyContract } from '@ioc:Adonis/Lucid/Orm'

export default class CamelCaseNamingStrategy implements NamingStrategyContract {
  public tableName(model: typeof BaseModel) {
    const name = string.camelCase(model.name)

    return string.pluralize(name.substr(0, 1).toUpperCase() + name.substr(1))
  }

  public columnName(_model: typeof BaseModel, key: string) {
    return string.camelCase(key)
  }

  public serializedName(_model: typeof BaseModel, key: string) {
    return string.camelCase(key)
  }

  public relationLocalKey(
    relation: string,
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    if (relation === 'belongsTo') {
      return relatedModel.primaryKey
    }

    return model.primaryKey
  }

  public relationForeignKey(
    relation: string,
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    if (relation === 'belongsTo') {
      return string.camelCase(`${relatedModel.name}_${relatedModel.primaryKey}`)
    }

    return string.camelCase(`${model.name}_${model.primaryKey}`)
  }

  public relationPivotTable(
    _: 'manyToMany',
    model: typeof BaseModel,
    relatedModel: typeof BaseModel
  ): string {
    return string.snakeCase([relatedModel.name, model.name].sort().join('_'))
  }

  public relationPivotForeignKey(_: 'manyToMany', model: typeof BaseModel): string {
    return string.snakeCase(`${model.name}_${model.primaryKey}`)
  }

  /**
   * Keys for the pagination meta
   */
  public paginationMetaKeys(): {
    total: string
    perPage: string
    currentPage: string
    lastPage: string
    firstPage: string
    firstPageUrl: string
    lastPageUrl: string
    nextPageUrl: string
    previousPageUrl: string
  } {
    return {
      total: 'total',
      perPage: 'perPage',
      currentPage: 'currentPage',
      lastPage: 'lastPage',
      firstPage: 'firstPage',
      firstPageUrl: 'firstPageUrl',
      lastPageUrl: 'lastPageUrl',
      nextPageUrl: 'nextPageUrl',
      previousPageUrl: 'previousPageUrl',
    }
  }
}
