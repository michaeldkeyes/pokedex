import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { relations } from "drizzle-orm";
import {
  sqliteTable,
  integer,
  text,
  primaryKey,
} from "drizzle-orm/sqlite-core";

export const pokemon = sqliteTable("pokemon", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
  height: integer("height").notNull(),
  weight: integer("weight").notNull(),
  flavorText: text("flavor_text").notNull(),
  hp: integer("hp").notNull(),
  atk: integer("atk").notNull(),
  def: integer("def").notNull(),
  satk: integer("satk").notNull(),
  sdef: integer("sdef").notNull(),
  spd: integer("spd").notNull(),
});

export const pokemonRelations = relations(pokemon, ({ many }) => ({
  pokemonToTypes: many(pokemonToTypes),
}));

export const types = sqliteTable("types", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const typesRelations = relations(types, ({ many }) => ({
  pokemonToTypes: many(pokemonToTypes),
}));

export const pokemonToTypes = sqliteTable(
  "pokemon_to_types",
  {
    pokemonId: integer("pokemon_id")
      .notNull()
      .references(() => pokemon.id),
    typeId: integer("type_id")
      .notNull()
      .references(() => types.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.pokemonId, table.typeId] }),
  }),
);

export const pokemonToTypesRelations = relations(pokemonToTypes, ({ one }) => ({
  pokemon: one(pokemon, {
    fields: [pokemonToTypes.pokemonId],
    references: [pokemon.id],
  }),
  type: one(types, {
    fields: [pokemonToTypes.typeId],
    references: [types.id],
  }),
}));

export const abilities = sqliteTable("abilities", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export type Pokemon = InferSelectModel<typeof pokemon>;
export type InsertPokemon = InferInsertModel<typeof pokemon>;
