import parseImage from './parseImage'
import request from './request'
import curry from 'lodash/curry'

const coverageAtPoint = (tileUrl, storage, zoom, interpolation) => async (x, y) => {
  const tileX = x >> 8 - interpolation
  const tileY = y >> 8 - interpolation
  if (!storage.haveTile(zoom, tileX, tileY)) {
    const buffer = await request(tileUrl(zoom, tileX, tileY))
    storage.setTile(zoom, tileX, tileY, parseImage(buffer))
  }

  const baseX = x << interpolation
  const baseY = y << interpolation

  const range = 1 << interpolation
  let level = 0
  for(let ix = 0; ix < range; ix++ ) {
    for(let iy = 0; iy < range; iy++ ) {
      level += storage.get(zoom, baseX + ix, baseY + iy)
    }
  }
  return level / Math.pow(range, 2)
}

export default curry(async (tileUrl, storage, zoom, interpolation, ...args) => {
  const coverage = coverageAtPoint(tileUrl, storage, zoom, interpolation)
  if (args.length === 2 && typeof args[0] === 'number' && typeof args[1] === 'number') {
    return await coverage(args[0], args[1])
  } else if (Array.isArray(args[0]) && Array.isArray(args[0][0])) {
    console.error(args[0][0])
    const result = []
    for(let point of args[0]) {
      result.push(await coverage(...point))
    }
    return result
  } else if (Array.isArray(args[0]) && args[0].length === 2 && typeof args[0][0] === 'number' && typeof args[0][1] === 'number') {
    return await coverage(...args[0])
  } else {
    throw Error(`Invalid arguments: ${args.join(',')}`)
  }
}, 5)
