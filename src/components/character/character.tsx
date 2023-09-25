import React, { ReactElement, useEffect, useState } from "react";

import * as Styled from "./character.style";
import { getBlob, ref } from "firebase/storage";
import { storage } from "services/firebase";

import CharacterDefault from "img/profile/character_default.png";
const resourcesData = require("characters.json");

function Character(props: { data?: CharacterDto; size: number }): ReactElement {
  const { data, size } = props;

  const multiplier = size / 500;

  const [bodyData, setBodyData] = useState<any>(null);
  const [clothData, setClothData] = useState<any>(null);
  const [eyesData, setEyesData] = useState<any>(null);
  const [faceData, setFaceData] = useState<any[]>([]);
  const [headData, setHeadData] = useState<any>(null);

  useEffect(() => {
    if (resourcesData && data) {
      console.log(data);
      const body = data.body as number;
      setBodyData(resourcesData.body[body ? body : 0].renders[2]);

      if (typeof data.cloth === "number") {
        setClothData(resourcesData.cloth[data.cloth as number].render);
      } else {
        setClothData(null);
      }
      if (typeof data.eyes === "number") {
        setEyesData(resourcesData.eyes[data.eyes as number].render);
      } else {
        setEyesData(null);
      }
      if (typeof data.head === "number") {
        setHeadData(resourcesData.head[data.head as number].render);
      } else {
        setHeadData(null);
      }
      if (data.face) {
        const face = data.face as number[];
        setFaceData(face.map((e) => resourcesData.face[e].render));
      } else {
        setFaceData([]);
      }
    }
  }, [resourcesData, data]);

  return (
    <Styled.Container size={size}>
      {data ? (
        <>
          {bodyData && (
            <Styled.Skin
              src={bodyData.image}
              zIndex={0}
              left={0}
              top={0}
              width={size}
              height={size}
            />
          )}
          {eyesData && <RenderOther data={eyesData} multiplier={multiplier} />}
          {clothData && (
            <RenderOther data={clothData} multiplier={multiplier} />
          )}
          {headData && <RenderOther data={headData} multiplier={multiplier} />}
          {faceData &&
            faceData.map((e) => (
              <RenderOther data={e} multiplier={multiplier} key={e.image} />
            ))}
        </>
      ) : (
        <Styled.Skin
          src={CharacterDefault}
          zIndex={0}
          left={0}
          top={0}
          width={size}
          height={size}
        />
      )}
    </Styled.Container>
  );
}

function RenderOther(props: { data: any; multiplier: number }) {
  const { image, zIndex } = props.data;
  const { width, height, left, top } = props.data.position;
  const multiplier = props.multiplier;

  return (
    <Styled.Skin
      src={image}
      width={width * multiplier}
      height={height * multiplier}
      left={left * multiplier}
      top={top * multiplier}
      zIndex={zIndex}
    />
  );
}

export default Character;
