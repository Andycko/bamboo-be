import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import UserService from 'App/Services/UserService'
import LogFeelingValidator from 'App/Validators/LogFeelingValidator'
import SelectImagesValidator from 'App/Validators/SelectImagesValidator'

export default class UsersController {
  public async index({ auth }: HttpContextContract) {
    return await UserService.getUser(auth)
  }

  public async store({ auth, request }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)

    return await UserService.createUser(payload, auth)
  }

  public async logFeeling({ auth, request }: HttpContextContract) {
    const payload = await request.validate(LogFeelingValidator)

    return await UserService.logFeeling(payload, auth)
  }

  public async getImage({ auth }: HttpContextContract) {
    return await UserService.getImage(auth)
  }

  public async selectImages({ auth, request }: HttpContextContract) {
    const payload = await request.validate(SelectImagesValidator)

    return await UserService.selectImages(payload, auth)
  }
}
