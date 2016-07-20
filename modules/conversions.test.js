import { lonLatToPixel, meterToPixel } from './conversions'

describe('conversions', () => {
  describe('lonLatToPixel', () => {
    it('finds pixel coordinates for Samara Square on zoom 17', () => {
      expect(lonLatToPixel(17, [ 50.110838, 53.203667 ])).to.be.eql([ 21447884, 10927468 ])
    })

    it('finds pixel coordinates for Samara railway station', () => {
      expect(lonLatToPixel(12, [ 50.11990322, 53.18492382 ])).to.be.eql([ 670272, 341574 ])
    })

    it('finds pixel coordinates for Moscow Kazansky railway station', () => {
      expect(lonLatToPixel(12, [ 37.65795469, 55.7739398 ])).to.be.eql([ 633974, 328618 ])
    })

    it('finds tile for Averkievo railway station', () => {
      expect(lonLatToPixel(12, [ 38.6341623, 55.653426 ])).to.be.eql([ 636818, 329240 ])
    })
  })

  describe('meter to pixel', () => {
    it('converts 1km on zoom 12', () => {
      expect(meterToPixel(12, 1000)).to.be.eq(26)
    })

    it('converts 1km on zoom 10', () => {
      expect(meterToPixel(10, 1000)).to.be.eq(6)
    })

    it('converts world\'s width on zoom 0', () => {
      expect(meterToPixel(0, 6378137.000 * 2 * Math.PI)).to.be.eq(256)
    })
  })
})
