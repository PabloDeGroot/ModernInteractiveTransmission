import { F as FILENAME, B as push, G as push_element, I as pop_element, E as pop, M as invalid_default_snippet } from "../../chunks/index2.js";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { S as SignedOut, b as SignedIn } from "../../chunks/SignedOut.js";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  new GoogleAuthProvider();
  $$payload.out += `<main>`;
  push_element($$payload, "main", 14, 0);
  SignedOut($$payload, {
    children: invalid_default_snippet,
    $$slots: {
      default: ($$payload2, { auth }) => {
        $$payload2.out += `<button>`;
        push_element($$payload2, "button", 17, 12);
        $$payload2.out += `logIn</button>`;
        pop_element();
      }
    }
  });
  $$payload.out += `<!----> `;
  SignedIn($$payload, {
    children: invalid_default_snippet,
    $$slots: {
      default: ($$payload2, { auth, signOut }) => {
        $$payload2.out += `<button>`;
        push_element($$payload2, "button", 22, 12);
        $$payload2.out += `logOut</button>`;
        pop_element();
      }
    }
  });
  $$payload.out += `<!----></main>`;
  pop_element();
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
