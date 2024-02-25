import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

import PokeAbout from "../components/PokeAbout.vue";

const abilities = [
  { ability: { name: "Blaze" } },
  { ability: { name: "Solar-Power" } },
];
const flavorText =
  "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.";
const height = 905;
const weight = 17;

describe("PokeAbout.vue", () => {
  function mountFactory() {
    return mount(PokeAbout, {
      props: {
        abilities,
        flavorText,
        height,
        weight,
      },
    });
  }

  it("should render the weight", () => {
    const wrapper = mountFactory();

    const weightTag = wrapper.find("[data-testid='weight']");

    expect(weightTag.text()).toBe(weight / 10 + "kg");
  });

  it("should render the height", () => {
    const wrapper = mountFactory();

    const heightTag = wrapper.find("[data-testid='height']");

    expect(heightTag.text()).toBe(height / 10 + "m");
  });

  it("should render the abilities", () => {
    const wrapper = mountFactory();

    const abilityTags = wrapper.findAll("[data-testid='abilities']");

    abilityTags.forEach((tag, index) => {
      expect(tag.text()).toBe(abilities[index].ability.name);
    });

    expect(abilityTags.length).toEqual(abilities.length);
  });

  it("should render the flavor text", () => {
    const wrapper = mountFactory();

    const flavorTextTag = wrapper.find("[data-testid='flavor-text']");

    expect(flavorTextTag.text()).toBe(flavorText);
  });
});
