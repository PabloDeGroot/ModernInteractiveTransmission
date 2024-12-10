import { F as FILENAME, U as rest_props, C as push, V as fallback, W as spread_attributes, K as push_element, N as attr, Q as stringify, O as pop_element, P as escape_html, X as slot, R as bind_props, G as pop, Y as sanitize_props, Z as sanitize_slots, _ as add_styles } from "./index2.js";
import { g as get, w as writable, r as readable } from "./index.js";
const stores = {};
function localStorageStore(key, initialValue, options) {
  if (!stores[key]) {
    const store = writable(initialValue, (set2) => {
    });
    const { subscribe, set } = store;
    stores[key] = {
      set(value) {
        set(value);
      },
      update(updater) {
        const value = updater(get(store));
        set(value);
      },
      subscribe
    };
  }
  return stores[key];
}
localStorageStore("modeOsPrefers", false);
localStorageStore("modeUserPrefers", void 0);
localStorageStore("modeCurrent", false);
function prefersReducedMotion() {
  return false;
}
readable(prefersReducedMotion(), (set) => {
});
Avatar[FILENAME] = "node_modules/@skeletonlabs/skeleton/dist/components/Avatar/Avatar.svelte";
function Avatar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  push(Avatar);
  let classesBase;
  let initials = fallback($$props["initials"], "");
  let fill = fallback($$props["fill"], "fill-token");
  let fontSize = fallback($$props["fontSize"], 150);
  let src = fallback($$props["src"], "");
  let fallback$1 = fallback($$props["fallback"], "");
  let action = fallback($$props["action"], () => {
  });
  let actionParams = fallback($$props["actionParams"], "");
  let background = fallback($$props["background"], "bg-surface-400-500-token");
  let width = fallback($$props["width"], "w-16");
  let border = fallback($$props["border"], "");
  let rounded = fallback($$props["rounded"], "rounded-full");
  let shadow = fallback($$props["shadow"], "");
  let cursor = fallback($$props["cursor"], "");
  let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
  let cImage = "w-full object-cover";
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$sanitized_props.class ?? ""}`;
  $$payload.out += `<figure${spread_attributes({
    class: `avatar ${stringify(classesBase)}`,
    "data-testid": "avatar",
    ...prunedRestProps()
  })}>`;
  push_element($$payload, "figure", 25, 0);
  if (src || fallback$1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("class", `avatar-image ${stringify(cImage)}`)}${attr("style", $$sanitized_props.style ?? "")}${attr("src", src)}${attr("alt", $$sanitized_props.alt || "")} onload="this.__e=event" onerror="this.__e=event">`;
    push_element($$payload, "img", 27, 2);
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
    if (initials) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512">`;
      push_element($$payload, "svg", 36, 2);
      $$payload.out += `<text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${attr("font-size", fontSize)}${attr("class", `avatar-text ${stringify(fill)}`)}>`;
      push_element($$payload, "text", 37, 3);
      $$payload.out += `${escape_html(String(initials).substring(0, 2).toUpperCase())}</text>`;
      pop_element();
      $$payload.out += `</svg>`;
      pop_element();
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {});
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></figure>`;
  pop_element();
  bind_props($$props, {
    initials,
    fill,
    fontSize,
    src,
    fallback: fallback$1,
    action,
    actionParams,
    background,
    width,
    border,
    rounded,
    shadow,
    cursor
  });
  pop();
}
Avatar.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
ProgressRadial[FILENAME] = "node_modules/@skeletonlabs/skeleton/dist/components/ProgressRadial/ProgressRadial.svelte";
function ProgressRadial($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push(ProgressRadial);
  let classesBase;
  let value = fallback($$props["value"], () => void 0, true);
  let stroke = fallback($$props["stroke"], 40);
  let font = fallback($$props["font"], 56);
  let strokeLinecap = fallback($$props["strokeLinecap"], "butt");
  let transition = fallback($$props["transition"], "transition-[stroke-dashoffset]");
  let width = fallback($$props["width"], "w-36");
  let meter = fallback($$props["meter"], "stroke-surface-900 dark:stroke-surface-50");
  let track = fallback($$props["track"], "stroke-surface-500/30");
  let fill = fallback($$props["fill"], "fill-token");
  let labelledby = fallback($$props["labelledby"], "");
  const cBase = "progress-radial relative overflow-hidden";
  const cBaseTrack = "fill-transparent";
  const cBaseMeter = "fill-transparent -rotate-90 origin-[50%_50%]";
  const baseSize = 512;
  const radius = baseSize / 2 - stroke / 2;
  let circumference = radius;
  let dashoffset;
  function setProgress(percent) {
    circumference = radius * 2 * Math.PI;
    dashoffset = circumference - percent / 100 * circumference;
  }
  setProgress(0);
  classesBase = `${cBase} ${width} ${$$sanitized_props.class ?? ""}`;
  $$payload.out += `<figure${attr("class", `progress-radial ${stringify(classesBase)}`)} data-testid="progress-radial" role="meter"${attr("aria-labelledby", labelledby)}${attr("aria-valuenow", value || 0)}${attr("aria-valuetext", value ? `${value}%` : "Indeterminate Spinner")}${attr("aria-valuemin", 0)}${attr("aria-valuemax", 100)}>`;
  push_element($$payload, "figure", 32, 0);
  $$payload.out += `<svg${attr("viewBox", `0 0 ${stringify(baseSize)} ${stringify(baseSize)}`)}${attr("class", `rounded-full ${stringify([value === void 0 ? "animate-spin" : ""].filter(Boolean).join(" "))}`)}>`;
  push_element($$payload, "svg", 43, 1);
  $$payload.out += `<circle${attr("class", `progress-radial-track ${stringify(cBaseTrack)} ${stringify(track)}`)}${attr("stroke-width", stroke)}${attr("r", radius)} cx="50%" cy="50%">`;
  push_element($$payload, "circle", 45, 2);
  $$payload.out += `</circle>`;
  pop_element();
  $$payload.out += `<circle${add_styles({
    "stroke-dasharray": `${stringify(circumference)} ${stringify(circumference)}`,
    "stroke-dashoffset": dashoffset
  })}${attr("class", `progress-radial-meter ${stringify(cBaseMeter)} ${stringify(meter)} ${stringify(transition)}`)}${attr("stroke-width", stroke)}${attr("r", radius)} cx="50%" cy="50%"${attr("stroke-linecap", strokeLinecap)}>`;
  push_element($$payload, "circle", 48, 2);
  $$payload.out += `</circle>`;
  pop_element();
  if (value != void 0 && value >= 0 && $$slots.default) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-weight="bold"${attr("font-size", font)}${attr("class", `progress-radial-text ${stringify(fill)}`)}>`;
    push_element($$payload, "text", 62, 3);
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {});
    $$payload.out += `<!----></text>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></svg>`;
  pop_element();
  $$payload.out += `</figure>`;
  pop_element();
  bind_props($$props, {
    value,
    stroke,
    font,
    strokeLinecap,
    transition,
    width,
    meter,
    track,
    fill,
    labelledby
  });
  pop();
}
ProgressRadial.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  Avatar as A,
  ProgressRadial as P
};
