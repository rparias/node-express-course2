const express = require('express')
const app = express()
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))

// parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())

// people router
app.use('/api/people', peopleRouter)

// auth router
app.use('/api/login', authRouter)


app.listen(5000, () => {
  console.log('Listening on port 5000...')
})