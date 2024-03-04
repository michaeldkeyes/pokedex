<script setup lang="ts">
//@ts-nocheck
const id = parseInt(useRoute().params.id as string);

const { data: pokeyman } = await useFetch(`/api/pokemon/${id}`);

const pokemon = ref(pokeyman.value?.pokemon);

// const { data: pokemonData } = await useAsyncData("pokemonData", async () => {
//   const [pokemon, species] = await Promise.all([
//     $fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
//     $fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
//   ]);

//   return { pokemon, species };
// });

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

// const backgroundColor = computed(() => {
//   const pokemonType = pokemonData.value.pokemon.types[0].type.name;
//   const type = typeColors[pokemonType as keyof typeof typeColors];
//   const rValue = type[0];
//   const gValue = type[1];
//   const bValue = type[2];

//   return `rgb(${rValue}, ${gValue}, ${bValue})`;
// });

const backgroundColor = computed(() => {
  const pokemonType = pokemon.value?.typeOne.toLowerCase();
  const color = typeColors[pokemonType as keyof typeof typeColors];

  const rValue = color[0];
  const gValue = color[1];
  const bValue = color[2];

  return `rgb(${rValue}, ${gValue}, ${bValue})`;
});

// const progressBarColor = computed(() => {
//   const pokemonType = pokemonData.value.pokemon.types[0].type.name;
//   const type = typeColors[pokemonType as keyof typeof typeColors];
//   const rValue = type[0];
//   const gValue = type[1];
//   const bValue = type[2];

//   return `rgba(${rValue}, ${gValue}, ${bValue}, 0.5)`;
// });

const progressBarColor = computed(() => {
  const pokemonType = pokemon.value?.typeOne.toLowerCase();
  const color = typeColors[pokemonType as keyof typeof typeColors];

  const rValue = color[0];
  const gValue = color[1];
  const bValue = color[2];

  return `rgba(${rValue}, ${gValue}, ${bValue}, 0.5)`;
});

const types = computed(() => {
  const pokeTypes = [pokemon.value?.typeOne];

  if (pokemon.value?.typeTwo) {
    pokeTypes.push(pokemon.value.typeTwo);
  }

  return pokeTypes;
});

const abilities = computed(() => {
  const pokeAbilities = [pokemon.value?.abilityOne, pokemon.value?.abilityTwo];

  if (pokemon.value?.abilityThree) {
    pokeAbilities.push(pokemon.value.abilityThree);
  }

  return pokeAbilities;
});

const stats = [
  { name: "HP", value: pokemon.value?.hp },
  { name: "ATK", value: pokemon.value?.atk },
  { name: "DEF", value: pokemon.value?.def },
  { name: "SATK", value: pokemon.value?.satk },
  { name: "SDEF", value: pokemon.value?.sdef },
  { name: "SPD", value: pokemon.value?.spd },
];
</script>

<template>
  <main class="m-0 flex h-screen w-screen flex-col items-center gap-4 p-0">
    <PokeDetailsHeader :id="pokemon.id" :name="pokemon.name" />
    <PokeImage :id="id" :pokemon-name="pokemon.name" />
    <div
      class="relative -mt-12 flex w-full flex-col rounded-lg bg-white px-5 pb-5 pt-14 shadow-inner sm:w-8/12 md:w-3/4 lg:w-3/5 xl:w-1/2 2xl:w-1/3"
    >
      <PokeType :background-color="backgroundColor" :types="types" />
      <PokeAbout
        :abilities="abilities"
        :flavor-text="pokemon?.flavorText"
        :height="pokemon.height"
        :weight="pokemon.weight"
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
