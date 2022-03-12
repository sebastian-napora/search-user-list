import styled, { css } from 'styled-components';

import { device } from 'src/styles/device';

const lightGreyColor = css`
  color: #cccccc;
`;

const displayFlexLeft = css`
  display: flex;
  justify-content: left;
`;

const deviceFont = (
  typeDevice: 'mobileSmall' | 'mobileLarge' | 'tablet' | 'laptop' | 'laptopLarge' | 'desktop',
  font: number
) => css`
  @media ${device[typeDevice]} {
    font-size: ${font}rem;
  }
`;

const deviceFlex = (typeDevice: 'mobileSmall' | 'mobileLarge' | 'tablet' | 'laptop' | 'laptopLarge' | 'desktop') => css`
  @media ${device[typeDevice]} {
    ${displayFlexLeft}
  }
`;

export const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding: 1rem;
  width: 100%;

  @media ${device.mobileSmall} {
    font-size: 1rem;
    padding: 0.5rem 0rem;
  }

  @media ${device.mobileLarge} {
    font-size: 1.1rem;
    padding: 0.5rem 0rem;
  }

  ${deviceFont('tablet', 1.2)}
  ${deviceFont('laptop', 1.5)}
  ${deviceFont('mobileLarge', 1.5)}
  ${deviceFont('desktop', 1.5)}
`;

export const IndexUser = styled.span`
  width: 10%;
  ${lightGreyColor}
`;

export const UserDetails = styled.span`
  display: flex;
  width: 90%;

  @media ${device.mobileSmall} {
    display: grid;
    justify-content: center;
  }

  @media ${device.mobileLarge} {
    display: flex;
    justify-content: center;
  }

  ${deviceFlex('tablet')}
  ${deviceFlex('laptop')}
  ${deviceFlex('mobileLarge')}
  ${deviceFlex('desktop')}
`;

export const UserName = styled.span`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  margin-left: 1rem;
  width: 30%;
  ${lightGreyColor}
  ${deviceFont('mobileSmall', 0.9)}
  ${deviceFont('mobileLarge', 0.9)}
  ${deviceFont('tablet', 1)}
  ${deviceFont('laptop', 1.2)}
  ${deviceFont('mobileLarge', 1.2)}
  ${deviceFont('desktop', 1.2)}
`;
