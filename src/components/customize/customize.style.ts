import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100vw;
  padding: 80px 0 0 0;
  white-space: pre-line;
`;

export const Viewport = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CharacterContainer = styled.div`
  width: 579px;
  height: 662px;

  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    radial-gradient(at 40% 20%, hsla(28, 100%, 74%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  position: relative;
`;

export const CharacterViewport = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 0;
  top: 0;

  pointer-events: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  z-index: 10;
`;

export const TabContainer = styled.div`
  background: ${Colors.neutralGray100};
  width: 578px;
  height: 66px;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;

  overflow: visible;
`;

export const TabButton = styled.button`
  width: 90px;
  height: 90px;

  background: transparent;

  box-shadow: none;
  border-radius: none;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  padding: 0;

  :disabled {
    background: ${Colors.neutralWhite};
    box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
    border-radius: 20px;
  }
`;

export const ItemContainer = styled.div`
  width: 576px;
  height: 452px;

  background: ${Colors.neutralWhite};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  padding: 20px;
`;

export const ItemViewport = styled.div`
  width: 100%;
  height: 100%;
  ::-webkit-scrollbar {
    width: 8px;
    height: 400px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${Colors.neutralGray300};
    border-radius: 20px;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.neutralGray200};
    border-radius: 20px;
  }

  overflow: auto;
`;

export const ItemGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 120px);
  grid-gap: 12px;
`;

export const ItemSlot = styled.button<{ height: number }>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${Colors.neutralGray100};

  box-shadow: 0px 1px 4px rgba(90, 90, 90, 0.2);
  border-radius: 20px;

  border: none;
  padding: 0;

  height: ${(p) => p.height}px;
`;

export const BackButton = styled.button`
  width: 284px;
  height: 48px;

  background: ${Colors.neutralGray100};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
`;

export const SaveButton = styled.button`
  width: 284px;
  height: 48px;

  background: ${Colors.brand};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 27.5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
`;
