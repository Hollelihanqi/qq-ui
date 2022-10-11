import Button from "../Button";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe("Button Render", () => {
  // mount
  it("mount button", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    // 断言
    expect(wrapper.text()).toBe("Button");
  });
});

describe("color", () => {
  it("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-blue-500")
    ).toBe(true);
  });

  it("red", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        color: "red",
      },
    });

    expect(
      wrapper
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("bg-red-500")
    ).toBe(true);
  });
});
