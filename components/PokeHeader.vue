<template>
  <header class="font-poppins m-4 w-[90%]">
    <div class="container m-0">
      <div class="flex items-center">
        <img class="mr-4" src="~/assets/pokeball.svg" alt="pokeball" />
        <h1 class="text-white text-2xl font-bold">Pokedex</h1>
      </div>
      <div class="flex w-[100%] items-center gap-4">
        <PokeSearch />
        <PokeSort />
      </div>
    </div>
  </header>
</template>
