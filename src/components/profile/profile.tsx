import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./profile.style";

import Header from "components/header";
import { WindowContext } from "context/windowContext";
import { ChainIcons, Icons, MainImages, SocialIcons } from "common/images";

import TopImageSample from "img/profile/CityDay.jpg";
import TopImageMask from "img/profile/top_image_mask.svg";
import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import Colors from "common/colors";
import { magic } from "services/magic";
import { useNavigate } from "react-router-dom";
import Character from "components/character";
import { auth, storage } from "services/firebase";
import { getBlob, ref } from "firebase/storage";
import { toast } from "react-toastify";
import { FirebaseAuthContext } from "context/firebaeAuthContext";

const resourcesData = require("characters.json");

function Profile(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);

  let navigate = useNavigate();

  const { user, userData } = useContext(FirebaseAuthContext);

  useEffect(() => {
    if (user === undefined) return;
    if (!user) window.location.replace("/");

    if (userData === undefined) return;

    if (!userData || !userData.username)
      window.location.replace("set-username");
  }, [user, userData]);

  async function logout() {
    await auth.signOut();
    navigate(0);
  }

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.TopImage src={TopImageSample} mask={TopImageMask} />
        <Common.FlexColumn alignItems="center">
          <Styled.Viewport width={width}>
            <Common.SizedBoxH height={188} />
            <Common.FlexRow alignItems="flex-end" justifyContent="center">
              <Styled.ProfileCard>
                <Styled.ProfilelGabbiContainer>
                  <Styled.CharacterEditButton
                    onClick={() => {
                      navigate("/customize");
                    }}
                  >
                    <Common.SizedImage
                      src={Icons.Edit}
                      width={32}
                      height={32}
                    />
                  </Styled.CharacterEditButton>
                  <Styled.CharacterContainer>
                    <Character data={userData?.character} size={290} />
                  </Styled.CharacterContainer>
                </Styled.ProfilelGabbiContainer>

                <Common.SizedBoxH height={36} />

                <Common.FlexRow alignItems="center" justifyContent="center">
                  <Typo.UbuntuRegular fontSize={32} color={Colors.neutralBlack}>
                    @{userData?.username}
                  </Typo.UbuntuRegular>
                  <Common.SizedBoxW width={12} />
                  <Styled.ProfileLinkButton>
                    <Common.SizedImage
                      src={Icons.Link}
                      width={18}
                      height={18}
                    />
                  </Styled.ProfileLinkButton>
                </Common.FlexRow>

                <Common.SizedBoxH height={28} />

                <Common.FlexRow alignItems="center" justifyContent="center">
                  <WalletAddress wallet="" />
                </Common.FlexRow>

                <Common.SizedBoxH height={28} />

                <Common.FlexRow alignItems="center" justifyContent="center">
                  <Common.SizedImage src={SocialIcons.Twitter} height={24} />
                  <Common.SizedBoxW width={24} />
                  <Common.SizedImage src={SocialIcons.Discord} height={24} />
                  <Common.SizedBoxW width={24} />
                  <Common.SizedImage src={SocialIcons.Instagram} height={24} />
                </Common.FlexRow>

                <Common.SizedBoxH height={36} />

                <Styled.ProfileLogoutButton onClick={logout}>
                  <Typo.UbuntuRegular
                    fontSize={14}
                    color={Colors.neutralGray300}
                  >
                    Log out
                  </Typo.UbuntuRegular>
                </Styled.ProfileLogoutButton>
              </Styled.ProfileCard>

              <Common.SizedBoxW width={45} />

              <Common.FlexColumn
                alignItems="flex-start"
                justifyContent="flex-end"
              >
                <Common.SizedBoxH height={57} />
              </Common.FlexColumn>
            </Common.FlexRow>
          </Styled.Viewport>
        </Common.FlexColumn>
      </Styled.Container>
    </>
  );
}

function WalletAddress(props: { wallet: string }): ReactElement {
  const { wallet } = props;

  function copyText(text: string) {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    toast("Copied!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <Styled.WalletContainer>
      <Common.SizedImage src={ChainIcons.Polygon} width={14} height={14} />
      <Styled.WalletAddress
        fontSize={14}
        color={Colors.neutralGray400}
        width={66}
      >
        {wallet}
      </Styled.WalletAddress>
      <Common.NoOpacityButton
        width={12}
        height={12}
        onClick={() => copyText(wallet)}
      >
        <Common.SizedImage src={Icons.Copy} width={12} height={12} />
      </Common.NoOpacityButton>
    </Styled.WalletContainer>
  );
}

export default Profile;
