import { S as pop, Q as push, a1 as store_get, a2 as unsubscribe_stores } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { ref, serverTimestamp, onValue, onDisconnect, set } from "firebase/database";
import { a as auth, d as database, S as SignedIn } from "../../../chunks/SignedIn.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
function Presence($$payload, $$props) {
  push();
  var uid = auth.currentUser?.uid;
  let { roomID } = $$props;
  var userStatusDatabaseRef = ref(database, "/status/" + uid);
  var isOfflineForDatabase = {
    state: "offline",
    last_changed: serverTimestamp()
  };
  var isOnlineForDatabase = {
    state: "online",
    roomID,
    last_changed: serverTimestamp()
  };
  onValue(ref(database, ".info/connected"), function(snapshot) {
    if (snapshot.val() == false) {
      return;
    }
    onDisconnect(userStatusDatabaseRef).set(isOfflineForDatabase).then(function() {
      set(userStatusDatabaseRef, isOnlineForDatabase);
    });
  });
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  let roomId = store_get($$store_subs ??= {}, "$page", page).params.slug;
  SignedIn($$payload, {
    children: ($$payload2) => {
      Presence($$payload2, { roomID: roomId });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  children($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
