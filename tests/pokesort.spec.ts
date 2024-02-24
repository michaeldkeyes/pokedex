import { test, expect, describe } from "vitest";
import { createTestingPinia } from "@pinia/testing";

import PokeSort from "../components/PokeSort.vue";
import { mount } from "@vue/test-utils";

describe("PokeSort", () => {
  function mountFactory() {
    return mount(PokeSort, { global: { plugins: [createTestingPinia()] } });
  }

  test("radio buttons should show when sorting image is clicked", async () => {
    const wrapper = mountFactory();

    const sortIcon = wrapper.find("[data-testid='sort-icon']");
    let showSortDiv = wrapper.find("[data-testid='show-sort']");

    expect(showSortDiv.exists()).toBeFalsy();

    await sortIcon.trigger("click");

    showSortDiv = wrapper.find("[data-testid='show-sort']");

    expect(showSortDiv.exists()).toBeTruthy();
  });

  test("sortByName from the store should be called when sortByName radio is clicked", async () => {
    const wrapper = mountFactory();

    const store = usePokemonStore();

    const sortIcon = wrapper.find('[data-testid="sort-icon"]');

    await sortIcon.trigger("click");

    const sortByName = wrapper.find("#name");
    await sortByName.trigger("input");

    expect(store.sortByName).toHaveBeenCalledTimes(1);
  });

  test("sortByNumber from the store should be called when sortByNumber radio is clicked", async () => {
    const wrapper = mountFactory();

    const store = usePokemonStore();

    const sortIcon = wrapper.find('[data-testid="sort-icon"]');

    await sortIcon.trigger("click");

    const sortByNumber = wrapper.find("#number");
    await sortByNumber.trigger("input");

    expect(store.sortByNumber).toHaveBeenCalledTimes(1);
  });
});
