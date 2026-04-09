import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",       // default in WAMP
  password: "",       // usually empty in WAMP
  database: "nextjs_demo",
});

export default pool;