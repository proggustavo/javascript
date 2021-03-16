import express from "express";
import { body } from "express-validator";
import { validateRequest } from "./../middlewares/validationResquest.js";

const router = express.Router();

router.post(
  "/isValidEmail",
  body("email").isEmail().withMessage("Email inválido"),
  validateRequest,
  (req, res) => {
    res.send({ ok: true });
  }
);

export { router as CriarUserRouter };
