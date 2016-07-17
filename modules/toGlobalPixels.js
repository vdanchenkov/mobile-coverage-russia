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

export default (zoom, [ lon, lat ]) => [
  (circumference / 2 + mercatorX(lon))/ circumference * Math.pow(2, zoom + 8),
  (circumference / 2 - mercatorY(lat))/ circumference * Math.pow(2, zoom + 8)
].map((n) => Math.floor(n))


