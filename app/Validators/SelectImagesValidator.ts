import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SelectImagesValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    imageIds: schema.array().members(
      schema.string({}, [
        rules.exists({
          table: 'Images',
          column: 'id',
        }),
      ])
    ),
  })

  public messages: CustomMessages = {}
}

let validator: SelectImagesValidator
type SelectImagesValidatorProps = typeof validator.schema.props

export { SelectImagesValidatorProps }
