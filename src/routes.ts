import { Router } from 'express'

import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateSessionController } from './controllers/CreateSessionController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()

const createUserController = new CreateUserController
const createTagController = new CreateTagController
const createSessionController = new CreateSessionController

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/sessions', createSessionController.handle)

export { router }