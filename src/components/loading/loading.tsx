import React, { ReactElement } from "react";
import Spinner from "img/general/spinner.svg";
import * as Styled from "./loading.style";
import { SizedImage } from "common/commonStyle";

function Loading(): ReactElement {
  return (
    <Styled.Container>
      <SizedImage src={Spinner} height={50} alt="Loading" />
    </Styled.Container>
  );
}

export default Loading;
