<script setup lang="ts">
//@ts-nocheck
const id = parseInt(useRoute().params.id as string);

const { data: pokemonData } = await useAsyncData("pokemonData", async () => {
  const [pokemon, species] = await Promise.all([
    $fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
    $fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
  ]);

  return { pokemon, species };
});

// const [{ data: pokemon }, { data: species }] = await Promise.all([
//   useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${id}`),
//   useFetch<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
// ]);

const typeColors = {
  bug: [168, 184, 32],
  dark: [112, 88, 72],
  dragon: [112, 56, 248],
  electric: [248, 208, 48],
  fairy: [238, 153, 172],
  fighting: [192, 48, 40],
  fire: [240, 128, 48],
  flying: [168, 144, 240],
  ghost: [112, 88, 152],
  grass: [120, 200, 80],
  ground: [224, 192, 104],
  ice: [9, 216, 216],
  normal: [168, 168, 120],
  poison: [160, 64, 160],
  psychic: [248, 88, 136],
  rock: [184, 160, 56],
  steel: [184, 184, 208],
  water: [104, 144, 240],
};

const backgroundColor = computed(() => {
  const pokemonType = pokemonData.value.pokemon.types[0].type.name;
  const type = typeColors[pokemonType as keyof typeof typeColors];
  const rValue = type[0];
  const gValue = type[1];
  const bValue = type[2];

  return `rgb(${rValue}, ${gValue}, ${bValue})`;
});

const progressBarColor = computed(() => {
  const pokemonType = pokemonData.value.pokemon.types[0].type.name;
  const type = typeColors[pokemonType as keyof typeof typeColors];
  const rValue = type[0];
  const gValue = type[1];
  const bValue = type[2];

  return `rgba(${rValue}, ${gValue}, ${bValue}, 0.5)`;
});

const stats = [
  { name: "HP", value: pokemonData.value.pokemon.stats[0].base_stat },
  { name: "ATK", value: pokemonData.value.pokemon.stats[1].base_stat },
  { name: "DEF", value: pokemonData.value.pokemon.stats[2].base_stat },
  { name: "SATK", value: pokemonData.value.pokemon.stats[3].base_stat },
  { name: "SDEF", value: pokemonData.value.pokemon.stats[4].base_stat },
  { name: "SPD", value: pokemonData.value.pokemon.stats[5].base_stat },
];
</script>

<template>
  <main class="m-0 flex h-screen w-screen flex-col items-center gap-4 p-0">
    <PokeDetailsHeader
      :id="pokemonData.pokemon.id"
      :name="pokemonData.pokemon.name"
    />
    <PokeImage :id="id" :pokemon-name="pokemonData.pokemon.name" />
    <div
      class="relative -mt-12 flex flex-col rounded-lg bg-white px-5 pb-5 pt-14 shadow-inner"
    >
      <PokeType
        :background-color="backgroundColor"
        :types="pokemonData.pokemon.types"
      />
      <PokeAbout
        :abilities="pokemonData.pokemon.abilities"
        :flavor-text="
          pokemonData.species.flavor_text_entries[0].flavor_text.replace(
            /\f/g,
            ' ',
          )
        "
        :height="pokemonData.pokemon.height"
        :weight="pokemonData.pokemon.weight"
      />

      <PokeStats
        :stats="stats"
        :background-color="backgroundColor"
        :progress-bar-color="progressBarColor"
      />
    </div>
    <img
      class="absolute right-2 top-2 z-10 opacity-10"
      src="~/assets/pokedex.svg"
      alt="pokedex"
    />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: v-bind(backgroundColor);
  border-color: v-bind(backgroundColor);
}
</style>
