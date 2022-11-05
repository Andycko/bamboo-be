import User from 'App/Models/User'

class UserRepository {
  public findAll() {
    return User.all()
  }

  public findById(id: number) {
    const query = User.query().where('id', id)

    query.preload('selectedFeelings')
    query.preload('hobbies')
    query.preload('images')
    query.preload('userFeelingLogs', (query) => {
      query.orderBy('loggedAt', 'desc')
      query.preload('feeling')
    })

    return query.first()
  }
}

export default new UserRepository()
