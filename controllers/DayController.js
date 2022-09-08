const { Day, Workout } = require('../models')

const GetDays = async (req, res) => {
  try {
    const days = await Day.findAll()
    res.send(days)
  } catch (error) {
    throw error
  }
}

const GetDayById = async (req, res) => {
  console.log(req.params)
  try {
    let day = await Day.findByPk(req.params.day_id)
    res.send(day)
  } catch (error) {
    throw error
  }
}

const CreateDay = async (req, res) => {
  try {
    let scheduleId = parseInt(req.params.schedule_id)

    let dayBody = {
      scheduleId,
      ...req.body
    }
    let day = await Day.create(dayBody)
    res.send(day)
  } catch (error) {
    throw error
  }
}

const UpdateDay = async (req, res) => {
  try {
    let dayId = parseInt(req.params.day_id)
    let updatedDay = await Day.update(req.body, {
      where: { id: dayId },
      returning: true
    })
    res.send(updatedDay)
  } catch (error) {
    throw error
  }
}

const DeleteDay = async (req, res) => {
  try {
    let dayId = parseInt(req.params.day_id)
    await Day.destroy({ where: { id: dayId } })
    res.send({ message: `Deleted day with an id of ${dayId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDays,
  GetDayById,
  CreateDay,
  UpdateDay,
  DeleteDay
}
