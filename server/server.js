import express from "express";
import cors from "cors";

import { keys } from "./lib/keys.js";

import homeRoutes from "./routes/homeRoutes.js";

const app = express();
const { PORT } = keys;

app.use(express.json());
app.use(cors());

app.use("/", homeRoutes);

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));
