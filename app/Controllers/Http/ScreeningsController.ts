import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Screening from 'App/Models/Screening';

export default class ScreeningsController {
    //Create
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theScreening = await Screening.create(body); //el await le dice al store para que espere mientras ejecuta
        return theScreening;

    }
    //Get
    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        let screenings:Screening[]= await Screening.query().paginate(page, perPage)
        return screenings;
    }
    
    public async show({ params }: HttpContextContract) {
        return Screening.findOrFail(params.id);
    }
}
