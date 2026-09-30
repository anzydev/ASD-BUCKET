const cache = {}

function cacheData(req, res, next) {
  const key = req.originalUrl

  if (cache[key]) {
    console.log('Getting from cache')
    res.set('X-Cache', 'HIT')
    return res.json(cache[key])
  }

  res.set('X-Cache', 'MISS')

  res.sendCache = (data) => {
    cache[key] = data
    res.json(data)
  }

  next()
}

module.exports = cacheData