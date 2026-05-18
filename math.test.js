const sumar = require('./math');

test('Suma 2 + 2 y debe dar 4', () => {
  expect(sumar(2, 2)).toBe(4);
});
