export const usePokemonStore = defineStore("pokemonStore", () => {
  const pokemonList = ref<any[]>([]);
  const pokemon = ref<any[]>([]);

  async function fetchPokemon() {
    const { data: pokemonData } = await useFetch<any>(
      "https://pokeapi.co/api/v2/pokemon?limit=151",
    );

    pokemonList.value = pokemonData.value.results;
    pokemon.value = pokemonList.value;
  }

  function search(query: string) {
    pokemon.value = pokemonList.value.filter((pokemon) => {
      return pokemon.name.toLowerCase().startsWith(query);
    });
  }

  return { pokemon, pokemonList, fetchPokemon, search };
});
