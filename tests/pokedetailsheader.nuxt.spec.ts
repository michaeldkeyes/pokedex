import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, test } from "vitest";

import PokeDetailsHeader from "../components/PokeDetailsHeader.vue";

const props = {
  name: "charizard",
  id: 6,
};

describe("PokeDetailsHeader.vue", () => {
  function mountFactory() {
    return mountSuspended(PokeDetailsHeader, { props });
  }

  test("name should be displayed capitalized", async () => {
    const wrapper = await mountFactory();

    const nameTag = wrapper.find("[data-testid='name']");

    expect(nameTag.text()).toBe("Charizard");
  });

  test("id should be displayed with 3 digits", async () => {
    const wrapper = await mountFactory();

    const idTag = wrapper.find("[data-testid='id']");

    expect(idTag.text()).toBe("#006");
  });
});
