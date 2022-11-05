import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'UsersController.index')
})
  .prefix('user')
  .middleware('auth')

Route.group(() => {
  Route.post('/', 'UsersController.store')
}).prefix('user')
