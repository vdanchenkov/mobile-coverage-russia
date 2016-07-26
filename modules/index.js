export { lonLatToPixel, meterToPixel } from './conversions'
import * as tileSources from './tileSources'
import coverage from './coverage'

export const mts2G = (zoom, interpolation) => coverage(tileSources.mts2G, zoom, interpolation)
export const mts3G = (zoom, interpolation) => coverage(tileSources.mts3G, zoom, interpolation)
export const mts4G = (zoom, interpolation) => coverage(tileSources.mts4G, zoom, interpolation)
export const mts4GPlan = (zoom, interpolation) => coverage(tileSources.mts4GPlan, zoom, interpolation)

export const megafon2G = (zoom, interpolation) => coverage(tileSources.megafon2G, zoom, interpolation)
export const megafon3G = (zoom, interpolation) => coverage(tileSources.megafon3G, zoom, interpolation)
export const megafon4G = (zoom, interpolation) => coverage(tileSources.megafon4G, zoom, interpolation)
export const megafon4GPlus = (zoom, interpolation) => coverage(tileSources.megafon4GPlus, zoom, interpolation)
