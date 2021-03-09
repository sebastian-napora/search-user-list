import styled, { css } from "styled-components";

const lightGreyColor = css`
  color: #cccccc;
`;

export const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  width: 100%;
  padding: 1rem;
`;

export const IndexUser = styled.span`
  width: 10%;
  ${lightGreyColor}
`;

export const UserDetails = styled.span`
  width: 90%;
  display: flex;
`;

export const UserName = styled.span`
  width: 30%;
  align-items: center;
  font-size: 1.2rem;
  display: flex;
  margin-left: 1rem;
  ${lightGreyColor}
`;
