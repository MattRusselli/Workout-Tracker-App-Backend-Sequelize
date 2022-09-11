const { User, Schedule, Day } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserById = async (req, res) => {
  console.log(req.params)
  try {
    const user = await User.findOne({ where: { id: req.params.id } })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  GetUserById
}
