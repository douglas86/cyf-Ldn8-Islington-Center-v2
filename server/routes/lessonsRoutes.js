import express from "express";

import { get } from "../controllers/lessonsControllers.js";

const router = express.Router();

router.get("/", async (res) => await get(res));

export default router;
