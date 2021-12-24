import express from 'express'
import resizingRoute from './api/resizingRoute'

const routes = express.Router()

// API main route
routes.get('/', (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(
      '<h1>Successfully connected to the main API route</h1><br><a href="home-page">Home Page for more info</a>'
    )
})

// resize route
routes.use('/image/resize', resizingRoute)
export default routes
