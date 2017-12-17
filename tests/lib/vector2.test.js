import Vector2 from '../../lib/vector2';

test('create instance of vector2', () => {
  expect(new Vector2()).toMatchObject({
    x: 0,
    y: 0,
  });
  expect(new Vector2(4, 6)).toMatchObject({
    x: 4,
    y: 6,
  });
});

test('add (3, 4) and (2, 6) to be (5, 10)', () => {
  expect(new Vector2(3, 4).add(new Vector2(2, 6))).toMatchObject({
    x: 5,
    y: 10,
  });
});

test('subtract (2, 6) from (3, 4) to be (1, -2)', () => {
  expect(new Vector2(3, 4).subtract(new Vector2(2, 6))).toMatchObject({
    x: 1,
    y: -2,
  });
});

test('multiply (2, 6) by 3 to be (6, 18)', () => {
  expect(new Vector2(2, 6).mulfuction(3)).toMatchObject({
    x: 6,
    y: 18,
  });
});

test('divide (2, 6) by 4 to be (0.5, 1.5)', () => {
  expect(new Vector2(2, 6).division(4)).toMatchObject({
    x: 0.5,
    y: 1.5,
  });
});

test('clone (3, 6) and edit original doesnt effect cloned object', () => {
  const a = new Vector2(2, 4);
  const b = a.clone();
  a.x = 5;
  a.y = 10;
  expect(b).toMatchObject({
    x: 2,
    y: 4,
  });
});

test('(2, 6) . (-1, 4) = 22', () => {
  expect(new Vector2(2, 6).dot(new Vector2(-1, 4))).toBe(22);
});

test('(2, 6) x (-1, 4) = 14', () => {
  expect(new Vector2(2, 6).cross(new Vector2(-1, 4))).toBe(14);
});
