import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { keys } from "./lib/keys.js";

import homeRoutes from "./routes/homeRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";

const app = express();
const { PORT } = keys;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(express.json());
app.use(cors());

// console.log("dir", __dirname);
// console.log("path", path.join(__dirname, "..", "client/build"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client/build")));
  console.log("env", process.env.DATABASE_URL);
  // app.use(express.static(path.join(__dirname, "../client/build")));
  // app.use(express.static(path.resolve(__dirname, "../client/build")));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  // });
}

// isRoutes
app.use("/", homeRoutes);
app.use("/lessons", lessonsRoutes);
app.use("/questions", questionsRoutes);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
