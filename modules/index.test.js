import { expect } from 'chai'
import { lonLatToPixel, mts3G } from './index'

describe('examples from readme', () => {
  describe('first', () => {
    it('does not throw exceptions', () => {
      const zoom = 15
      const lngLat = [ 50.110838, 53.203667 ]

      const coverage = mts3G(zoom)
      const level = coverage(lonLatToPixel(zoom, lngLat))
    })
  })

  describe('second', () => {
    it('does not throw exceptions', () => {
      const zoom = 15
      const westNorth = [ 50.110038, 53.203997 ]
      const eastSouth = [ 50.110998, 53.203067 ]

      const coverage = mts3G(zoom)
      const nw = lonLatToPixel(zoom, westNorth)
      const se = lonLatToPixel(zoom, eastSouth)

      let level = 0
      for(let x = nw[0]; x < se[0]; x++) {
        for(let y = nw[1]; y < se[1]; y++) {
          level = level + coverage([ x, y ])
        }
      }
      const square = (se[1] - nw[1]) * (se[2] - nw[2])
      const averageLevel = level / square
    })
  })
})
