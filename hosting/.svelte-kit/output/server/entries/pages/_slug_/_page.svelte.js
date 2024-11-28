import { F as FILENAME, B as push, G as push_element, J as store_get, I as pop_element, K as unsubscribe_stores, E as pop } from "../../../chunks/index2.js";
import { e as escape_html, p as page } from "../../../chunks/stores.js";
_page[FILENAME] = "src/routes/[slug]/+page.svelte";
function _page($$payload, $$props) {
  push(_page);
  var $$store_subs;
  $$payload.out += `<h1>`;
  push_element($$payload, "h1", 7, 0);
  $$payload.out += `${escape_html(store_get($$store_subs ??= {}, "$page", page).params.slug)}</h1>`;
  pop_element();
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
_page.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  _page as default
};
