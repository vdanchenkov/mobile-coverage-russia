import parseImage from './parseImage'
import createStorage from './storage'
import request from './request'

export default (tileUrl, zoom) => {
  const storage = createStorage()

  const func = async (x, y) => {
    if (!y && Array.isArray(x)) {
      const result = new Array(x.length)
      for(let i = 0; i < x.length; i++) {
        result[i] = await func(...x[i])
      }
      return result
    }
    let value = storage.get(x, y)
    if (typeof value === 'boolean') {
      return value
    } else {
      const tileX = x / 256 | 0
      const tileY = y / 256 | 0
      const buffer = await request(tileUrl(zoom, tileX, tileY))
      storage.setTile(tileX, tileY, parseImage(buffer))
      return storage.get(x, y)
    }
  }
  return func
}
