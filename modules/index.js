import { lonLatToPixel, meterToPixel } from './conversions'
import { mts3G } from './tileSources'
import coverage from './coverage'

const mts3GCoverage = (zoom) => coverage(mts3G, zoom)

export {
  lonLatToPixel,
  meterToPixel,
  mts3GCoverage as mts3G
}
