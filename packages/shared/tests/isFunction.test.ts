import { describe, expect, test } from '@jest/globals';
import * as func from '../src/isFunction';

describe('is function module', () => {
  test('get value expected true', () => {
    const actual = func.isFunction(() => {});
    const expected = true;
    expect(actual).toBe(expected);
  });

  test('get value expected false', () => {
    const actual = func.isFunction(false as unknown as Function);
    const expected = false;
    expect(actual).toBe(expected);
  });
});
