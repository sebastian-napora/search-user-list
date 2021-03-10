import styled, { css } from "styled-components";

import { device } from "@styles/device";

const devicePadding = (
  typeDevice: "mobileS" | "mobileL" | "tablet" | "laptop" | "laptopL" | "desktop",
  padding: number
) => css`
  @media ${device[typeDevice]} {
    padding: ${padding}rem;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;

  ${devicePadding("mobileS", 0)}
  ${devicePadding("mobileL", 0)}
  ${devicePadding("tablet", 2)}
  ${devicePadding("laptop", 2)}
  ${devicePadding("laptopL", 2)}
  ${devicePadding("desktop", 2)}
`;
