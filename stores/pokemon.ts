export const usePokemonStore = defineStore("pokemonStore", () => {
  // Holds all the pokemon. Value should never change. Everything in a Pinia store has to be a ref or it does not work
  const pokemonList = ref<any[]>([]);
  // This is the array that is actually used throughout the app
  const pokemon = ref<any[]>([]);

  async function fetchPokemon() {
    const { data: pokemonData } = await useFetch<any>(
      "https://pokeapi.co/api/v2/pokemon?limit=151",
    );

    pokemonList.value = pokemonData.value.results;
  }

  function resetPokemon() {
    pokemon.value = pokemonList.value;
  }

  function search(query: string) {
    pokemon.value = pokemonList.value.filter((pokemon) => {
      return pokemon.name.toLowerCase().startsWith(query);
    });
  }

  function sortByName() {
    console.log("Sorting by name...");

    pokemon.value.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
  }

  function sortByNumber() {
    console.log("Sorting by number...");

    pokemon.value.sort((a, b) => {
      const idA = parseInt(a.url.split("/")[6]);
      const idB = parseInt(b.url.split("/")[6]);
      return idA - idB;
    });
  }

  return {
    pokemon,
    pokemonList,
    fetchPokemon,
    resetPokemon,
    search,
    sortByName,
    sortByNumber,
  };
});
