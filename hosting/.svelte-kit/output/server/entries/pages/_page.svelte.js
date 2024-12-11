import { a1 as store_get, V as slot, a2 as unsubscribe_stores, S as pop, Q as push, Z as attr, a3 as invalid_default_snippet } from "../../chunks/index2.js";
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/firestore";
import { g as getFirebaseContext, u as userStore, a as auth, S as SignedIn } from "../../chunks/SignedIn.js";
import "firebase/storage";
import "firebase/analytics";
import "firebase/database";
import "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import "../../chunks/client.js";
function SignedOut($$payload, $$props) {
  push();
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
const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEy0lEQVR4nO2ZbUwbZQDHL45M5vygycRkL0YFlWw9oHdFYSsr69uItBksIYwOwiC8KKwq4EAY8TYYsoG8CIOFCduCzmiTQbveNSC4q7p9chlkEo0fTIxrC2uPFzcXoC885sggdYP2bj1ajP0n/y9N7+nvd9fnuadXCAommGB8DsBEIdMVaB5VjBDWTPTOuFIwNy4TuCx7Y4FFGAss+wQLEwp09q4KNdsK+QNUKT8XYFAIFOj8VQ7HUQXIDUsS6jTHxwI2tcgFTlsecmO6KjrG/+DVgjeoPPS2JUHACnpFEWEssB1BRmeOo+F+gZ/6EGk2SwQLvoI/JiIWuGY+QE6vGThoittky0F+4Rrc/EhtOcgIwNI2cgo/0wk/b1UhE2sNb37YaTW/lTN4cFEUak1Hrf6CpwoQEuIyVD7ys9/g8zmGny5B2lhNRDnqpPKRm1Ml/OqpkzGiexi65X5ZVJjtGCyhSmMwKhcZpZfPVc68kVP4mVo03CITuJiCT5UgXUwmnxlDn7Ed5V9yF6G4hqczqUZ+YgJvPYyY7tfxXmQ7Pr3uWzOQ8TWBB9/v2jE/DM9PlfGBebfHJe8W0EAboPUWBwmfdhhhQPfvc9FgXPL4HdeaiZrWJTzQpG2wG3mmJQG6c7ooYFWhbt95gZMqid4GrcfYjbx4d/jlXoPBvbqYxb3LpBrphtZr7Ea4akWBh31wIXoCqJOehtZr7CR8xZOAwwi3sRnvhXwj4KrJVT1/eP1Ah5E35lGAjEoKlMBbpd/Mev1AOwlPehKYJXdGBErgtWLCxURg3pMAIHc+GyiBbYXD4H8hMOlJYO6HqNcDJRBRRCz8xyexhtEk7vOyjLYHSuDt4z0mBgK8ytXg717jg1pc9qBJk7YJ4jiNvWWbee/pnJ4E3q1v0DMQgONWgh8ZfhNk6RRA0Z8CWgziC1wLqM/Ud3u7AjXtFSqvAwEAPWU38u4sgduNMOgfEIIU7YFFeLqHdQpnx0DCDq7g61sqXo4s1rs8wUcexZ0YiTF7mucwwvU0/AwZDWpw+TK4eyuuyi0kKfL58SBGYiHJlT0Wb2c/p7b1OuNBAQlv/21YYM/TJa8Iv9QTuGzUFwmMxELSsY4xb/BbC78DNZ99hLIavA6XjnqCX74Serml+9vdW9nCdw3teSm/sfZ3JqtP2sedY2zHh3SDCa9kahUuJhKZOoWzjUjswS5mh3obt3dQtrkFl3yu0ipcqX2p4OCpVo/w4UWGBexTjNXNczkdhLhZyUDAXaROLx05axBjXxEJ4iuD8WGXSdGWHsMeYbshseYELr9Jv8f9GGVfKshqxkBYAbmiQMGpxk7Il9QTkhGmAr40u+t9sP2doX/Bp1Sf/xXyNRpN2sZjuv3jfpHozQWRav0i/L7yL6gi7CyrjeOqIUnRc5V6ucUfEoe+VoGMmlYT1omFcQLvJhF6EpfdZjMnnqS1hHTEYFjD39xdhr0Nh7RKRqsTm2Zola5zRGID5I/06kQRdbj01kG37cWTNrX/wOJZvzwkfBXydy4NCtEzuPTHHG2yg/WE1Skcn+DS61/iMv//yfdoNADacB4XH2nCxfpKXPZngTZ5NkurcNFXiN4EpmuVC/Rr5Vf3mxoICdFlSMymj4GCCSYYyNf8A50RcaYC8geEAAAAAElFTkSuQmCC";
function _page($$payload, $$props) {
  push();
  let ready = false;
  auth.authStateReady().then(() => {
    ready = true;
  });
  new GoogleAuthProvider();
  let roomId = "";
  $$payload.out += `<main class="flex justify-center items-center flex-1">`;
  if (!ready) {
    $$payload.out += "<!--[-->";
  } else {
    $$payload.out += "<!--[!-->";
    SignedOut($$payload, {
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload2, { auth: auth2 }) => {
          $$payload2.out += `<div class="card card-hover variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-sm flex flex-col items-center"><header class="card-header text-center text-lg font-bold underline underline-offset-4">Sign In</header> <footer class="card-footer p-4 mb-5 mt-5 flex flex-col items-center"><button type="button" class="btn variant-filled w-full"><img${attr("src", img)} alt="Google Logo" class="w-6 h-6"> <span>Login with Google</span></button> <button type="button" class="btn variant-filled w-full mt-4">Anon logIn</button></footer></div>`;
        }
      }
    });
    $$payload.out += `<!----> `;
    SignedIn($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<div class="card card-hover variant-ghost-primary -backdrop-hue-rotate-90 backdrop-blur-sm"><div class="card-content"><header class="card-header text-center text-lg font-bold underline underline-offset-4">Join a Room</header> <form><section class="p-4 mb-5 mt-5"><input${attr("value", roomId)} class="input p-1 rounded-md border-none outline-primary-500 placeholder-gray-300 backdrop-hue-rotate-180 backdrop-brightness-50" style="background-color: #00000030;" title="Enter Room Id" type="text" placeholder="Enter Room Id"></section> <footer class="card-footer"><button class="btn variant-filled-secondary w-full">Join</button></footer></form></div></div>`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
