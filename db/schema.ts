import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const pokemon = sqliteTable("pokemon", {
  id: integer("id").primaryKey(),
  name: text("name").notNull().unique(),
  typeOne: text("type_one")
    .notNull()
    .references(() => types.type),
  typeTwo: text("type_two").references(() => types.type),
  height: integer("height").notNull(),
  weight: integer("weight").notNull(),
  abilityOne: text("ability_one")
    .notNull()
    .references(() => abilities.ability),
  abilityTwo: text("ability_two")
    .notNull()
    .references(() => abilities.ability),
  abilityThree: text("ability_three").references(() => abilities.ability),
  flavorText: text("flavor_text").notNull(),
  hp: integer("hp").notNull(),
  atk: integer("atk").notNull(),
  def: integer("def").notNull(),
  satk: integer("satk").notNull(),
  sdef: integer("sdef").notNull(),
  spd: integer("spd").notNull(),
});

export const types = sqliteTable("types", {
  type: text("type").notNull().unique().primaryKey(),
});

export const abilities = sqliteTable("abilities", {
  ability: text("ability").notNull().unique().primaryKey(),
});

export type Pokemon = InferSelectModel<typeof pokemon>;
export type SelectPokemon = InferInsertModel<typeof pokemon>;
