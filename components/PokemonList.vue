<script setup lang="ts">
import type { PokemonResult } from "~/types";

interface Props {
  pokemonList: PokemonResult[];
}

defineProps<Props>();
</script>

<template>
  <section class="pokemon-list">
    <div class="container" v-if="pokemonList.length > 0">
      <div v-for="(pokemon, id) in pokemonList" :key="id" class="list-wrapper">
        <NuxtLink :to="`/details/${pokemon.url.split('/')[6]}`">
          <p>#{{ pokemon.url.split("/")[6] }}</p>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`"
            :alt="pokemon.name"
          />
          <p>{{ pokemon.name }}</p>
        </NuxtLink>
      </div>
    </div>
    <div v-else>Pokemon not found</div>
  </section>
</template>
