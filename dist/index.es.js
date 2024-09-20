(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode(":root{--vs-input-bg: #fff;--vs-input-outline: #3b82f6;--vs-input-placeholder-color: #52525b;--vs-padding: .25rem .5rem;--vs-border: 1px solid #e4e4e7;--vs-border-radius: 4px;--vs-font-size: 16px;--vs-font-weight: 400;--vs-font-family: inherit;--vs-text-color: #18181b;--vs-line-height: 1.5;--vs-menu-offset-top: 8px;--vs-menu-height: 200px;--vs-menu-padding: 0;--vs-menu-border: 1px solid #e4e4e7;--vs-menu-bg: #fff;--vs-menu-box-shadow: none;--vs-menu-z-index: 2;--vs-option-padding: 8px 12px;--vs-option-font-size: var(--vs-font-size);--vs-option-font-weight: var(--vs-font-weight);--vs-option-text-color: var(--vs-text-color);--vs-option-bg: var(--vs-menu-bg);--vs-option-hover-color: #dbeafe;--vs-option-focused-color: var(--vs-option-hover-color);--vs-option-selected-color: #93c5fd;--vs-option-disabled-color: #f4f4f5;--vs-option-disabled-text-color: #52525b;--vs-multi-value-gap: 4px;--vs-multi-value-padding: 4px;--vs-multi-value-font-size: 14px;--vs-multi-value-font-weight: 400;--vs-multi-value-line-height: 1;--vs-multi-value-text-color: #3f3f46;--vs-multi-value-bg: #f4f4f5;--vs-multi-value-xmark-size: 16px;--vs-multi-value-xmark-color: var(--vs-multi-value-text-color);--vs-indicators-gap: 4px;--vs-icon-size: 20px;--vs-icon-color: var(--vs-text-color);--vs-dropdown-transition: transform .25s ease-out}.vue-select[data-v-2a884047]{position:relative;box-sizing:border-box;width:100%}.vue-select[data-v-2a884047] *{box-sizing:border-box}.vue-select.open .single-value[data-v-2a884047]{position:absolute;opacity:.4}.vue-select.open .dropdown-icon[data-v-2a884047]{transform:rotate(180deg)}.vue-select.typing .single-value[data-v-2a884047]{opacity:0}.control[data-v-2a884047]{display:flex;min-height:32px;border:var(--vs-border);border-radius:var(--vs-border-radius);background-color:var(--vs-input-bg)}.control.focused[data-v-2a884047]{box-shadow:0 0 0 1px var(--vs-input-outline);border-color:var(--vs-input-outline)}.value-container[data-v-2a884047]{position:relative;display:flex;flex-wrap:wrap;align-items:center;flex-basis:100%;flex-grow:1;padding:var(--vs-padding)}.value-container.multi[data-v-2a884047]{gap:var(--vs-multi-value-gap)}.single-value[data-v-2a884047]{display:flex;align-items:center;font-size:var(--vs-font-size);font-weight:var(--vs-font-weight);font-family:var(--vs-font-family);line-height:var(--vs-line-height);color:var(--vs-text-color);z-index:0}.multi-value[data-v-2a884047]{appearance:none;display:flex;align-items:center;gap:var(--vs-multi-value-gap);padding:var(--vs-multi-value-padding);margin:0;border:0;font-size:var(--vs-multi-value-font-size);font-weight:var(--vs-multi-value-font-weight);color:var(--vs-multi-value-text-color);line-height:var(--vs-multi-value-line-height);background:var(--vs-multi-value-bg);outline:none;cursor:pointer}.multi-value svg[data-v-2a884047]{width:var(--vs-multi-value-xmark-size);height:var(--vs-multi-value-xmark-size);fill:var(--vs-multi-value-xmark-color)}.search-input[data-v-2a884047]{appearance:none;display:inline-block;max-width:100%;flex-grow:1;width:0;margin:0;padding:0;border:0;background:none;font-size:var(--vs-font-size);font-family:var(--vs-font-family);line-height:var(--vs-line-height);color:var(--vs-text-color);outline:none;z-index:1}.search-input[data-v-2a884047]::placeholder{color:var(--vs-input-placeholder-color)}.indicators-container[data-v-2a884047]{display:flex;align-items:center;flex-shrink:0;gap:var(--vs-indicators-gap);padding:var(--vs-padding)}.clear-button[data-v-2a884047]{appearance:none;display:inline-block;padding:0;margin:0;border:0;width:var(--vs-icon-size);height:var(--vs-icon-size);fill:var(--vs-icon-color);background:none;outline:none;cursor:pointer}.dropdown-icon[data-v-2a884047]{appearance:none;display:inline-block;padding:0;margin:0;border:0;width:var(--vs-icon-size);height:var(--vs-icon-size);fill:var(--vs-icon-color);background:none;outline:none;cursor:pointer;transition:var(--vs-dropdown-transition)}.menu[data-v-2a884047]{position:absolute;left:0;right:0;padding:var(--vs-menu-padding);margin-top:var(--vs-menu-offset-top);max-height:var(--vs-menu-height);overflow-y:auto;border:var(--vs-menu-border);border-radius:var(--vs-border-radius);box-shadow:var(--vs-menu-box-shadow);background-color:var(--vs-menu-bg);z-index:var(--vs-menu-z-index)}.menu-option[data-v-2a884047]{display:flex;width:100%;border:0;margin:0;padding:var(--vs-option-padding);font-size:var(--vs-option-font-size);font-weight:var(--vs-option-font-weight);font-family:var(--vs-font-family);color:var(--vs-option-text-color);background-color:var(--vs-option-bg);text-align:-webkit-auto;cursor:pointer}.menu-option[data-v-2a884047]:hover{background-color:var(--vs-option-hover-color)}.menu-option.focused[data-v-2a884047]{background-color:var(--vs-option-focused-color)}.menu-option.selected[data-v-2a884047]{background-color:var(--vs-option-selected-color)}.menu-option.disabled[data-v-2a884047]{background-color:var(--vs-option-disabled-color);color:var(--vs-option-disabled-text-color)}.no-results[data-v-2a884047]{padding:var(--vs-option-padding);font-size:var(--vs-font-size);font-family:var(--vs-font-family);color:var(--vs-text-color)}")),document.head.appendChild(o)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
import { openBlock as c, createElementBlock as b, createElementVNode as D, defineComponent as H, ref as w, watch as P, normalizeClass as B, withKeys as Q, renderSlot as $, mergeModels as x, useModel as W, computed as N, onMounted as Y, onBeforeUnmount as ee, createTextVNode as C, toDisplayString as V, createCommentVNode as S, Fragment as q, renderList as K, createVNode as _, withDirectives as le, vModelText as te, createBlock as U, Teleport as ae, normalizeStyle as ne, withCtx as oe } from "vue";
const T = (s, v) => {
  const l = s.__vccOpts || s;
  for (const [m, a] of v)
    l[m] = a;
  return l;
}, ie = {}, se = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, ue = /* @__PURE__ */ D("path", {
  "fill-rule": "evenodd",
  d: "M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",
  "clip-rule": "evenodd"
}, null, -1), re = [
  ue
];
function de(s, v) {
  return c(), b("svg", se, re);
}
const ce = /* @__PURE__ */ T(ie, [["render", de]]), ve = {}, pe = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, fe = /* @__PURE__ */ D("path", { d: "M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" }, null, -1), be = [
  fe
];
function me(s, v) {
  return c(), b("svg", pe, be);
}
const z = /* @__PURE__ */ T(ve, [["render", me]]), ye = ["aria-disabled", "aria-selected"], he = /* @__PURE__ */ H({
  __name: "MenuOption",
  props: {
    menu: {},
    index: {},
    isFocused: { type: Boolean },
    isSelected: { type: Boolean },
    isDisabled: { type: Boolean }
  },
  emits: ["select"],
  setup(s, { emit: v }) {
    const l = s, m = v, a = w(null);
    return P(
      () => l.isFocused,
      () => {
        if (l.isFocused && l.menu) {
          const r = l.menu.children[l.index], d = r.offsetTop, k = d + r.clientHeight, o = l.menu.scrollTop, u = l.menu.clientHeight;
          d < o ? l.menu.scrollTop = d : k > o + u && (l.menu.scrollTop = k - u);
        }
      }
    ), (r, d) => (c(), b("div", {
      ref_key: "option",
      ref: a,
      tabindex: "-1",
      role: "option",
      class: B({ focused: r.isFocused, selected: r.isSelected, disabled: r.isDisabled }),
      "aria-disabled": r.isDisabled,
      "aria-selected": r.isSelected,
      onClick: d[0] || (d[0] = (k) => m("select")),
      onKeydown: d[1] || (d[1] = Q((k) => m("select"), ["enter"]))
    }, [
      $(r.$slots, "default")
    ], 42, ye));
  }
}), ge = ["aria-expanded", "aria-describedby", "aria-description", "aria-labelledby", "aria-label", "aria-required"], Me = ["onClick"], ke = ["id", "disabled", "placeholder"], we = { class: "indicators-container" }, $e = ["disabled"], De = ["disabled"], Oe = ["aria-label", "aria-multiselectable"], Le = {
  key: 0,
  class: "no-results"
}, Se = /* @__PURE__ */ H({
  __name: "Select",
  props: /* @__PURE__ */ x({
    options: {},
    displayedOptions: {},
    placeholder: { default: "Select an option" },
    isClearable: { type: Boolean, default: !0 },
    isDisabled: { type: Boolean, default: !1 },
    isSearchable: { type: Boolean, default: !0 },
    isMulti: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !0 },
    teleport: { default: void 0 },
    inputId: { default: void 0 },
    aria: { default: void 0 },
    filterBy: { type: Function, default: (s, v, l) => v.toLowerCase().includes(l.toLowerCase()) },
    getOptionLabel: { type: Function, default: (s) => s.label },
    getMultiValueLabel: { type: Function, default: (s) => s.label }
  }, {
    modelValue: {
      required: !0,
      validator: (s, v) => v.isMulti ? Array.isArray(s) : !Array.isArray(s)
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ x(["optionSelected", "optionDeselected", "search"], ["update:modelValue"]),
  setup(s, { emit: v }) {
    const l = s, m = v, a = W(s, "modelValue"), r = w(null), d = w(null), k = w(null), o = w(""), u = w(!1), O = w(-1), g = N(() => {
      const e = l.displayedOptions || l.options, t = (p) => p.filter(
        (i) => !a.value.includes(i.value)
      );
      if (l.isSearchable && o.value) {
        const p = e.filter((i) => {
          const M = l.isMulti ? l.getMultiValueLabel(i) : l.getOptionLabel(i);
          return l.filterBy(i, M, o.value);
        });
        return l.isMulti ? t(p) : p;
      }
      return l.isMulti ? t(e) : e;
    }), y = N(() => {
      if (l.isMulti && Array.isArray(a.value))
        return a.value.map(
          (t) => l.options.find((p) => p.value === t)
        );
      l.isMulti && !Array.isArray(a.value) && console.warn(`[vue3-select-component warn]: The v-model provided should be an array when using \`isMulti\` prop, instead it was: ${a.value}`);
      const e = l.options.find((t) => t.value === a.value);
      return e ? [e] : [];
    }), L = (e) => {
      u.value = !0, O.value = l.options.findIndex((t) => !t.disabled), e != null && e.focusInput && d.value && d.value.focus();
    }, R = () => {
      u.value = !1, o.value = "";
    }, I = (e) => {
      e.disabled || (l.isMulti ? a.value.push(e.value) : a.value = e.value, m("optionSelected", e), o.value = "", l.closeOnSelect && (u.value = !1), d.value && d.value.blur());
    }, Z = (e) => {
      l.isMulti && !l.isDisabled && (a.value = a.value.filter((t) => t !== e.value), m("optionDeselected", e));
    }, j = () => {
      l.isMulti ? (a.value = [], m("optionDeselected", null)) : (a.value = void 0, m("optionDeselected", y.value[0])), u.value = !1, o.value = "", d.value && d.value.blur();
    }, A = (e) => {
      if (u.value) {
        const t = O.value;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          const i = g.value.findIndex((h, n) => !h.disabled && n > t), M = g.value.findIndex((h) => !h.disabled);
          O.value = i === -1 ? M : i;
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          const i = g.value.reduce(
            (h, n, f) => !n.disabled && f < t ? f : h,
            -1
          ), M = g.value.reduce(
            (h, n, f) => n.disabled ? h : f,
            -1
          );
          O.value = i === -1 ? M : i;
        }
        if (e.key === "Enter") {
          const i = g.value[t];
          e.preventDefault(), i && I(i);
        }
        if (e.code === "Space" && o.value.length === 0) {
          const i = g.value[t];
          e.preventDefault(), i && I(i);
        }
        e.key === "Escape" && (e.preventDefault(), u.value = !1, o.value = "");
        const p = l.isMulti ? a.value.length > 0 : !!a.value;
        e.key === "Backspace" && o.value.length === 0 && p && (e.preventDefault(), l.isMulti ? a.value = a.value.slice(0, -1) : a.value = void 0);
      }
    }, X = (e) => {
      !u.value && o.value.length === 0 && (e.preventDefault(), e.stopImmediatePropagation(), L());
    }, G = (e) => {
      e.key === "Tab" ? R() : e.key === "Space" && X(e);
    }, E = (e) => {
      r.value && !r.value.contains(e.target) && (u.value = !1, o.value = "");
    }, F = () => {
      if (r.value) {
        const e = r.value.getBoundingClientRect();
        return {
          left: `${e.x}px`,
          top: `${e.y + e.height}px`
        };
      }
      return console.warn("Unable to calculate dynamic menu position because of missing internal DOM reference."), { top: "0px", left: "0px" };
    };
    return P(
      () => o.value,
      () => {
        m("search", o.value), o.value && !u.value && L();
      }
    ), Y(() => {
      document.addEventListener("click", E), document.addEventListener("keydown", A);
    }), ee(() => {
      document.removeEventListener("click", E), document.removeEventListener("keydown", A);
    }), (e, t) => {
      var p, i, M, h;
      return c(), b("div", {
        ref_key: "container",
        ref: r,
        dir: "auto",
        class: B(["vue-select", { open: u.value, typing: u.value && o.value.length > 0, disabled: e.isDisabled }])
      }, [
        D("div", {
          class: B(["control", { focused: u.value }])
        }, [
          D("div", {
            class: B(["value-container", { multi: e.isMulti }]),
            role: "combobox",
            "aria-expanded": u.value,
            "aria-describedby": e.placeholder,
            "aria-description": e.placeholder,
            "aria-labelledby": (p = e.aria) == null ? void 0 : p.labelledby,
            "aria-label": y.value.length ? y.value.map(e.isMulti ? e.getMultiValueLabel : e.getOptionLabel).join(", ") : "",
            "aria-required": (i = e.aria) == null ? void 0 : i.required
          }, [
            !l.isMulti && y.value[0] ? (c(), b("div", {
              key: 0,
              class: "single-value",
              onClick: t[0] || (t[0] = (n) => l.isDisabled ? null : L({ focusInput: !0 }))
            }, [
              $(e.$slots, "value", {
                option: y.value[0]
              }, () => [
                C(V(e.getOptionLabel(y.value[0])), 1)
              ], !0)
            ])) : S("", !0),
            l.isMulti && y.value.length ? (c(!0), b(q, { key: 1 }, K(y.value, (n, f) => (c(), b("button", {
              key: f,
              type: "button",
              class: "multi-value",
              onClick: (J) => Z(n)
            }, [
              C(V(e.getMultiValueLabel(n)), 1),
              _(z)
            ], 8, Me))), 128)) : S("", !0),
            le(D("input", {
              id: e.inputId,
              ref_key: "input",
              ref: d,
              "onUpdate:modelValue": t[1] || (t[1] = (n) => o.value = n),
              class: "search-input",
              type: "text",
              onInput: t[2] || (t[2] = (n) => o.value = n.target.value),
              "aria-autocomplete": "list",
              autocapitalize: "none",
              autocomplete: "off",
              autocorrect: "off",
              spellcheck: "false",
              tabindex: "0",
              disabled: e.isDisabled,
              placeholder: y.value.length === 0 ? e.placeholder : "",
              onMousedown: t[3] || (t[3] = (n) => L()),
              onKeydown: G
            }, null, 40, ke), [
              [te, o.value]
            ])
          ], 10, ge),
          D("div", we, [
            y.value.length > 0 && e.isClearable ? (c(), b("button", {
              key: 0,
              type: "button",
              class: "clear-button",
              tabindex: "-1",
              disabled: e.isDisabled,
              onClick: j
            }, [
              $(e.$slots, "clear", {}, () => [
                _(z)
              ], !0)
            ], 8, $e)) : S("", !0),
            D("button", {
              type: "button",
              class: "dropdown-icon",
              tabindex: "-1",
              disabled: e.isDisabled,
              onClick: t[4] || (t[4] = (n) => L({ focusInput: !0 }))
            }, [
              $(e.$slots, "dropdown", {}, () => [
                _(ce)
              ], !0)
            ], 8, De)
          ])
        ], 2),
        (c(), U(ae, {
          to: e.teleport,
          disabled: !e.teleport
        }, [
          u.value ? (c(), b("div", {
            key: 0,
            ref_key: "menu",
            ref: k,
            class: "menu",
            role: "listbox",
            "aria-label": (M = e.aria) == null ? void 0 : M.labelledby,
            "aria-multiselectable": e.isMulti,
            style: ne({
              width: l.teleport ? `${(h = r.value) == null ? void 0 : h.getBoundingClientRect().width}px` : "100%",
              top: l.teleport ? F().top : "unset",
              left: l.teleport ? F().left : "unset"
            })
          }, [
            $(e.$slots, "menu-header", {}, void 0, !0),
            (c(!0), b(q, null, K(g.value, (n, f) => (c(), U(he, {
              key: f,
              type: "button",
              class: B(["menu-option", { focused: O.value === f, selected: n.value === a.value }]),
              menu: k.value,
              index: f,
              "is-focused": O.value === f,
              "is-selected": n.value === a.value,
              "is-disabled": n.disabled || !1,
              onSelect: (J) => I(n)
            }, {
              default: oe(() => [
                $(e.$slots, "option", { option: n }, () => [
                  C(V(e.getOptionLabel(n)), 1)
                ], !0)
              ]),
              _: 2
            }, 1032, ["class", "menu", "index", "is-focused", "is-selected", "is-disabled", "onSelect"]))), 128)),
            g.value.length === 0 ? (c(), b("div", Le, [
              $(e.$slots, "no-options", {}, () => [
                C(" No results found ")
              ], !0)
            ])) : S("", !0)
          ], 12, Oe)) : S("", !0)
        ], 8, ["to", "disabled"]))
      ], 2);
    };
  }
}), Ce = /* @__PURE__ */ T(Se, [["__scopeId", "data-v-2a884047"]]);
export {
  Ce as default
};
