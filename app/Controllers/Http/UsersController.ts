import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import UserService from 'App/Services/UserService'

export default class UsersController {
  public async index({ auth }: HttpContextContract) {
    return await UserService.getUser(auth)
  }

  public async store({ auth, request }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)

    return await UserService.createUser(payload, auth)
  }
}
