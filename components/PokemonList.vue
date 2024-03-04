<script setup lang="ts">
// const store = usePokemonStore();

// const { pokemon } = storeToRefs(store);

const { data: pokeymans } = useFetch("/api/pokemon");
</script>

<template>
  <section
    class="max-h-24 min-h-minCalc w-widthCalc overflow-y-auto rounded-xl bg-white shadow-inner"
  >
    <div v-if="pokeymans!.pokemon.length > 0" class="w-full">
      <div class="mx-0 my-4 flex flex-wrap items-center justify-center gap-3">
        <div
          v-for="(poke, id) in pokeymans!.pokemon"
          :key="id"
          class="size-36 cursor-pointer rounded-lg bg-white text-center shadow"
        >
          <NuxtLink :to="`/details/${poke.id}`">
            <p
              class="min-h-4 px-2 py-0 text-right text-xxs leading-6 text-grayscaleMedium"
            >
              #{{ poke.id }}
            </p>
            <img
              class="m-auto size-18"
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`"
              :alt="poke.name"
            />
            <div
              class="-mt-4 rounded-md bg-grayscaleBackground px-2 pb-2 pt-10 text-grayScaleDark"
            >
              <p class="text-xs capitalize">{{ poke.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div v-else>Pokemon not found</div>
  </section>
</template>
