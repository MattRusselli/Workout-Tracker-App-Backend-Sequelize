const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const UserRouter = require('./routes/UserRouter')
const ScheduleRouter = require('./routes/ScheduleRouter')
const DayRouter = require('./routes/DayRouter')
const ExerciseRouter = require('./routes/ExerciseRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/schedules', ScheduleRouter)
app.use('/days', DayRouter)
app.use('/exercises', ExerciseRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
