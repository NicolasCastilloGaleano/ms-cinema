import { DateTime } from 'luxon'
import { BaseModel, ManyToMany, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Screening from './Screening'

export default class Movie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name:string

  @column()
  public duration:number

  @column()
  public year:Date

  @manyToMany(() => Screening, {
    pivotTable: 'screenings', //Nombre tabla pivote
    pivotForeignKey: 'movie_id', //Nombre de la clave que está en esta entidad
    //pero en la tabla pivote
    pivotRelatedForeignKey: 'theater_id', //Nombre de la segunda clave
    //que sirve de pivote en larelación
    pivotColumns: ['date'] //obtener datos de columnas adicionales
    })
    public screenings: ManyToMany<typeof Screening>;
    

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
