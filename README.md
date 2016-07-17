# Mobile Network Coverage for Russia

## Installation

npm install mobile-coverage-russia

## How it works

Major mobile operators in Russia provide coverage maps in a form of tiles designed to use as layer in Yandex Maps. This library downloads map tiles and extracts data from it.

## Usage

    import { toGlobalPixels, mts } from 'mobile-coverage-russia
    
    const zoom = 15 
    const lngLat = [ 50.110838, 53.203667 ]
    const radius = '100m'
    
    // constructed object will maintain data cache 
    const coverage = mts(zoom)
    coverage(toGlobalPixels(zoom, lngLat))
                
Calculate average levels in square area

    import { toGlobalPixels, mts } from 'mobile-coverage-russia
    
    const zoom = 15 
    const westNorth = [ 50.110838, 53.203667 ]
    const eastSouth = [ 50.110898, 53.203697 ]
    
    const coverage = mts(zoom)
    nw = toGlobalPixels(zoom, westNorth)
    se = toGlobalPixels(zoom, eastSouth)

    var levels = [0, 0, 0, 0]
    for(let x = nw[1]; x < se[1]; x++) {
      for(let y = nw[2]; y < se[2]; y++) { 
        levels[coverage(zoom, pixel)]++
      }
    } 
    
    var square = (se[1] - nw[1]) * (se[2] - nw[2])         
    levels.map(l => l / square)

Library tries to use fetch from window or global objects. If you do not have it there, provide [fetch](https://fetch.spec.whatwg.org/) compatible function.
 
    const coverage = mts(10)
    mts.useFetch(fetch)
