import * as Common from "common/commonStyle";
import * as Typo from "common/typography";
import React, {
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as Styled from "./house.style";
import * as database from "firebase/database";

import { Colors } from "common";
import { Commons, Icons, MainImages } from "common/images";
import Character from "components/character";
import Header from "components/header";
import { FirebaseAuthContext } from "context/firebaeAuthContext";
import { WindowContext } from "context/windowContext";
import { useParams } from "react-router-dom";
import { db } from "services/firebase";

import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import YouTube, { YouTubeProps } from "react-youtube";

const GoogleMapApiKey = "AIzaSyATDrDX-idxkAlp_vL6tVftGfdJo7XX1TA";

function House(): ReactElement {
  const { isMobile, scrollPosition, width, windowSize } =
    useContext(WindowContext);
  const { user, userData } = useContext(FirebaseAuthContext);

  const { id } = useParams();
  const [houseData, setHouseData] = useState<HouseDto>();

  const [showImages, setShowImages] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  //#region Google Map
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GoogleMapApiKey,
  });

  const containerStyle = {
    width: "801px",
    height: "450px",
  };

  const center = {
    lat: -8.7277218,
    lng: 116.0438455,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  //#endregion

  //#region Youtube
  const opts = {
    width: "801",
    height: "450",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  //#endregion

  useEffect(() => {
    if (!id) return;

    (async () => {
      const dbRef = database.ref(db, `houses/${id}`);
      const snapshot = await database.get(dbRef);

      setHouseData(snapshot.val());
    })();
  }, []);

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      var headerOffset = 115;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <Header />
      <Styled.Container>
        <Styled.Viewport width={width}>
          <Common.SizedBoxH height={28} />

          <Common.FlexRow alignItems="center">
            <Typo.UbuntuBold fontSize={32} color={Colors.neutralBlack}>
              {houseData?.name}
            </Typo.UbuntuBold>

            <Common.Span />

            <Styled.CircleButton>
              <Common.SizedImage src={Icons.Share} width={18} height={18} />
            </Styled.CircleButton>

            <Common.SizedBoxW width={14} />

            <Styled.CircleButton>
              <Common.SizedImage src={Icons.Favorite} width={18} height={18} />
            </Styled.CircleButton>
          </Common.FlexRow>

          <Common.SizedBoxH height={29} />

          <Common.FlexRow
            justifyContent="space-between"
            alignItems="stretch"
            height={539}
          >
            {houseData && houseData.photos && houseData.photos.length > 0 && (
              <Common.NoOpacityButton onClick={() => setShowImages(true)}>
                <Common.SizedImage
                  src={houseData.photos[0]}
                  width={960}
                  height={539}
                  objectFit="cover"
                  overflow="hidden"
                />
              </Common.NoOpacityButton>
            )}

            <Common.FlexColumn
              justifyContent="space-between"
              alignItems="stretch"
            >
              {houseData &&
                houseData.photos &&
                houseData.photos.length > 1 &&
                houseData.photos.slice(1, 5).map((e, i) => (
                  <Styled.SmallPhotoContainer
                    key={e}
                    onClick={() => setShowImages(true)}
                  >
                    <Styled.SmallPhotoImage src={e} />
                    {i == 3 &&
                      houseData.photos &&
                      houseData.photos.length > 5 && (
                        <Styled.SmallPhotoMore>
                          <Typo.UbuntuBold
                            fontSize={14}
                            color={Colors.neutralWhite}
                          >
                            {houseData.photos.length - 4} more photos
                          </Typo.UbuntuBold>
                        </Styled.SmallPhotoMore>
                      )}
                  </Styled.SmallPhotoContainer>
                ))}
            </Common.FlexColumn>
          </Common.FlexRow>

          <Common.SizedBoxH height={28} />

          <Common.FlexRow alignItems="stretch" justifyContent="space-between">
            <Styled.MembersContainer>
              <Common.FlexRow
                alignItems="center"
                justifyContent="space-between"
              >
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                  # of Gabbis Joined
                </Typo.UbuntuBold>
                <Common.FlexRow alignItems="flex-end">
                  <Typo.UbuntuBold fontSize={32} color={Colors.neutralBlack}>
                    50
                  </Typo.UbuntuBold>
                  <Typo.UbuntuBold fontSize={22} color={Colors.neutralGray300}>
                    /100
                  </Typo.UbuntuBold>
                </Common.FlexRow>
              </Common.FlexRow>

              <div
                style={{
                  height: "76px",
                  padding: "0 84px 0 8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 0,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 1,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 2,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 3,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
                <div
                  style={{
                    width: "0px",
                    overflow: "visible",
                    zIndex: 4,
                  }}
                >
                  <Styled.AbartarContainer>
                    <Styled.AbartarInnerContainer>
                      <Character size={50} data={userData?.character} />
                    </Styled.AbartarInnerContainer>
                  </Styled.AbartarContainer>
                </div>
              </div>

              <Styled.GaugeContainer>
                <Styled.GaugeViewport>
                  <Styled.GaugeFill value={0.4} />
                </Styled.GaugeViewport>

                <Styled.GaugeHandle value={0.4}>
                  <Common.SizedImage
                    src={Commons.Logo}
                    width={34}
                    height={32}
                  />
                </Styled.GaugeHandle>
              </Styled.GaugeContainer>

              <Typo.UbuntuBold
                fontSize={14}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                Members who join this house will get:
              </Typo.UbuntuBold>

              <Typo.UbuntuBold
                fontSize={14}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                <div style={{ color: Colors.brand }}>
                  1. Official residency of this house 🏠
                </div>
                <ul
                  style={{ paddingInlineStart: "1.5em", fontWeight: "normal" }}
                >
                  <li>House name on your profile</li>
                  <li>Vote to the house programs and interiors</li>
                  <li>Invitation for your friends</li>
                  <li>
                    Access to exclusive house contents such as games, merch in
                    Buidling process
                  </li>
                </ul>
                <div style={{ color: Colors.brand }}>
                  2. Exclusive perks as VIP 💎
                </div>
                <ul
                  style={{ paddingInlineStart: "1.5em", fontWeight: "normal" }}
                >
                  <li>
                    Permanent VIP access to this house : private concierge, boat
                    arrangement, priority reservation
                  </li>
                  <li>Yearly free nights, invites, free perks</li>
                  <li>
                    Invitation to Pre-launch party: will get to see the house
                    before anyone else
                  </li>
                  <li>On-site visits before the launch supported</li>
                </ul>
              </Typo.UbuntuBold>

              <Styled.JoinButton>
                <Typo.UbuntuBold fontSize={14} color={Colors.neutralWhite}>
                  Join the House
                </Typo.UbuntuBold>
              </Styled.JoinButton>
            </Styled.MembersContainer>

            <Common.FlexColumn width={825} alignItems="stretch">
              <Common.SizedBoxH height={8.5} />
              <Common.FlexRow alignItems="center">
                <Styled.HouseMenuButton
                  onClick={() => scrollToElement("overview")}
                >
                  <Common.SizedImage src={Icons.House} />
                  <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                    Overview
                  </Typo.UbuntuBold>
                </Styled.HouseMenuButton>

                <Common.SizedBoxW width={14} />

                <Styled.HouseMenuButton
                  onClick={() => scrollToElement("floor-plan")}
                >
                  <Common.SizedImage src={Icons.Layers} />
                  <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                    Floor Plan
                  </Typo.UbuntuBold>
                </Styled.HouseMenuButton>

                <Common.SizedBoxW width={14} />

                <Styled.HouseMenuButton onClick={() => scrollToElement("map")}>
                  <Common.SizedImage src={Icons.Pin} />
                  <Typo.UbuntuBold fontSize={14} color={Colors.neutralBlack}>
                    Map
                  </Typo.UbuntuBold>
                </Styled.HouseMenuButton>
              </Common.FlexRow>
              <Common.SizedBoxH height={8.5} />
              <Common.SizedBoxH height={19} />
              <Typo.IndieFlowerRegular
                fontSize={22}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                “A balance of simplicity and comfort. Stunning, intelligent and
                welcoming.”
              </Typo.IndieFlowerRegular>
              <Common.SizedBoxH height={36} />
              <Common.FlexRow
                alignItems="flex-start"
                justifyContent="flex-start"
                id="overview"
              >
                <Styled.HouseInfoGrid>
                  {houseData?.properties &&
                    houseData.properties.length > 0 &&
                    houseData.properties.slice(0, 5).map((e) => (
                      <>
                        <Typo.UbuntuBold
                          fontSize={14}
                          color={Colors.neutralBlack}
                          key={e.key}
                        >
                          {e.key}
                        </Typo.UbuntuBold>
                        <Typo.UbuntuRegular
                          fontSize={14}
                          color={Colors.neutralBlack}
                          key={e.value}
                        >
                          {e.value}
                        </Typo.UbuntuRegular>
                      </>
                    ))}
                </Styled.HouseInfoGrid>
                <Styled.HouseInfoGrid>
                  {houseData?.properties &&
                    houseData.properties.length > 5 &&
                    houseData.properties.slice(5, 10).map((e) => (
                      <>
                        <Typo.UbuntuBold
                          fontSize={14}
                          color={Colors.neutralBlack}
                          key={e.key}
                        >
                          {e.key}
                        </Typo.UbuntuBold>
                        <Typo.UbuntuRegular
                          fontSize={14}
                          color={Colors.neutralBlack}
                          key={e.value}
                        >
                          {e.value}
                        </Typo.UbuntuRegular>
                      </>
                    ))}
                </Styled.HouseInfoGrid>
              </Common.FlexRow>
              <Common.SizedBoxH height={36} />
              <Typo.UbuntuRegular
                fontSize={14}
                color={Colors.neutralBlack}
                textAlign="left"
              >
                {houseData?.description?.split("\\n").map((e) => (
                  <>
                    {e}
                    <br />
                  </>
                ))}
              </Typo.UbuntuRegular>
              <Common.SizedBoxH height={36} />
              <Typo.IndieFlowerRegular
                fontSize={22}
                color={Colors.neutralBlack}
                textAlign="center"
              >
                {houseData &&
                  houseData.keywords &&
                  houseData.keywords.length > 0 && <>{houseData.keywords[0]}</>}
                {houseData &&
                  houseData.keywords &&
                  houseData.keywords
                    .slice(1)
                    .map((e) => <>&nbsp;&nbsp;|&nbsp;&nbsp;{e}</>)}
              </Typo.IndieFlowerRegular>
              <Common.SizedBoxH height={36} />

              {houseData && houseData.video && (
                <YouTube videoId={houseData.video} opts={opts} />
              )}

              {isLoaded && houseData && houseData.location && (
                <>
                  <Common.SizedBoxH height={36} />

                  <Typo.UbuntuBold
                    fontSize={22}
                    color={Colors.neutralBlack}
                    textAlign="left"
                  >
                    Where You'll Be
                  </Typo.UbuntuBold>

                  <Common.SizedBoxH height={28} />

                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{
                      lat: houseData.location.lat,
                      lng: houseData.location.lng,
                    }}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                  >
                    {/* Child components, such as markers, info windows, etc. */}
                    <></>
                  </GoogleMap>
                </>
              )}
            </Common.FlexColumn>
          </Common.FlexRow>
        </Styled.Viewport>
      </Styled.Container>
      {showImages && (
        <Styled.MorePhotos>
          <Styled.MorePhotosViewport width={width}>
            <button
              style={{
                position: "absolute",
                top: "24px",
                left: "24px",
                display: "flex",
                alignItems: "center",
                border: "none",
                padding: 0,
                zIndex: 1,
                background: "none",
              }}
              onClick={() => setShowImages(false)}
            >
              <Common.SizedImage
                width={24}
                height={24}
                src={Icons.CloseWhite}
              />
              <Common.SizedBoxW width={4} />
              <Typo.UbuntuRegular fontSize={14} color={Colors.neutralWhite}>
                Close
              </Typo.UbuntuRegular>
            </button>

            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Common.FlexRow
                width={1140}
                height={533}
                alignItems="center"
                justifyContent="space-between"
              >
                <Common.NoOpacityButton>
                  <Common.SizedImage
                    width={34}
                    height={34}
                    src={Icons.ArrowLeftWhite}
                  />
                </Common.NoOpacityButton>

                {houseData && houseData.photos ? (
                  <Common.SizedImage
                    src={houseData?.photos[imageIndex]}
                    width={948}
                    height={533}
                    objectFit="cover"
                    overflow="hidden"
                  />
                ) : (
                  <Common.SizedBox width={948} height={533} />
                )}

                <Common.NoOpacityButton>
                  <Common.SizedImage
                    width={34}
                    height={34}
                    src={Icons.ArrowRightWhite}
                  />
                </Common.NoOpacityButton>
              </Common.FlexRow>

              <Common.SizedBoxH height={12} />

              <Styled.MorePhotosList>
                {houseData &&
                  houseData.photos &&
                  houseData.photos.map((e, i) => (
                    <>
                      <Styled.MorePhotosSlot
                        key={e}
                        onClick={() => setImageIndex(i)}
                      >
                        {houseData.photos && (
                          <Styled.MorePhotosSlotImage src={e} />
                        )}
                        {i != imageIndex && <Styled.MorePhotosSlotDeselected />}
                      </Styled.MorePhotosSlot>
                      {houseData.photos && i < houseData.photos.length - 1 && (
                        <div style={{ width: "12px", flexShrink: 0 }} />
                      )}
                    </>
                  ))}
              </Styled.MorePhotosList>

              <Common.SizedBoxH height={12} />

              <Typo.UbuntuRegular fontSize={14} color={Colors.neutralGray300}>
                {imageIndex + 1}/{houseData?.photos && houseData.photos.length}
              </Typo.UbuntuRegular>
            </div>
          </Styled.MorePhotosViewport>
        </Styled.MorePhotos>
      )}
    </>
  );
}

export default House;
