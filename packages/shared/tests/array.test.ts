import { describe, expect, test } from '@jest/globals';
import * as _ from 'lodash';
import * as func from '../src/array';

describe('array module', () => {
  test('generate matrix expected true', () => {
    const actual = func.generateMatrix(1, 1, 0);
    const expected = [[0]];
    const isEqual = _.isEqual(actual, expected);
    expect(isEqual).toBe(true);
  });

  test('generate matrix expected false', () => {
    const actual = func.generateMatrix(1, 1, 0);
    const expected = [[1]];
    const isEqual = _.isEqual(actual, expected);
    expect(isEqual).toBe(false);
  });
});
