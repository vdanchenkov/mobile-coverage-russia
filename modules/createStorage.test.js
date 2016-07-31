import createStorage from './createStorage'

describe('createStorage', () => {
  const zoom = 5
  it('works for first 3 pixels', () => {
    const s = createStorage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[0] = 0x5
    s.setTile(zoom, 0, 0, tile)
    expect(s.get(zoom, 0, 0)).to.be.eql(true)
    expect(s.get(zoom, 1, 0)).to.be.eql(false)
    expect(s.get(zoom, 2, 0)).to.be.eql(true)
  })

  it('works for pixels from the middle of 1st tile', () => {
    const s = createStorage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[32 * 10 + 10] = 0x4
    s.setTile(zoom, 0, 0, tile)
    expect(s.get(zoom, 82, 10)).to.be.eql(true)
  })

  it('works for pixels from the middle of arbitrary tile', () => {
    const s = createStorage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[32 * 10 + 10] = 0x4
    s.setTile(zoom, 2, 7, tile)
    expect(s.get(zoom, 2 * 256 + 82, 7 * 256 + 10)).to.be.eql(true)
  })

  it('return undefined if there is no data for specified pixel', () => {
    const s = createStorage()
    expect(s.get(zoom, 0, 0)).to.be.undefined
  })

  it('reports tile presence', () => {
    const s = createStorage()
    const tile = new ArrayBuffer(256 * 256 / 8)
    new Uint8Array(tile)[32 * 10 + 10] = 0x4
    s.setTile(zoom, 2, 7, tile)
    expect(s.haveTile(zoom, 2, 7)).to.be.ok
  })

  it('reports tile absence', () => {
    const s = createStorage()
    expect(s.get(zoom, 0, 0)).to.be.not.ok
  })
})
