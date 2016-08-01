# Mobile Network Coverage for Russia

## Installation

npm install mobile-coverage-russia

## How it works

Major mobile operators in Russia provide coverage maps in a form of tiles for Yandex Maps. This library downloads map tiles and extracts data from it.

## Usage

Module exports utility function ```lonLatToPixel(zoom, [longitude, latitude])``` which converts geographic coordinates to pixel coordinates in the projection used on coverage maps. We decided to leave explicit conversion to the user because in many cases he will need to process coordinates in one way or another.
   
Main functionality is encapsulated in exported factories with names like ```mts2G, mts3G```. Each supported map have one specific factory.    

```es6
import { createStorage, lonLatToPixel, mts3G } from 'mobile-coverage-russia'

const zoom = 10
const lngLat = [ 38.412416, 55.7048255 ]

mts3G(createStorage(), zoom, 0, lonLatToPixel(zoom, lngLat))
  .then((x) => console.log(x ? 'Have signal' : 'No signal'))
```
                
Calculate average levels in square area

```es6
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
```                                   

Coverage functions support partial application for up to 4 arguments. Following invocations are equal.

```es6
const storage = createStorage()
const zoom = 10
const pixel = lonLatToPixel(zoom, [ 38.412416, 55.7048255 ])
let promise

promise = mts3G(storage, zoom, 0, pixel)
 
// promise = mts3G(storage)(zoom, 0, pixel)

// promise = mts3G(storage, zoom, 0)(pixel)
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
