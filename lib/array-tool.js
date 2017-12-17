export function addItem(array, item) {
  return Array.from(new Set([...array, item]));
}

export function removeItem(array, item) {
  return array.filter((v, i) => v !== item);
}