const subscribeEmail = async (req, email) => {
  try {
    const db = req.app.get("db");

    const result = await db.run("INSERT INTO subscribers (email) VALUES (?)", [
      email,
    ]);
    console.log(`Novo subscritor inserido com o ID: ${result.lastID}`);
    return { message: "Subscrição realizada com sucesso!" };
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT") {
      const customError = new Error("Este e-mail já está subscrito.");
      customError.statusCode = 409;
      throw customError;
    }
    console.error("Erro no serviço de subscrição:", error);
    throw new Error("Ocorreu um erro ao processar a sua subscrição.");
  }
};

const unsubscribeEmail = async (req, email) => {
  try {
    const db = req.app.get("db");

    const result = await db.run("DELETE FROM subscribers WHERE email = ?", [
      email,
    ]);
    if (result.changes === 0) {
      const customError = new Error(
        "Este e-mail não foi encontrado na nossa lista."
      );
      customError.statusCode = 404;
      throw customError;
    }
    console.log(`E-mail ${email} descadastrado com sucesso.`);
    return {
      message: "Você foi descadastrado com sucesso da nossa newsletter.",
    };
  } catch (error) {
    if (error.statusCode) throw error;
    console.error("Erro no serviço de descadastro:", error);
    throw new Error(
      "Ocorreu um erro ao processar o seu pedido de descadastro."
    );
  }
};

module.exports = {
  subscribeEmail,
  unsubscribeEmail,
};
