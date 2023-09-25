import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import * as Components from "components";

import { WindowProvider } from "context/windowContext";

import { createGlobalStyle } from "styled-components";

import * as Styled from "./App.style";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FirebaseAuthProvider } from "context/firebaeAuthContext";

import UbuntuRegular from "fonts/ubuntu/Ubuntu-Regular.ttf";
import UbuntuBold from "fonts/ubuntu/Ubuntu-Bold.ttf";
import PlasterRegular from "fonts/plaster/plaster_regular.ttf";
import VibesRegular from "fonts/vibes/vibes_regular.ttf";
import IndieFlowerRegular from "fonts/indie_flower/indie_flower_regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Ubuntu;
    src:url(${UbuntuRegular}) format('truetype');
    font-weight: normal;
  }

  @font-face {
    font-family: Ubuntu;
    src:url(${UbuntuBold}) format('truetype');
    font-weight: bold;
  }

  @font-face {
    font-family: IndieFlower;
    src:url(${IndieFlowerRegular}) format('truetype');
  }

  @font-face {
    font-family: Plaster;
    src:url(${PlasterRegular}) format('truetype');
  }

  @font-face {
    font-family: Vibes;
    src:url(${VibesRegular}) format('truetype');
  }
  
  body {
    font-family: Ubuntu, IndieFlower, Plaster, Vibes;
  }
`;

export default function App(): ReactElement {
  return (
    <Styled.Container>
      <GlobalStyle />
      <ToastContainer />
      <WindowProvider>
        <FirebaseAuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Components.Main />} path="/" />
              <Route element={<Components.SignIn />} path="/sign-in" />
              <Route element={<Components.SignUp />} path="/sign-up" />
              <Route element={<Components.Profile />} path="/profile" />
              <Route element={<Components.Customize />} path="/customize" />
              <Route element={<Components.SetUsername />} path="set-username" />
              <Route path="houses">
                <Route element={<Components.House />} path=":id" />
              </Route>
            </Routes>
          </BrowserRouter>
        </FirebaseAuthProvider>
      </WindowProvider>
    </Styled.Container>
  );
}
