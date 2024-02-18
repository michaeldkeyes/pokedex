<script setup lang="ts">
const store = usePokemonStore();
</script>

<template>
  <div class="sort-wrapper">
    <div class="sort-wrap">
      <img id="sort-icon" src="~/assets/sorting.svg" alt="sorting" />
    </div>
    <div class="filter-wrapper">
      <p>Sort by:</p>
      <div class="filter-wrap">
        <div>
          <input
            id="number"
            type="radio"
            name="filters"
            value="number"
            checked
            @input="store.sortByNumber"
          />
          <label for="number">Number</label>
        </div>
        <div>
          <input
            id="name"
            type="radio"
            name="filters"
            value="name"
            @input="store.sortByName"
          />
          <label for="name">Name</label>
        </div>
      </div>
    </div>
  </div>
</template>
