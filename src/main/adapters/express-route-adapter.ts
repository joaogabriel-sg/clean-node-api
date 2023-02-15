import { type Request, type Response } from 'express'
import { type HttpRequest, type Controller } from '../../presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }

    const httpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode === 200) {
      return res.status(httpResponse.statusCode).json(httpResponse.body)
    }

    res.status(httpResponse.statusCode).json({
      error: httpResponse.body.message
    })
  }
}
