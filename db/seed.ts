import { db } from "../server/sqlite-service";
import { pokemonAbilities } from "./data/pokemon-abilities";
import { pokemonTypes } from "./data/pokemon-types";
import { abilities, pokemon, pokemonToTypes, types } from "./schema";

export async function seed() {
  //   const data: InsertPokemon[] = [];

  // push pokemon data into data array

  console.log("Seed start");
  await db.delete(types);
  await db.delete(abilities);
  await db.delete(pokemon);

  const typess = await db.insert(types).values(pokemonTypes).returning();
  await db.insert(abilities).values(pokemonAbilities);
  const pokeymans = await db
    .insert(pokemon)
    .values([
      {
        name: "Bulbasaur",
        height: 7,
        weight: 69,
        flavorText:
          "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
        hp: 45,
        atk: 49,
        def: 49,
        satk: 65,
        sdef: 65,
        spd: 45,
      },
    ])
    .returning();

  await db.insert(pokemonToTypes).values([
    { pokemonId: 1, typeId: 1 },
    { pokemonId: 1, typeId: 2 },
  ]);

  console.log(typess);
  console.log(pokeymans);
  console.log("Seed done");
}

seed();
