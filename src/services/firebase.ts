import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD5jTlOtJj0phLd2QdzOL-4Zykg4Ls0o_c",
  authDomain: "gabbis-86f50.firebaseapp.com",
  databaseURL:
    "https://gabbis-86f50-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gabbis-86f50",
  storageBucket: "gabbis-86f50.appspot.com",
  messagingSenderId: "973091860892",
  appId: "1:973091860892:web:0214d48f24d3db4cc51859",
  measurementId: "G-LBENVKLEHM",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
