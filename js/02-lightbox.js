import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// Створення розмітки
const galleryContainer = document.querySelector('.gallery');

createGalleryItemsMarkup();

function createGalleryItemsMarkup() {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
