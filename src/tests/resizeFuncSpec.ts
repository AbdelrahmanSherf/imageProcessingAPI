import resizeImage from "../functionality/resizeFunc";
import path from "path";

// Global Variables
const imageName = 'fjord';
const validImageWidth = 911;
const invalidImageWidth = Number('abcd');
const validImageheight = 911;
const invalidImageHeight = 0;
const fullSizeImagePath = path.join(__dirname + `./../../images/${imageName}.jpg`);
const resizedImagePath = path.join(__dirname + `./../../resizedImages/${imageName}_w${validImageWidth}px_h${validImageheight}px.jpg`);

describe('testing resizing funciton with sharp', () => {

    it('image with Valid inputs should pass', async () => {
        try {
            const result = await resizeImage(validImageWidth, validImageheight, fullSizeImagePath, resizedImagePath);
            expect(result).toEqual(resizedImagePath)
        } catch(err) {
            console.log(err, 'Error: test case for resizing an image with valid inputs faild!');
        }
    });

    it('image with Invalid image path or image width and height should pass and throw error', async () => {
        try {
            const result = await resizeImage(invalidImageWidth, invalidImageHeight, fullSizeImagePath, resizedImagePath);
            expect(result).toThrowError();
        } catch(err) {
            console.log(err, 'Error: test case for resizing an image with invalid inputs faild!');
        } 
    });
});

