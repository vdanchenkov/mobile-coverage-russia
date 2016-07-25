import parseImage from './parseImage'
import createStorage from './storage'

const isNode = () => typeof self != undefined

const fetchStub = () => {
  const message = isNode() ? `
Global fetch is not defined

Polyfill it with isomorphic-fetch or whatwg-fetch. Alternatively, you could provide compatible implementation with map.useFetch(fetch).
` : `
Global fetch is not defined

Set it explicitly with map.useFetch(require('node-fetch')). Or consider usage of some polyfill like isomorphic-fetch.
`
  throw new Error(message)
}

export default (tileUrl, zoom) => {
  let _fetch = typeof fetch !== 'undefined' ? fetch : fetchStub
  const storage = createStorage()

  const func = async (x, y) => {
    if (!y && Array.isArray(x)) {
      const result = new Array(x.length)
      for(let i = 0; i < x.length; i++) {
        result[i] = await func(...x[i])
      }
      return result
    }
    let value = storage.get(x, y)
    if (typeof value === 'boolean') {
      return value
    } else {
      const tileX = x / 256 | 0
      const tileY = y / 256 | 0
      const request = await _fetch(tileUrl(zoom, tileX, tileY))
      const buffer = await request.arrayBuffer()
      storage.setTile(tileX, tileY, parseImage(buffer))
      return storage.get(x, y)
    }
  }

  func.useFetch = (fetch) => { _fetch = fetch }
  return func
}
