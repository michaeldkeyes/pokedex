<template>
  <header class="w-[90%] font-poppins">
    <div class="container m-0">
      <div class="my-4 flex items-center">
        <img class="mr-4" src="~/assets/pokeball.svg" alt="pokeball" />
        <h1 class="text-2xl font-bold text-white">Pokedex</h1>
      </div>
      <div class="flex h-8 w-[100%] items-center gap-4">
        <PokeSearch />
        <PokeSort />
      </div>
    </div>
  </header>
</template>
