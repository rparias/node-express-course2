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

app.get('/api/v1/query', (req, res) => {
  // example: /api/v1/query?search=a&limit=4
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if(search) {
    sortedProducts = sortedProducts.filter(product => product.name.startsWith(search))
  }

  if(limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if(sortedProducts.length < 1) {
    return res.status(200).json({sucess: true, data: []})
  }

  res.status(200).json(sortedProducts)
  res.send('<h1>Using Queries</h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
})