const express = require('express')
const { getProducts, getProduct, addProduct, updateProduct } = require('../controllers/products')
const { cacheData } = require('../middleware/cache')

const router = express.Router()

router.get('/', cacheData, getProducts)
router.get('/:id', cacheData, getProduct)

router.post('/', addProduct)

router.put('/:id', updateProduct)

module.exports = router