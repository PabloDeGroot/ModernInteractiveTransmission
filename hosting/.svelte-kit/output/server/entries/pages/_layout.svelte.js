import { F as FILENAME, B as push, G as push_element, I as pop_element, E as pop } from "../../chunks/index2.js";
import { F as FirebaseApp, a as auth, f as firestore } from "../../chunks/SignedOut.js";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
_layout[FILENAME] = "src/routes/+layout.svelte";
function _layout($$payload, $$props) {
  push(_layout);
  let { children } = $$props;
  $$payload.out += `<nav>`;
  push_element($$payload, "nav", 10, 0);
  $$payload.out += `<a href="/">`;
  push_element($$payload, "a", 11, 1);
  $$payload.out += `home</a>`;
  pop_element();
  $$payload.out += ` <a href="/about">`;
  push_element($$payload, "a", 12, 1);
  $$payload.out += `about</a>`;
  pop_element();
  $$payload.out += `</nav>`;
  pop_element();
  $$payload.out += ` `;
  FirebaseApp($$payload, {
    auth,
    firestore,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
_layout.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _layout as default
};
