import styled, { css } from 'styled-components';

import { device } from '@styles/device';

const deviceWidth = (
  typeDevice: 'mobileSmall' | 'mobileLarge' | 'tablet' | 'laptop' | 'laptopLarge' | 'desktop',
  width: number
) => css`
  @media ${device[typeDevice]} {
    width: ${width}%;
  }
`;

export const Content = styled.div`
  text-align: center;
  ${deviceWidth('mobileSmall', 100)}
  ${deviceWidth('mobileLarge', 60)}
  ${deviceWidth('tablet', 50)}
  ${deviceWidth('laptop', 40)}
  ${deviceWidth('laptopLarge', 30)}
  ${deviceWidth('desktop', 20)}
`;

export const Header = styled.header`
  font-size: 2rem;
  height: 3.5rem;
  padding-top: 1rem;
`;
