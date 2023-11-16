import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {}).middleware(['security'])
Route.get('/movies', 'MoviesController.index')
Route.post('/movies', 'MoviesController.store')
Route.get('/movies/:id', 'MoviesController.show')
Route.put('/movies/:id', 'MoviesController.update')
Route.delete('/movies/:id', 'MoviesController.destroy')
