import { getCustomRepository } from "typeorm";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { AppError } from '../errors/AppError';
import authConfig  from '../config/auth'
import { UsersRepositories } from '../repositories/UsersRepositories'

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories)

    const user = await usersRepositories.findOne({
      email
    })

    if(!user) {
      throw new AppError('Incorrect e-mail or password!', 401)
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new AppError('Incorrect e-mail or password!', 401)
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({email: user.email}, secret, {
      subject: user.id,
      expiresIn,
    })

    return token
  }
}

export { AuthenticateUserService }