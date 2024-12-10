import { F as FILENAME, C as push, G as pop, I as store_get, J as unsubscribe_stores } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { ref, serverTimestamp, onValue, onDisconnect, set } from "firebase/database";
import { a as auth, d as database, S as SignedIn } from "../../../chunks/SignedOut.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
Presence[FILENAME] = "src/lib/Components/Presence.svelte";
function Presence($$payload, $$props) {
  push(Presence);
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
Presence.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
_layout[FILENAME] = "src/routes/[slug]/+layout.svelte";
function _layout($$payload, $$props) {
  push(_layout);
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
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
