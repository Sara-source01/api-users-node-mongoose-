# 🧪 Mongoose Demo

Este é um projeto simples de API REST criada com **Node.js**, **Express** e **MongoDB (Mongoose)**.  
Permite criar, listar, atualizar e deletar usuários a partir de requisições HTTP.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) *(plataforma JavaScript para criar servidores e aplicações back-end)*
- [Express](https://expressjs.com/) *(framework minimalista para criar rotas e gerenciar requisições HTTP)*
- [MongoDB](https://www.mongodb.com/) *(banco de dados NoSQL usado para armazenar os dados dos usuários)*
- [Mongoose](https://mongoosejs.com/) *(biblioteca que facilita a conexão e modelagem de dados no MongoDB)*
- [dotenv](https://www.npmjs.com/package/dotenv) *(para carregar variáveis de ambiente de forma segura através do arquivo `.env`)*
- [Validator](https://www.npmjs.com/package/validator) *(usada para validar campos, como verificar se um e-mail é válido)*
- [CORS](https://www.npmjs.com/package/cors) *(para permitir acesso da interface HTML sem bloqueios de origem cruzada)*
- [MongoDB Compass](https://www.mongodb.com/products/compass) *(interface gráfica para visualizar, buscar e editar os dados no MongoDB)*



---

## 📂 Estrutura do Projeto

```plaintext
mongoose-demo/
├── controllers/
│   └── userController.js
│
├── models/
│   └── user.js
│
├── routes/
│   └── userRoutes.js
│
├── node_modules/
│
├── index.html
│
├── .env
│
├── server.js
│
├── package.json
│
├── package-lock.json
│
└── README.md
```
---

## 📌 Funcionalidades da API

| Método | Rota             | Descrição                          |
|--------|------------------|--------------------------------------|
| GET    | `/users`         | Lista todos os usuários              |
| GET    | `/users/:id`     | Mostra um usuário específico por ID  |
| POST   | `/users`         | Cria um novo usuário                 |
| PUT    | `/users/:id`     | Atualiza os dados de um usuário      |
| DELETE | `/users/:id`     | Remove um usuário do banco de dados  |

---

## 📦 Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Sara-source01/api-users-node-mongoose-.git


2. Instale as dependências:
npm install express mongoose dotenv cors validator

3. Configure o arquivo .env:
MONGO_URI=mongodb://localhost:27017/mongoose_demo
PORT=3000

4. Inicie o servidor:
node server.js



🧪 Testando a API
Você pode testar a API de três formas:

1. Com Postman ou Insomnia:
Envie requisições para:
http://localhost:3000/users


2. Com interface HTML (index.html):
Abra o arquivo index.html no navegador, preencha os campos de nome e e-mail e clique em "Create".
Isso envia um POST para a rota /users usando fetch().

Atenção: o servidor precisa estar rodando e com CORS ativado.

A biblioteca CORS permite que navegadores (como uma página HTML local) consigam acessar a API sem bloqueio.

3. Via MongoDB Compass:
Abra o MongoDB Compass.

Conecte-se a:
mongodb://localhost:27017

Acesse o banco de dados mongoose_demo.

Clique na coleção users para ver os dados inseridos pela API ou HTML.

Dessa forma, você pode acompanhar visualmente as alterações feitas pelos endpoints da API.

---
📄 Licença  
Este projeto é livre para estudos e testes.


## 👩‍💻 Autor

Desenvolvido por [Sara George](https://github.com/Sara-source01) 🚀  
Sinta-se à vontade para entrar em contato ou contribuir com melhorias!
