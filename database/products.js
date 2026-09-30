const fs = require('fs').promises
const path = require('path')

const filePath = path.join(__dirname, '../db.json')

async function readfile() {
  const data = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(data)
}

async function savefile(products) {
  await fs.writeFile(filePath, JSON.stringify(products, null, 2))
}

async function updateProduct(id, data) {
  const products = await readfile()

  const index = products.findIndex(product => product.id === Number(id))

  if (index === -1) {
    return null
  }

  products[index] = {
    ...products[index],
    ...data,
    id: Number(id)
  }

  await savefile(products)

  return products[index]
}

async function patchProduct(id, data) {
  const products = await readfile()

  const index = products.findIndex(product => product.id === Number(id))

  if (index === -1) {
    return null
  }

  Object.assign(products[index], data)

  await savefile(products)

  return products[index]
}

async function deleteProduct(id) {
  const products = await readfile()

  const index = products.findIndex(product => product.id === Number(id))

  if (index === -1) {
    return null
  }

  const product = products.splice(index, 1)[0]

  await savefile(products)

  return product
}

module.exports = {
  readfile,
  savefile,
  updateProduct,
  patchProduct,
  deleteProduct
}