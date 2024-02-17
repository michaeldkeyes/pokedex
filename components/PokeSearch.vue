<script setup lang="ts">
const query = defineModel<string>({ default: "" });
const emit = defineEmits<{
  search: [query: string];
}>();

function resetQuery() {
  query.value = "";
  emit("search", query.value);
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
      @keyup="$emit('search', query)"
    />
    <img
      id="search-close-icon"
      src="~/assets/cross.svg"
      alt="cross icon"
      @click="resetQuery"
    />
  </div>
</template>
