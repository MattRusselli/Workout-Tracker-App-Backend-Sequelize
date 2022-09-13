const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get('/', controller.GetUsers)

router.get('/:user_id', controller.GetUserById)

module.exports = router
