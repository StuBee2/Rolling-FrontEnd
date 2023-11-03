import styled from "styled-components";

export const RankCategoryTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: rgba(115, 123, 152, 1);

  display: flex;
  align-items: center;
  column-gap: 5px;

  img {
    width: 24px;
    headers: 24px;
  }
`;

export const RankNumber = styled.div`
  width: 40px;
  height: 40px;

  background-color: rgba(29, 30, 90, 1);
  border-radius: 0 0 10px 0;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  color: #fff;
  z-index: 2;
`;
