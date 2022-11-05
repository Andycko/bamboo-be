import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogFeelingValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    feelingId: schema.string({}, [
      rules.exists({
        table: 'Feelings',
        column: 'id',
      }),
    ]),
    loggedAt: schema.date(),
  })

  public messages: CustomMessages = {}
}

let validator: LogFeelingValidator
type LogFeelingValidatorProps = typeof validator.schema.props

export { LogFeelingValidatorProps }
