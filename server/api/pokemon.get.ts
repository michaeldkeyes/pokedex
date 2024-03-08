import { pokemon, types } from "~/db/schema";
import { db } from "../sqlite-service";

export default defineEventHandler(async () => {
  try {
    //const pokemonResponse = db.select().from(pokemon).all();
    const pokemonResponse = await db.query.pokemon.findMany({
      with: {
        pokemonToTypes: {
          columns: {},
          with: {
            type: {
              columns: {
                name: true,
              },
            },
          },
        },
      },
    });
    return { pokemon: pokemonResponse };
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
