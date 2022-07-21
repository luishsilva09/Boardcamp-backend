import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const connection = new Pool({
  user: "postgres",
  password: "3301",
  host: "localhost",
  port: 5432,
  connectionString: process.env.DATABASE_URL,
});

export default connection;
