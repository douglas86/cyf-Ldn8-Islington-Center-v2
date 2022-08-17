import pkg from "pg";

import { keys } from "./keys.js";

const { Pool } = pkg;
const { db } = keys;

export const pool = new Pool({
  connectionString: db,
  ssl: { rejectUnauthorized: false },
});
