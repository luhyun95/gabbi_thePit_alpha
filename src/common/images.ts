import Logo from "img/icons/gabbi_logo.svg";
import LogoTypo from "img/icons/gabbi_logo_typo.svg";
import Profile from "img/icons/profile.svg";

import Close from "img/icons/close.svg";
import CloseWhite from "img/icons/close_white.svg";
import Mail from "img/icons/mail.svg";
import Link from "img/icons/link.svg";
import Copy from "img/icons/copy.svg";
import Edit from "img/icons/edit.svg";
import CheckWhite from "img/icons/check_white.svg";
import Back from "img/icons/back.svg";
import Map from "img/icons/map_icon.svg";
import Favorite from "img/icons/Favorite.svg";
import Share from "img/icons/Share.svg";
import House from "img/icons/House.svg";
import Pin from "img/icons/Pin.svg";
import Layers from "img/icons/Layers.svg";
import ArrowLeftWhite from "img/icons/ArrowLeftWhite.svg";
import ArrowRightWhite from "img/icons/ArrowRightWhite.svg";

export const Icons = {
  Profile,
  Close,
  CloseWhite,
  Mail,
  Link,
  Copy,
  Edit,
  CheckWhite,
  Back,
  Map,
  Favorite,
  Share,
  House,
  Pin,
  Layers,
  ArrowLeftWhite,
  ArrowRightWhite,
};

export const Commons = {
  Logo,
  LogoTypo,
};

import Google from "img/icons/google_icon.svg";
import Apple from "img/icons/apple_icon.svg";
import WalletConnect from "img/icons/wallet_connect_icon.svg";
import Metamask from "img/icons/metamask_icon.svg";
import Twitter from "img/icons/twitter.svg";
import Discord from "img/icons/discord.svg";
import Instagram from "img/icons/instagram.svg";

export const SocialIcons = {
  Google,
  Apple,
  WalletConnect,
  Metamask,
  Twitter,
  Discord,
  Instagram,
};

import Background from "img/main/background.png";
import Compass from "img/main/compass.png";
import Island from "img/main/island.png";
import Island2 from "img/main/island2.png";

export const MainImages = {
  Background,
  Compass,
  Island,
  Island2,
};

import Polygon from "img/icons/polygon.svg";

export const ChainIcons = {
  Polygon,
};

import BodyOn from "img/customize/body_on.png";
import BodyOff from "img/customize/body_off.png";
import EyesOn from "img/customize/eyes_on.png";
import EyesOff from "img/customize/eyes_off.png";
import ClothOn from "img/customize/cloth_on.png";
import ClothOff from "img/customize/cloth_off.png";
import HeadOn from "img/customize/head_on.png";
import HeadOff from "img/customize/head_off.png";
import FaceOn from "img/customize/face_on.png";
import FaceOff from "img/customize/face_off.png";

export const CustomizeTabIcons: {
  [key in CharacterParts]: {
    on: "*png";
    off: "*png";
  };
} = {
  body: {
    on: BodyOn,
    off: BodyOff,
  },
  eyes: {
    on: EyesOn,
    off: EyesOff,
  },
  cloth: {
    on: ClothOn,
    off: ClothOff,
  },
  head: {
    on: HeadOn,
    off: HeadOff,
  },
  face: {
    on: FaceOn,
    off: FaceOff,
  },
};
