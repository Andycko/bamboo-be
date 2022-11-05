import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LoginValidator from 'App/Validators/LoginValidator'
import AuthService from 'App/Services/AuthService'

export default class AuthController {
  public async login({ auth, request }: HttpContextContract) {
    const payload = await request.validate(LoginValidator)

    return await AuthService.login(payload, auth)
  }
}
