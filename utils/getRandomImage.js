let nextImages = [
  "images/candyland.png",
  "images/mojito.png",
  "images/rainbow.png",
  "images/santorini.png",
  "images/summer.png",
];

function getRandomImage() {
  let randomNum = Math.floor(Math.random() * nextImages.length);
  console.log("the random num", randomNum);
  console.log("the image returned", nextImages[randomNum]);
  return nextImages[randomNum];
}

export default getRandomImage;
