const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map(product => {
    const {id, name, image} = product
    return {id, name, image}
  })
  res.json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params
  const singleProduct = products.find(product => product.id === Number(productId))
  
  if(!singleProduct) {
    res.status(404).send('Product does not exist')
  }

  res.json(singleProduct)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
})