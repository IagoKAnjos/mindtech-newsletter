// src/routes/subscription.routes.js
const express = require("express");
const { body } = require("express-validator");
const subscriptionController = require("../controllers/subscription.controller");

const router = express.Router();

router.post(
  "/subscribe",
  [
    body("email")
      .notEmpty()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Por favor, insira um e-mail válido."),
  ],
  subscriptionController.handleSubscription
);

module.exports = router;
