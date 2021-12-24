import supertest from 'supertest'
import app from '../app'

const APIRequest = supertest(app)

describe('Testing api main/home routes', () => {
  it('GET /home-page Successful connection to the home-page route', async () => {
    const endpointResponse = await APIRequest.get('/home-page')
    expect(endpointResponse.statusCode).toBe(200)
  })
  it('GET /api Successful connection to the main API route', async () => {
    const endpointResponse = await APIRequest.get('/api')
    expect(endpointResponse.statusCode).toBe(200)
  })
})
