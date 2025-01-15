function getImages(wrapper) {
  return Array.from(wrapper.querySelectorAll(".image"));
}
function getNavCircles(wrapper) {
  return Array.from(wrapper.querySelectorAll(".nav-circle"));
}
function addNavCircles(wrapper, numOfCircles) {
  const circlesWrapperNode = document.createElement("div");
  circlesWrapperNode.classList.add("nav-circles-wrapper");
  for (let circleIndex = 0; circleIndex < numOfCircles; circleIndex += 1) {
    const circleToAdd = document.createElement("div");
    circleToAdd.classList.add("nav-circle");
    circlesWrapperNode.appendChild(circleToAdd);
  }
  wrapper.appendChild(circlesWrapperNode);
}

function getImageControls(wrapper) {
  const goPrevImageControl = wrapper.querySelector(".image-control-left");
  const goNextImageControl = wrapper.querySelector(".image-control-right");
  return {
    prevImageControl: goPrevImageControl,
    nextImageControl: goNextImageControl,
  };
}

function deselectNodes(nodes) {
  nodes.forEach((node) => node.classList.remove("selected"));
}

function selectNodes(nodes) {
  nodes.forEach((node) => node.classList.add("selected"));
}

function findIndexOfFirstSelectedNode(nodesArray) {
  return nodesArray.findIndex((node) => node.classList.contains("selected"));
}

function getCorrectIndex({ currentIndex, length, previous, next }) {
  if (previous) {
    return currentIndex > 0 ? currentIndex - 1 : length - 1;
  }
  if (next) {
    return currentIndex < length - 1 ? currentIndex + 1 : 0;
  }
  return undefined;
}

export default function giveCarouselBehavior({ carouselWrapperNode }) {
  const allImages = getImages(carouselWrapperNode);
  addNavCircles(carouselWrapperNode, allImages.length);
  const indexOfSelected = findIndexOfFirstSelectedNode(allImages);
  const allNavCircles = getNavCircles(carouselWrapperNode);
  selectNodes([allNavCircles[indexOfSelected]]);
  const { prevImageControl, nextImageControl } =
    getImageControls(carouselWrapperNode);

  const traverseCarousel = ({ previous, next }) => {
    const currentIndex = findIndexOfFirstSelectedNode(allImages);
    const newIndex = getCorrectIndex({
      currentIndex,
      previous,
      next,
      length: allImages.length,
    });
    deselectNodes([allImages[currentIndex], allNavCircles[currentIndex]]);
    selectNodes([allImages[newIndex], allNavCircles[newIndex]]);
  };

  prevImageControl.addEventListener("click", () => {
    traverseCarousel({ previous: true, next: false });
  });
  nextImageControl.addEventListener("click", () => {
    traverseCarousel({ previous: false, next: true });
  });

  setInterval(() => traverseCarousel({ previous: false, next: true }), 5000);
}
