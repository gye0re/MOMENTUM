const images= [
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",
];

const choosenImage = images[Math.floor(Math.random()*images.length)]
const body = document.getElementsByTagName("body");
const bgImage= document.createElement("img");
const base= document.getElementById("bgimg");
bgImage.src=`img/${choosenImage}`;
bgImage.style.width="100%";
bgImage.style.backgroundPosition="absolute"




base.appendChild(bgImage);


