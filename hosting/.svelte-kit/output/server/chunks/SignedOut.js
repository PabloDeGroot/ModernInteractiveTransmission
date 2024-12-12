import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { E as setContext, W as getContext, F as FILENAME, C as push, Z as fallback, _ as slot, R as bind_props, G as pop, I as store_get, J as unsubscribe_stores } from "./index2.js";
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
FirebaseApp[FILENAME] = "node_modules/sveltefire/dist/components/FirebaseApp.svelte";
function FirebaseApp($$payload, $$props) {
  push(FirebaseApp);
  let firestore2 = fallback($$props["firestore"], () => void 0, true);
  let rtdb = fallback($$props["rtdb"], () => void 0, true);
  let auth2 = fallback($$props["auth"], () => void 0, true);
  let storage = fallback($$props["storage"], () => void 0, true);
  let analytics = fallback($$props["analytics"], () => void 0, true);
  setFirebaseContext({ firestore: firestore2, rtdb, auth: auth2, storage, analytics });
  $$payload.out += `<!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!---->`;
  bind_props($$props, { firestore: firestore2, rtdb, auth: auth2, storage, analytics });
  pop();
}
FirebaseApp.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
SignedIn[FILENAME] = "node_modules/sveltefire/dist/components/SignedIn.svelte";
function SignedIn($$payload, $$props) {
  push(SignedIn);
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
SignedIn.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
SignedOut[FILENAME] = "node_modules/sveltefire/dist/components/SignedOut.svelte";
function SignedOut($$payload, $$props) {
  push(SignedOut);
  var $$store_subs;
  const auth2 = getFirebaseContext().auth;
  const user = userStore(auth2);
  if (!store_get($$store_subs ??= {}, "$user", user)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { auth: auth2 });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
SignedOut.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  FirebaseApp as F,
  SignedIn as S,
  auth as a,
  SignedOut as b,
  database as d,
  firestore as f
};
