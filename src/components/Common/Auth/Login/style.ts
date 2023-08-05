import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1f207d;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-height: 715px) {
    align-items: initial;
  }
`;

export const LoginWrapper = styled.div`
  width: 553px;
  height: 700px;

  margin: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 50px;
  white-space: nowrap;
`;

export const LoginLogo = styled.img`
  width: 179px;
  height: 48px;
  cursor: pointer;
`;

export const LoginFormBox = styled.div`
  width: 75%;
  height: 322px;
`;
