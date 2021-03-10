import styled, { css } from "styled-components";

import { device } from "@styles/device";

const deviceWidth = (
  typeDevice: "mobileS" | "mobileL" | "tablet" | "laptop" | "laptopL" | "desktop",
  width: number
) => css`
  @media ${device[typeDevice]} {
    width: ${width}%;
  }
`;

export const Content = styled.div`
  text-align: center;
  ${deviceWidth("mobileS", 100)}
  ${deviceWidth("mobileL", 60)}
  ${deviceWidth("tablet", 50)}
  ${deviceWidth("laptop", 40)}
  ${deviceWidth("laptopL", 30)}
  ${deviceWidth("desktop", 20)}
`;

export const Header = styled.header`
  padding-top: 1rem;
  height: 3.5rem;
  font-size: 2rem;
`;
