const express = require('express')
const cors = require('cors')

const app = express()

/* Middleware */
app.use(cors())
app.use(express.json())

/* Routes */
app.use('/api/directories', require('./routes/directories.js'))
app.use('/api', require('./routes/shapes.js'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port: ${PORT}`))
