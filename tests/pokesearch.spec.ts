import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";

import PokeSearch from "../components/PokeSearch.vue";

describe("PokeSearch.vue", () => {
  function mountFactory() {
    return render(PokeSearch, { global: { plugins: [createTestingPinia()] } });
  }

  it("should call the search function whenever a key is typed in the input", async () => {
    mountFactory();

    const store = usePokemonStore();

    const input = screen.getByTestId("search-input");

    // this updates the v-model
    await fireEvent.update(input, "Charizard");

    // these trigger the keyup function that calls the store
    await fireEvent.keyUp(input, "C");
    await fireEvent.keyUp(input, "h");
    await fireEvent.keyUp(input, "a");
    await fireEvent.keyUp(input, "r");
    await fireEvent.keyUp(input, "i");
    await fireEvent.keyUp(input, "z");
    await fireEvent.keyUp(input, "a");
    await fireEvent.keyUp(input, "r");
    await fireEvent.keyUp(input, "d");

    expect(store.search).toHaveBeenCalledTimes(9);
    expect(store.search).toHaveBeenCalledWith("Charizard");
  });

  it("should show the close icon if the input field has input", async () => {
    mountFactory();

    const closeIcon = screen.queryByTestId("search-close-icon");
    expect(closeIcon).toBeNull();

    const input = screen.getByTestId("search-input");
    await fireEvent.update(input, "C");

    screen.getByTestId("search-close-icon");
  });

  it("should clear the input when the close icon is clicked", async () => {
    mountFactory();

    const store = usePokemonStore();

    const input = screen.getByTestId("search-input");
    await fireEvent.update(input, "C");

    const closeIcon = screen.getByTestId("search-close-icon");
    await fireEvent.click(closeIcon);

    // Only the click event called the store since we did not do a fireEvent.keyUp
    expect(store.search).toHaveBeenCalledTimes(1);
    expect(store.search).toHaveBeenCalledWith("");
  });
});
