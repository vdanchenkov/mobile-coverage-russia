export { lonLatToPixel, meterToPixel } from './conversions'
export { default as createStorage } from './createStorage'
import * as tileSources from './tileSources'
import coverage from './coverage'

export const mts2G = coverage(tileSources.mts2G)
export const mts3G = coverage(tileSources.mts3G)
export const mts4G = coverage(tileSources.mts4G)
export const mts4GPlan = coverage(tileSources.mts4GPlan)

export const megafon2G = coverage(tileSources.megafon2G)
export const megafon3G = coverage(tileSources.megafon3G)
export const megafon4G = coverage(tileSources.megafon4G)
export const megafon4GPlus = coverage(tileSources.megafon4GPlus)
