import express from 'express';
import resizingRoute from './api/resizingRoute';

const routes = express.Router();

// API main route
routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Successflly connected to the main route');
});

// resize route
routes.use('/image/resize', resizingRoute);
export default routes;