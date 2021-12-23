import sharp from 'sharp';
import fse from 'fs-extra';
import exp from 'constants';

// resize image with sharp
const resizeImage = async(width: number, height: number, originalImagePath: string, resizedImagePath: string) => {
    try {
        const processedImage = sharp(originalImagePath).resize({
            width: width,
            height: height
        });
        await processedImage.toFile(resizedImagePath);
        console.log('Image has been successfually resized');
        return resizedImagePath;
    } catch {
        console.error('ERROR LOCACATION: resizeFunc Module, error resizing the image');
        return 'ERROR Resizing your image';
    }
}

export default resizeImage;
