"use strict";
export function deriv(x, func) {
  const small = 1e-15;
  const x1 = x - small;
  const x2 = x + small;
  const y1 = func(x1);
  const y2 = func(x2);
  const slope = (y2 - y1) / (x2 - x1);
  if (slope < small && slope > -small) {
    return 0;
  } else {
    return slope;
  }
}
export function integral(x1, x2, func) {
  const small = 1e-6;
  let sum = 0;
  for (let x = x1; x < x2; ) {
    sum += (func(x) + func(x + small)) / 2 * small;
    x = x + small;
  }
  return sum;
}
