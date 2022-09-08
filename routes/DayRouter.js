const Router = require('express').Router()
const controller = require('../controllers/DayController')
const middleware = require('../middleware')

Router.get('/', controller.GetDays)

Router.get('/:day_id', controller.GetDayById)

Router.post(
  '/:schedule_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateDay
)

Router.put(
  '/:day_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateDay
)

Router.delete(
  '/:day_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteDay
)

module.exports = Router
