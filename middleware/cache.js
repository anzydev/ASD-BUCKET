const cache = {}

function cacheData(req, res, next) {
  const key = req.originalUrl
  const value = cache[key]

  if (value) {
    const age = Date.now() - value.createdAt

    if (age < 60000) {
      console.log('Getting from cache')
      res.set('X-Cache', 'HIT')
      return res.json(value.data)
    }

    delete cache[key]
  }

  res.set('X-Cache', 'MISS')

  res.sendCache = (data) => {
    cache[key] = {
      data: data,
      createdAt: Date.now()
    }

    res.json(data)
  }

  next()
}

module.exports = cacheData