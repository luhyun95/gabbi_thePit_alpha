import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

export const magic = new Magic("pk_live_C51F07D7CC1ECF65", {
  extensions: [new OAuthExtension()],
});
