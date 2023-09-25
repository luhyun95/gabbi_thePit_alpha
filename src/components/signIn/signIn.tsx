import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./signIn.style";

import { Colors } from "common";
import { Link, useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { Commons, Icons, SocialIcons } from "common/images";
import { magic } from "services/magic";
import validator from "validator";
import { OAuthProvider } from "@magic-ext/oauth";
import { FirebaseAuthContext } from "context/firebaeAuthContext";
import Header from "components/header";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "services/firebase";

function SignIn(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const { user, userData } = useContext(FirebaseAuthContext);

  useEffect(() => {
    if (user) {
      console.log("auth state changed");
      window.location.replace("/");
    }
  }, [user]);

  const signin = async () => {
    const emailValue = (email ?? "").trim();
    const passwordValue = (password ?? "").trim();

    if (!emailValue) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!passwordValue) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
    } catch (error) {
      console.log(error);
      alert("에러 발생.");
      return;
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    provider.setCustomParameters({
      redirect_uri: "https://nomadinseoul.com",
    });
    auth.languageCode = "KR";
    try {
      const credential = await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Styled.Container>
        <Common.FlexColumn alignItems="center" justifyContent="center">
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
              Home Sweet Home
            </Typo.IndieFlowerRegular>

            <Common.SizedBoxH height={28} />

            <Styled.StyledInput
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
            />

            <Common.SizedBoxH height={16} />

            <Styled.StyledInput
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
            />

            <Common.SizedBoxH height={16} />

            <Common.FlexRow width={300}>
              <Common.Span />
              <Link to="forgot-password">
                <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                  Forgot your password?
                </Typo.UbuntuRegular>
              </Link>
            </Common.FlexRow>

            <Common.SizedBoxH height={16} />

            <Styled.SignInButton onClick={signin}>
              <Typo.UbuntuRegular color={Colors.neutralWhite} fontSize={14}>
                Sign In
              </Typo.UbuntuRegular>
            </Styled.SignInButton>

            <Common.SizedBoxH height={24} />

            <Common.FlexRow
              width={300}
              justifyContent="space-between"
              alignItems="center"
            >
              <Styled.Dash width={130} />
              <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                or
              </Typo.UbuntuRegular>
              <Styled.Dash width={130} />
            </Common.FlexRow>

            <Common.SizedBoxH height={24} />

            <Common.FlexRow alignItems="center" justifyContent="center">
              <Styled.ProviderButton onClick={signWithGoogle}>
                <Common.SizedImage
                  src={SocialIcons.Google}
                  width={18}
                  height={18}
                />
              </Styled.ProviderButton>

              <Common.SizedBoxW width={24} />

              <Styled.ProviderButton>
                <Common.SizedImage
                  src={SocialIcons.Apple}
                  width={18}
                  height={17}
                />
              </Styled.ProviderButton>
            </Common.FlexRow>

            <Common.SizedBoxH height={28} />

            <Common.FlexRow justifyContent="center">
              <Typo.UbuntuRegular fontSize={14} color={Colors.neutralBlack}>
                Not a Gabbi yet?&nbsp;
              </Typo.UbuntuRegular>
              <Link to="sign-up">
                <Typo.UbuntuRegular
                  fontSize={14}
                  color={Colors.brand}
                  textDecoration="underline"
                >
                  Sign up
                </Typo.UbuntuRegular>
              </Link>
            </Common.FlexRow>
          </Styled.Viewport>
        </Common.FlexColumn>
      </Styled.Container>
    </>
  );
}

export default SignIn;
