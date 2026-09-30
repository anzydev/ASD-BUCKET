const express = require('express');
const fs = require('fs').promises
const path = require('path')
const app = express()
const port = 3000

const filePath = path.join(__dirname, 'db.json')

// this is the function i made for reading the files
async function readfile() {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

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