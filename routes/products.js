const express = require('express')
const { getProducts, getProduct } = require('../controllers/products')
const cacheData = require('../middleware/cache')

const router = express.Router()

router.get('/', cacheData, getProducts)
router.get('/:id', cacheData, getProduct)

module.exports = router