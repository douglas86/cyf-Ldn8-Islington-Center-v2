import express from "express";
import cors from "cors";

import { keys } from "./lib/keys.js";

import homeRoutes from "./routes/homeRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";
import * as path from "path";

const app = express();
const { PORT } = keys;

// middleware
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // app.use(express.static(path.join(__dirname, "../client/build")));
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

// isRoutes
app.use("/api", homeRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/questions", questionsRoutes);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
