import * as lib from './modules/index.js'
import nock from 'nock'
import { mockHttp } from './test-helpers/fixtureA'

const { mts3G, lonLatToPixel, createStorage, coverage } = lib

export const require = {
  'mobile-coverage-russia': lib
}

export const globals = {
  mts3G,
  lonLatToPixel,
  createStorage,
  coverage
}

nock.disableNetConnect()
export const beforeEach = () => {
  mockHttp()
}
