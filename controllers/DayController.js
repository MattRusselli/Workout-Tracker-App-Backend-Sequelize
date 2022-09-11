const { Day, Workout } = require('../models')

const GetDays = async (req, res) => {
  try {
    const days = await Day.findAll({})
    res.send(days)
  } catch (error) {
    throw error
  }
}

const GetDayByScheduleId = async (req, res) => {
  try {
    const day = await Day.findAll({
      where: { scheduleId: req.params.schedule_id }
    })
    res.send(day)
  } catch (error) {
    throw error
  }
}

const CreateDay = async (req, res) => {
  try {
    const day = await Day.create({ ...req.body })
    res.send(day)
  } catch (error) {
    throw error
  }
}

const UpdateDay = async (req, res) => {
  try {
    const day = await Day.update(
      { ...req.body },
      {
        where: { id: req.params.day_id },
        returning: true
      }
    )
    res.send(updatedDay)
  } catch (error) {
    throw error
  }
}

const DeleteDay = async (req, res) => {
  try {
    await Day.destroy({ where: { id: req.params.day_id } })
    res.send({
      msg: 'Day has been deleted',
      payload: req.params.day_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetDays,
  GetDayByScheduleId,
  CreateDay,
  UpdateDay,
  DeleteDay
}
