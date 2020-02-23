require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

console.log("knex and driver installed correctly");

// knexInstance("amazong_products")
//   .select("*")
//   .then(result => {
//     console.log(result);
//   });

// knexInstance
//   .select("product_id", "name", "price", "category")
//   .from("amazong_products")
//   .where({ name: "Point of view gun" })
//   .first()
//   .then(result => {
//     console.log(result);
//   });

function searchByProductName(searchTerm) {
  knexInstance
    .select("product_id", "name", "price", "category")
    .from("amazong_products")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

searchByProductName("holo");
