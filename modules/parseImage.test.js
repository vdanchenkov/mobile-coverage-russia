import { readFileSync } from 'fs'
import { join } from 'path'
import parseImage from './parseImage'

describe('parseImage', () => {
  it('parses mts 3g sample 10.621.321.png', () => {
    const image = readFileSync(join(__dirname, '..', 'test-helpers', '10.621.321.png'))
    const result = parseImage(image)
    expect(result.byteLength).to.be.eql(256 * 32)
    const array = new Uint8Array(result)
    const byteAt = (x, y) => array[y * 32 + Math.floor(x / 8)]
    expect(byteAt(208, 101)).to.be.eql(0x0C)
    expect(byteAt(160, 122)).to.be.eql(0x88)
  })
})
