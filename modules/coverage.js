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
  const func = ([ x, y ]) => _fetch(tileUrl(zoom, x, y)) && 0
  func.useFetch = (fetch) => { _fetch = fetch }
  return func
}
