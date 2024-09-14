"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express = require("express");
const app = express();
const signup = require("./Routes/signup");
(0, db_1.connectToDB)();
app.use("/", signup);
app.listen(3000, () => {
    console.log("Listening");
});
