import { expect } from 'chai'
import toGlobalPixels from './toGlobalPixels'

describe('toGlobalPixels', () => {
  // tile width on zoom 12 is 9.8 km
  it('finds pixel coordinates for Samara Square on zoom 17', () => {
    expect(toGlobalPixels(17, [ 50.110838, 53.203667 ])).to.be.eql([ 21447884, 10927468 ])
  })

  it('finds pixel coordinates for Samara railway station', () => {
    expect(toGlobalPixels(12, [ 50.11990322, 53.18492382 ])).to.be.eql([ 670272, 341574 ])
  })

  it('finds pixel coordinates for Moscow Kazansky railway station', () => {
    expect(toGlobalPixels(12, [ 37.65795469, 55.7739398 ])).to.be.eql([ 633974, 328618 ])
  })

  it('finds tile for Averkievo railway station', () => {
    expect(toGlobalPixels(12, [ 38.6341623, 55.653426 ])).to.be.eql([ 636818, 329240 ])
  })
})
