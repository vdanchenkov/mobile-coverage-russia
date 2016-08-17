import nock from 'nock'
import { readFileSync } from 'fs'
import { join } from 'path'

export const mockHttp = () => {
  nock('http://tiles.mts.ru')
    .get('/G3_New/10/621/321/')
    .replyWithFile(200, join(__dirname, '/10.621.321.png'))
}


export const rawImage = readFileSync(join(__dirname, '10.621.321.png'))
export const emptyImage = readFileSync(join(__dirname, 'empty.png'))
