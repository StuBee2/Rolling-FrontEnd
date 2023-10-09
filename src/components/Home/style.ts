import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 5rem;
  justify-content: center;

  background-color: #f9fafb;
  white-space: nowrap;
  min-width: 500px;

  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const HomeContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const HomeWrapper = styled.div`
  width: 1370px;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  @media screen and (max-width: 1385px) {
    width: 1105px;
  }
  @media screen and (max-width: 1165px) {
    width: 90%;
  }
`;
