import { describe, expect, it } from "vitest";

import PokeType from "../components/PokeType.vue";
import { mount } from "@vue/test-utils";

const types = [{ type: { name: "Fire" } }, { type: { name: "Flying" } }];

describe("PokeType.vue", () => {
  it("renders the type names", () => {
    const wrapper = mount(PokeType, {
      props: {
        backgroundColor: "rgb(240, 128, 48)",
        types,
      },
    });

    const typeTags = wrapper.findAll("#poke-type");

    typeTags.forEach((tag, index) => {
      expect(tag.text()).equals(types[index].type.name);
    });
  });
});
