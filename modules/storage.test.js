import storage from './storage'

describe('storage', () => {
  it('works for first 3 pixels', () => {
    const s = storage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[0] = 0x5
    s.setTile(0, 0, tile)
    expect(s.get(0, 0)).to.be.eql(true)
    expect(s.get(1, 0)).to.be.eql(false)
    expect(s.get(2, 0)).to.be.eql(true)
  })

  it('works for pixels from the middle of 1st tile', () => {
    const s = storage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[256 * 10 + 10] = 0x4
    s.setTile(0, 0, tile)
    expect(s.get(82, 10)).to.be.eql(true)
  })

  it('works for pixels from the middle of arbitrary tile', () => {
    const s = storage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[256 * 10 + 10] = 0x4
    s.setTile(2, 7, tile)
    expect(s.get(2 * 256 + 82, 7 * 256 + 10)).to.be.eql(true)
  })

  it('return undefined if there is no data for specified pixel', () => {
    const s = storage()
    expect(s.get(2 * 256 + 82, 7 * 256 + 10)).to.be.undefined
  })
})
