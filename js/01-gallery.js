import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `,
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", handleKeyDown);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", handleKeyDown);
      },
    },
  );

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
   }
  }

  instance.show();
}
