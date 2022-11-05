import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SelectHobbiesValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    hobbyIds: schema.array().members(
      schema.string({}, [
        rules.exists({
          table: 'Hobbies',
          column: 'id',
        }),
      ])
    ),
  })

  public messages: CustomMessages = {}
}

let validator: SelectHobbiesValidator
type SelectHobbiesValidatorProps = typeof validator.schema.props

export { SelectHobbiesValidatorProps }
