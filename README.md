<div align="center">
    <img alt="Get Repos" title="Get Repos" src=".github/logo.png" width='250px'/>
</div>
<p align="center">
    <a href="https://github.com/fajzanetti">
        <img src="https://img.shields.io/badge/GitHub-fajzanetti-6c63ff?logo=GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/felipezanetti/">
        <img src="https://img.shields.io/badge/Linkedin-felipezanetti-6c63ff?logo=linkedin"/>
    </a>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fajzanetti/Codificar-Processo-Seletivo?color=6c63ff" />
    <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/fajzanetti/Codificar-Processo-Seletivo?color=6c63ff" />
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/fajzanetti/Codificar-Processo-Seletivo?color=6c63ff" />
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fajzanetti/Codificar-Processo-Seletivo?color=6c63ff" />
</p>
<p align="center">
  <a href="#-Desafio-Técnico-Fullstack---Intermediário">🚀 Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tarefas">📝 Tarefas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-O-que-foi-utilizado">📌 Desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Organização-do-código">📌 Organização</a>
</p>

> # Inicie clicando aqui: [**iniciar**](https://github.com/fajzanetti/Codificar-Processo-Seletivo/tree/master/back-end#readme).

# 🚀 Desafio Técnico Fullstack - Intermediário

Repositório do processo seletivo para o time de engenharia de software da Codificar.

Entre os itens avaliados durante esta tarefa estão: projeto e arquitetura da solução, organização do código, disciplina e proatividade.

# 📝 Tarefas

- [x] API para cadastro e autenticação de usuário;
- [x] API para criação, listar, editar e deletar de Post;
- [x] Front-end mobile com telas de login e cadastro de usuário, listagem, criação, edição e remoção de posts;

# 📌 O que foi utilizado

- React Native para o front-end.
- Nodejs para o back-end.
- TypeScript, ESLint, Prettier e EditorConfig para padronização de código.

# 📌 Organização do código

Duas pastas na raiz do repositório **back-end** e **mobile**, ambas separando front e back-end.

E todo código editável/público em ambas as pastas estão dentro da pasta **src**.

## Back-end

- Pasta **dist**, contém o código build gerado pelo comando: `yarn build`.
- Separei cada pasta/arquivo para uma determinada função:
    - Pasta **database** onde sua função é relacionada diretamente ao banco de dados;
    - Pasta **middlewares**, contém o arquivo que que garante que rotas privadas so seja acessadas com autenticação;
    - Pasta **utils**, contém um arquivo de formatação de data para o front-end não ser responsável por isso;
- Pasta **routes**, contém as regras de negócios de cada rota do back-end.

Acesse a pasta para mais informações e como iniciar o projeto clicando aqui: [Back-end](https://github.com/fajzanetti/Codificar-Processo-Seletivo/tree/master/back-end#readme).

## Front-end

- Pastas **android** e **ios**, são os códigos nativos.
- Pasta **assets** fora da pasta **src** é utilizada para arquivos que serão introduzidos no código nativo, como arquivos `ttf` (fonts).
- Pasta **assets** dentro da pasta **src**, contém imagens usadas dentro do front-end, como logo, splah screen e avatar.
- Pasta **components**, contém outras pastas com a seguinte estrutura (`index.tsx` e `style.ts`), cujos são arquivo de funcionalidades e estilização de um componente que pode repetir várias vezes dentro do projeto, como **Button e Input**.
- Pasta **hooks**, contém o arquivo `auth.tsx`, que de modo geral permite usar os dados do usuário em um contexto global na aplicação.
- Pasta **services**, arquivo de configuração para conexão com o back-end.
- Pasta **routes** e diferente do back-end, arquivos de configuração da navegação entre telas e aqui separa quais telas será necessario estar autenticado ou não para ter acesso.
- Pasta **pages**, seguindo a mesma estrutura da pasta **components** (`index.tsx` e `style.ts`), mas paras as funcionalidades e estilizações de cada tela da aplicação.

Acesse a pasta para mais informações e como iniciar o projeto clicando aqui: [Mobile](https://github.com/fajzanetti/Codificar-Processo-Seletivo/tree/master/mobile#readme).

---

Desenvolvido com 💜 por [Felipe Zanetti!](https://www.linkedin.com/in/felipezanetti/)
