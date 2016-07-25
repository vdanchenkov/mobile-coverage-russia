import { default as chai, expect } from 'chai'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import nock from 'nock'

global.expect = expect
global.sinon = sinon
chai.use(sinonChai)
nock.disableNetConnect()
