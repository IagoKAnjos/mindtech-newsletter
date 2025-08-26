# Desafio Newsletter Mindtech

![Status do Projeto](https://img.shields.io/badge/status-conclu%C3%ADdo-green)
![GitHub Language Count](https://img.shields.io/github/languages/count/IagoKAnjos/mindtech-newsletter)
![GitHub Top Language](https://img.shields.io/github/languages/top/IagoKAnjos/mindtech-newsletter?color=blue)

## 📝 Sobre o Projeto

Este projeto é uma solução completa para um sistema de subscrição de newsletter, desenvolvido como parte de um desafio técnico. A aplicação consiste num front-end moderno e responsivo, construído com **React**, e uma API back-end robusta, desenvolvida com **Node.js** e **Express**, com persistência de dados garantida pelo **SQLite**.

O objetivo foi criar uma experiência de utilizador fluida e atender a todos os requisitos técnicos, incluindo a implementação fiel ao design, validação de dados, gestão de subscritores (sem duplicados) e a funcionalidade de descadastro.

---

## ✨ Funcionalidades Principais

- **Interface Responsiva:** O design adapta-se a ecrãs de desktop e mobile.
- **Subscrição de Newsletter:** Formulário para os utilizadores inserirem o seu e-mail.
- **Validação Robusta:** O back-end utiliza `express-validator` para garantir que os dados recebidos são válidos.
- **Prevenção de Duplicados:** A API impede o cadastro de e-mails já existentes, retornando um erro `409 Conflict`.
- **Mensagens de Feedback:** O utilizador recebe confirmações de sucesso ou mensagens de erro claras no front-end.
- **Persistência de Dados:** Os e-mails são armazenados de forma segura numa base de dados SQLite.
- **Funcionalidade de Descadastro:** Um endpoint `DELETE` na API permite a remoção de um subscritor.

---

## 🛠️ Tecnologias Utilizadas

| Camada    | Tecnologia            | Descrição                                       |
| :-------- | :-------------------- | :---------------------------------------------- |
| Front-end | **React.js**          | Para a construção da interface de utilizador.   |
| Back-end  | **Node.js**           | Ambiente de execução do servidor.               |
|           | **Express.js**        | Framework para a criação da API RESTful.        |
|           | **SQLite**            | Base de dados relacional para persistência.     |
|           | **CORS**              | Para permitir a comunicação entre front e back. |
|           | **Express Validator** | Para validação robusta dos dados de entrada.    |

---

## 🏛️ Arquitetura do Back-end

O back-end foi estruturado seguindo o princípio da separação de responsabilidades para garantir um código limpo, escalável e de fácil manutenção:

- `src/routes`: Define os endpoints da API e associa as regras de validação.
- `src/controllers`: Recebe as requisições, chama os serviços apropriados e envia a resposta ao cliente.
- `src/services`: Contém a lógica de negócio pura, como a interação com a base de dados.
- `src/database`: Responsável pela configuração e conexão com a base de dados SQLite.
- `server.js`: Ponto de entrada que garante que a base de dados esteja pronta antes de iniciar o servidor.

---

## 🚀 Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [NPM](https://www.npmjs.com/) (geralmente vem com o Node.js)

### 1. Clonar o Repositório

```bash
git clone https://github.com/IagoKAnjos/mindtech-newsletter.git
cd mindtech-newsletter
2. Configurar e Iniciar o Back-end
Abra um primeiro terminal e execute os seguintes comandos:
Bash
# Navegue até à pasta do back-end
cd back-end

# Instale as dependências
npm install

# Inicie o servidor
npm start
O servidor back-end estará a correr em http://localhost:3001.
3. Configurar e Iniciar o Front-end
Abra um segundo terminal e execute os seguintes comandos:
Bash
# Navegue até à pasta do front-end
cd front-end/newsletter

# Instale as dependências
npm install

# Inicie a aplicação React
npm start
A aplicação front-end estará disponível em http://localhost:3000 e abrirá automaticamente no seu navegador.
🧪 Testando a API (Opcional )
Os endpoints da API podem ser testados diretamente com ferramentas como o Postman ou curl.
Subscrever um e-mail:
Bash
curl -X POST http://localhost:3001/api/subscribe -H "Content-Type: application/json" -d '{"email": "teste@exemplo.com"}'
Descadastrar um e-mail:
Bash
curl -X DELETE http://localhost:3001/api/unsubscribe -H "Content-Type: application/json" -d '{"email": "teste@exemplo.com"}'
Autor
Iago Anjos
```
