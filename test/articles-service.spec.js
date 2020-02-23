const ArticlesService = require("../src/articles-service");
const knex = require("knex");

describe(`Articles service object`, function() {
  let db;
  let testArticles = [
    {
      id: 1,
      date_published: new Date("2029-01-22T16:28:32.615Z"),
      title: "First test post",
      content: "Blah blah blah"
    },
    {
      id: 2,
      date_published: new Date("2100-05-22T16:28:32.615Z"),
      title: "Second test post",
      content: "Slightly more interesting"
    },
    {
      id: 3,
      date_published: new Date("1919-12-22T16:28:32.615Z"),
      title: "Third test post",
      content: "Nope, just as bland actually"
    }
  ];
  before(() => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DB_URL
    });
  });

  before(() => db("blogful_articles").truncate());

  after(() => db.destroy());

  context(`Given 'blogful_articles' has data`, () => {
    before(() => {
      return db.into("blogful_articles").insert(testArticles);
    });
    it(`getAllArticles() resolves all articles from 'blogful_articles' table`, () => {
      return ArticlesService.getAllArticles(db).then(actual => {
        expect(actual).to.eql(testArticles);
      });
    });
  });
});
