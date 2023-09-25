import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div<{ size: number }>`
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;

  position: relative;
`;

export const Skin = styled.img<{
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
}>`
  position: absolute;

  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  left: ${(p) => p.left}px;
  top: ${(p) => p.top}px;
  z-index: ${(p) => p.zIndex};
`;
