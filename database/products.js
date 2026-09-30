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

module.exports = {
  readfile,
  savefile
}