const images = [
  {
    url: "<https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260>",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "<https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260>",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "<https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260>",
    alt: "Group of Horses Running",
  },
];
const getGallery = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();

images.forEach(element => {
  const imageLi = document.createElement("li");
  const image = document.createElement("img");
  image.setAttribute("src", element.url);
  image.setAttribute("alt", element.alt);
  imageLi.appendChild(image);
  fragment.appendChild(imageLi);
});

getGallery.appendChild(fragment);


//console.log(getGallery);
getGallery.style.display = "flex";
getGallery.style.flexDirection = "column";
getGallery.style.backgroundColor = "white";






