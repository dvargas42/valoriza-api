import { Request, Response, NextFunction } from 'express'
import { getCustomRepository } from 'typeorm'

import { UsersRepositories } from '../repositories/UsersRepositories'
import { AppError } from '../errors/AppError'

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request
  
  const usersRepositories = getCustomRepository(UsersRepositories)

  const { admin } = await usersRepositories.findOne(user_id)

  if (admin) {
    return next()
  }

  throw new AppError('Unauthorized User!', 401)
}