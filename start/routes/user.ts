import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'UsersController.store')

  Route.group(() => {
    Route.get('/', 'UsersController.index')
    Route.get('/image', 'UsersController.getImage')
    Route.post('/image/select', 'UsersController.selectImages')

    Route.post('/feeling', 'UsersController.logFeeling')
  }).middleware('auth')
}).prefix('user')
