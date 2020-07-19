import Photos from './photos';
import './index.css'

const photos = new Photos();

console.log('hello from webpack dev server')


const main = async () => {
  console.log(await photos.getPhotos());
}

const isValidJSON = (text) => {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('test'));



main();

