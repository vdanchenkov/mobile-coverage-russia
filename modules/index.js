import { lonLatToPixel, meterToPixel } from './conversions'
import * as tileSources from './tileSources'
import coverage from './coverage'

const mts2G = (zoom) => coverage(tileSources.mts2G, zoom)
const mts3G = (zoom) => coverage(tileSources.mts3G, zoom)
const mts4G = (zoom) => coverage(tileSources.mts4G, zoom)
const mts4GPlan = (zoom) => coverage(tileSources.mts4GPlan, zoom)

const megafon2G = (zoom) => coverage(tileSources.megafon2G, zoom)
const megafon3G = (zoom) => coverage(tileSources.megafon3G, zoom)
const megafon4G = (zoom) => coverage(tileSources.megafon4G, zoom)
const megafon4GPlus = (zoom) => coverage(tileSources.megafon4GPlus, zoom)

export {
  lonLatToPixel,
  meterToPixel,
  mts2G,
  mts3G,
  mts4G,
  mts4GPlan,
  megafon2G,
  megafon3G,
  megafon4G,
  megafon4GPlus
}
