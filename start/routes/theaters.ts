import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
Route.post("/theaters","TheatersController.store");
Route.get("/theaters","TheatersController.index");
Route.get("/theaters/:id","TheatersController.show");
// Route.put("/theaters/:id","TheatersController.update");
// Route.delete("/theaters/:id","TheatersController.destroy");
}).middleware(["security"]);