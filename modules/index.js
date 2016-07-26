export { lonLatToPixel, meterToPixel } from './conversions'
import * as tileSources from './tileSources'
import coverage from './coverage'

export const mts2G = (zoom) => coverage(tileSources.mts2G, zoom)
export const mts3G = (zoom) => coverage(tileSources.mts3G, zoom)
export const mts4G = (zoom) => coverage(tileSources.mts4G, zoom)
export const mts4GPlan = (zoom) => coverage(tileSources.mts4GPlan, zoom)

export const megafon2G = (zoom) => coverage(tileSources.megafon2G, zoom)
export const megafon3G = (zoom) => coverage(tileSources.megafon3G, zoom)
export const megafon4G = (zoom) => coverage(tileSources.megafon4G, zoom)
export const megafon4GPlus = (zoom) => coverage(tileSources.megafon4GPlus, zoom)
