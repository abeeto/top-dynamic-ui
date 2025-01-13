// one module:
// button - "btn-hover" or "btn-click" => add respective event listener
// content - "visible" => toggle this content with this class

function eventTypeByClassName(buttonNode) {
  const toMouseover = buttonNode.classList.contains("btn-hover") && "mouseover";
  const toClick = buttonNode.classList.contains("btn-click") && "click";
  return toMouseover || toClick;
}

export default function giveDropdownBehavior({ dropdownWrapperNode }) {
  const [buttonNode, wrapperNodeToToggleVisibility] =
    dropdownWrapperNode.children;
  const eventType = eventTypeByClassName(buttonNode);
  buttonNode.addEventListener(eventType, () => {
    wrapperNodeToToggleVisibility.classList.toggle("visible");
  });
}
