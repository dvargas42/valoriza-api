import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { AppError } from '../errors/AppError'
import auth from '../config/auth'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    throw new AppError('Token missing!', 401)
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, auth.jwt.secret) as IPayload
    
    request.user_id = sub

    return next()
  } catch {
    throw new AppError('Token invalid!', 401)
  }
}