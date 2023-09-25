import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./signUp.style";

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
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "services/firebase";

function SignUp(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const { user, userData } = useContext(FirebaseAuthContext);

  useEffect(() => {
    if (user) {
      window.location.replace("/");
    }
  }, [user]);

  const signup = async () => {
    const emailValue = (email ?? "").trim();
    const passwordValue = (password ?? "").trim();
    const passwordConfirmValue = (rePassword ?? "").trim();

    if (!emailValue) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!passwordValue) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!passwordConfirmValue) {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }

    if (!validator.isEmail(emailValue)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (passwordValue !== passwordConfirmValue) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      await sendEmailVerification(user.user, {
        url: "https://nomadinseoul.com",
      });
      navigate(0);
    } catch (error) {
      console.log(error);
      alert("에러 발생.");
      return;
    } finally {
      setEmail("");
      setPassword("");
      setRePassword("");
    }
  };

  const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    auth.languageCode = "KR";
    try {
      const credential = await signInWithPopup(auth, provider);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
            Hello, stranger
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

          <Styled.StyledInput
            placeholder="Confirm Password"
            value={rePassword}
            onChange={(e) => {
              setRePassword(e.target.value);
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

          <Styled.SignUpButton onClick={signup}>
            <Typo.UbuntuRegular color={Colors.neutralWhite} fontSize={14}>
              Sign Up
            </Typo.UbuntuRegular>
          </Styled.SignUpButton>

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
            <Styled.ProviderButton>
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
              Already one of us?&nbsp;
            </Typo.UbuntuRegular>
            <Link to="sign-in">
              <Typo.UbuntuRegular
                fontSize={14}
                color={Colors.brand}
                textDecoration="underline"
              >
                Sign in
              </Typo.UbuntuRegular>
            </Link>
          </Common.FlexRow>
        </Styled.Viewport>
      </Styled.Container>
    </>
  );
}

export default SignUp;
