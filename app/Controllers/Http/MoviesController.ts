import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Movie from 'App/Models/Movie';

export default class MoviesController {
    //Create
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theMovie = await Movie.create(body); //el await le dice al store para que espere mientras ejecuta
        return theMovie;

    }
    //Get
    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        let movies:Movie[]= await Movie.query().paginate(page, perPage)
        return movies;
    }
    
    public async show({ params }: HttpContextContract) {
        return Movie.findOrFail(params.id);
    }
    //Update
    public async update({ params, request }: HttpContextContract) {
        const body = request.body();
        const theMovie: Movie = await Movie.findOrFail(params.id);
        theMovie.name = body.name;
        theMovie.duration = body.duration;
        theMovie.year = body.year;
        return theMovie.save();
    }

    //Delete
    public async destroy({ params, response }: HttpContextContract) {
        const theMovie: Movie = await Movie.findOrFail(params.id);
        response.status(204);
        return theMovie.delete();
    }
}
