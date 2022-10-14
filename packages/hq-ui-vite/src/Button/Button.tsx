import { defineComponent, PropType } from "vue";
import "uno.css";
export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  icon: {
    type: String,
    default: "",
  },
} as const;
export default defineComponent({
  name: "QButton",
  props,
  setup(props, { slots }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm",
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base",
      },
      large: {
        x: "4",
        y: "2",
        text: "lg",
      },
    };
    return () => {
      return (
        <button
          class={`
        py-${size[props.size].y} 
        px-${size[props.size].x}
        ${props.round ? "rounded-full" : "rounded-lg"} 
        border-${props.color}-${props.plain ? "500" : "500"}
        border-solid
        shadow-md 
        bg-${props.color}-${props.plain ? "100" : "500"} 
        hover:bg-${props.color}-400
        text-${props.plain ? props.color + "-500" : "white"}
        text-${size[props.size].text}
        hover:text-white
        cursor-pointer
        mx-1
      `}
        >
          {props.icon !== "" ? (
            <i class={`i-ic-baseline-${props.icon} p-3`}></i>
          ) : (
            ""
          )}
          {slots.default ? slots.default() : ""}
        </button>
      );
    };
  },
});
