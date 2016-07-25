import { lonLatToPixel, meterToPixel } from './conversions'
import * as tileSources from './tileSources'
import coverage from './coverage'


const mts2G = (zoom) => coverage(tileSources.mts2G, zoom)
const mts3G = (zoom) => coverage(tileSources.mts3G, zoom)
const mts4G = (zoom) => coverage(tileSources.mts4G, zoom)
const mts4GPlan = (zoom) => coverage(tileSources.mts4GPlan, zoom)

export {
  lonLatToPixel,
  meterToPixel,
  mts2G,
  mts3G,
  mts4G,
  mts4GPlan
}
