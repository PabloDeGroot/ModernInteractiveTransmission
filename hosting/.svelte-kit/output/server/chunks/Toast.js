import { X as hash, W as getContext, E as setContext, F as FILENAME, Y as rest_props, C as push, Z as fallback, S as spread_attributes, Q as stringify, K as push_element, N as attr, O as pop_element, P as escape_html, _ as slot, R as bind_props, G as pop, $ as sanitize_props, a0 as sanitize_slots, a1 as add_styles, I as store_get, J as unsubscribe_stores, a2 as spread_props, V as ensure_array_like } from "./index2.js";
import { w as writable, g as get, r as readable } from "./index.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = `<!--${hash(html2)}-->`;
  return open + html2 + "<!---->";
}
function cubic_out(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function split_css_unit(value) {
  const split = typeof value === "string" && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return split ? [parseFloat(split[1]), split[2] || "px"] : [
    /** @type {number} */
    value,
    "px"
  ];
}
function fly(node, { delay = 0, duration = 400, easing = cubic_out, x = 0, y = 0, opacity = 0 } = {}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const transform = style.transform === "none" ? "" : style.transform;
  const od = target_opacity * (1 - opacity);
  const [x_value, x_unit] = split_css_unit(x);
  const [y_value, y_unit] = split_css_unit(y);
  return {
    delay,
    duration,
    easing,
    css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x_value}${x_unit}, ${(1 - t) * y_value}${y_unit});
			opacity: ${target_opacity - od * u}`
  };
}
const MODAL_STORE_KEY = "modalStore";
function getModalStore() {
  const modalStore = getContext(MODAL_STORE_KEY);
  if (!modalStore)
    throw new Error("modalStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return modalStore;
}
function initializeModalStore() {
  const modalStore = modalService();
  return setContext(MODAL_STORE_KEY, modalStore);
}
function modalService() {
  const { subscribe, set, update } = writable([]);
  return {
    subscribe,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const toastDefaults = { message: "Missing Toast Message", autohide: true, timeout: 5e3 };
const TOAST_STORE_KEY = "toastStore";
function getToastStore() {
  const toastStore = getContext(TOAST_STORE_KEY);
  if (!toastStore)
    throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");
  return toastStore;
}
function initializeToastStore() {
  const toastStore = toastService();
  return setContext(TOAST_STORE_KEY, toastStore);
}
function randomUUID() {
  const random = Math.random();
  return Number(random).toString(32);
}
function toastService() {
  const { subscribe, set, update } = writable([]);
  const close = (id) => update((tStore) => {
    if (tStore.length > 0) {
      const index = tStore.findIndex((t) => t.id === id);
      const selectedToast = tStore[index];
      if (selectedToast) {
        if (selectedToast.callback)
          selectedToast.callback({ id, status: "closed" });
        if (selectedToast.timeoutId)
          clearTimeout(selectedToast.timeoutId);
        tStore.splice(index, 1);
      }
    }
    return tStore;
  });
  function handleAutoHide(toast) {
    if (toast.autohide === true) {
      return setTimeout(() => {
        close(toast.id);
      }, toast.timeout);
    }
  }
  return {
    subscribe,
    close,
    /** Add a new toast to the queue. */
    trigger: (toast) => {
      const id = randomUUID();
      update((tStore) => {
        if (toast && toast.callback)
          toast.callback({ id, status: "queued" });
        if (toast.hideDismiss)
          toast.autohide = true;
        const tMerged = { ...toastDefaults, ...toast, id };
        tMerged.timeoutId = handleAutoHide(tMerged);
        tStore.push(tMerged);
        return tStore;
      });
      return id;
    },
    /** Remain visible on hover */
    freeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        clearTimeout(tStore[index].timeoutId);
      return tStore;
    }),
    /** Cancel remain visible on leave */
    unfreeze: (index) => update((tStore) => {
      if (tStore.length > 0)
        tStore[index].timeoutId = handleAutoHide(tStore[index]);
      return tStore;
    }),
    /** Remove all toasts from queue */
    clear: () => set([])
  };
}
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
const prefersReducedMotionStore = readable(prefersReducedMotion(), (set) => {
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
Modal[FILENAME] = "node_modules/@skeletonlabs/skeleton/dist/utilities/Modal/Modal.svelte";
function Modal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(Modal);
  var $$store_subs;
  let cPosition, classesBackdrop, classesTransitionLayer, classesModal, parent;
  let components = fallback($$props["components"], () => ({}), true);
  let position = fallback($$props["position"], "items-center");
  let background = fallback($$props["background"], "bg-surface-100-800-token");
  let width = fallback($$props["width"], "w-modal");
  let height = fallback($$props["height"], "h-auto");
  let padding = fallback($$props["padding"], "p-4");
  let spacing = fallback($$props["spacing"], "space-y-4");
  let rounded = fallback($$props["rounded"], "rounded-container-token");
  let shadow = fallback($$props["shadow"], "shadow-xl");
  let zIndex = fallback($$props["zIndex"], "z-[999]");
  let buttonNeutral = fallback($$props["buttonNeutral"], "variant-ghost-surface");
  let buttonPositive = fallback($$props["buttonPositive"], "variant-filled");
  let buttonTextCancel = fallback($$props["buttonTextCancel"], "Cancel");
  let buttonTextConfirm = fallback($$props["buttonTextConfirm"], "Confirm");
  let buttonTextSubmit = fallback($$props["buttonTextSubmit"], "Submit");
  let regionBackdrop = fallback($$props["regionBackdrop"], "");
  let regionHeader = fallback($$props["regionHeader"], "text-2xl font-bold");
  let regionBody = fallback($$props["regionBody"], "max-h-[200px] overflow-hidden");
  let regionFooter = fallback($$props["regionFooter"], "flex justify-end space-x-2");
  let transitions = fallback($$props["transitions"], () => !store_get($$store_subs ??= {}, "$prefersReducedMotionStore", prefersReducedMotionStore), true);
  let transitionIn = fallback($$props["transitionIn"], fly);
  let transitionInParams = fallback($$props["transitionInParams"], () => ({ duration: 150, opacity: 0, x: 0, y: 100 }), true);
  let transitionOut = fallback($$props["transitionOut"], fly);
  let transitionOutParams = fallback($$props["transitionOutParams"], () => ({ duration: 150, opacity: 0, x: 0, y: 100 }), true);
  const cBackdrop = "fixed top-0 left-0 right-0 bottom-0 bg-surface-backdrop-token p-4";
  const cTransitionLayer = "w-full h-fit min-h-full overflow-y-auto flex justify-center";
  const cModal = "block overflow-y-auto";
  const cModalImage = "w-full h-auto";
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  let modalElement;
  let windowHeight;
  let backdropOverflow = "overflow-y-hidden";
  const modalStore = getModalStore();
  function handleModals(modals) {
    if (modals[0].type === "prompt") promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  }
  function onModalHeightChange(modal) {
    let modalHeight = modal?.clientHeight;
    if (!modalHeight) modalHeight = modal?.firstChild?.clientHeight;
    if (!modalHeight) return;
    if (modalHeight > windowHeight) {
      backdropOverflow = "overflow-y-auto";
    } else {
      backdropOverflow = "overflow-y-hidden";
    }
  }
  function onClose() {
    if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].response) store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].response(false);
    modalStore.close();
  }
  if (store_get($$store_subs ??= {}, "$modalStore", modalStore).length) handleModals(store_get($$store_subs ??= {}, "$modalStore", modalStore));
  onModalHeightChange(modalElement);
  cPosition = store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.position ?? position;
  classesBackdrop = `${cBackdrop} ${regionBackdrop} ${zIndex} ${$$sanitized_props.class ?? ""} ${store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    // ---
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  if (store_get($$store_subs ??= {}, "$modalStore", modalStore).length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    {
      $$payload.out += `<div${attr("class", `modal-backdrop ${stringify(classesBackdrop)} ${stringify(backdropOverflow)}`)} data-testid="modal-backdrop">`;
      push_element($$payload, "div", 163, 2);
      $$payload.out += `<div${attr("class", `modal-transition ${stringify(classesTransitionLayer)}`)}>`;
      push_element($$payload, "div", 174, 3);
      if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].type !== "component") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${attr("class", `modal ${stringify(classesModal)}`)} data-testid="modal" role="dialog" aria-modal="true"${attr("aria-label", store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].title ?? "")}>`;
        push_element($$payload, "div", 181, 5);
        if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.title) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<header${attr("class", `modal-header ${stringify(regionHeader)}`)}>`;
          push_element($$payload, "header", 191, 7);
          $$payload.out += `${html(store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].title)}</header>`;
          pop_element();
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> `;
        if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.body) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<article${attr("class", `modal-body ${stringify(regionBody)}`)}>`;
          push_element($$payload, "article", 195, 7);
          $$payload.out += `${html(store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].body)}</article>`;
          pop_element();
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> `;
        if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.image && typeof store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.image === "string") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<img${attr("class", `modal-image ${stringify(cModalImage)}`)}${attr("src", store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.image)} alt="Modal">`;
          push_element($$payload, "img", 199, 7);
          pop_element();
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> `;
        if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].type === "alert") {
          $$payload.out += "<!--[-->";
          $$payload.out += `<footer${attr("class", `modal-footer ${stringify(regionFooter)}`)}>`;
          push_element($$payload, "footer", 204, 7);
          $$payload.out += `<button type="button"${attr("class", `btn ${stringify(buttonNeutral)}`)}>`;
          push_element($$payload, "button", 205, 8);
          $$payload.out += `${escape_html(buttonTextCancel)}</button>`;
          pop_element();
          $$payload.out += `</footer>`;
          pop_element();
        } else {
          $$payload.out += "<!--[!-->";
          if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].type === "confirm") {
            $$payload.out += "<!--[-->";
            $$payload.out += `<footer${attr("class", `modal-footer ${stringify(regionFooter)}`)}>`;
            push_element($$payload, "footer", 209, 7);
            $$payload.out += `<button type="button"${attr("class", `btn ${stringify(buttonNeutral)}`)}>`;
            push_element($$payload, "button", 210, 8);
            $$payload.out += `${escape_html(buttonTextCancel)}</button>`;
            pop_element();
            $$payload.out += ` <button type="button"${attr("class", `btn ${stringify(buttonPositive)}`)}>`;
            push_element($$payload, "button", 211, 8);
            $$payload.out += `${escape_html(buttonTextConfirm)}</button>`;
            pop_element();
            $$payload.out += `</footer>`;
            pop_element();
          } else {
            $$payload.out += "<!--[!-->";
            if (store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].type === "prompt") {
              $$payload.out += "<!--[-->";
              $$payload.out += `<form class="space-y-4">`;
              push_element($$payload, "form", 215, 7);
              $$payload.out += `<input${spread_attributes({
                class: "modal-prompt-input input",
                name: "prompt",
                type: "text",
                value: promptValue,
                ...store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].valueAttr
              })}>`;
              push_element($$payload, "input", 216, 8);
              pop_element();
              $$payload.out += ` <footer${attr("class", `modal-footer ${stringify(regionFooter)}`)}>`;
              push_element($$payload, "footer", 217, 8);
              $$payload.out += `<button type="button"${attr("class", `btn ${stringify(buttonNeutral)}`)}>`;
              push_element($$payload, "button", 218, 9);
              $$payload.out += `${escape_html(buttonTextCancel)}</button>`;
              pop_element();
              $$payload.out += ` <button type="submit"${attr("class", `btn ${stringify(buttonPositive)}`)}>`;
              push_element($$payload, "button", 219, 9);
              $$payload.out += `${escape_html(buttonTextSubmit)}</button>`;
              pop_element();
              $$payload.out += `</footer>`;
              pop_element();
              $$payload.out += `</form>`;
              pop_element();
            } else {
              $$payload.out += "<!--[!-->";
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--></div>`;
        pop_element();
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<div${attr("class", `modal contents ${stringify(store_get($$store_subs ??= {}, "$modalStore", modalStore)[0]?.modalClasses ?? "")}`)} data-testid="modal-component" role="dialog" aria-modal="true"${attr("aria-label", store_get($$store_subs ??= {}, "$modalStore", modalStore)[0].title ?? "")}>`;
        push_element($$payload, "div", 227, 5);
        if (currentComponent?.slot) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<!---->`;
          currentComponent?.ref?.($$payload, spread_props([
            currentComponent?.props,
            {
              parent,
              children: ($$payload2) => {
                $$payload2.out += `${html(currentComponent?.slot)}`;
              },
              $$slots: { default: true }
            }
          ]));
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
          $$payload.out += `<!---->`;
          currentComponent?.ref?.($$payload, spread_props([currentComponent?.props, { parent }]));
          $$payload.out += `<!---->`;
        }
        $$payload.out += `<!--]--></div>`;
        pop_element();
      }
      $$payload.out += `<!--]--></div>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
    }
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    components,
    position,
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    zIndex,
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    transitions,
    transitionIn,
    transitionInParams,
    transitionOut,
    transitionOutParams
  });
  pop();
}
Modal.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
Toast[FILENAME] = "node_modules/@skeletonlabs/skeleton/dist/utilities/Toast/Toast.svelte";
function Toast($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(Toast);
  var $$store_subs;
  let classesWrapper, classesSnackbar, classesToast, filteredToasts;
  const toastStore = getToastStore();
  let position = fallback($$props["position"], "b");
  let max = fallback($$props["max"], 3);
  let background = fallback($$props["background"], "variant-filled-secondary");
  let width = fallback($$props["width"], "max-w-[640px]");
  let color = fallback($$props["color"], "");
  let padding = fallback($$props["padding"], "p-4");
  let spacing = fallback($$props["spacing"], "space-x-4");
  let rounded = fallback($$props["rounded"], "rounded-container-token");
  let shadow = fallback($$props["shadow"], "shadow-lg");
  let zIndex = fallback($$props["zIndex"], "z-[888]");
  let buttonAction = fallback($$props["buttonAction"], "btn variant-filled");
  let buttonDismiss = fallback($$props["buttonDismiss"], "btn-icon btn-icon-sm variant-filled");
  let buttonDismissLabel = fallback($$props["buttonDismissLabel"], "✕");
  let transitions = fallback($$props["transitions"], () => !store_get($$store_subs ??= {}, "$prefersReducedMotionStore", prefersReducedMotionStore), true);
  let transitionIn = fallback($$props["transitionIn"], fly);
  let transitionInParams = fallback($$props["transitionInParams"], () => ({ duration: 250 }), true);
  let transitionOut = fallback($$props["transitionOut"], fly);
  let transitionOutParams = fallback($$props["transitionOutParams"], () => ({ duration: 250 }), true);
  const cWrapper = "flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none";
  const cSnackbar = "flex flex-col gap-y-2";
  const cToast = "flex justify-between items-center pointer-events-auto";
  const cToastActions = "flex items-center space-x-2";
  let cPosition;
  let cAlign;
  switch (position) {
    case "t":
      cPosition = "justify-center items-start";
      cAlign = "items-center";
      break;
    case "b":
      cPosition = "justify-center items-end";
      cAlign = "items-center";
      break;
    case "l":
      cPosition = "justify-start items-center";
      cAlign = "items-start";
      break;
    case "r":
      cPosition = "justify-end items-center";
      cAlign = "items-end";
      break;
    case "tl":
      cPosition = "justify-start items-start";
      cAlign = "items-start";
      break;
    case "tr":
      cPosition = "justify-end items-start";
      cAlign = "items-end";
      break;
    case "bl":
      cPosition = "justify-start items-end";
      cAlign = "items-start";
      break;
    case "br":
      cPosition = "justify-end items-end";
      cAlign = "items-end";
      break;
  }
  let wrapperVisible = false;
  classesWrapper = `${cWrapper} ${cPosition} ${zIndex} ${$$sanitized_props.class || ""}`;
  classesSnackbar = `${cSnackbar} ${cAlign} ${padding}`;
  classesToast = `${cToast} ${width} ${color} ${padding} ${spacing} ${rounded} ${shadow}`;
  filteredToasts = Array.from(store_get($$store_subs ??= {}, "$toastStore", toastStore)).slice(0, max);
  if (filteredToasts.length) {
    wrapperVisible = true;
  }
  if (filteredToasts.length > 0 || wrapperVisible) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(filteredToasts);
    $$payload.out += `<div${attr("class", `snackbar-wrapper ${stringify(classesWrapper)}`)} data-testid="snackbar-wrapper">`;
    push_element($$payload, "div", 109, 1);
    $$payload.out += `<div${attr("class", `snackbar ${stringify(classesSnackbar)}`)}>`;
    push_element($$payload, "div", 111, 2);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let t = each_array[i];
      $$payload.out += `<div${attr("role", t.hideDismiss ? "alert" : "alertdialog")} aria-live="polite">`;
      push_element($$payload, "div", 113, 4);
      $$payload.out += `<div${attr("class", `toast ${stringify(classesToast)} ${stringify(t.background ?? background)} ${stringify(t.classes ?? "")}`)} data-testid="toast">`;
      push_element($$payload, "div", 135, 5);
      $$payload.out += `<div class="text-base">`;
      push_element($$payload, "div", 136, 6);
      $$payload.out += `${html(t.message)}</div>`;
      pop_element();
      $$payload.out += ` `;
      if (t.action || !t.hideDismiss) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${attr("class", `toast-actions ${stringify(cToastActions)}`)}>`;
        push_element($$payload, "div", 138, 7);
        if (t.action) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<button${attr("class", buttonAction)}>`;
          push_element($$payload, "button", 139, 22);
          $$payload.out += `${html(t.action.label)}</button>`;
          pop_element();
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--> `;
        if (!t.hideDismiss) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<button${attr("class", buttonDismiss)} aria-label="Dismiss toast">`;
          push_element($$payload, "button", 140, 28);
          $$payload.out += `${escape_html(buttonDismissLabel)}</button>`;
          pop_element();
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></div>`;
        pop_element();
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
      pop_element();
      $$payload.out += `</div>`;
      pop_element();
    }
    $$payload.out += `<!--]--></div>`;
    pop_element();
    $$payload.out += `</div>`;
    pop_element();
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    position,
    max,
    background,
    width,
    color,
    padding,
    spacing,
    rounded,
    shadow,
    zIndex,
    buttonAction,
    buttonDismiss,
    buttonDismissLabel,
    transitions,
    transitionIn,
    transitionInParams,
    transitionOut,
    transitionOutParams
  });
  pop();
}
Toast.render = function() {
  throw new Error("Component.render(...) is no longer valid in Svelte 5. See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes for more information");
};
export {
  Avatar as A,
  Modal as M,
  ProgressRadial as P,
  Toast as T,
  initializeToastStore as a,
  getModalStore as b,
  getToastStore as g,
  initializeModalStore as i
};
