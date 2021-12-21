import express from 'express';

const routes = express.Router();

// API main route
routes.get('/', (req: express.Request, res: express.Response) => {
    res.send('Successflly connected to the main route');
});

export default routes;