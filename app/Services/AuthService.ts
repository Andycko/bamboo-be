import { InvalidCredentialsException } from '@adonisjs/auth/build/src/Exceptions/InvalidCredentialsException'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { LoginValidatorProps } from 'App/Validators/LoginValidator'

class AuthService {
  public async login(data: LoginValidatorProps, auth: AuthContract) {
    try {
      const token = await auth.use('api').attempt(data.email, data.password)
      return { user: token.user.serialize(), token: token.token }
    } catch {
      throw new InvalidCredentialsException('Invalid credentials', 401, 'E_INVALID_AUTH_PASSWORD')
    }
  }
}

export default new AuthService()
