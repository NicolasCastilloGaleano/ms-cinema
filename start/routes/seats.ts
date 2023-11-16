import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
Route.post("/seats","SeatsController.store");
Route.get("/seats","SeatsController.index");
Route.get("/seats/:id","SeatsController.show");
// Route.put("/seats/:id","SeatsController.update");
// Route.delete("/seats/:id","SeatsController.destroy");
}).middleware(["security"]);