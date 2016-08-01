import * as lib from './modules/index.js'
import nock from 'nock'
import { mockHttp } from './test-helpers/fixtureA'

const { mts3G, lonLatToPixel, createStorage } = lib

export const require = {
  'mobile-coverage-russia': lib
}

export const globals = {
  mts3G,
  lonLatToPixel,
  createStorage
}

nock.disableNetConnect()
export const beforeEach = () => {
  mockHttp()
}
