import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import type { BetterSQLite3Database } from "drizzle-orm/better-sqlite3";
import * as schema from "../db/schema";

export const sqlite = new Database("sqlite.db");
export const db: BetterSQLite3Database<typeof schema> = drizzle(sqlite, {
  schema,
});
