const { Schedule } = require('../models')

const GetSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({})
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const GetSchedulesByUserId = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({
      where: {
        userId: req.params.user_id
      }
    })
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const CreateSchedule = async (req, res) => {
  try {
    let schedules = await Schedule.create({ ...req.body })
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const UpdateSchedule = async (req, res) => {
  try {
    let scheduleId = parseInt(req.params.Schedule_id)
    let updatedSchedule = await Schedule.update(req.body, {
      where: { id: scheduleId },
      returning: true
    })
    res.send(updatedSchedule)
  } catch (error) {
    throw error
  }
}

const DeleteSchedule = async (req, res) => {
  try {
    let scheduleId = parseInt(req.params.Schedule_id)
    await Schedule.destroy({ where: { id: scheduleId } })
    res.send({ message: `Deleted Schedule with an id of ${scheduleId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedules,
  GetSchedulesByUserId,
  CreateSchedule,
  UpdateSchedule,
  DeleteSchedule
}
