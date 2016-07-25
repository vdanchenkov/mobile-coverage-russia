import { lonLatToPixel, mts3G } from './../modules/index'

const zoom = 10
const lngLat = [ 50.110838, 53.203667 ]

const coverage = mts3G(zoom)
coverage(...lonLatToPixel(zoom, lngLat))
  .then((x) => console.log(x ? 'Have signal' : 'No signal'))
