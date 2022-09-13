const router = require('express').Router()
const controller = require('../controllers/ScheduleController')
const middleware = require('../middleware')

router.get('/', controller.GetSchedules)

router.get('/schedid/:schedule_id', controller.GetScheduleById)

router.get('/userid/:user_id', controller.GetSchedulesByUserId)

router.post('/:user_id', controller.CreateSchedule)

router.put('/:schedule_id', controller.UpdateSchedule)

router.delete('/:schedule_id', controller.DeleteSchedule)

module.exports = router
