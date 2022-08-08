import express from "express";

import {
  deleteControllers,
  getControllers,
  postControllers,
  putControllers,
} from "../controllers/lessonsControllers.js";

const router = express.Router();

router
  .get("/", async (req, res) => await getControllers(res))
  .get("/:id", async (req, res) => getControllers(res, req.params.id))
  .post("/", async (req, res) => postControllers(req, res))
  .put("/:id", async (req, res) => putControllers(req, res, req.params.id))
  .delete("/:id", async (req, res) => deleteControllers(res, req.params.id));

export default router;
