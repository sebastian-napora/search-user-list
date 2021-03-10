import styled, { css } from "styled-components";

import { device } from "@styles/device";

const lightGreyColor = css`
  color: #cccccc;
`;

const displayFlexLeft = css`
  display: flex;
  justify-content: left;
`;

const deviceFont = (
  typeDevice: "mobileS" | "mobileL" | "tablet" | "laptop" | "laptopL" | "desktop",
  font: number
) => css`
  @media ${device[typeDevice]} {
    font-size: ${font}rem;
  }
`;

const deviceFlex = (typeDevice: "mobileS" | "mobileL" | "tablet" | "laptop" | "laptopL" | "desktop") => css`
  @media ${device[typeDevice]} {
    ${displayFlexLeft}
  }
`;

export const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  width: 100%;
  padding: 1rem;

  @media ${device.mobileS} {
    font-size: 1rem;
    padding: 0.5rem 0rem;
  }

  @media ${device.mobileL} {
    font-size: 1.1rem;
    padding: 0.5rem 0rem;
  }

  ${deviceFont("tablet", 1.2)}
  ${deviceFont("laptop", 1.5)}
  ${deviceFont("laptopL", 1.5)}
  ${deviceFont("desktop", 1.5)}
`;

export const IndexUser = styled.span`
  width: 10%;
  ${lightGreyColor}
`;

export const UserDetails = styled.span`
  width: 90%;
  display: flex;

  @media ${device.mobileS} {
    display: grid;
    justify-content: center;
  }

  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
  }

  ${deviceFlex("tablet")}
  ${deviceFlex("laptop")}
  ${deviceFlex("laptopL")}
  ${deviceFlex("desktop")}
`;

export const UserName = styled.span`
  width: 30%;
  align-items: center;
  font-size: 1.2rem;
  display: flex;
  margin-left: 1rem;
  ${lightGreyColor}
  ${deviceFont("mobileS", 0.9)}
  ${deviceFont("mobileL", 0.9)}
  ${deviceFont("tablet", 1)}
  ${deviceFont("laptop", 1.2)}
  ${deviceFont("laptopL", 1.2)}
  ${deviceFont("desktop", 1.2)}
`;
