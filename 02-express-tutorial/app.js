const express = require('express')
const app = express()

// req => middleware => res

// this is my middleware function
// the req, res and next will be passed here automatically by express
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)

  // next will continue with the flow where the middleware was called
  next()
}

// the middleware function should be passed in the second parameter
app.get('/', logger, (req, res) => {
  res.send('Home')
})

app.get('/about', logger, (req, res) => {
  res.send('About')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})