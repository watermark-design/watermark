import { describe, expect, test } from '@jest/globals';
import * as func from '../src/isString';

describe('is string module', () => {
  test('get value expected true', () => {
    const actual = func.isString('123');
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('get value expected false', () => {
    const actual = func.isString(false as unknown as String);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
