export default () => {
  // TODO consider WeakMap
  const storage = {}

  const get = (x, y) => {
    const tileCoord = [ Math.floor(x / 256), Math.floor(y / 256) ]
    const [ innerX, innerY ] = [ x % 256, y % 256 ]
    const buffer = storage[tileCoord.join(':')]
    if (!buffer) {
      return undefined
    }
    const tile = new Uint8Array(buffer)
    return !!((tile[innerY * 256 + Math.floor((innerX % 256) / 8)] >> (innerX % 8)) & 1)
  }
  /**
   *
   * @param x The x coordinate of tile
   * @param y The y coordinate of tile
   * @param Array buffer
   */
  const setTile = (x, y, buffer) => {
    storage[[ x,y ].join(':')] = buffer
  }
  return {
    get,
    setTile
  }
}
