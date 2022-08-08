import express from "express";

import {
  postControllers,
  getControllers,
  putControllers,
  deleteControllers,
} from "../controllers/questionsControllers.js";

const router = express.Router();

router
  .post("/", (req, res) => postControllers(req, res))
  .get("/:id", (req, res) => getControllers(req, res))
  .put("/", (req, res) => putControllers(req, res))
  .delete("/:id", (req, res) => deleteControllers(req, res));

export default router;
