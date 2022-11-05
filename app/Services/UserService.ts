import User from 'App/Models/User'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'
import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import { CreateUserValidatorProps } from 'App/Validators/CreateUserValidator'
import { LogFeelingValidatorProps } from 'App/Validators/LogFeelingValidator'
import UserFeelingLog from 'App/Models/UserFeelingLog'
import UserRepository from 'App/Repositories/UserRepository'
import { openai } from 'Config/openai'

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

  public async getImage(auth: AuthContract) {
    const likedImages = await auth.user!.related('images').query()
    let keywords: String[] = []

    likedImages.forEach((image) => {
      keywords = [...image.tags.split(','), ...keywords]
    })

    const genKeywords: String[] = []
    for (let i = 0; i < 3; i++) {
      genKeywords.push(keywords[Math.floor(Math.random() * keywords.length)])
    }
    genKeywords.push('happy')
    genKeywords.push('cute')

    try {
      const response = await openai.createImage({
        prompt: genKeywords.join(' ').trim(),
        n: 2,
        size: '512x512',
      })

      return { imageUrl: response.data.data[0].url }
    } catch (err) {
      console.error(err.response.data)
      throw new Error('Error generating image')
    }
  }
}

export default new UserService()
