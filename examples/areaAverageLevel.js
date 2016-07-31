import { mts3G, lonLatToPixel, createStorage } from './../modules/index'

const zoom = 10

const westNorth = [ 38.412416, 55.7048255 ]
const eastSouth = [ 38.605871, 55.677205 ]

const nw = lonLatToPixel(zoom, westNorth)
const se = lonLatToPixel(zoom, eastSouth)

const pixels = []
for(let x = nw[0]; x < se[0]; x++) {
  for(let y = nw[1]; y < se[1]; y++) {
    pixels.push([ x, y ])
  }
}

mts3G(createStorage(), zoom, 0, pixels)
  .then((levels) => levels.reduce((acc, level) => acc + level, 0))
  .then((level) => { console.log(level / pixels.length) })
  .catch(e => console.error(e))
