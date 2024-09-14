"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const cors_1 = __importDefault(require("cors"));
const express = require("express");
const app = express();
const rootRouter = require("./Routes/index");
(0, db_1.connectToDB)();
app.use((0, cors_1.default)());
app.use(express.json());
app.use("/api/v1/", rootRouter);
app.listen(3000, () => {
    console.log("Listening");
});
