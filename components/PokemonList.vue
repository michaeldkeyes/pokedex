<script setup lang="ts">
const store = usePokemonStore();

const { pokemon } = storeToRefs(store);
// import type { PokemonResult } from "~/types";

// interface Props {
//   pokemonList: PokemonResult[];
// }

// defineProps<Props>();
</script>

<template>
  <section class="pokemon-list">
    <div class="container" v-if="pokemon.length > 0">
      <div v-for="(poke, id) in pokemon" :key="id" class="list-wrapper">
        <NuxtLink :to="`/details/${poke.url.split('/')[6]}`">
          <p>#{{ poke.url.split("/")[6] }}</p>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.url.split('/')[6]}.svg`"
            :alt="poke.name"
          />
          <p>{{ poke.name }}</p>
        </NuxtLink>
      </div>
    </div>
    <div v-else>Pokemon not found</div>
  </section>
</template>
