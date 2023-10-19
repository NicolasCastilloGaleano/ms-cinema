import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Theater from 'App/Models/Theater';
import commands from 'commands';

export default class TheatersController {

    //Create
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theTheater = await Theater.create(body); //el await le dice al store para que espere mientras ejecuta
        return theTheater;

    }
    //Get
    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        let theaters:Theater[]= await Theater.query().preload('projector').paginate(page, perPage)
        return theaters;
    }
    
    public async show({ params }: HttpContextContract) {
        return Theater.query().where("id",params.id).preload('projector')
                                                    .preload('seats')
                                                    .preload('movies', (query) => {
                                                        query.pivotColumns(['date'])         
                                                    }) //este cambio solo se coloca acá
    }

    public async show2({ params }: HttpContextContract) {
        let  theTheater: Theater = await Theater.query().where("id",params.id)
                                                    .preload('projector')
                                                    .preload('seats')
                                                    .preload('movies').firstOrFail(); //este cambio solo se coloca acá
        const movies = await theTheater.related("movies").query()
        const screenings = movies.map((movie) => {
            return{
                "date": movie.$extras.pivot_date,
                "movie" : movie.toJSON()
            }
        })
        // los tres puntos crean una copia del objeto
        return {...theTheater.toJSON(),"screenings":screenings};
    }
}
