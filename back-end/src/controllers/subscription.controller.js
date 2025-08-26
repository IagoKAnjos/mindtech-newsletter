const { validationResult } = require("express-validator");
const subscriptionService = require("../services/subscription.service");

const handleSubscription = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const { email } = req.body;

    const result = await subscriptionService.subscribeEmail(req, email);

    return res.status(200).json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Ocorreu um erro inesperado no servidor.";
    return res.status(statusCode).json({ error: message });
  }
};

const handleUnsubscribe = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const { email } = req.body;
    const result = await subscriptionService.unsubscribeEmail(req, email);

    return res.status(200).json(result);
  } catch (error) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Ocorreu um erro inesperado no servidor.";
    return res.status(statusCode).json({ error: message });
  }
};

module.exports = {
  handleSubscription,
  handleUnsubscribe,
};
