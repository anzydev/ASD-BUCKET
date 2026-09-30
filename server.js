const express = require('express');
const readfile = require('./database/products')
const { getProducts, getProduct } = require('./controllers/products')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// this is used for products route
app.get('/products', getProducts)

// this is for products by id 
app.get('/products/:id', getProduct)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})