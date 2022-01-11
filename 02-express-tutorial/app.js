const express = require('express')
const app = express()
const { people } = require('./data')

// static assets
app.use(express.static('./methods-public'))

// parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }))

app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people})
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if(name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send('Please provide credentials')
})

app.listen(5000, () => {
  console.log('Listening on port 5000...')
})