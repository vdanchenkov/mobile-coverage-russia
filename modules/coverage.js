import parseImage from './parseImage'
import createStorage from './storage'
import request from './request'

export default (tileUrl, zoom, interpolation = 0) => {
  const storage = createStorage()

  const func = async (x, y) => {
    if (!y && Array.isArray(x)) {
      const result = new Array(x.length)
      for(let i = 0; i < x.length; i++) {
        result[i] = await func(...x[i])
      }
      return result
    }

    const tileX = x >> 8 - interpolation
    const tileY = y >> 8 - interpolation
    if (!storage.haveTile(tileX, tileY)) {
      const buffer = await request(tileUrl(zoom, tileX, tileY))
      storage.setTile(tileX, tileY, parseImage(buffer))
    }

    const baseX = x << interpolation
    const baseY = y << interpolation

    const range = 1 << interpolation
    let level = 0
    for(let ix = 0; ix < range; ix++ ) {
      for(let iy = 0; iy < range; iy++ ) {
        level += storage.get(baseX + ix, baseY + iy)
      }
    }
    return level / Math.pow(range, 2)
  }
  return func
}
