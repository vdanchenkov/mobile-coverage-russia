import http from 'http'

export default (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const chunks = []
      res.on('data', (chunk) => {
        chunks.push(chunk)
      })

      res.on('end', () => {
        resolve(Buffer.concat(chunks))
      })

      res.on('error', (e) => reject(e))
    })
  })
}
