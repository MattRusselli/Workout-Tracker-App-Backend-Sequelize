const Router = require('express').Router()
const controller = require('../controllers/ExerciseController')
const middleware = require('../middleware')

Router.get('/', controller.GetExercises)

Router.get('/:day_id', controller.GetExerciseByDayId)

Router.post('/:day_id', controller.CreateExercise)

Router.put('/:exercise_id', controller.UpdateExercise)

Router.delete('/:exercise_id', controller.DeleteExercise)

module.exports = Router
