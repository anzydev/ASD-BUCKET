const database = require('../database/products')

async function getProducts() {
  return await database.readfile()
}

async function getProduct(id) {
  const products = await database.readfile()

  return products.find(product => product.id === Number(id))
}

async function addProduct(product) {
  const products = await database.readfile()

  products.push(product)

  await database.savefile(products)

  return product
}

async function updateProduct(id, data) {
  return await database.updateProduct(id, data)
}

async function patchProduct(id, data) {
  return await database.patchProduct(id, data)
}

async function deleteProduct(id) {
  return await database.deleteProduct(id)
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  patchProduct,
  deleteProduct
}