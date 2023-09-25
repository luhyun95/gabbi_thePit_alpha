import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./setUsername.style";

import { Colors } from "common";
import { Commons, Icons } from "common/images";
import { FirebaseAuthContext } from "context/firebaeAuthContext";
import { WindowContext } from "context/windowContext";
import { useNavigate } from "react-router-dom";
import * as database from "firebase/database";
import validator from "validator";
import { db } from "services/firebase";

function SetUsername(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  let navigate = useNavigate();

  const urlParams = new URLSearchParams(location.search);
  const redirectUrl = urlParams.get("redirectUrl");

  const [username, setUsername] = useState("");

  const { user, userData } = useContext(FirebaseAuthContext);

  useEffect(() => {
    if (user === undefined) return;

    if (!user) {
      window.open("/sign-in");
    }

    if (userData === undefined) return;

    if (userData && userData.username) {
      if (redirectUrl) {
        window.location.replace(`/${redirectUrl}`);
      } else {
        window.location.replace("/");
      }
    }
  }, [user, userData]);

  async function handleSetUsername() {
    if (!user) {
      return;
    }

    await database.set(database.ref(db, "users/" + user.uid), {
      username: username,
    });
  }

  return (
    <Styled.Container>
      <Styled.Viewport width={width}>
        <Common.NoOpacityButton
          onClick={() => {
            window.location.replace("/");
          }}
        >
          <Common.SizedImage src={Commons.Logo} width={59} height={68} />
        </Common.NoOpacityButton>

        <Common.SizedBoxH height={12} />

        <Typo.IndieFlowerRegular fontSize={42} color={Colors.neutralBlack}>
          Almost ready to rock!
          <br />
          Let’s give you a cool nickname.
        </Typo.IndieFlowerRegular>

        <Common.SizedBoxH height={28} />

        <Styled.StyledInput
          placeholder="Enter Nickname"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <Common.SizedBoxH height={24} />

        <Styled.EnterButton onClick={handleSetUsername}>
          <Typo.UbuntuRegular color={Colors.neutralWhite} fontSize={14}>
            Get Started
          </Typo.UbuntuRegular>
        </Styled.EnterButton>
      </Styled.Viewport>
    </Styled.Container>
  );
}

export default SetUsername;
