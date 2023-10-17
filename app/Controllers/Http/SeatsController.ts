import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Seat from 'App/Models/Seat';

export default class SeatsController {
    //Create
    public async store({request}:HttpContextContract){
        let body = request.body();
        const theSeat = await Seat.create(body); //el await le dice al store para que espere mientras ejecuta
        return theSeat;

    }
    //Get
    public async index({ request }: HttpContextContract) {
        const page = request.input('page', 1);
        const perPage = request.input("per_page", 20);
        let seats:Seat[]= await Seat.query().paginate(page, perPage)
        return seats;
    }
    
    public async show({ params }: HttpContextContract) {
        return Seat.query().where("id",params.id)
    }
}
