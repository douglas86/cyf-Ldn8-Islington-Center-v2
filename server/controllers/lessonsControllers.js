import { pool } from "../lib/pool.js";

import {
  getServices,
  getIdServices,
  postServices,
  putServices,
  deleteServices,
} from "../services/lessonsServices.js";

export const getControllers = async (res, id) => {
  let query;
  if (id !== undefined) {
    query = `SELECT * FROM lessons WHERE id = $1`;
    await getIdServices(res, query, id);
  } else {
    query = `SELECT * FROM lessons ORDER BY id`;
    await getServices(res, query);
  }
};

export const postControllers = async (req, res) => {
  const query = `INSERT INTO lessons (title, img_url, intro, summary, content, video_url) VALUES ($1,$2,$3,$4,$5,$6)`;
  await postServices(res, query, req.body);
};

export const putControllers = async (req, res, id) => {
  const query = `UPDATE lessons SET title=$1,img_url=$2,intro=$3,summary=$4,content=$5,video_url=$6 WHERE id=$7`;
  await putServices(res, query, id, req.body);
};

export const deleteControllers = async (res, id) => {
  const query = `SELECT * FROM lessons WHERE id = $1`;
  await pool.query(query, [id]).then(async (results) => {
    if (results.rows.length > 0) {
      await deleteServices(res, id);
    }
  });
};
