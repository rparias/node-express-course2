const express = require('express')
const app = express()

// req => middleware => res
const logger = require('./logger')

// Call the middleware for every endpoint instead of calling in the method as a second parameter
// The app.use should be called before the endpoints, otherwise the middleware will be called only for the endpoints below it
app.use(logger)
// app.use('/api', logger) this middleware will be executed only when the url has /api

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  res.send('Items')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})