import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>
    `,
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  onShow: (instance) => {
    document.addEventListener("keydown", handleKeyDown);
  },
  onClose: (instance) => {
    document.addEventListener("keydown", handleKeyDown);
  },
});

function handleKeyDown(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}
