import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  white-space: pre-line;

  background-color: hsla(0, 100%, 50%, 1);
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.6),
      rgba(255, 255, 255, 0.6)
    ),
    radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);

  backdrop-filter: blur(10px);

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Viewport = styled.div<{ width: number }>`
  width: ${(p) => p.width}px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 48px;

  background: rgba(255, 255, 255, 0.8);

  box-shadow: 0px 2px 10px rgba(90, 90, 90, 0.2);
  border-radius: 20px;

  border: none;
  padding: 16px 35px;

  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: ${Colors.neutralBlack};

  ::placeholder {
    color: #8d9194;
  }
`;

export const EnterButton = styled.button`
  width: 300px;
  height: 48px;

  background: #fa422e;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProviderButton = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;
  border: none;

  background: #ffffff;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dash = styled.div<{ width: number }>`
  width: ${(p) => p.width}px;
  height: 0px;

  border: 0.5px dashed ${Colors.neutralBlack};
`;
