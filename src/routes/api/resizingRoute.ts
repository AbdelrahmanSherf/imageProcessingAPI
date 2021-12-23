import express, { NextFunction } from 'express';
import path from 'path';
import fsExtra from 'fs-extra';
import resizeImage from '../../functionality/resizeFunc';

const resizingRoute = express.Router();

// resizing endpoint 
resizingRoute.get('/', async (req: express.Request, res: express.Response, next: NextFunction) => {
    
    // query string data
    const queryName   = String(req.query.name);
    const queryWidth  = Number(req.query.width);
    const queryHeight = Number(req.query.height);

    // full path for all images
    const fullSizeImagePath = path.join(__dirname + `/../../images/${queryName}.jpg`);
    const resizedImagePath = path.join(__dirname + `/../../resizedImages/${queryName}_w${queryWidth}px_h${queryHeight}px.jpg`);

    // VALIDATION
    // Validating image name
    if(fsExtra.existsSync(fullSizeImagePath)) {
        console.log('Entered Name Is Valid');

        // Validating width and height
        if(queryWidth >= 1 && queryHeight >= 1) {
            console.log(`entered Width ${queryWidth}px and Height ${queryHeight}px are Valid values`);
        } else {
            console.log('Error, Entered Width and Height are not Valid values');
            return res.status(400).send('<h1>Error, Please enter a Valid image Width and Height</h1>');
        }

    } else {
        console.log('Error, Entered Name is not Valid');
        return res.status(400).send('<h1>Error, Please enter a Valid image name</h1>');
    }

    // check if requested image is already existing
    if(fsExtra.existsSync(resizedImagePath)) {
        try {
            res.status(200).sendFile(resizedImagePath);
            console.log('Successfully retrieved existing resized image');
        } catch {
            res.status(500);
            console.error('ERROR LOCATION: app.ts, Error retrieving already existing resized image');
        }
    } else {
        // if not then resize and send back 
        try {
            const resizedImage = resizeImage(queryWidth, queryHeight, fullSizeImagePath, resizedImagePath);
            res.status(200).sendFile(await resizedImage);
        } catch(error) {
            res.status(500);
            console.error(error, 'ERROR LOCATION: app.ts, Error calling the resizeImage method');
        }
    }
});
export default resizingRoute;