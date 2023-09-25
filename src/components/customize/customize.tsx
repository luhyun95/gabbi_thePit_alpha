import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, { ReactElement, useContext, useEffect, useState } from "react";
import * as Styled from "./customize.style";

import { Colors } from "common";
import { useNavigate } from "react-router-dom";
import { WindowContext } from "context/windowContext";
import { CustomizeTabIcons, Icons } from "common/images";
import Header from "components/header";
import Character from "components/character";
import { db, storage } from "services/firebase";
import { getBlob, ref as storageRef } from "firebase/storage";
import { set, ref as databaseRef, update, get } from "firebase/database";
import Loading from "components/loading";
import { FirebaseAuthContext } from "context/firebaeAuthContext";

const resourcesData = require("characters.json");

const parts: CharacterParts[] = ["body", "eyes", "cloth", "head", "face"];

function Customize(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);

  let navigate = useNavigate();

  const { user, userData } = useContext(FirebaseAuthContext);

  const [tab, setTab] = useState<CharacterParts>("body");

  const [characterData, setCharacterData] = useState<CharacterDto>();

  useEffect(() => {
    if (userData && !characterData) {
      setCharacterData(userData.character);
    }
  }, [userData]);

  async function saveCustomize() {
    if (!characterData) return;

    if (!user) return;

    const ref = databaseRef(db, `users/${user.uid}`);
    await update(ref, { character: characterData });
    const snapshot = await get(ref);
    navigate("/profile");
  }

  function selectItem(i: number) {
    console.log("click");
    let data = characterData;
    if (!data) data = {};
    switch (tab) {
      case "face":
        if (!data["face"]) data["face"] = [];
        const face = data["face"] as number[];
        if (face.includes(i)) {
          face.splice(face.indexOf(i), 1);
        } else {
          face.push(i);
        }
        data["face"] = face;
        break;
      case "body":
      case "eyes":
        console.log(`new: ${i}`);
        data[tab] = i;
        break;
      case "head":
      case "cloth":
        const part = data[tab];
        console.log(`origin: ${part}, new: ${i}`);
        if (typeof part === "number" && part == i) {
          delete data[tab];
        } else data[tab] = i;
        break;
    }
    setCharacterData({ ...data });
  }

  return (
    <>
      {resourcesData ? (
        <>
          <Header />
          <Styled.Container>
            <Styled.Viewport>
              <Common.SizedBoxH height={96} />

              <Common.FlexRow alignItems="center" justifyContent="center">
                <Styled.CharacterContainer>
                  <Styled.CharacterViewport>
                    <Character data={characterData} size={400} />
                  </Styled.CharacterViewport>
                </Styled.CharacterContainer>

                <Common.SizedBoxW width={36} />

                <Common.FlexColumn alignItems="center" justifyContent="center">
                  <Styled.TabContainer>
                    {parts.map((e) => (
                      <Styled.TabButton
                        disabled={tab === e}
                        onClick={() => {
                          setTab(e);
                        }}
                        key={e}
                      >
                        <Common.SizedImage
                          width={80}
                          height={80}
                          src={CustomizeTabIcons[e][tab === e ? "on" : "off"]}
                        />
                      </Styled.TabButton>
                    ))}
                  </Styled.TabContainer>

                  <Common.SizedBoxH height={40} />

                  <Styled.ItemContainer>
                    <Styled.ItemViewport>
                      <Styled.ItemGrid>
                        {resourcesData[tab].map((e: any, i: number) => {
                          if (tab === "body") {
                            return (
                              <Styled.ItemSlot
                                height={200}
                                key={e.renders[2].image}
                                onClick={() => {
                                  selectItem(i);
                                }}
                              >
                                <Common.SizedImage
                                  src={e.renders[2].image}
                                  width={150}
                                  height={150}
                                  objectFit={"contain"}
                                />
                              </Styled.ItemSlot>
                            );
                          } else {
                            return (
                              <Styled.ItemSlot
                                height={120}
                                key={e.render.image}
                                onClick={() => {
                                  selectItem(i);
                                }}
                              >
                                <Common.SizedImage
                                  src={e.render.image}
                                  width={e.render.position.width * 0.4}
                                  height={e.render.position.height * 0.4}
                                  objectFit={"contain"}
                                />
                              </Styled.ItemSlot>
                            );
                          }
                        })}
                      </Styled.ItemGrid>
                    </Styled.ItemViewport>
                  </Styled.ItemContainer>

                  <Common.SizedBoxH height={28} />

                  <Common.FlexRow alignItems="center" justifyContent="center">
                    <Styled.BackButton
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      <Common.SizedImage
                        src={Icons.Back}
                        width={16}
                        height={16}
                      />
                      <Common.SizedBoxW width={10} />
                      <Typo.UbuntuRegular
                        fontSize={14}
                        color={Colors.neutralGray300}
                      >
                        Back
                      </Typo.UbuntuRegular>
                    </Styled.BackButton>

                    <Common.SizedBoxW width={16} />

                    <Styled.SaveButton onClick={() => saveCustomize()}>
                      <Common.SizedImage
                        src={Icons.CheckWhite}
                        width={16}
                        height={16}
                      />
                      <Common.SizedBoxW width={10} />
                      <Typo.UbuntuRegular
                        fontSize={14}
                        color={Colors.neutralWhite}
                      >
                        Save
                      </Typo.UbuntuRegular>
                    </Styled.SaveButton>
                  </Common.FlexRow>
                </Common.FlexColumn>
              </Common.FlexRow>
            </Styled.Viewport>
          </Styled.Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Customize;
