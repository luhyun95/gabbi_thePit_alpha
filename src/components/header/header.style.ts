import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

//#region header
export const Header = styled.div<{ backgroundColor: string; height: number }>`
  position: fixed;
  width: 100vw;
  height: ${(props) => props.height}px;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.backgroundColor};
  z-index: 100;
`;

export const HeaderViewport = styled.div<{ width: number; isMobile: boolean }>`
  width: ${(props) => props.width}px;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${(props) => (props.isMobile ? 10 : 25)}px
    ${(props) => (props.isMobile ? 20 : 40)}px;
`;

export const HeaderLogo = styled.img<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export const HeaderProfileButton = styled.button`
  padding: 0;

  width: 34px;
  height: 34px;

  background: ${Colors.neutralWhite};
  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);

  border: none;
  border-radius: 50%;
`;

export const SigninViewport = styled.div`
  width: 217px;
  height: 45px;
  background: rgba(238, 243, 246, 0.8);
  box-shadow: 0px 2px 10px rgba(90, 90, 90, 0.2);
  border-radius: 27.5px;
  display: flex;
  align-items: center;
`;
//#endregion
