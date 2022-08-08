import express from "express";
import cors from "cors";

import { keys } from "./lib/keys.js";

import homeRoutes from "./routes/homeRoutes.js";
import lessonsRoutes from "./routes/lessonsRoutes.js";

const app = express();
const { PORT } = keys;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/", homeRoutes);
app.use("/lessons", lessonsRoutes);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
