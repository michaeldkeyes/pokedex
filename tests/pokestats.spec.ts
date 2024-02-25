import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

import PokeStats from "../components/PokeStats.vue";

const stats = [
  { name: "HP", value: 78 },
  { name: "ATK", value: 84 },
  { name: "DEF", value: 78 },
  { name: "SATK", value: 109 },
  { name: "SDEF", value: 85 },
  { name: "SPD", value: 100 },
];

describe("PokeStats.vue", () => {
  function mountFactory() {
    return mount(PokeStats, {
      props: {
        stats,
        backgroundColor: "rgb(240, 128, 48)",
        progressBarColor: "rgba(240,128, 48, 0.5)",
      },
    });
  }

  test("it renders the stat names", async () => {
    const wrapper = mountFactory();

    const statNameTags = wrapper.findAll("[data-testid='stat-name']");

    statNameTags.forEach((tag, index) => {
      expect(tag.text()).equals(stats[index].name);
    });

    expect(statNameTags.length).equals(stats.length);
  });

  test("it renders the stat values", () => {
    const wrapper = mountFactory();

    const statValueTags = wrapper.findAll("[data-testid='stat-value']");

    statValueTags.forEach((tag, index) => {
      expect(tag.text()).equals(stats[index].value.toString());
    });

    expect(statValueTags.length).equals(stats.length);
  });
});
