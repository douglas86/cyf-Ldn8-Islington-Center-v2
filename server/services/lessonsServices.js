import { pool } from "../lib/pool.js";
import { then, thenWithMessage } from "../utils/then.js";
import { caught } from "../utils/catch.js";

export const getServices = async (res, query) => {
  await pool
    .query(query)
    .then((results) => then(res, results))
    .catch((err) => caught(res, err));
};

export const getIdServices = async (res, query, id) => {
  await pool
    .query(query, [id])
    .then((results) => then(res, results))
    .catch((err) => caught(res, err));
};

export const postServices = async (
  res,
  query,
  { title, img_url, intro, summary, content, video_url }
) => {
  await pool
    .query(query, [title, img_url, intro, summary, content, video_url])
    .then(() => thenWithMessage(res, "Lesson created"))
    .catch((err) => caught(res, err));
};

export const putServices = async (
  res,
  query,
  id,
  { title, img_url, intro, summary, content, video_url }
) => {
  await pool
    .query(query, [title, img_url, intro, summary, content, video_url, id])
    .then(async () => await thenWithMessage(res, "Lesson Updated"))
    .catch(async (err) => await caught(res, err));
};

export const deleteServices = async (res, id) => {
  await pool
    .query(`DELETE FROM lessons WHERE id=$1`, [id])
    .then(() => thenWithMessage(res, "Lesson Deleted"))
    .catch((err) => caught(res, err));
};
