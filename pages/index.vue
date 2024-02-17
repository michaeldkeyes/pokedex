<script setup lang="ts">
import type { PokemonResult } from "~/types";

interface PokemonData {
  count: number;
  next: string;
  previous: null;
  results: PokemonResult[];
}

let pokemonResults: PokemonResult[] = [];
const filteredPokemon = ref<PokemonResult[]>([]);

const { data: pokemonList } = await useFetch<PokemonData>(
  "https://pokeapi.co/api/v2/pokemon?limit=151",
);

pokemonResults = pokemonList.value!.results;
filteredPokemon.value = pokemonResults;

function search(query: string) {
  console.log("searching...");
  filteredPokemon.value = pokemonResults.filter((pokemon) => {
    return pokemon.name.toLowerCase().startsWith(query);
  });
}

function sortByName() {
  console.log("Sorting by name...");

  filteredPokemon.value.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
}

function sortByNumber() {
  console.log("Sorting by number...");

  filteredPokemon.value.sort((a, b) => {
    const idA = parseInt(a.url.split("/")[6]);
    const idB = parseInt(b.url.split("/")[6]);
    return idA - idB;
  });
}
</script>

<template>
  <main class="bg-red flex flex-col items-center gap-4">
    <PokeHeader />
    <!-- <div>
      <div class="flex">
        <img src="~/assets/pokeball.svg" alt="pokeball" />
        <h1>Pokedex</h1>
      </div>

      <PokeSearch @search="search" />
      <PokeSort @sort-by-name="sortByName" @sort-by-number="sortByNumber" /> -->
    <PokemonList :pokemon-list="filteredPokemon" />
    <!-- </div> -->
  </main>
</template>
