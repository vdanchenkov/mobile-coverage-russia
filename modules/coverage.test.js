import coverage from './coverage'
import { mts3G as mts3GSource } from './tileSources'
import * as fixtureA from './../test-helpers/fixtureA'

describe('coverage', () => {
  describe('sample A', () => {
    fixtureA.mockHttp()
    const mts = coverage(mts3GSource, 10)

    it('gets coverage data for point 38.460390, 55.606758', () => {
      return mts(159078, 82370).then((level) => {
        expect(level).to.be.ok
      })
    })

    it('gets coverage data for point with no coverage', () => {
      return mts(159188, 82313).then((level) => {
        expect(level).to.be.not.ok
      })
    })

    it('accepts array of points', () => {
      return mts([ [ 159188, 82313 ], [ 159078, 82370 ] ]).then((level) => {
        expect(level).to.be.eql([ false, true ])
      })
    })
  })
})
