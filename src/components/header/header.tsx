import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import * as Styled from "./header.style";

import { useLocation, useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { Colors } from "common";
import { Commons, Icons, MainImages } from "common/images";
import * as Common from "common/commonStyle";
import SignIn from "components/signIn";
import { magic } from "services/magic";
import SetUsername from "components/setUsername";
import { FirebaseAuthContext } from "context/firebaeAuthContext";

function Header(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  const isTop = useMemo<boolean>(() => scrollPosition < 20, [scrollPosition]);

  let navigate = useNavigate();
  let location = useLocation();

  const { user, userData } = useContext(FirebaseAuthContext);

  return (
    <>
      <Styled.Header
        height={isMobile ? 60 : 95}
        backgroundColor={isTop ? "transparent" : Colors.neutralWhite}
      >
        <Styled.HeaderViewport width={width} isMobile={isMobile}>
          <Common.NoOpacityButton
            width={104}
            height={40}
            onClick={() => navigate("/")}
          >
            <Styled.HeaderLogo width={117} height={45} src={Commons.LogoTypo} />
          </Common.NoOpacityButton>
          <Common.Span />
          {location.pathname !== "/profile" ? (
            <Styled.HeaderProfileButton
              onClick={() => {
                // 현재 위치가 프로필이 아니면
                // 프로필 가기 or 로그인
                if (user === undefined) return;
                if (user) navigate("/profile");
                else navigate("/sign-in");
              }}
            >
              <Common.Center>
                <Common.SizedImage src={Icons.Profile} width={18} height={18} />
              </Common.Center>
            </Styled.HeaderProfileButton>
          ) : (
            <Styled.HeaderProfileButton
              onClick={() => {
                window.location.replace("/");
              }}
            >
              <Common.Center>
                <Common.SizedImage src={Icons.Map} width={18} height={18} />
              </Common.Center>
            </Styled.HeaderProfileButton>
          )}
        </Styled.HeaderViewport>
      </Styled.Header>
    </>
  );
}

export default Header;
