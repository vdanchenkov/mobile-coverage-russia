# Mobile Network Coverage for Russia

## Installation

npm install mobile-coverage-russia

## How it works

Major mobile operators in Russia provide coverage maps in a form of tiles for Yandex Maps. This library downloads map tiles and extracts data from it.

## Usage

```es6
import { lonLatToPixel, mts3G } from 'mobile-coverage-russia'

const zoom = 15 
const lngLat = [ 50.110838, 53.203667 ]
const radius = '100m'

// constructed object will maintain data cache 
const coverage = mts3G(zoom)
coverage(lonLatToPixel(zoom, lngLat))
```
                
Calculate average levels in square area

```es6
const zoom = 15
const westNorth = [ 50.110038, 53.203997 ]
const eastSouth = [ 50.110998, 53.203067 ]

const coverage = mts3G(zoom)
const nw = lonLatToPixel(zoom, westNorth)
const se = lonLatToPixel(zoom, eastSouth)

let level = 0                                                 
for(let x = nw[0]; x < se[0]; x++) {
  for(let y = nw[1]; y < se[1]; y++) {
    level = level + coverage([ x, y ])
  }
}
const square = (se[1] - nw[1]) * (se[2] - nw[2])
const averageLevel = level / square
```
                                          
Library tries to use fetch from window or global objects. If you do not have it there, provide [fetch](https://fetch.spec.whatwg.org/) compatible function.

```es6
const coverage = mts3G(10)
coverage.useFetch(fetch)
```
