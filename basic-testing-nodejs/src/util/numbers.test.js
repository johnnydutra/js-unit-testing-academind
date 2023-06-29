import { it, expect, describe } from 'vitest';
import { transformToNumber } from './numbers';

it('should return a number when a string containing a number is passed', () => {
  const value = '2'
  const expected = 2
  const actual = transformToNumber(value)
  expect(actual).toEqual(expected)
})

it('should return 1 when boolean true is passed', () => {
  const value = true
  const expected = 1
  const actual = transformToNumber(value)
  expect(actual).toEqual(expected)
})

it('should return 0 when boolean false is passed', () => {
  const value = false
  const expected = 0
  const actual = transformToNumber(value)
  expect(actual).toEqual(expected)
})

it('should return NaN when a string contain anything but numbers is passed', () => {
  const value = 'three'
  const actual = transformToNumber(value)
  expect(actual).toBeNaN
})

it('should return the correct number when passing a concatenation of strings containing only numbers', () => {
  const one = '1'
  const two = '2'
  const expected = 12
  const actual = transformToNumber(one + two)
  expect(actual).toEqual(expected)
})

//

it('should transform a string number to a number of type number', () => {
  const input = '1'
  const result = transformToNumber(input)
  expect(result).toBeTypeOf('number')
})

it('should yield NaN for non-transformable values', () => {
  const input = 'invalid'
  const input2 = {}

  const result = transformToNumber(input)
  const result2 = transformToNumber(input2)

  expect(result).toBeNaN()
  expect(result2).toBeNaN()
})