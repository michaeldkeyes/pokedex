<script setup lang="ts">
const id = parseInt(useRoute().params.id as string);

// const { data: thingy } = await useAsyncData(`$id`, async () => {
//   const [pokemon, species] = await Promise.all([
//     $fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
//     $fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
//   ]);

//   return { pokemon, species };
// });
// const { data: pokemon } = await useFetch(
//   `https://pokeapi.co/api/v2/pokemon/${id}`,
// );
// const { data: species } = await useFetch(
//   `https://pokeapi.co/api/v2/pokemon-species/${id}`,
// );
const [{ data: pokemon }, { data: species }] = await Promise.all([
  useFetch<any>(`https://pokeapi.co/api/v2/pokemon/${id}`),
  useFetch<any>(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
]);

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
  const pokemonType = pokemon.value.types[0].type.name;
  const type = typeColors[pokemonType as keyof typeof typeColors];
  const rValue = type[0];
  const gValue = type[1];
  const bValue = type[2];

  return `rgb(${rValue}, ${gValue}, ${bValue})`;
});

const progressBarColor = computed(() => {
  const pokemonType = pokemon.value.types[0].type.name;
  const type = typeColors[pokemonType as keyof typeof typeColors];
  const rValue = type[0];
  const gValue = type[1];
  const bValue = type[2];

  return `rgba(${rValue}, ${gValue}, ${bValue}, 0.5)`;
});

const capitalizedName = computed(() => {
  const name = pokemon.value.name;

  return name.charAt(0).toUpperCase() + name.slice(1);
});

const threeDigitId = computed(() => {
  return "#" + pokemon.value.id.toString().padStart(3, 0);
});

const stats = [
  { name: "HP", value: pokemon.value.stats[0].base_stat },
  { name: "ATK", value: pokemon.value.stats[1].base_stat },
  { name: "DEF", value: pokemon.value.stats[2].base_stat },
  { name: "SATK", value: pokemon.value.stats[3].base_stat },
  { name: "SDEF", value: pokemon.value.stats[4].base_stat },
  { name: "SPD", value: pokemon.value.stats[5].base_stat },
];
</script>

<template>
  <main class="m-0 flex h-screen w-screen flex-col items-center gap-4 p-0">
    <header class="relative z-10 px-5 pb-6 pt-5">
      <div class="flex items-center justify-between gap-x-4">
        <div class="flex items-center gap-x-2">
          <NuxtLink to="/" class="max-h-8">
            <img
              id="back-btn"
              src="~/assets/back-to-home.svg"
              alt="back to home"
            />
          </NuxtLink>
        </div>
        <div>
          <h1 class="text-white text-2xl font-bold">{{ capitalizedName }}</h1>
        </div>
        <div>
          <p class="text-white text-xs font-bold">{{ threeDigitId }}</p>
        </div>
      </div>
    </header>
    <div class="relative">
      <NuxtLink
        v-if="id > 1"
        :to="`/details/${id - 1}`"
        class="absolute -left-8 top-1/2 z-50 inline-block translate-y-1/2"
      >
        <img
          class="w-7 brightness-0 grayscale invert"
          src="~/assets/chevron_left.svg"
          alt="back"
        />
      </NuxtLink>
      <div class="relative z-10 m-auto size-48">
        <img
          class="size-full"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
          :alt="pokemon.name"
        />
      </div>
      <NuxtLink
        v-if="id < 151"
        :to="`/details/${id + 1}`"
        class="absolute -right-8 top-1/2 z-50 inline-block translate-y-1/2"
      >
        <img
          class="w-7 brightness-0 grayscale invert"
          src="~/assets/chevron_right.svg"
          alt="forward"
        />
      </NuxtLink>
    </div>
    <div
      class="bg-white relative -mt-12 flex flex-col rounded-lg px-5 pb-5 pt-14 shadow-inner"
    >
      <div class="flex flex-wrap items-center justify-center gap-4">
        <p
          v-for="(type, index) in pokemon.types"
          id="poke-type"
          :key="index"
          class="text-white my-3 rounded-lg px-2 py-1 text-xs font-bold capitalize"
        >
          {{ type.type.name }}
        </p>
      </div>
      <p class="my-3 text-center text-xs font-bold">About</p>
      <div class="flex min-h-20 items-end">
        <div
          class="before:bg-grayscaleLight relative flex-1 text-center before:absolute before:bottom-0 before:right-0 before:top-0 before:m-auto before:h-full before:w-[1px]"
        >
          <div
            class="flex items-center justify-center gap-2 px-5 py-2 text-center"
          >
            <img class="text-center" src="~/assets/weight.svg" alt="weight" />
            <p class="my-2 text-center text-xs">{{ pokemon.weight }}</p>
          </div>
          <p class="text-grayscaleMedium text-xxs my-2 text-center">Weight</p>
        </div>
        <div
          class="before:bg-grayscaleLight relative flex-1 text-center before:absolute before:bottom-0 before:right-0 before:top-0 before:m-auto before:h-full before:w-[1px]"
        >
          <div
            class="flex items-center justify-center gap-2 px-5 py-2 text-center"
          >
            <img
              class="rotate-90 text-center"
              src="~/assets/height.svg"
              alt="height"
            />
            <p class="my-2 text-center text-xs">{{ pokemon.height }}</p>
          </div>
          <p class="text-grayscaleMedium text-xxs my-2 text-center">Height</p>
        </div>
        <div class="relative flex-1 text-center">
          <div
            class="flex flex-col items-center justify-center gap-0 px-1 py-2"
          >
            <p
              v-for="(ability, index) in pokemon.abilities"
              :key="index"
              class="my-2 break-all text-center text-xs capitalize"
            >
              {{ ability.ability.name }}
            </p>
          </div>
          <p class="text-grayscaleMedium text-xxs my-2 text-center">
            Abilities
          </p>
        </div>
      </div>
      <p class="text-grayScaleDark my-2 text-xs">
        {{ species.flavor_text_entries[0].flavor_text.replace(/\f/g, " ") }}
      </p>
      <p class="my-3 text-center text-xs font-bold">Base Stats</p>
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
#poke-type {
  background-color: v-bind(backgroundColor);
}

main {
  background-color: v-bind(backgroundColor);
  border-color: v-bind(backgroundColor);
}
</style>
