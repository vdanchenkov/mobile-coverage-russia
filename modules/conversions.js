const rMajor = 6378137.000
const rMinor = 6356752.3142
const circumference = 2 * Math.PI * rMajor

const deg_rad = (ang) => ang * (Math.PI/180.0)

const mercatorX = (lon) => rMajor * deg_rad(lon)

const mercatorY = (lat) => {
  if (lat > 89.5) {
    lat = 89.5
  }
  if (lat < -89.5) {
    lat = -89.5
  }

  const eccent = Math.sqrt(1.0 - Math.pow(rMinor / rMajor, 2))
  const phi = deg_rad(lat)
  let con = eccent * Math.sin(phi)
  const com = .5 * eccent
  con = Math.pow((1.0-con)/(1.0+con), com)
  const ts = Math.tan(.5 * (Math.PI*0.5 - phi))/con
  return 0 - rMajor * Math.log(ts)
}

/**
 * Converts geographic coordinates to global pixel coordinates.
 *
 * @param zoom The zoom level. Side length is 2 ^ (zoom + 8). 0 means world is presented as square with 256 pixels per side.
 * @param lon
 * @param lat
 */
export const lonLatToPixel = (zoom, [ lon, lat ]) => [
  meterToPixel(zoom, circumference / 2 + mercatorX(lon)),
  meterToPixel(zoom, circumference / 2 - mercatorY(lat))
]

/**
 * Converts meters in mercator projection to pixel distance
 *
 * Take a note that distance in projection is equal to physical distance only around equator.
 *
 * @param zoom The zoom level. Side length is 2 ^ (zoom + 8). 0 means world is presented as square with 256 pixels per side.
 * @param distance The distance in meters
 * @returns {number} The number of pixels the equals to given distance
 */
export const meterToPixel = (zoom, distance) => {
  return Math.floor(distance / circumference * Math.pow(2, zoom + 8))
}
