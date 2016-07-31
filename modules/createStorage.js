export default () => {
  // TODO consider WeakMap
  const storage = {}

  const get = (zoom, x, y) => {
    const tileCoord = [ zoom, Math.floor(x / 256), Math.floor(y / 256) ]
    const [ innerX, innerY ] = [ x % 256, y % 256 ]
    const buffer = storage[tileCoord.join(':')]
    if (!buffer) {
      return undefined
    }
    const tile = new Uint8Array(buffer)
    const mask = 1 << innerX % 8
    return !!(tile[innerY * 32 + Math.floor(innerX / 8)] & mask)
  }
  /**
   *
   * @param zoom The zoom
   * @param x The x coordinate of tile
   * @param y The y coordinate of tile
   * @param Array buffer
   */
  const setTile = (zoom, x, y, buffer) => {
    storage[[ zoom, x, y ].join(':')] = buffer
  }

  const haveTile = (zoom, x, y) => {
    return storage[[ zoom, x, y ].join(':')] !== undefined
  }

  return {
    get,
    setTile,
    haveTile
  }
}
