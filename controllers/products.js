const products = require('../services/products')
const { clearCache } = require('../middleware/cache')

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

async function addProduct(req, res) {
  const product = await products.addProduct(req.body)

  clearCache()

  res.status(201).json(product)
}

async function updateProduct(req, res) {
  const product = await products.updateProduct(req.params.id, req.body)

  if (product) {
    clearCache()
    res.json(product)
  } else {
    res.status(404).send('Product not found')
  }
}
async function patchProduct(req, res) {
  const product = await products.patchProduct(req.params.id, req.body)

  if (product) {
    clearCache()
    res.json(product)
  } else {
    res.status(404).send('Product not found')
  }
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  patchProduct
}