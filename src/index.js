import "./styles.css";
import giveDropdownBehavior from "./giveDropdownBehavior";
import giveCarouselBehavior from "./giveCarouselBehavior";

const allDropdowns = document.querySelectorAll(".dropdown");
allDropdowns.forEach((dropdown) => {
  giveDropdownBehavior({
    dropdownWrapperNode: dropdown,
  });
});

const allCarousels = document.querySelectorAll(".image-carousel");
allCarousels.forEach((carousel) => {
  giveCarouselBehavior({
    carouselWrapperNode: carousel,
  });
});
