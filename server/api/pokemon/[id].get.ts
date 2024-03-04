import { eq } from "drizzle-orm";
import { pokemon } from "~/db/schema";
import { db } from "~/server/sqlite-service";

export default defineEventHandler(async (event) => {
  try {
    const pokeId = event.context.params?.id as string;
    const pokeResponse = db
      .select()
      .from(pokemon)
      .where(eq(pokemon.id, parseInt(pokeId)))
      .get();

    return { pokemon: pokeResponse };
  } catch (error: any) {
    throw createError({
      statusCode: 400,
      statusMessage: error.message,
    });
  }
});
