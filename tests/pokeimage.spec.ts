// @vitest-environment nuxt
import { describe, expect, test } from "vitest";
import { renderSuspended } from "@nuxt/test-utils/runtime";
import { screen } from "@testing-library/vue";

import PokeImage from "../components/PokeImage.vue";

describe("PokeImage.vue", () => {
  test("back arrow will not show if on the first pokemon", async () => {
    await renderSuspended(PokeImage, {
      props: {
        id: 1,
        pokemonName: "Bulbasaur",
      },
    });

    const backLink = screen.queryByTestId("back-link");

    expect(backLink).toBeNull();
  });

  test("back arrow href should go to the previous pokemon", async () => {
    const id = 6;

    await renderSuspended(PokeImage, {
      props: {
        id,
        pokemonName: "Charizard",
      },
    });

    const backLink = screen.getByTestId("back-link");

    const href = backLink.getAttribute("href");

    expect(href?.charAt(href.length - 1)).toEqual(id - 1 + "");
  });

  test("forward arrow will not show if on the last pokemon", async () => {
    await renderSuspended(PokeImage, {
      props: {
        id: 151,
        pokemonName: "Mew",
      },
    });

    const forwardLink = screen.queryByTestId("forward-link");

    expect(forwardLink).toBeNull();
  });

  test("forward arrow href should go to the next pokemon", async () => {
    const id = 6;
    await renderSuspended(PokeImage, {
      props: {
        id,
        pokemonName: "Charizard",
      },
    });

    const forwardLink = screen.getByTestId("forward-link");

    const href = forwardLink.getAttribute("href");

    expect(href?.charAt(href.length - 1)).toEqual(id + 1 + "");
  });
});
