import User from 'App/Models/User'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { CreateUserValidatorProps } from 'App/Validators/CreateUserValidator'
import { LogFeelingValidatorProps } from 'App/Validators/LogFeelingValidator'
import UserFeelingLog from 'App/Models/UserFeelingLog'
import UserRepository from 'App/Repositories/UserRepository'

class UserService {
  public async getUser(auth: AuthContract) {
    return auth.user!.serialize()
  }

  public async createUser(data: CreateUserValidatorProps, auth: AuthContract) {
    let user = await User.findBy('email', data.email)

    if (user) {
      throw new AuthenticationException('User already exists', 'E_USER_ALREADY_EXISTS', 'api')
    }

    user = await User.create(data as Partial<User>)
    const token = await auth.use('api').login(user)

    return { user: token.user.serialize(), token: token.token }
  }

  public async logFeeling(data: LogFeelingValidatorProps, auth: AuthContract) {
    await UserFeelingLog.create({
      userId: auth.user!.id,
      feelingId: parseInt(data.feelingId),
      loggedAt: data.loggedAt,
    })

    const user = await UserRepository.findById(auth.user!.id)

    return user!.serialize()
  }
}

export default new UserService()
