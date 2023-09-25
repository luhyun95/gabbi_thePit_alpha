import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  white-space: pre-line;
`;

export const Viewport = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  padding: 80px 123px 170px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  position: relative;
`;

export const CircleButton = styled.button`
  width: 38px;
  height: 38px;

  background: #ffffff;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 50%;

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SmallPhotoContainer = styled.button`
  border: none;
  padding: 0;

  width: 218px;
  height: 122px;

  position: relative;
`;

export const SmallPhotoImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const SmallPhotoMore = styled.div`
  background: rgba(57, 57, 57, 0.6);

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MembersContainer = styled.div`
  position: sticky;
  top: 108px;

  padding: 20px;

  width: 333px;
  height: 661px;

  background: #ffffff;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const HouseMenuButton = styled.button`
  padding: 12px 24px;
  gap: 10px;

  height: 40px;

  background: #ffffff;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HouseInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 246px;
  grid-template-rows: repeat(5, 1fr);
  justify-items: start;
  row-gap: 16px;
`;

export const AbartarContainer = styled.div`
  width: 76px;
  height: 76px;

  background: ${Colors.neutralWhite};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AbartarInnerContainer = styled.div`
  width: 60px;
  height: 60px;

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
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GaugeContainer = styled.div`
  height: 32px;

  position: relative;
`;

export const GaugeViewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const GaugeFill = styled.div<{ value: number }>`
  width: calc(${(p) => p.value * 100}% + 17px);
  height: 8px;

  background: #fa422e;
  border-radius: 4px;
`;

export const GaugeHandle = styled.div<{ value: number }>`
  position: absolute;
  top: 0;
  left: ${(p) => p.value * 100}%;
`;

export const JoinButton = styled.button`
  height: 48px;

  background: #fa422e;

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MorePhotos = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: rgba(57, 57, 57, 0.97);
  backdrop-filter: blur(5px);

  z-index: 1000;
`;

export const MorePhotosViewport = styled.div<{ width: number }>`
  width: ${(p) => p.width}px;
  height: 100%;

  position: relative;
`;

export const MorePhotosList = styled.div`
  width: 1020px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const MorePhotosSlot = styled.button`
  width: 180px;
  height: 100px;

  flex-shrink: 0;

  border: none;
  background: none;

  position: relative;
`;

export const MorePhotosSlotImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  object-fit: cover;
  overflow: hidden;
`;

export const MorePhotosSlotDeselected = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  background: rgba(220, 220, 220, 0.7);
`;
