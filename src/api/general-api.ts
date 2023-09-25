// Incase of secp256k1 curve, get the app_pub_key
import { getPublicCompressed } from "@toruslabs/eccrypto";
import { Web3Auth } from "@web3auth/modal";
import axios from "axios";

const Host = "https://us-central1-gabbis-86f50.cloudfunctions.net/";

export async function VerifyUser(auth: Web3Auth): Promise<any> {
  const app_scoped_privkey = (await auth.provider?.request({
    method: "eth_private_key", // use "private_key" for other non-evm chains
  })) as string;

  const app_pub_key = getPublicCompressed(
    Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
  ).toString("hex");

  /* Assuming user is logged in, get the userInfo containtaing idToken */
  const user = await auth.getUserInfo();

  // Verify idToken at your backend server
  const res = await axios.post(
    `${Host}/users`,
    {
      appPubKey: app_pub_key,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.idToken, // or token.idToken
      },
    }
  );

  return res;
}
