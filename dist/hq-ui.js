"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const __uno = "";
const MyButton = vue.defineComponent({
  name: "QButton",
  setup(props, {
    slots
  }) {
    return () => {
      return vue.createVNode("button", {
        "class": `
        py-2 
        px-4 
        font-semibold 
        rounded-lg 
        shadow-md 
        text-white 
        bg-green-500 
        hover:bg-green-700 
        border-none 
        cursor-pointer
      `
      }, [slots.default ? slots.default() : ""]);
    };
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = vue.defineComponent({
  name: "JSXButton",
  render() {
    return vue.createVNode("button", null, [vue.createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
exports.JSXButton = JSXButton;
exports.MyButton = MyButton;
exports.SFCButton = SFCButton;
exports.default = entry;
