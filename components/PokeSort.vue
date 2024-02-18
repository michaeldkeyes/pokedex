<script setup lang="ts">
const store = usePokemonStore();

const showSort = ref<boolean>(false);
</script>

<template>
  <div class="relative">
    <div
      class="relative flex min-h-8 min-w-8 items-center justify-center rounded-full bg-white shadow-inner"
      @click="showSort = !showSort"
    >
      <img id="sort-icon" src="~/assets/sorting.svg" alt="sorting" />
    </div>
    <div
      v-if="showSort"
      class="absolute right-0 top-10 z-50 min-w-32 rounded-xl border-4 border-t-0 border-solid border-red bg-red px-1 pb-1 pt-0 shadow"
    >
      <p class="my-3 px-4 py-2 text-xs font-bold text-white">Sort by:</p>
      <div class="rounded-lg bg-white px-4 py-2 shadow-inner">
        <div class="mb-4 flex items-center gap-2">
          <input
            id="number"
            class="accent-red"
            type="radio"
            name="filters"
            value="number"
            checked
            @input="store.sortByNumber"
          />
          <label class="text-xs" for="number">Number</label>
        </div>
        <div class="flex items-center gap-2">
          <input
            id="name"
            class="accent-red"
            type="radio"
            name="filters"
            value="name"
            @input="store.sortByName"
          />
          <label class="text-xs" for="name">Name</label>
        </div>
      </div>
    </div>
  </div>
</template>
