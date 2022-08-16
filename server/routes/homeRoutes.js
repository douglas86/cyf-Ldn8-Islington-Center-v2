import express from "express";

const router = express.Router();

// This is a comment
router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export default router;
