import styled, { createGlobalStyle } from "styled-components";
import { Colors } from "common";
import * as Typo from "common/typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  white-space: pre-line;

  position: relative;
`;

export const TopImage = styled.img<{ mask: any }>`
  position: absolute;
  top: 0;

  width: 100%;
  height: 451px;

  mask-image: ${(p) => `url("${p.mask}")`};
  mask-repeat: no-repeat;
  mask-size: 100% 100%;

  object-fit: cover;
  z-index: -1;
`;

export const Viewport = styled.div<{ width: number }>`
  width: ${(p) => p.width}px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileCard = styled.div`
  width: 374px;
  height: 688.55px;

  background: ${Colors.neutralWhite};

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfilelGabbiContainer = styled.div`
  width: 334px;
  height: 386.55px;

  background-color: hsla(0, 100%, 50%, 1);
  background-image: linear-gradient(
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

  filter: drop-shadow(0px 4px 15px rgba(90, 90, 90, 0.1));

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  position: relative;
`;

export const CharacterEditButton = styled.button`
  position: absolute;

  width: 52px;
  height: 52px;

  right: 17px;
  bottom: 15.55px;

  background: rgba(250, 250, 250, 0.5);

  box-shadow: 0px 4px 15px rgba(90, 90, 90, 0.1);
  border-radius: 20px;

  border: none;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CharacterContainer = styled.div`
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
`;

export const ProfileLinkButton = styled.button`
  border: none;
  padding: none;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 38px;
  height: 38px;

  background: ${Colors.neutralWhite};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 16px;
`;

export const ProfileLogoutButton = styled.button`
  width: 334px;
  height: 48px;

  background: ${Colors.neutralGray100};

  box-shadow: 0px 1px 10px rgba(90, 90, 90, 0.15);
  border-radius: 20px;

  padding: 0;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WalletContainer = styled.div`
  width: 144px;
  height: 24px;

  background: ${Colors.neutralGray100};
  border-radius: 20px;

  padding: 0 20px;
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const WalletAddress = styled(Typo.UbuntuRegular)`
  text-overflow: ellipsis;
  overflow: hidden;
`;
