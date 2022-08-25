import { Sequelize } from "sequelize";

const db = new Sequelize("app", "", "", {
  storage: "./src/db/database.sqlite",
  dialect: "sqlite",
  logging: false,
});

export default db;
