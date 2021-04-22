import { registerImage } from './lazy';

const images = document.getElementById('images');
const add_button = document.getElementById('add');
const remove_button = document.getElementById('remove');

let addImages = 0;

add_button.addEventListener('click', () => {
  const container = document.createElement('div');
  container.classList.add('p-4');

  const image = document.createElement('img');
  image.classList.add('mx-auto');
  image.width = 320;

  container.append(image);

  images.append(container);
  registerImage(container);

  addImages++;
  console.log('Imágenes agregadas: ' + addImages);
});

remove_button.addEventListener('click', () => {
  images.innerHTML = '';
});
