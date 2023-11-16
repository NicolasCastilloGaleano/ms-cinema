import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import axios from 'axios'
import Env from '@ioc:Adonis/Core/Env'
import { Response } from '@adonisjs/core/build/standalone'

export default class Security {
  // public async handle({ request,response }: HttpContextContract, next: () => Promise<void>) {
  //   let theRequest = request.toJSON()
  //   console.log(theRequest);
  //   let token = theRequest.headers.authorization.replace("Bearer ", "")
  //   //console.log(token)
  //   try {
  //     const result = await axios.get(`${Env.get('MS-SECURITY')}/api/public/security/token-validation`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         url:theRequest.url,
  //         method:theRequest.method
  //       }
  //     })
  //     console.log("La respuesta de ms-security >"+result.data+"<")
  //     if (result.data == "") {
  //       console.log("no puede ingresar")
  //       return response.status(401)
  //     } else {
  //       console.log(result.data)
  //       await next()
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     return response.status(401)
  //   }
  // }
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    let theRequest = request.toJSON()
    console.log(theRequest)
    if (theRequest.headers.authorization) {
      let token = theRequest.headers.authorization.replace('Bearer ', '')
      let thePermission: object = {
        url: theRequest.url,
        method: theRequest.method,
      }
      try {
        const result = await axios.post(
          `${Env.get('MS-SECURITY')}/security/permissions-validation`,
          thePermission,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        console.log('La respuesta de ms-security >' + result.data + '<')
        if (result.data == true) {
          console.log(result.data)
          await next()
        } else {
          console.log('no puede ingresar')
          return response.status(401)
        }
      } catch (error) {
        console.error(error)
        return response.status(401)
      }
    } else {
      return response.status(401)
    }
  }
}
