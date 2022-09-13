const { Schedule, Day } = require('../models')

const GetSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.findAll({
      include: { model: Day, attributes: ['id'] }
    })
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const GetScheduleById = async (req, res) => {
  console.log(req.params)
  try {
    const schedules = await Schedule.findAll({
      where: { id: req.params.schedule_id },
      include: { model: Day, attributes: ['id'] }
    })
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
    const schedules = await Schedule.create({ ...req.body })
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const UpdateSchedule = async (req, res) => {
  try {
    const schedules = await Schedule.update(
      { ...req.body },
      {
        where: { id: req.params.schedule_id },
        returning: true
      }
    )
    res.send(schedules)
  } catch (error) {
    throw error
  }
}

const DeleteSchedule = async (req, res) => {
  try {
    await Schedule.destroy({ where: { id: req.params.schedule_id } })
    res.send({
      msg: 'Schedule has been deleted',
      payload: req.params.schedule_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSchedules,
  GetSchedulesByUserId,
  GetScheduleById,
  CreateSchedule,
  UpdateSchedule,
  DeleteSchedule
}
