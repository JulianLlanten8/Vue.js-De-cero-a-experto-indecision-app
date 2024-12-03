import { expect, test, describe } from 'vitest';
import { sum, addArray } from '@/helpers/sum';

describe('Add functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    //preparacion
    const a = 1;
    const b = 2;

    //estimulo
    const result = sum(a, b);

    //verificacion
    expect(result).toBe(3);
  });
});


describe('Add array function', () => {
  test('adds [1, 2, 3] to equal 6', () => {
    //preparacion
    const arr = [2, 2, 2, 2];

    //estimulo
    const result = addArray(arr);

    //verificacion
    expect(result).toBe(8);
  });

  test('Should return 0 when the array is empty', () => {
    //preparacion
    const arr: number[] = [];

    //estimulo
    const result = addArray(arr);

    //verificacion
    expect(result).toBe(0);
  });

});