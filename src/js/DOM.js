export function updateTarget(target, source) {
  target.innerHTML = source.innerHTML;
  if (source.innerHTML !== '') target.querySelector('input').checked = source.checked;
}

export function findParent(target) {
  if (target.parentNode.tagName === 'LI') return target.parentNode;
  if (target.parentNode.tagName === 'DIV') return target.parentNode.parentNode;
  return target;
}

export function getInnerHTML(element) {
  return element.innerHTML;
}

export function setInnerHTML(element, innerHTML) {
  element.innerHTML = innerHTML;
  return element;
}

export function queryElement(element, query) {
  return element.querySelector(query);
}

export function getChecked(element) {
  return element.checked;
}

export function queryElements(element, query) {
  return document.querySelectorAll(query);
}

export function getValue(element) {
  return element.value;
}

export function setValue(element, value) {
  element.value = value;
  return element;
}

export function toggleClass(element, className) {
  element.classList.toggle(className);
}

export function getParent(element) {
  return element.parentNode;
}

export function getNextSibling(element) {
  return element.nextSibling;
}

export function getNextElementSibling(element) {
  return element.nextElementSibling;
}