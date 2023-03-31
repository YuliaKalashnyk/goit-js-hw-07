import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
console.log(gallery);

const listItemMarkup = createListGalery(galleryItems);

gallery.insertAdjacentHTML('beforeend', listItemMarkup);

function createListGalery (galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href = '${original}';
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;
      }).join('');
};

gallery.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    
    const modal = basicLightbox.create(`<img src="${evt.target.dataset.source}">`,
        { onShow: () => window.addEventListener('keydown', onEscKeyPress),
        onClose: () => window.removeEventListener('keydown', onEscKeyPress),
        }
    );
    modal.show();

    function onEscKeyPress(evt) {
        if (evt.code === "Escape") {
            modal.close();
        }
    }
};
