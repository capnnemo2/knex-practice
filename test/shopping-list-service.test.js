const shoppingListService = require("../src/shopping-list-service");
const knex = require("knex");

describe(`shopping list service object`, function() {
  let db;
  let testList = [
    {
      id: 1,
      name: "Banana Bread Boat",
      price: 23.22,
      category: "Breakfast",
      checked: false,
      date_added: new Date("2029-01-22T16:28:32.615Z")
    },
    {
      id: 2,
      name: "Chocolate Coughdrops",
      price: 52.11,
      category: "Snack",
      checked: false,
      date_added: new Date("2100-05-22T16:28:32.615Z")
    },
    {
      id: 3,
      name: "Everflavor Beans",
      price: 89.45,
      category: "Lunch",
      checked: false,
      date_added: new Date("1919-12-22T16:28:32.615Z")
    }
  ];
  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
  });

  before(() => db("shopping_list").truncate());

  afterEach(() => db("shopping_list").truncate());

  after(() => db.destroy());

  context(`Given 'shopping_list' has data`, () => {
    beforeEach(() => {
      return db.into("shopping_list").insert(testList);
    });

    it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
      const expectedList = testList.map(item => ({
        ...item,
        checked: false
      }));
      return shoppingListService.getAllItems(db).then(actual => {
        expectedList(actual).to.eql(expectedList);
      });
    });

    it(`getById() resolves an item by id from 'shopping_list' table`, () => {
      const idToGet = 3;
      const thirdItem = testItems[idToGet - 1];
      return shoppingListService.getById(db, idToGet).then(actual => {
        expect(actual).to.eql({
          id: idToGet,
          name: thirdItem.name,
          date_added: thirdItem.date_added,
          price: thirdItem.price,
          category: thirdItem.category,
          checked: false
        });
      });
    });

    it(`deleteItem() removes an item by id from 'shopping_list' table`, () => {
      const idToDelete = 3;
      return shoppingListService
        .deleteItem(db, idToDelete)
        .then(() => shoppingListService.getAllItems(db))
        .then(allItems => {
          const expected = testList
            .filter(item => item.id !== idToDelete)
            .map(item => ({
              ...item,
              checked: false
            }));
          expect(allItems).to.eql(expected);
        });
    });

    it(`updateItem() updates an item in the 'shopping_list' table`, () => {
      const idOfItemToUpdate = 3;
      const newItemData = {
        name: "updated title",
        price: 34.34,
        date_added: new Date(),
        checked: true
      };
      const originalItem = testList[idOfItemToUpdate - 1];
      return shoppingListService
        .updateItem(db, idOfItemToUpdate, newItemData)
        .then(() => shoppingListService.getById(db, idOfItemToUpdate))
        .then(item => {
          expect(item).to.eql({
            id: idOfItemToUpdate,
            ...originalItem,
            ...newItemData
          });
        });
    });
  });

  context(`Given 'shopping_list' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return shoppingListService.getAllItems(db).then(actual => {
        expect(actual).to.eql([]);
      });
    });

    it(`insertItem() inserts an item and resolves it with an 'id'`, () => {
      const newItem = {
        name: "Test new name",
        price: 55.55,
        date_added: new Date("2020-01-01T00:00:00.000Z"),
        checked: true,
        category: "Lunch"
      };
      return shoppingListService.insertItem(db, newItem).then(actual => {
        expect(actual).to.eql({
          id: 1,
          name: newItem.name,
          price: newItem.price,
          date_added: newItem.date_added,
          checked: newItem.checked,
          category: newItem.category
        });
      });
    });
  });
});
