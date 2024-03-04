import { pokemon } from "~/db/schema";
import { db } from "../sqlite-service";

export default defineEventHandler(async () => {
  try {
    const pokemonResponse = db.select().from(pokemon).all();
    return { pokemon: pokemonResponse };
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
