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

module.exports = logger