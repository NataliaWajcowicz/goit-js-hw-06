const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector("ul.gallery");

console.log(list);
list.style.listStyleType = "none";
list.style.display = "flex";
list.style.flexDirection = "row";
list.style.width = "1000px";
list.style.padding = "0"
list.style.justifyContent="space-between"


  let markup=images.map(({url,alt}) => {
  return `<li><img src="${url} alt="${alt}"/></li>`
  }).join("")
list.insertAdjacentHTML("afterbegin", markup);

const image = list.firstChild.firstChild;
image.style.width = "300px";
image.style.height = "200px";

const middleImage = image.parentElement.nextElementSibling.firstChild;
middleImage.style.width = "300px";
middleImage.style.height = "200px";

const lastImage = list.lastChild.firstChild;
console.log(lastImage);
lastImage.style.width = "300px";
lastImage.style.height = "200px";





 



