const { Router } = require('express')
const FogueteController = require('../Controlles/FogueteController')
const SessionController = require('../Controlles/SessionController')
const UserController = require('../Controlles/UserController')


const routes = Router()

routes.post('/user', UserController.create)
routes.get('/user', UserController.index)
routes.post('/foguete', FogueteController.create)
routes.post('/session', SessionController.create)

module.exports = routes