import { describe, expect, test } from '@jest/globals';
import * as _ from 'lodash';
import * as func from '../src/common';

describe('common module', () => {
  test('get value expected true', () => {
    const actual = func.getValue(undefined, '456');
    const expected = '456';
    const isEqual = _.isEqual(actual, expected);
    expect(isEqual).toBe(true);
  });

  test('get value expected false', () => {
    const actual = func.getValue('123', '345');
    const expected = '345';
    const isEqual = _.isEqual(actual, expected);
    expect(isEqual).toBe(false);
  });
});
