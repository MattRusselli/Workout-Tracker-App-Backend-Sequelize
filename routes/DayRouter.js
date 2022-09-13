const router = require('express').Router()
const controller = require('../controllers/DayController')
const middleware = require('../middleware')

router.get('/', controller.GetDays)

router.get('/:schedule_id', controller.GetDayByScheduleId)

router.get('/:day_id', controller.GetDayById)

router.post('/:schedule_id', controller.CreateDay)

router.put('/:day_id', controller.UpdateDay)

router.delete('/:day_id', controller.DeleteDay)

module.exports = router
