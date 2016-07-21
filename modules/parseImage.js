import pngparse from 'pngparse-sync'

export default (imageBuffer) => {
  const image = pngparse(imageBuffer).data
  const array = new Uint8Array(new ArrayBuffer(256 * 256 / 8))

  for(let i = 0; i < 256 * 256 ; i++ ) {
    if(image[i * 4 + 3]) {
      const pos = Math.floor(i / 8)
      const mask = 1 << i % 8
      array[pos] |= mask
    }
  }
  return array.buffer
}
