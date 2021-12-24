import express, { Application } from 'express'
import routes from './routes/router'

const app: Application = express()
const port = 3000

// Home page route
app.get('/home-page', (req: express.Request, res: express.Response) => {
  res
    .status(200)
    .send(
      '<h1>Wolcome to the Resizing API Home Page!</h1>  <h2>To resize an Image please send a request with your VALID Width and Heigh and Image name</h2><br>  <h3>Typical VALID request would be:</h3>  <h3 style="color:red;">GET http://localhost:3000/api/image/resize?name={image-name}&width={num >=1}&height={num >=1}</h3>'
    )
})

// initialize all routes
app.use('/api', routes)

// start the Express server
app.listen(port, () => {
  console.log(`server running on port: http://localhost:${port}`)
})

export default app
