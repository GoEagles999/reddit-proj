const multiplyBy321 = reqiore('./multiply')

test('multiplies 5 by 321 to get 1605', () => {
  expect(multiplyBy321(5)).toBe(1605)
}