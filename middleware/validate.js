function validateId(req, res, next) {
  const id = Number(req.params.id)

  if (isNaN(id)) {
    return res.status(400).send('Invalid product id')
  }

  next()
}

module.exports = validateId