// FirebaseAuthContext.tsx
import * as React from "react";
import { User } from "firebase/auth";
import { auth, db } from "services/firebase";
import { onValue, ref } from "firebase/database";

type FirebaseState = {
  user: User | null | undefined;
  userData: UserDto | null | undefined;
};

const FirebaseAuthContext = React.createContext<FirebaseState>({
  user: undefined,
  userData: undefined,
});

const FirebaseAuthProvider: React.FC<any> = ({ children }) => {
  const [user, setUser] = React.useState<User | null | undefined>(undefined);
  const [userData, setUserData] = React.useState<UserDto | null | undefined>(
    undefined
  );

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    if (!user) {
      setUserData(undefined);
      return;
    }
    return onValue(ref(db, `/users/${user.uid}`), (snapshot) => {
      setUserData(snapshot.val());
    });
  }, [user]);

  return (
    <FirebaseAuthContext.Provider value={{ user, userData }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export { FirebaseAuthProvider, FirebaseAuthContext };
