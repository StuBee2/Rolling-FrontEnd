import styled from "styled-components";
import { HoverAnimation } from "@src/styles/common.style";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  column-gap: 5px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 93%;
  height: 100%;
  padding: 2rem 0 2.5rem 0;

  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  column-gap: 2rem;
`;

export const StarRatingContainer = styled.div`
  width: 100%;
  height: 115px;
  background-color: #f2f4f5;
  border-radius: 10px;
  display: flex;
  font-size: 17px;
  align-items: center;
  margin-top: 1rem;
`;

export const CompanyInfoContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const RegisteredAtAndDelEditContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RegisteredDate = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #61677e;
`;

export const DelAndEditContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-left: 10px;
  img {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;

export const SetUpIconContainer = styled.div`
  width: 30px;
  height: 30px;
  ${HoverAnimation};
`;

export const CompanyContainer = styled.div`
  width: 100%;
  height: calc(100% - 40px);

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;
  column-gap: 2rem;
`;
