const ImgContainerEle = document.querySelector(".img_container");

const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click", () => {
  // console.log("ok");
  imgNum = 3;
  updateImage();
});

function updateImage() {
  for (let i = 0; i <= imgNum; i++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 1000
    )}`;
    ImgContainerEle.appendChild(newImage);
  }
}
