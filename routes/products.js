const express = require('express')
const { getProducts, getProduct, addProduct } = require('../controllers/products')
const cacheData = require('../middleware/cache')

const router = express.Router()

router.get('/', cacheData, getProducts)
router.get('/:id', cacheData, getProduct)

router.post('/', addProduct)

module.exports = router