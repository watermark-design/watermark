import { isUndefined } from './isUndefined';

export const getValue = (v1: any, v2: any): any => {
  if (isUndefined(v1)) {
    return v2;
  } else {
    return v1;
  }
};
