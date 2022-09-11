const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUsers
)

router.get(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserById
)

module.exports = router
