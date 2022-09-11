const Router = require('express').Router()
const controller = require('../controllers/ExerciseController')
const middleware = require('../middleware')

Router.get('/', controller.GetExercises)

Router.get('/:day_id', controller.GetExerciseByDayId)

Router.post(
  '/:day_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateExercise
)

Router.put(
  '/:exercise_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateExercise
)

Router.delete(
  '/:exercise_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteExercise
)

module.exports = Router
