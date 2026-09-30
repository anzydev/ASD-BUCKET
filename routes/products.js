const express = require('express')
const { getProducts, getProduct, addProduct, updateProduct, patchProduct, deleteProduct } = require('../controllers/products')
const { cacheData } = require('../middleware/cache')
const validateId = require('../middleware/validate')

const router = express.Router()

router.get('/', cacheData, getProducts)
router.get('/:id', validateId, cacheData, getProduct)

router.post('/', addProduct)

router.put('/:id', validateId, updateProduct)

router.patch('/:id', validateId, patchProduct)

router.delete('/:id', validateId, deleteProduct)

module.exports = router