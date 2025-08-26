require("dotenv").config();
const app = require("./src/app");
const { openDb } = require("./src/database/setup");

const PORT = process.env.PORT || 3001;

async function startServer() {
  try {
    console.log("1. A iniciar a configuração da base de dados...");
    const db = await openDb();

    await db.exec(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    app.set("db", db);

    console.log("2. Base de dados pronta.");

    app.listen(PORT, () => {
      console.log(
        `3. Servidor a correr na porta ${PORT}. Aplicação pronta a receber pedidos.`
      );
    });
  } catch (error) {
    console.error("Falha crítica ao iniciar o servidor:", error);
    process.exit(1);
  }
}

startServer();
