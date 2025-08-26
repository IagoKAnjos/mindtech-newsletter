const express = require("express");
const cors = require("cors");
const subscriptionRoutes = require("./routes/subscription.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas da API
app.use("/api", subscriptionRoutes);

module.exports = app;
