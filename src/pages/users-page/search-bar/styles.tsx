import styled, { css } from 'styled-components';

import { device } from '@styles/device';

const deviceSizeAndFont = (typeDevice: 'mobileSmall' | 'mobileLarge', maxWidth: number, font: number) => css`
  @media ${device[typeDevice]} {
    max-width: ${maxWidth}px;
    font-size: ${font}rem;
  }
`;

const deviceMaxWidth = (typeDevice: 'tablet' | 'laptop' | 'laptopLarge' | 'desktop', maxWidth: number) => css`
  @media ${device[typeDevice]} {
    max-width: ${maxWidth}px;
  }
`;

export const StyledInput = styled.input`
  font-size: 1.2rem;
  height: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem;
  width: 100%;

  ${deviceSizeAndFont('mobileSmall', 280, 1)}
  ${deviceSizeAndFont('mobileLarge', 390, 1)}
  ${deviceMaxWidth('tablet', 430)}
  ${deviceMaxWidth('laptop', 500)}
  ${deviceMaxWidth('laptopLarge', 600)}
  ${deviceMaxWidth('desktop', 800)}
`;
