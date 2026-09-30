const express = require('express');
const readfile = require('./database/products')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// this is used for products route
app.get('/products', async (req, res) => {
  const products = await readfile()
  res.json(products)
})

// this is for products by id 
app.get('/products/:id', async (req, res) => {
  //new code started
  const products = await readfile()
  //new code ended

  const product = products.find(product => product.id === Number(req.params.id))

//   this is humourous error i thought of
  if (product) {
    res.json(product)
  } else {
    res.status(404).send('Good try bro, but product aint here 🥲')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})