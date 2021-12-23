import express, { Application } from 'express';
import routes from './routes/router';

const app: Application = express();
const port: number = 3000;

// initialize all routes
app.use('/api', routes);

// Home page
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Wolcome to THE resizing APIs Home Page!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server running on port: http://localhost:${port}`);
});
