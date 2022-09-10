const Router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

Router.get('/', controller.GetSchedules)

Router.get('/:user_id', controller.GetSchedulesByUserId)

Router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateSchedule
)

Router.put(
  '/:schedule_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateSchedule
)

Router.delete(
  '/:schedule_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteSchedule
)

module.exports = Router
