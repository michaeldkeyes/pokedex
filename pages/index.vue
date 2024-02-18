<script setup lang="ts">
import type { PokemonResult } from "~/types";

const store = usePokemonStore();

await callOnce(store.fetchPokemon);

// interface PokemonData {
//   count: number;
//   next: string;
//   previous: null;
//   results: PokemonResult[];
// }
</script>

<template>
  <main class="flex flex-col items-center gap-4 bg-red">
    <PokeHeader />
    <PokemonList />
  </main>
</template>
