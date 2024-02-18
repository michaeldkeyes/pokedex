<script setup lang="ts">
const store = usePokemonStore();

const query = defineModel<string>({ default: "" });

function resetQuery() {
  query.value = "";
  store.search(query.value);
}
</script>

<template>
  <div class="search-wrap">
    <img src="~/assets/search.svg" alt="search" />
    <input
      id="search-input"
      v-model.trim="query"
      type="text"
      placeholder="Search"
      @keyup="store.search(query)"
    />
    <img
      id="search-close-icon"
      src="~/assets/cross.svg"
      alt="cross icon"
      @click="resetQuery"
    />
  </div>
</template>
