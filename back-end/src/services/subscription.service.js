const subscribedEmails = new Set();

const subscribeEmail = (email) => {
  // Verifica se o e-mail já está subscrito
  if (subscribedEmails.has(email)) {
    const error = new Error("Este e-mail já está subscrito.");
    error.statusCode = 409; // 409 Conflict
    throw error;
  }

  // Adiciona o e-mail à lista
  subscribedEmails.add(email);
  console.log(
    "Lista de subscritores atualizada:",
    Array.from(subscribedEmails)
  );

  return { message: "Subscrição realizada com sucesso!" };
};

module.exports = {
  subscribeEmail,
};
