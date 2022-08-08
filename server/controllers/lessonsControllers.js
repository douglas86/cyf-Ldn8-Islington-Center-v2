import { pool } from "../lib/pool.js";
import { then } from "../utils/then.js";
import { caught } from "../utils/catch.js";

export const get = async (res) => {
  await pool
    .query(`SELECT * FROM lessons ORDER BY id`)
    .then((results) => then(res, results))
    .catch((err) => caught(err, res));
};
