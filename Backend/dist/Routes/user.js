"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SignupBodyValidationMiddleware_1 = require("../Middleware/SignupBodyValidationMiddleware");
const config_1 = require("../config");
const router = (0, express_1.Router)();
router.post('/signup', SignupBodyValidationMiddleware_1.SignupBodyValidationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signupBody = req.body;
    try {
        console.log(signupBody);
        console.log(signupBody.username);
        const userExists = yield db_1.User.exists({ username: signupBody.username });
        console.log(userExists);
        console.log(!userExists);
        if (userExists) {
            console.log("User exists");
            throw new Error();
        }
        const newUser = yield db_1.User.create(signupBody);
        const userId = newUser._id;
        const token = jsonwebtoken_1.default.sign({ userId }, config_1.JWT_SECRET);
        res.json({
            message: "User created successfully",
            userId: userId,
            token: token
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            message: "Error"
        });
    }
}));
module.exports = router;
