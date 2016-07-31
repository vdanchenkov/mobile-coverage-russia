import { createStorage, lonLatToPixel, mts3G } from './../modules/index'

const zoom = 10
const lngLat = [ 38.412416, 55.7048255 ]

mts3G(createStorage(), zoom, 0, lonLatToPixel(zoom, lngLat))
  .then((x) => console.log(x ? 'Have signal' : 'No signal'))
