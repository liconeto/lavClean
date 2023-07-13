import { open } from "sqlite";
import sqlite3 from "sqlite3";

// you would have to import / invoke this in another file
export async function openDb() {
  return open({
    filename: "./database/laveDb.db",
    driver: sqlite3.Database,
  });
}
