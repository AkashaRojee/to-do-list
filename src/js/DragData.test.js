import DragData from './DragData.js';

test('Create DragData object', () => {

  const expected = {
    innerHTML: (
      '<div class="flex-row align-center fill">' +
      ' <input type="checkbox">' +
      ' <span class="fill" contenteditable="true">Task 1</span>' +
      '</div>' +
      '<button class="material-icons drag" type="button">more_vert</button>"'
      ).replace(/>\s+</g, '><'),
    checked:
      true
  };

  const result = new DragData(
    ('<div class="flex-row align-center fill">' +
    ' <input type="checkbox">' +
    ' <span class="fill" contenteditable="true">Task 1</span>' +
    '</div>' +
    '<button class="material-icons drag" type="button">more_vert</button>"'
    ).replace(/>\s+</g, '><'),
    true
  );

  expect(result).toEqual(expected);
});