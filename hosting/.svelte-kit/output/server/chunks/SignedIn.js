import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { R as setContext, a7 as getContext, a1 as store_get, V as slot, a2 as unsubscribe_stores, S as pop, Q as push } from "./index2.js";
import { w as writable } from "./index.js";
let firebaseConfig = {
  apiKey: "AIzaSyBBtp0X-mJVTRHKFBMwt2_3pxIbfhhz_ak",
  authDomain: "dreamreactfirebase.firebaseapp.com",
  projectId: "dreamreactfirebase",
  storageBucket: "dreamreactfirebase.firebasestorage.app",
  messagingSenderId: "622346676045",
  appId: "1:622346676045:web:a646ed4187bc79d7443904",
  measurementId: "G-6FNYF33DY3",
  databaseURL: "https://dreamreactfirebase-default-rtdb.europe-west1.firebasedatabase.app"
};
let firebase = initializeApp(firebaseConfig);
let firestore = getFirestore(firebase);
let auth = getAuth(firebase);
let database = getDatabase(firebase);
function userStore(auth2, startWith = null) {
  let unsubscribe;
  if (!globalThis.window) {
    const { subscribe: subscribe2 } = writable(startWith);
    return {
      subscribe: subscribe2
    };
  }
  if (!auth2) {
    console.warn("Firebase Auth is not initialized. Are you missing FirebaseApp as a parent component?");
    const { subscribe: subscribe2 } = writable(null);
    return {
      subscribe: subscribe2
    };
  }
  const { subscribe } = writable(auth2?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth2, (user) => {
      set(user);
    });
    return () => unsubscribe();
  });
  return {
    subscribe
  };
}
const contextKey = "firebase";
function setFirebaseContext(sdks) {
  setContext(contextKey, sdks);
}
function getFirebaseContext() {
  return getContext(contextKey);
}
function SignedIn($$payload, $$props) {
  push();
  var $$store_subs;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  if (store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot(
      $$payload,
      $$props,
      "default",
      {
        user: store_get($$store_subs ??= {}, "$user", user),
        auth: auth2,
        signOut: () => signOut(auth2)
      }
    );
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  SignedIn as S,
  auth as a,
  database as d,
  firestore as f,
  getFirebaseContext as g,
  setFirebaseContext as s,
  userStore as u
};
