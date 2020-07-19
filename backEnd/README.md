<div align="center">
    <img alt="Get Repos" title="Get Repos" src="../.github/logo.png" width='250px'/>
</div>
<p align="center">
    <a href="https://github.com/fajzanetti">
        <img src="https://img.shields.io/badge/GitHub-fajzanetti-6c63ff?logo=GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/felipezanetti/">
        <img src="https://img.shields.io/badge/Linkedin-felipezanetti-6c63ff?logo=linkedin"/>
    </a>
</p>
<p align="center">
  <a href="#-Sobre-o-desafio">🚀 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Começando">💻 Começando</a>
</p>

# 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

* [Node.JS](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [EditorConfig](https://editorconfig.org/)
* [express](https://expressjs.com/) : Para criar as rotas da API e midlewares de autenticação;
* [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) : Para criptografar a senha do usuário e posterior fazer a auntenticação;
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme) : Para criação e manipulação do token de usuário;
* [knexjs](http://knexjs.org/) : Para o banco de dados com a utilização de `migration` e `seeds`, ambos para criar e popular o BD e tambem a conexão;
* [sqlite3](https://www.sqlite.org/index.html) : É o banco que escolhi para criação desta API, mas como o banck-end, foi feito com o Knex JS, é possivel fazer a alteração do BD;
* [uuidv4](https://www.npmjs.com/package/uuidv4) : Para gerar ID´s unicas.

# 💻 Começando

## Exigências
* [Node.JS](https://nodejs.org/en/)
* [yarn](https://classic.yarnpkg.com/lang/en/) ou [npm](https://www.npmjs.com/)

## Opcional
* [Insomnia](https://insomnia.rest/)
> Faça o download do Insomnia e importe o arquivo `Insomnia.json` dentro da pasta [.github](https://github.com/fajzanetti/Codificar-Processo-Seletivo/tree/master/.github).

Clone o projeto e acesse a pasta `backend`

```sh
# Clone o repositótio
git clone https://github.com/fajzanetti/Codificar-Processo-Seletivo.git

# Acessar a pasta mobile
cd backend
```

Siga os passos abaixo

```sh
# Instale as dependências usando yarn/npm
yarn

# Crie a instância do SQLite3 usando o Knex
yarn knex:migrate
# Agora popule o banco de dados para teste
yarn knex:seed
# Caso queira desfazer a criação e população do banco o comando `yarn knex:rollback` setá disponivel

# Para concluir, execute o serviço da API
yarn dev:server

# Muito bem, servidor iniciado!
```
Próximo passo acesse aqui: [Mobile](https://github.com/fajzanetti/Codificar-Processo-Seletivo/tree/master/mobile#readme)

---

Desenvolvido com 💜 por [Felipe Zanetti!](https://www.linkedin.com/in/felipezanetti/)
