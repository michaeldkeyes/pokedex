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

const hp = pokemon.value.stats[0].base_stat;
const attack = pokemon.value.stats[1].base_stat;
const defense = pokemon.value.stats[2].base_stat;
const specialAttack = pokemon.value.stats[3].base_stat;
const specialDefense = pokemon.value.stats[4].base_stat;
const speed = pokemon.value.stats[5].base_stat;
</script>

<template>
  <main>
    <header>
      <div>
        <div>
          <NuxtLink to="/">
            <img
              id="back-btn"
              src="~/assets/back-to-home.svg"
              alt="back to home"
            />
          </NuxtLink>
        </div>
        <div>
          <h1 class="text-3xl font-bold">{{ capitalizedName }}</h1>
        </div>
        <div>
          <p>{{ threeDigitId }}</p>
        </div>
      </div>
    </header>
    <div>
      <NuxtLink v-if="id > 1" :to="`/details/${id - 1}`">
        <img src="~/assets/chevron_left.svg" alt="back" />
      </NuxtLink>
      <div>
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
          :alt="pokemon.name"
        />
      </div>
      <NuxtLink v-if="id < 151" :to="`/details/${id + 1}`">
        <img src="~/assets/chevron_right.svg" alt="forward" />
      </NuxtLink>
    </div>
    <div>
      <div>
        <p>grass</p>
        <p>poison</p>
      </div>
      <p>About</p>
      <div>
        <div>
          <div>
            <img src="~/assets/weight.svg" alt="weight" />
            <p>{{ pokemon.weight }}</p>
          </div>
          <p>Weight</p>
        </div>
        <div>
          <div>
            <img src="~/assets/height.svg" alt="height" />
            <p>{{ pokemon.height }}</p>
          </div>
          <p>Height</p>
        </div>
        <div>
          <div>
            <p>{{ pokemon.abilities[0].ability.name }}</p>
            <p>{{ pokemon.abilities[1].ability.name }}</p>
          </div>
          <p>Abilities</p>
        </div>
      </div>
      <p>
        {{ species.flavor_text_entries[0].flavor_text.replace(/\f/g, " ") }}
      </p>
      <p>Base Stats</p>
      <div>
        <div>
          <p>HP</p>
          <p>{{ hp }}</p>
          <!-- <div class="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              class="rounded-full bg-blue-700 p-0.5 text-center text-xs font-medium leading-none text-white"
              style="width: 55%"
            ></div>
          </div> -->
          <progress :value="hp" max="120"></progress>
        </div>
        <div>
          <p>ATK</p>
          <p>{{ attack }}</p>
          <progress :value="attack" max="120"></progress>
        </div>
        <div>
          <p>DEF</p>
          <p>{{ defense }}</p>
          <progress :value="defense" max="120"></progress>
        </div>
        <div>
          <p>SATK</p>
          <p>{{ specialAttack }}</p>
          <progress :value="specialAttack" max="120"></progress>
        </div>
        <div>
          <p>SDEF</p>
          <p>{{ specialDefense }}</p>
          <progress :value="specialDefense" max="120"></progress>
        </div>
        <div>
          <p>SPEED</p>
          <p>{{ speed }}</p>
          <progress :value="speed" max="120"></progress>
        </div>
      </div>
    </div>
    <img src="~/assets/pokedex.svg" alt="pokedex" />
  </main>
</template>

<style lang="scss" scoped>
$background-color: lightgrey;
$color: blue;

progress[value] {
  appearance: none;
  border: none;
  width: 200px;
  margin: 0 10px;
  border-radius: 10em;
  background: v-bind(progressBarColor);

  //   progress[value]::-webkit-progress-bar {
  //   border-radius: 10em;
  //   background: var(--background);
  // }
  // progress[value]::-webkit-progress-value {
  //   border-radius: 10em;
  //   background: var(--color);
  // }

  &::-moz-progress-bar {
    //border-radius: 10em;
    background: v-bind(backgroundColor);
    //opacity: 1 !important;
  }
}
</style>
