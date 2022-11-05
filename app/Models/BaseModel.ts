import { BaseModel } from '@ioc:Adonis/Lucid/Orm'

import CamelCaseNamingStrategy from 'App/Utils/CamelCaseNamingStrategy'

export default class extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()
}
