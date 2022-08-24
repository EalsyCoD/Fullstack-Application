#!/usr/bin/env node

import express from "express";

import db from "./config/database.config";

import noteRouter from "./route";

db.sync().then(() => {
  console.log("connect to db");
});

const app = express();
const port = 3001;

app.use(express.json());

app.use("/api", noteRouter);

app.listen(port, () => {
  console.log("server is running on port 3001");
});
