import { lonLatToPixel, meterToPixel } from './conversions'
import { mts } from './operators'
import coverage from './coverage'

const mtsCoverage = (zoom) => coverage(mts, zoom)

export {
  lonLatToPixel,
  meterToPixel,
  mtsCoverage as mts
}
