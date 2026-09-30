const readfile = require('../database/products')

async function getProducts() {
  return await readfile()
}

async function getProduct(id) {
  const products = await readfile()

  return products.find(product => product.id === Number(id))
}

module.exports = {
  getProducts,
  getProduct
}