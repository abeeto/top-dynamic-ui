import "./styles.css";
import giveDropdownBehavior from "./giveDropdownBehavior";

const allDropdowns = document.querySelectorAll(".dropdown");
allDropdowns.forEach((dropdown) => {
  giveDropdownBehavior({
    dropdownWrapperNode: dropdown,
  });
});
