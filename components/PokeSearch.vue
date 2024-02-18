<script setup lang="ts">
const store = usePokemonStore();

const query = defineModel<string>({ default: "" });

function resetQuery() {
  query.value = "";
  store.search(query.value);
}
</script>

<template>
  <div
    class="relative flex h-8 w-[100%] items-center gap-2 rounded-2xl bg-white shadow-inner"
  >
    <img src="~/assets/search.svg" alt="search" class="ml-4" />
    <input
      id="search-input"
      v-model.trim="query"
      class="w-[60%] border-none text-xs focus-visible:outline-none"
      type="text"
      placeholder="Search"
      @keyup="store.search(query)"
    />
    <img
      v-if="query.length > 0"
      id="search-close-icon"
      class="absolute right-4 cursor-pointer"
      src="~/assets/cross.svg"
      alt="cross icon"
      @click="resetQuery"
    />
  </div>
</template>
