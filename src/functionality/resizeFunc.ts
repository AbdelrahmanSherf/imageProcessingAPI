import sharp from 'sharp'

// resize image with sharp
const resizeImage = async (
  width: number,
  height: number,
  originalImagePath: string,
  resizedImagePath: string
) => {
  try {
    const processedImage = sharp(originalImagePath).resize({
      width: width,
      height: height
    })
    // await and send to resized folder
    await processedImage.toFile(resizedImagePath)
    console.log('Image has been successfually resized')
    // console.log('debugging','typeof:',typeof resizedImagePath, resizedImagePath); // Debugging
    return resizedImagePath
  } catch (err) {
    console.error(
      'ERROR LOCACATION: resizeFunc Module, error resizing the image'
    )
    // return 'ERROR Resizing your image';
    return `ERROR Resizing your image, ${err}`
  }
}

export default resizeImage
