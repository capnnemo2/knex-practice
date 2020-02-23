require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

console.log("knex and driver installed correctly");

const q1 = knexInstance("amazong_products")
  .select("*")
  .toQuery();
const q2 = knexInstance
  .from("amazong_products")
  .select("*")
  .toQuery();

console.log("q1:", q1);
console.log("q2:", q2);
