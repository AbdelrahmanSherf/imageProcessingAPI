import supertest from 'supertest'
import fsExtra from 'fs-extra'
import path from 'path'
import app from '../app'

const APIRequest = supertest(app)

// Global Variables
const validImageName = 'santamonica'
const invalidImageName = 'santamoniCA123'
const validImageWidth = 911
const invalidImageWidth = Number('abcd')
const validImageHeight = 911
const invalidImageHeight = 0
const API_URL = '/api/image/resize'

const existResizedImagePath = path.join(
  __dirname + `./../../resizedImages/${validImageName}_w911px_h911px.jpg`
)
const notExistResizedImagePath = path.join(
  __dirname + `./../../resizedImages/${validImageName}.jpg`
)

describe('Testing different GET api/image/resize endpoint responses', () => {
  it('valid resizing endpoint request', async () => {
    const endpointResponse = await APIRequest.get(
      `${API_URL}?name=${validImageName}&width=${validImageWidth}&height=${validImageHeight}`
    )
    expect(endpointResponse.statusCode).toEqual(200)
  })

  it('invalid resizing endpoint NAME request', async () => {
    const endpointResponse = await APIRequest.get(
      `${API_URL}?name=${invalidImageName}&width=${validImageWidth}&height=${validImageHeight}`
    )
    expect(endpointResponse.statusCode).toEqual(404)
  })

  it('invalid resizing endpoint WIDTH request', async () => {
    const endpointResponse = await APIRequest.get(
      `${API_URL}?name=${validImageName}&width=${invalidImageWidth}&height=${validImageHeight}`
    )
    expect(endpointResponse.statusCode).toEqual(404)
  })

  it('invalid resizing endpoint HEIGHT request', async () => {
    const endpointResponse = await APIRequest.get(
      `${API_URL}?name=${validImageName}&width=${validImageWidth}&height=${invalidImageHeight}`
    )
    expect(endpointResponse.statusCode).toEqual(404)
  })

  it('Checking if image exist', async () => {
    const result = await fsExtra.existsSync(existResizedImagePath)
    expect(result).toBeTrue()
  })

  it('Checking if image do not exist', async () => {
    const result = await fsExtra.existsSync(notExistResizedImagePath)
    expect(result).toBeFalse()
  })
})
