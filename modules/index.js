import toGlobalPixels from './toGlobalPixels'
import { mts } from './operators'
import coverage from './coverage'

const mtsCoverage = (zoom) => coverage(mts, zoom)

export {
  toGlobalPixels,
  mtsCoverage as mts
}
