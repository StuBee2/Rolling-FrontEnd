import { css } from "styled-components";

export const HoverAnimation = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #eeeeee;
    transform: scale(0.98);
  }
  &:active {
    background-color: #dddddd;
  }
`;