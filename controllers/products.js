const products = require('../services/products')
const { clearCache } = require('../middleware/cache')

async function getProducts(req, res) {
  try {
    const data = await products.getProducts()
    res.sendCache(data)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}

async function getProduct(req, res) {
  try {
    const product = await products.getProduct(req.params.id)

    if (product) {
      res.sendCache(product)
    } else {
      res.status(404).send('Good try bro, but product aint here 🥲')
    }
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}

async function addProduct(req, res) {
  try {
    if (!req.body.name || req.body.price === undefined) {
      return res.status(400).send('Name and price are required')
    }

    const product = await products.addProduct(req.body)

    clearCache()

    res.status(201).json(product)
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}

async function updateProduct(req, res) {
  try {
    const product = await products.updateProduct(req.params.id, req.body)

    if (product) {
      clearCache()
      res.json(product)
    } else {
      res.status(404).send('Product not found')
    }
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}

async function patchProduct(req, res) {
  try {
    const product = await products.patchProduct(req.params.id, req.body)

    if (product) {
      clearCache()
      res.json(product)
    } else {
      res.status(404).send('Product not found')
    }
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}

async function deleteProduct(req, res) {
  try {
    const product = await products.deleteProduct(req.params.id)

    if (product) {
      clearCache()
      res.json(product)
    } else {
      res.status(404).send('Product not found')
    }
  } catch (err) {
    console.log(err)
    res.status(500).send('Server error')
  }
}

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  patchProduct,
  deleteProduct
}