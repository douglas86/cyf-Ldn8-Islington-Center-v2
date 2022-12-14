import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { keys } from "./lib/keys.js";

import homeRoutes from "./routes/homeRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

const { PORT } = keys;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "client/build")));
}

// isRoutes
app.use("/api", homeRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/questions", questionsRoutes);

// catch all method
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client/build", "index.html"));
});

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
