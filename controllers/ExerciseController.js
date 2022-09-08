const { Exercise } = require('../models')

const GetExercises = async (req, res) => {
  try {
    const Exercises = await Exercise.findAll()
    res.send(Exercises)
  } catch (error) {
    throw error
  }
}

const GetExerciseById = async (req, res) => {
  console.log(req.params)
  try {
    let Exercise = await Exercise.findByPk(req.params.Exercise_id)
    res.send(Exercise)
  } catch (error) {
    throw error
  }
}

const CreateExercise = async (req, res) => {
  try {
    let dayId = parseInt(req.params.day_id)

    let ExerciseBody = {
      dayId,
      ...req.body
    }
    let Exercise = await Exercise.create(ExerciseBody)
    res.send(Exercise)
  } catch (error) {
    throw error
  }
}

const UpdateExercise = async (req, res) => {
  try {
    let ExerciseId = parseInt(req.params.Exercise_id)
    let updatedExercise = await Exercise.update(req.body, {
      where: { id: ExerciseId },
      returning: true
    })
    res.send(updatedExercise)
  } catch (error) {
    throw error
  }
}

const DeleteExercise = async (req, res) => {
  try {
    let ExerciseId = parseInt(req.params.Exercise_id)
    await Exercise.destroy({ where: { id: ExerciseId } })
    res.send({ message: `Deleted Exercise with an id of ${ExerciseId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetExercises,
  GetExerciseById,
  CreateExercise,
  UpdateExercise,
  DeleteExercise
}
