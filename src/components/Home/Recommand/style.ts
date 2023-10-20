import styled from "styled-components";

export const RecommandContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 710px) {
    width: 99%;
  }
`;

export const SeniorRecommand = styled.div`
  font-size: 22px;
  font-weight: bold;
  display: flex;
  align-items: center;
  column-gap: 5px;
  img {
    width: 27px;
    height: 27px;
  }
`;

export const RecommandWrapper = styled.div`
  width: 100%;
  height: 260px;

  border-radius: 10px;

  display: flex;
  justify-content: center;
`;

export const RecommandItemContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ArrowContainer = styled.div`
  width: 50px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;