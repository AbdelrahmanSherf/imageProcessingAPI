import express from 'express';
import routes from './routes/mainRoute';

const app = express();
const port: number = 3000;

// start the Express server
app.listen(port, () => {
  console.log(`server connected at: http://localhost:${port}`);
});

// main route 
app.use('/api', routes);