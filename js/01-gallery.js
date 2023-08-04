import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(basicLightbox);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems.map(({preview, original, description}) => 
`<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`)  
.join("");

galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup)

galleryRef.addEventListener("click", openOriginalImage);

function openOriginalImage(event){
  if(event.target.nodeName !== 'IMG') {
    return 
  };
  event.preventDefault();
   basicLightbox.create(`<img src="${event.target.dataset.source}" alt = "${event.target.alt}"/>`, {
    className: 'basicLightbox',
    onShow: (basicLightbox) => {window.addEventListener('keydown', (event) => {
      if(event.code === 'Escape')basicLightbox.close()})},
    onClose: (basicLightbox) => {window.removeEventListener('keydown', (event) => {basicLightbox.close()})}
  }).show()
     
}
