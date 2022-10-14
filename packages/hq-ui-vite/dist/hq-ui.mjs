import { defineComponent, createVNode, createTextVNode } from "vue";
const __uno = "";
const props = {
  size: {
    type: String,
    default: "medium"
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = defineComponent({
  name: "QButton",
  props,
  setup(props2, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => {
      return createVNode("button", {
        "class": `
        py-${size[props2.size].y} 
        px-${size[props2.size].x}
        ${props2.round ? "rounded-full" : "rounded-lg"} 
        border-${props2.color}-${props2.plain ? "500" : "500"}
        border-solid
        shadow-md 
        bg-${props2.color}-${props2.plain ? "100" : "500"} 
        hover:bg-${props2.color}-400
        text-${props2.plain ? props2.color + "-500" : "white"}
        text-${size[props2.size].text}
        hover:text-white
        cursor-pointer
        mx-1
      `
      }, [props2.icon !== "" ? createVNode("i", {
        "class": `i-ic-baseline-${props2.icon} p-3`
      }, null) : "", slots.default ? slots.default() : ""]);
    };
  }
});
const _sfc_main = {};
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button")]);
  }
});
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(_sfc_main.name, _sfc_main);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  Button,
  JSXButton,
  _sfc_main as SFCButton,
  entry as default
};
//# sourceMappingURL=hq-ui.mjs.map
