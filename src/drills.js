require("dotenv").config();
const knex = require("knex");

const knexInstance = knex({
  client: "pg",
  connection: process.env.DB_URL
});

console.log("all is well");

// knexInstance("shopping_list")
//   .select("*")
//   .then(result => {
//     console.log(result);
//   });

function findName(searchTerm) {
  knexInstance
    .from("shopping_list")
    .select("*")
    .where("name", "ILIKE", `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

// findName("bacon");

function paginate(pageNum) {
  const productsPerPage = 6;
  const offset = productsPerPage * (pageNum - 1);
  knexInstance
    .select("*")
    .from("shopping_list")
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result);
    });
}

// paginate(2);

function getItemsAfterDate(daysAgo) {
  knexInstance
    .from("shopping_list")
    .select("*")
    .where(
      "date_added",
      ">",
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then(result => {
      console.log(result);
    });
}

// getItemsAfterDate(3);

function totalCostPerCategory() {
  knexInstance
    .from("shopping_list")
    .select("category")
    .groupBy("category")
    .sum("price as total")
    .then(result => {
      console.log(result);
    });
}

totalCostPerCategory();
