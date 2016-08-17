import parseImage from './parseImage'
import { rawImage } from './../test-helpers/fixtureA'
import { emptyImage } from './../test-helpers/fixtureA'

describe('parseImage', () => {
  it('parses mts 3g sample A', () => {
    const result = parseImage(rawImage)
    expect(result.byteLength).to.be.eql(256 * 32)
    const array = new Uint8Array(result)
    const byteAt = (x, y) => array[y * 32 + Math.floor(x / 8)]
    expect(byteAt(208, 101)).to.be.eql(0x0C)
    expect(byteAt(160, 122)).to.be.eql(0x88)
  })

  it('parses empty image', () => {
    const result = parseImage(emptyImage)
    expect(result.byteLength).to.be.eql(256 * 32)
    const array = new Uint8Array(result)
    const byteAt = (x, y) => array[y * 32 + Math.floor(x / 8)]
    expect(byteAt(208, 101)).to.be.eql(0x0)
    expect(byteAt(160, 122)).to.be.eql(0x0)
  })
})
