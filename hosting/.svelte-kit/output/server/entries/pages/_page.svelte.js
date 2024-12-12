import { F as FILENAME, C as push, K as push_element, O as pop_element, G as pop, N as attr, M as invalid_default_snippet } from "../../chunks/index2.js";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { a as auth, b as SignedOut, S as SignedIn } from "../../chunks/SignedOut.js";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import "../../chunks/Toast.js";
import "../../chunks/client.js";
const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO2ZbUwbZQDHL45M5vygycRkL0YFlWw9oHdFYSsr69uItBksIYwOwiC8KKwq4EAY8TYYsoG8CIOFCduCzmiTQbveNSC4q7p9chlkEo0fTIxrC2uPFzcXoC885sggdYP2bj1ajP0n/y9N7+nvd9fnuadXCAommGB8DsBEIdMVaB5VjBDWTPTOuFIwNy4TuCx7Y4FFGAss+wQLEwp09q4KNdsK+QNUKT8XYFAIFOj8VQ7HUQXIDUsS6jTHxwI2tcgFTlsecmO6KjrG/+DVgjeoPPS2JUHACnpFEWEssB1BRmeOo+F+gZ/6EGk2SwQLvoI/JiIWuGY+QE6vGThoittky0F+4Rrc/EhtOcgIwNI2cgo/0wk/b1UhE2sNb37YaTW/lTN4cFEUak1Hrf6CpwoQEuIyVD7ys9/g8zmGny5B2lhNRDnqpPKRm1Ml/OqpkzGiexi65X5ZVJjtGCyhSmMwKhcZpZfPVc68kVP4mVo03CITuJiCT5UgXUwmnxlDn7Ed5V9yF6G4hqczqUZ+YgJvPYyY7tfxXmQ7Pr3uWzOQ8TWBB9/v2jE/DM9PlfGBebfHJe8W0EAboPUWBwmfdhhhQPfvc9FgXPL4HdeaiZrWJTzQpG2wG3mmJQG6c7ooYFWhbt95gZMqid4GrcfYjbx4d/jlXoPBvbqYxb3LpBrphtZr7Ea4akWBh31wIXoCqJOehtZr7CR8xZOAwwi3sRnvhXwj4KrJVT1/eP1Ah5E35lGAjEoKlMBbpd/Mev1AOwlPehKYJXdGBErgtWLCxURg3pMAIHc+GyiBbYXD4H8hMOlJYO6HqNcDJRBRRCz8xyexhtEk7vOyjLYHSuDt4z0mBgK8ytXg717jg1pc9qBJk7YJ4jiNvWWbee/pnJ4E3q1v0DMQgONWgh8ZfhNk6RRA0Z8CWgziC1wLqM/Ud3u7AjXtFSqvAwEAPWU38u4sgduNMOgfEIIU7YFFeLqHdQpnx0DCDq7g61sqXo4s1rs8wUcexZ0YiTF7mucwwvU0/AwZDWpw+TK4eyuuyi0kKfL58SBGYiHJlT0Wb2c/p7b1OuNBAQlv/21YYM/TJa8Iv9QTuGzUFwmMxELSsY4xb/BbC78DNZ99hLIavA6XjnqCX74Serml+9vdW9nCdw3teSm/sfZ3JqtP2sedY2zHh3SDCa9kahUuJhKZOoWzjUjswS5mh3obt3dQtrkFl3yu0ipcqX2p4OCpVo/w4UWGBexTjNXNczkdhLhZyUDAXaROLx05axBjXxEJ4iuD8WGXSdGWHsMeYbshseYELr9Jv8f9GGVfKshqxkBYAbmiQMGpxk7Il9QTkhGmAr40u+t9sP2doX/Bp1Sf/xXyNRpN2sZjuv3jfpHozQWRav0i/L7yL6gi7CyrjeOqIUnRc5V6ucUfEoe+VoGMmlYT1omFcQLvJhF6EpfdZjMnnqS1hHTEYFjD39xdhr0Nh7RKRqsTm2Zola5zRGID5I/06kQRdbj01kG37cWTNrX/wOJZvzwkfBXydy4NCtEzuPTHHG2yg/WE1Skcn+DS61/iMv//yfdoNADacB4XH2nCxfpKXPZngTZ5NkurcNFXiN4EpmuVC/Rr5Vf3mxoICdFlSMymj4GCCSYYyNf8A50RcaYC8geEAAAAAElFTkSuQmCC";
_page[FILENAME] = "src/routes/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  let ready = false;
  auth.authStateReady().then(() => {
    ready = true;
  });
  new GoogleAuthProvider();
  let roomId = "";
  $$payload.out += `<main class="flex justify-center items-center flex-1">`;
  push_element($$payload, "main", 29, 0);
  if (!ready) {
    $$payload.out += "<!--[-->";
  } else {
    $$payload.out += "<!--[!-->";
    SignedOut($$payload, {
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload2, { auth: auth2 }) => {
          $$payload2.out += `<div class="card card-hover variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-sm flex flex-col items-center">`;
          push_element($$payload2, "div", 32, 12);
          $$payload2.out += `<header class="card-header text-center text-lg font-bold underline underline-offset-4">`;
          push_element($$payload2, "header", 35, 16);
          $$payload2.out += `Sign In</header>`;
          pop_element();
          $$payload2.out += ` <footer class="card-footer p-4 mb-5 mt-5 flex flex-col items-center">`;
          push_element($$payload2, "footer", 40, 16);
          $$payload2.out += `<button type="button" class="btn variant-filled w-full">`;
          push_element($$payload2, "button", 43, 20);
          $$payload2.out += `<img${attr("src", img)} alt="Google Logo" class="w-6 h-6">`;
          push_element($$payload2, "img", 48, 24);
          pop_element();
          $$payload2.out += ` <span>`;
          push_element($$payload2, "span", 49, 24);
          $$payload2.out += `Login with Google</span>`;
          pop_element();
          $$payload2.out += `</button>`;
          pop_element();
          $$payload2.out += ` <button type="button" class="btn variant-filled w-full mt-4">`;
          push_element($$payload2, "button", 52, 20);
          $$payload2.out += `Anon logIn</button>`;
          pop_element();
          $$payload2.out += `</footer>`;
          pop_element();
          $$payload2.out += `</div>`;
          pop_element();
        }
      }
    });
    $$payload.out += `<!----> `;
    SignedIn($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<div class="card card-hover variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-sm">`;
        push_element($$payload2, "div", 62, 12);
        $$payload2.out += `<div class="card-content">`;
        push_element($$payload2, "div", 65, 16);
        $$payload2.out += `<header class="card-header text-center text-lg font-bold underline underline-offset-4">`;
        push_element($$payload2, "header", 66, 20);
        $$payload2.out += `Join a Room</header>`;
        pop_element();
        $$payload2.out += ` <form>`;
        push_element($$payload2, "form", 72, 20);
        $$payload2.out += `<section class="p-4 mb-5 mt-5">`;
        push_element($$payload2, "section", 78, 24);
        $$payload2.out += `<input${attr("value", roomId)} class="input p-1 rounded-md border-none outline-primary-500 placeholder-gray-300 backdrop-hue-rotate-180 backdrop-brightness-50" style="background-color: #00000030;" title="Enter Room Id" type="text" placeholder="Enter Room Id">`;
        push_element($$payload2, "input", 79, 28);
        pop_element();
        $$payload2.out += `</section>`;
        pop_element();
        $$payload2.out += ` <footer class="card-footer">`;
        push_element($$payload2, "footer", 88, 24);
        $$payload2.out += `<button class="btn variant-filled-secondary w-full">`;
        push_element($$payload2, "button", 89, 28);
        $$payload2.out += `Join</button>`;
        pop_element();
        $$payload2.out += `</footer>`;
        pop_element();
        $$payload2.out += `</form>`;
        pop_element();
        $$payload2.out += `</div>`;
        pop_element();
        $$payload2.out += `</div>`;
        pop_element();
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></main>`;
  pop_element();
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
