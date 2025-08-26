const { validationResult } = require("express-validator");
const subscriptionService = require("../services/subscription.service");

const handleSubscription = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const { email } = req.body;
    const result = subscriptionService.subscribeEmail(email);

    return res.status(200).json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Ocorreu um erro inesperado no servidor.";
    return res.status(statusCode).json({ error: message });
  }
};

module.exports = {
  handleSubscription,
};
