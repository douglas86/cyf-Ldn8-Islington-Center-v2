import dotenv from "dotenv";
dotenv.config();

export const keys = {
  PORT: process.env.PORT,
  db: process.env.DATABASE_URL,
};
