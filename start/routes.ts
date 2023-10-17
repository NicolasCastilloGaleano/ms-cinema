/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post("/movies","MoviesController.store");
Route.get("/movies","MoviesController.index");
Route.get("/movies/:id","MoviesController.show");
Route.put("/movies/:id","MoviesController.update");
Route.delete("/movies/:id","MoviesController.destroy");

Route.post("/theaters","TheatersController.store");
Route.get("/theaters","TheatersController.index");
Route.get("/theaters/:id","TheatersController.show");
// Route.put("/theaters/:id","TheatersController.update");
// Route.delete("/theaters/:id","TheatersController.destroy");

Route.post("/projectors","ProjectorsController.store");
Route.get("/projectors","ProjectorsController.index");
Route.get("/projectors/:id","ProjectorsController.show");
// Route.put("/projectors/:id","ProjectorsController.update");
// Route.delete("/projectors/:id","ProjectorsController.destroy");

Route.post("/seats","SeatsController.store");
Route.get("/seats","SeatsController.index");
Route.get("/seats/:id","SeatsController.show");
// Route.put("/seats/:id","SeatsController.update");
// Route.delete("/seats/:id","SeatsController.destroy");

Route.post("/screenings","ScreeningsController.store");
Route.get("/screenings","ScreeningsController.index");
Route.get("/screenings/:id","ScreeningsController.show");
// Route.put("/screenings/:id","ScreeningsController.update");
// Route.delete("/screenings/:id","ScreeningsController.destroy");
