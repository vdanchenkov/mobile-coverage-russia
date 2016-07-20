import coverage from './coverage'

const fetchStub = (buffer) => () => {
  return Promise.resolve({ arrayBuffer: Promise.resolve(buffer) })
}

describe('coverage', () => {
  const lakeCoords = [ 50.1765013, 53.2165812 ]

  it('searches for fetch in global object (self object in browser)', () => {
    global.fetch = sinon.spy(fetchStub())
    const mts = coverage(() => '', 10)
    mts([ 0, 0 ])
    expect(global.fetch).to.have.been.called
    delete global.fetch
  })

  it('correctly builds tile url', () => {
    global.fetch = sinon.spy(fetchStub())
    const mts = coverage((z, x, y) => `http://example.com/${z}/${x}/${y}`, 10)
    mts([ 3, 7 ])
    expect(global.fetch).to.have.been.calledWith('http://example.com/10/3/7')
    delete global.fetch
  })
})
