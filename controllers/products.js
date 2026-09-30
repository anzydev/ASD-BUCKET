const readfile = require('../database/products')

async function getProducts(req, res) {
  const products = await readfile()
  res.json(products)
}

async function getProduct(req, res) {
  const products = await readfile()

  const product = products.find(product => product.id === Number(req.params.id))

  if (product) {
    res.json(product)
  } else {
    res.status(404).send('Good try bro, but product aint here 🥲')
  }
}

module.exports = {
  getProducts,
  getProduct
}