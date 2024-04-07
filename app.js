const galleryItem = document.getElementsByClassName("gallery-item");
//create element for container
const lightBoxContainer = document.createElement("div");
//for baic areaa
const lightBoxContent = document.createElement("div");
//for images
const lightBoxImg = document.createElement("img");
// for prev button
const lightBoxPrev = document.createElement("div");
// for next botton
const lightBoxNext = document.createElement("div");

// now to create a clsslist

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-container");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxContent.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

// now creating the function
let index = 1;

function showLightBox(n) {
  if (n > galleryItem.length) {
    index = 1;
  } else if (n < 1) {
    index = galleryItem.length;
  }
  let imageLocation = galleryItem[index - 1].children[0].getAttribute("src");
  lightBoxImg.setAttribute("src, imageLocation");
}

function currentImage() {
  lightBoxContainer.style.display = "block";

  let imageIndex = parseInt(this.getAttribute("data-index"));
  showLightBox((index = imageIndex));
}

for (let i = 0; i < galleryItem.length; i++) {
  galleryItem[i].addEventListener("click", currentImage);
}

function sliderImage(n) {
  showLightBox((index += n));
}

function prevImage() {
  sliderImage(-1);
}
function nextImage() {
  sliderImage(1);
}
