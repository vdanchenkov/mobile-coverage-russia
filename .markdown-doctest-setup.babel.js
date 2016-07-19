import * as lib from './modules/index.js'

const { mts3G, lonLatToPixel } = lib

export const require = {
  'mobile-coverage-russia': lib
}
export const globals = {
  mts3G,
  lonLatToPixel,
  fetch: () => ({})
}
