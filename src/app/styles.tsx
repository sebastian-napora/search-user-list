import styled, { css } from 'styled-components';

import { device } from 'src/styles/device';

const devicePadding = (
  typeDevice: 'mobileSmall' | 'mobileLarge' | 'tablet' | 'laptop' | 'laptopLarge' | 'desktop',
  padding: number
) => css`
  @media ${device[typeDevice]} {
    padding: ${padding}rem;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;

  ${devicePadding('mobileSmall', 0)}
  ${devicePadding('mobileLarge', 0)}
  ${devicePadding('tablet', 2)}
  ${devicePadding('laptop', 2)}
  ${devicePadding('laptopLarge', 2)}
  ${devicePadding('desktop', 2)}
`;
