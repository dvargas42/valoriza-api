import { getCustomRepository } from 'typeorm'

import { AppError } from '../errors/AppError'
import { TagsRepositories } from '../repositories/TagsRepositories'

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if(!name) {
      throw new AppError('Incorrect name!', 401)
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    })

    if (tagAlreadyExists) {
      throw new AppError('Tag already exists!', 401)
    }

    const tag = tagsRepositories.create({
      name,
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }