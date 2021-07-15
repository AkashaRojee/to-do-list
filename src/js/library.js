export function createElement(elementType, classNames = '', attributes = {}, innerHTML = '') {
  const elementObject = document.createElement(elementType);
  if (classNames) elementObject.classList.add(...(classNames.split(' ')));
  Object.keys(attributes).forEach((attribute) => {
    elementObject.setAttribute(attribute, attributes[attribute]);
  });
  elementObject.innerHTML = innerHTML;
  return elementObject;
}

export function addListeners(elements, listeners) {
  elements.forEach((element) => {
    Object.entries(listeners).forEach(([event, listener]) => {
      element.addEventListener(event, listener);
    });
  });
}