<template>
  <header>
    <div class="container">
      <div class="logo-wrapper">
        <img src="~/assets/pokeball.svg" alt="pokeball" />
        <h1>Pokedex</h1>
      </div>
      <div class="search-wrapper">
        <PokeSearch @search="search" />
        <PokeSort @sort-by-name="sortByName" @sort-by-number="sortByNumber" />
      </div>
    </div>
  </header>
</template>
