import { queryElement } from './DOM.js';

test('Query selector for single element returns element', () => {
  // Set up document body
  document.body.innerHTML = '<ul>'
    + ' <li>Task 1</li>'
    + ' <li>Task 2</li>'
    + ' <li>Task 3</li>'
    + '</ul>';
  const expected = new DOMParser().parseFromString(
    '<ul>'
    + ' <li>Task 1</li>'
    + ' <li>Task 2</li>'
    + ' <li>Task 3</li>'
    + '</ul>',
    'text/html',
  ).querySelector('ul');

  const result = queryElement(document, 'ul');

  expect(result).toStrictEqual(expected);
});