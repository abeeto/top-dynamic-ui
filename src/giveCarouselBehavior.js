function getImages(wrapper) {
  return Array.from(wrapper.querySelectorAll(".image"));
}
function addNavCircles(wrapper, numOfCircles) {
  const circlesWrapperNode = wrapper.querySelector(".nav-circles-wrapper");
  for (let circleIndex = 0; circleIndex < numOfCircles; circleIndex += 1) {
    const circleToAdd = document.createElement("div");
    circleToAdd.classList.add("nav-circle");
    circlesWrapperNode.appendChild(circleToAdd);
  }
}

function getImageControls(wrapper) {
  const goPrevImageControl = wrapper.querySelector(".image-control-left");
  const goNextImageControl = wrapper.querySelector(".image-control-right");
  return {
    prevImageControl: goPrevImageControl,
    nextImageControl: goNextImageControl,
  };
}

function selectNode(node) {
  node.classList.add("selected");
}

function deselectNode(node) {
  node.classList.remove("selected");
}
function getIndexOfSelectedImage(images) {
  return images.findIndex((image) => image.classList.contains("selected"));
}

function goToNextImage(images) {
  const pos = getIndexOfSelectedImage(images);
  deselectNode(images[pos]);
  if (pos + 1 !== images.length) {
    selectNode(images[pos + 1]);
  } else {
    selectNode(images[0]);
  }
}

function goToPrevImage(images) {
  const pos = getIndexOfSelectedImage(images);
  deselectNode(images[pos]);
  if (pos - 1 > -1) {
    selectNode(images[pos - 1]);
  } else {
    selectNode(images[images.length - 1]);
  }
}

export default function giveCarouselBehavior({ carouselWrapperNode }) {
  const allImages = getImages(carouselWrapperNode);
  addNavCircles(carouselWrapperNode, allImages.length);
  const { prevImageControl, nextImageControl } =
    getImageControls(carouselWrapperNode);

  prevImageControl.addEventListener("click", () => goToPrevImage(allImages));
  nextImageControl.addEventListener("click", () => goToNextImage(allImages));
}
