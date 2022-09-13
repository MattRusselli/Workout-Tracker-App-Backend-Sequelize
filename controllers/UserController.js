const { User, Schedule } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      include: { model: Schedule, attributes: ['id'] }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  console.log(req.params)
  try {
    const user = await User.findByPk(req.params.user_id, {
      include: { model: Schedule, attributes: ['id'] }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserById
}
