const placeholder = document.createElement('div');
placeholder.classList.add('placeholder-item');

let loadImages = 0;

const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = async (entry) => {
  const container = entry.target;
  container.append(placeholder);
  const image = container.childNodes[0];

  await fetch('https://randomfox.ca/floof/')
    .then((response) => response.json())
    .then((data) => {
      image.dataset.src = data.image;
    });

  const url = image.dataset.src;
  image.src = url;

  const loadImage = container.childNodes[1];

  container.removeChild(loadImage);

  observer.unobserve(container);
  loadImages++;
  console.log('Imágenes cargadas: ' + loadImages);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (image) => {
  observer.observe(image);
};
