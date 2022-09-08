const { Schedule } = require('../models')

const GetSchedules = async (req, res) => {
  try {
    const Schedules = await Schedule.findAll()
    res.send(Schedules)
  } catch (error) {
    throw error
  }
}

const GetScheduleById = async (req, res) => {
  try {
    let Schedule = await Schedule.findByPk(req.params.Schedule_id)
    res.send(Schedule)
  } catch (error) {
    throw error
  }
}

const CreateSchedule = async (req, res) => {
  try {
    let Schedule = await Schedule.create({ ...req.body })
    res.send(Schedule)
  } catch (error) {
    throw error
  }
}

const UpdateSchedule = async (req, res) => {
  try {
    let ScheduleId = parseInt(req.params.Schedule_id)
    let updatedSchedule = await Schedule.update(req.body, {
      where: { id: ScheduleId },
      returning: true
    })
    res.send(updatedSchedule)
  } catch (error) {
    throw error
  }
}

const DeleteSchedule = async (req, res) => {
  try {
    let ScheduleId = parseInt(req.params.Schedule_id)
    await Schedule.destroy({ where: { id: ScheduleId } })
    res.send({ message: `Deleted Schedule with an id of ${ScheduleId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedules,
  GetScheduleById,
  CreateSchedule,
  UpdateSchedule,
  DeleteSchedule
}
