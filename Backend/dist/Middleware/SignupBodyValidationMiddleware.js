"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupBodyValidationMiddleware = void 0;
const zod_1 = require("../zod");
const SignupBodyValidationMiddleware = (req, res, next) => {
    const signupBody = req.body;
    const result = zod_1.SignupBodySchema.safeParse(signupBody);
    if (!result.success) {
        res.json({
            message: "Provide valid inputs"
        });
        return;
    }
    next();
};
exports.SignupBodyValidationMiddleware = SignupBodyValidationMiddleware;
