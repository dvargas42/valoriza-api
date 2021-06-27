import { Router } from 'express'

import { CreateUserController } from './controllers/CreateUserController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateSessionController } from './controllers/CreateSessionController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserController } from './controllers/ListUserController'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const createSessionController = new CreateSessionController()
const createComplimentController = new CreateComplimentController()

const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiverComplimentsController()
const listTagsController = new ListTagsController()
const listUserController = new ListUserController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post('/sessions', createSessionController.handle)
router.post('/compliments', ensureAuthenticated, createComplimentController.handle)

router.get('/compliments/send', ensureAuthenticated, listUserSendComplimentsController.handle)
router.get('/compliments/receive', ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUserController.handle)

export { router }