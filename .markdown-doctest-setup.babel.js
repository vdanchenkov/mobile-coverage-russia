import * as lib from './modules/index.js'
import 'babel-polyfill'
import nock from 'nock'
import { mockHttp } from './test-helpers/fixtureA'

const { mts3G, lonLatToPixel } = lib

export const require = {
  'mobile-coverage-russia': lib
}

export const globals = {
  mts3G,
  lonLatToPixel
}

nock.disableNetConnect()
export const beforeEach = () => {
  mockHttp()
}
