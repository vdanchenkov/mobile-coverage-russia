import coverage from './coverage'
import { readFileSync } from 'fs'
import { join } from 'path'
import { mts3G as mts3GSource } from './tileSources'

const fetchStub = (buffers = {}) => (url) => {
  return Promise.resolve({ arrayBuffer: () => Promise.resolve(buffers[url]) })
}

describe('coverage', () => {
  it('searches for fetch in global object (self object in browser)', () => {
    global.fetch = sinon.spy(fetchStub())
    const mts = coverage(() => '', 10)
    mts([ 0, 0 ])
    expect(global.fetch).to.have.been.called
    delete global.fetch
  })

  it('correctly builds tile url', () => {
    global.fetch = sinon.spy(fetchStub({ 'http://example.com/10/3/7': new Uint8Array(0) }))
    const mts = coverage((z, x, y) => `http://example.com/${z}/${x}/${y}`, 10)
    mts([ 3 * 256, 7 * 256 ])
    expect(global.fetch).to.have.been.calledWith('http://example.com/10/3/7')
    delete global.fetch
  })

  describe('sample 10.621.321.png', () => {
    const fetch = sinon.spy(fetchStub({
      [mts3GSource(10, 621, 321)]: readFileSync(join(__dirname, '..', 'test-helpers', '10.621.321.png'))
    }))
    const mts = coverage(mts3GSource, 10)
    mts.useFetch(fetch)

    it('gets coverage data for point 38.460390, 55.606758', () => {
      return mts([ 159078, 82370 ]).then((level) => {
        console.log(level)
        expect(level).to.be.ok
      })
    })

    it('gets coverage data for point with no coverage', () => {
      return mts([ 159188, 82313 ]).then((level) => {
        expect(level).to.be.not.ok
      })
    })
  })
})
