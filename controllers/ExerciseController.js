const { Exercise } = require('../models')

const GetExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll({})
    res.send(exercises)
  } catch (error) {
    throw error
  }
}

const GetExerciseByDayId = async (req, res) => {
  console.log(req.params)
  try {
    const exercises = await Exercise.findAll({
      where: {
        dayId: req.params.day_id
      }
    })
    res.send(exercises)
  } catch (error) {
    throw error
  }
}

const CreateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create({ ...req.body })
    res.send(exercise)
  } catch (error) {
    throw error
  }
}

const UpdateExercise = async (req, res) => {
  try {
    const exercise = await Exercise.update(
      { ...req.body },
      {
        where: { id: req.params.exercise_id },
        returning: true
      }
    )
    res.send(exercise)
  } catch (error) {
    throw error
  }
}

const DeleteExercise = async (req, res) => {
  try {
    await Exercise.destroy({ where: { id: req.params.exercise_id } })
    res.send({
      msg: 'Exercise has been deleted',
      payload: req.params.exercise_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetExercises,
  GetExerciseByDayId,
  CreateExercise,
  UpdateExercise,
  DeleteExercise
}
