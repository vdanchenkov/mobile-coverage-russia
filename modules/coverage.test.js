import coverage from './coverage'
import createStorage from './createStorage'
import { mts3G as mts3GSource } from './tileSources'
import * as fixtureA from './../test-helpers/fixtureA'

describe('coverage', () => {
  describe('sample A', () => {
    fixtureA.mockHttp()
    const storage = createStorage()
    const mts = coverage(mts3GSource)

    it('gets coverage data for point 38.460390, 55.606758', () => {
      return mts(storage, 10, 0, 159078, 82370).then((level) => {
        expect(level).to.be.eql(1)
      })
    })

    it('gets coverage data for point with no coverage', () => {
      return mts(storage, 10, 0, 159188, 82313).then((level) => {
        expect(level).to.be.eql(0)
      })
    })

    it('accepts array of points ([[x1,y1], [x2, y2]])', () => {
      return mts(storage, 10, 0, [ [ 159188, 82313 ], [ 159078, 82370 ] ]).then((level) => {
        expect(level).to.be.eql([ 0, 1 ])
      })
    })

    it('accepts point in array form ([x, y])', () => {
      return mts(storage, 10, 0, [ 159188, 82313 ]).then((level) => {
        expect(level).to.be.eql(0)
      })
    })
  })
})
