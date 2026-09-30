const express = require('express');
const fs = require('fs').promises
const path = require('path')
const app = express()
const port = 3000

const filePath = path.join(__dirname, 'db.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', async (req, res) => {
  const data = await fs.readFile(filePath, 'utf-8')
  const products = JSON.parse(data)

  res.json(products)
})

app.get('/products/:id', async (req, res) => {
  const data = await fs.readFile(filePath, 'utf-8')
  const products = JSON.parse(data)

  const product = products.find(product => product.id === Number(req.params.id))

  if (product) {
    res.json(product)
  } else {
    res.status(404).send('Product is not there bro')
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})