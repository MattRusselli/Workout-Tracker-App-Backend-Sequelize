const router = require('express').Router()
const controller = require('../controllers/DayController')
const middleware = require('../middleware')

router.get('/', controller.GetDays)

router.get('/:schedule_id', controller.GetDayByScheduleId)

router.post(
  '/:schedule_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateDay
)

router.put(
  '/:day_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateDay
)

router.delete(
  '/:day_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteDay
)

module.exports = router
