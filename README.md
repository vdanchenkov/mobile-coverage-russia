# Mobile Network Coverage for Russia

## Installation

npm install mobile-coverage-russia

## How it works

Major mobile operators in Russia provide coverage maps in a form of tiles for Yandex Maps. This library downloads map tiles and extracts data from it.

## Usage

```es6
import { lonLatToPixel, mts3G } from 'mobile-coverage-russia'

const zoom = 10
const lngLat = [ 38.412416, 55.7048255 ]

// coverage object will maintain data cache
const coverage = mts3G(zoom)
coverage(...lonLatToPixel(zoom, lngLat))
  .then((x) => console.log(x ? 'Have signal' : 'No signal'))
```
                
Calculate average levels in square area

```es6
const zoom = 10

const westNorth = [ 38.412416, 55.7048255 ]
const eastSouth = [ 38.605871, 55.677205 ]

const coverage = mts3G(zoom)
const nw = lonLatToPixel(zoom, westNorth)
const se = lonLatToPixel(zoom, eastSouth)

const pixels = []
for(let x = nw[0]; x < se[0]; x++) {
  for(let y = nw[1]; y < se[1]; y++) {
    pixels.push([ x, y ])
  }
}

coverage(pixels)
  .then((levels) => levels.reduce((acc, level) => acc + ~~level, 0))
  .then((level) => { console.log(level / pixels.length) })
  .catch(e => console.error(e))
```
                                          
## Supported maps
### MTS
Available zoom levels: 7 - 12
Meaningful zoom levels: 7 - 10

Maps:      

- mts2G
- mts3G
- mts4G
- mts4GPlan

### Megafon
Available zoom levels: 5 - 12
Meaningful zoom levels: 5 - 10
  
- megafon2G (support is in progress)
- megafon3G
- megafon4G
- megafon4GPlus   
