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
* [React](https://pt-br.reactjs.org/)
* [React Native](https://reactnative.dev/)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) : Pacote de icones;
* [React Navigation](https://reactnavigation.org/) : Para a navegação entre as telas, como navegação em pilha(*stack*) e em abas (*bottom tabs*);
* [axios](https://github.com/axios/axios#readme) : Para interagir com as requisições ao Back-end;
* [unform](https://unform.dev/) : Para a criação e desempenho dos formulários;
* [yup](https://github.com/jquense/yup#readme) : Para anásile e validação dos formulários;
* [styled-components](https://styled-components.com/) : Para fazer a estilização com aplicativo;

# 💻 Começando

## Exigências

* O back-end deve estar em execução

Clone o projeto e acesse a pasta `mobile`

> Caso já tenha feito os passos do `backend`, não é necessário clonar novamente do github.

```sh
# Clone o repositótio
git clone https://github.com/fajzanetti/Codificar-Processo-Seletivo.git

# Acessar a pasta mobile
cd backend
```

Siga os passos abaixo

```sh
# Instale as dependências com yarn/npm
yarn

# --------------------------------------------------------------
# Verifique se o arquivo "src/services/api.ts", em `baseURL`, possui o IP do back-end

# O PORT utilizado no back-end é 3333

# Emulador iOS/Android utiliza-se http://localhost:PORT
# Dispositivo físico iOS/Android utiliza-se o IP da máquina
# Alguns outros IP´s (Emulador Android Studio: 10.0.2.2:PORT), (Emulador Genymotion: 10.0.3.2:PORT)
# --------------------------------------------------------------

# Se você deseja emular com o Android, execute este comando
# Certifique-se de abrir o emulador ou estar com o dispositivo físico em modo depuração
$ yarn android

# Se você deseja emular com o iOS, execute este comando
$ yarn ios
```

---

Desenvolvido com 💜 por [Felipe Zanetti!](https://www.linkedin.com/in/felipezanetti/)
