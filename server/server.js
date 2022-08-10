import express from "express";
import cors from "cors";

import { keys } from "./lib/keys.js";

import homeRoutes from "./routes/homeRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";

const app = express();
const { PORT } = keys;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api", homeRoutes);
app.use("/api/lessons", lessonsRoutes);
app.use("/api/questions", questionsRoutes);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
