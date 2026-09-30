const express = require('express')
const { getProducts, getProduct, addProduct, updateProduct, patchProduct, deleteProduct } = require('../controllers/products')
const { cacheData } = require('../middleware/cache')

const router = express.Router()

router.get('/', cacheData, getProducts)
router.get('/:id', cacheData, getProduct)

router.post('/', addProduct)

router.put('/:id', updateProduct)

router.patch('/:id', patchProduct)

router.delete('/:id', deleteProduct)

module.exports = router