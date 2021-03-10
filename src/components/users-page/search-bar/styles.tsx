import styled, { css } from "styled-components";

import { device } from "@styles/device";

const deviceSizeAndFont = (typeDevice: "mobileS" | "mobileL", maxWidth: number, font: number) => css`
  @media ${device[typeDevice]} {
    max-width: ${maxWidth}px;
    font-size: ${font}rem;
  }
`;

const deviceMaxWidth = (typeDevice: "tablet" | "laptop" | "laptopL" | "desktop", maxWidth: number) => css`
  @media ${device[typeDevice]} {
    max-width: ${maxWidth}px;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;
  height: 0.5rem;
  width: 100%;
  font-size: 1.2rem;

  ${deviceSizeAndFont("mobileS", 280, 1)}
  ${deviceSizeAndFont("mobileL", 390, 1)}
  ${deviceMaxWidth("tablet", 430)}
  ${deviceMaxWidth("laptop", 500)}
  ${deviceMaxWidth("laptopL", 600)}
  ${deviceMaxWidth("desktop", 800)}
`;
