const products = require('../services/products')

async function getProducts(req, res) {
  const data = await products.getProducts()
  res.sendCache(data)
}

async function getProduct(req, res) {
  const product = await products.getProduct(req.params.id)

  if (product) {
    res.sendCache(product)
  } else {
    res.status(404).send('Good try bro, but product aint here 🥲')
  }
}

module.exports = {
  getProducts,
  getProduct
}