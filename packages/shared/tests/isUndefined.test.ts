import { describe, expect, test } from '@jest/globals';
import * as func from '../src/isUndefined';

describe('is undefined module', () => {
  test('get value expected true', () => {
    const actual = func.isUndefined(undefined);
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('get value expected false', () => {
    const actual = func.isUndefined(false);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
