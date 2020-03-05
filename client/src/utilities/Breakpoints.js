// Dependencies
import { css } from 'styled-components';

// Size breakpoints declaration
const size = {
  s: 496,
  m: 744,
  l: 992,
  xl:1240
};

// Above the size in pixels
export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

// Below the size in pixels
export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
