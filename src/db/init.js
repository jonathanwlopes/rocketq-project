const Database = require("./config");

const initDb = {
  async init() {
    try {
      const db = await Database();

      await db.exec(`
      CREATE TABLE rooms (
          id INTEGER PRIMARY KEY,
          pass TEXT
      )
      `);

      await db.exec(`
      CREATE TABLE  questions (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT,
          read INT
      )
      `);

      await db.close();
    } catch (e) {
      console.log(e);
    }
  },
};

initDb.init();
