import { addItem, removeItem } from '../../lib/array-tool';

const array = [3, 5, 8, 4];
const addedArray = addItem(array, 12);

test('addItem clones array', () => {
  expect(array).toEqual([3, 5, 8, 4]);
});

test('addItem adds 12 into array', () => {
  expect(addedArray).toEqual([3, 5, 8, 4, 12]);
});

const removedArray = removeItem(array, 8);

test('removeItem clones array', () => {
  expect(array).toEqual([3, 5, 8, 4]);
});

test('removeItem deletes 8 from array', () => {
  expect(removedArray).toEqual([3, 5, 4]);
});

const sameValueAddedArray = addItem(array, 3);
test('addItem cannot add same item', () => {
  expect(array).toEqual([3, 5, 8, 4]);
});
