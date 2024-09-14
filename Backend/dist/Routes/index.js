"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup = require("./signup");
const user = require("./user");
const router = (0, express_1.Router)();
router.use("/", signup);
router.use("/user", user);
module.exports = router;
