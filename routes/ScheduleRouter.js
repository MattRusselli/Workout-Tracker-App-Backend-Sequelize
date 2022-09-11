const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/', controller.GetSchedules)

router.get('/:user_id', controller.GetSchedulesByUserId)

router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateSchedule
)

router.put(
  '/:schedule_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateSchedule
)

router.delete(
  '/:schedule_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteSchedule
)

module.exports = router
