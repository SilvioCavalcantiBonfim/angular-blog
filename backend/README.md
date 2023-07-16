# Backend para Sistema de Blog com Nest.js, Prisma e MySQL

![Typescript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![nest](https://img.shields.io/badge/-nestJS-white?style=for-the-badge&logo=nestjs&color=E0234E&logoColor=white)
![mysql](https://img.shields.io/badge/-mysql-white?style=for-the-badge&logo=mysql&color=4479A1&logoColor=white)
![prisma](https://img.shields.io/badge/-prisma-white?style=for-the-badge&logo=prisma&color=2D3748&logoColor=white)

Este é um projeto de backend usando o framework Nest.js com integração ao Prisma para acesso ao banco de dados MySQL. O objetivo deste projeto é fornecer uma estrutura completa para desenvolver um backend para um sistema de blog, incluindo um CMS para gerenciamento de conteúdo. O sistema suporta rotas públicas para leitura de conteúdo e rotas protegidas para a criação, atualização e exclusão de conteúdo, utilizando autenticação JWT (JSON Web Token).

## Configuração do Ambiente

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

1. Clone este repositório para sua máquina local.
2. Na raiz do projeto, execute `npm install` ou `yarn install` para instalar as dependências.
3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. Você pode se basear no arquivo `.env.example` fornecido.
4. Certifique-se de ter um servidor MySQL em execução e atualize as informações de conexão no arquivo `prisma/schema.prisma`.
5. Execute `npx prisma generate` para gerar os artefatos do Prisma com base no schema definido.
6. Execute `npm run start:dev` ou `yarn start:dev` para iniciar o servidor de desenvolvimento.

## Estrutura do Projeto

- `src`: Contém o código-fonte principal do projeto.
  - `article`: Recurso resposavel por gerenciar as rotas, serviços, modulos e DTO's relativas a artigos do blog.
  - `comment`: Recurso resposavel por gerenciar as rotas, serviços, modulos e DTO's relativas a comentários dos artigos.
  - `profile`: Recurso resposavel por gerenciar as rotas, serviços, modulos e DTO's relativas a perfil de usuários.
  - `setting`: Recurso resposavel por gerenciar as rotas, serviços, modulos e DTO's relativas as configurações do blog.
  - `app.module.ts`: Arquivo de configuração do módulo principal da aplicação.
  - `main.ts`: Arquivo de entrada da aplicação.

## Autenticação JWT

Este projeto utiliza autenticação JWT para proteger rotas específicas. A implementação da autenticação JWT pode ser encontrada na pasta `auth` e é aplicada às rotas que exigem autenticação. Certifique-se de fornecer um token JWT válido no cabeçalho `Authorization` ao acessar as rotas protegidas.

## Rotas

### Autenticação
- `POST /auth/login`: Rota de login que retorna um token JWT válido.

### Artigos
- `GET /article/read/all`: Rota pública para listar os artigos disponíveis.
- `GET /article/read/:id`: Rota pública para obter detalhes de um artigo específico.
- `POST /article/create`: Rota protegida para criar um novo artigo.
- `PUT /article/update/:id`: Rota protegida para atualizar um artigo existente.
- `DELETE /article/delete/:id`: Rota protegida para excluir um artigo existente.

### Comentários

- `POST /comment/create/:id_article`: Rota pública para criar um novo comentário em um artigo.
- `DELETE /comment/delete/:id`: Rota protegida para excluir um comentário existente.

### Perfil

- `GET /profile`: Rota privada retornar o perfil do usuário.
- `PUT /profile`: Rota protegida para atualizar o perfil do usuário.

### Configurações

- `GET /setting/theme/all`: Rota publica retornar a lista dos temas do blog.
- `GET /setting`: Rota publica retornar as configurações do blog.
- `PUT /setting`: Rota protegida para atualizar as configurações do blog.

> Apesar do sistema não possuir uma rota para a criação de usuários, ele já está preparado para receber essa funcionalidade no módulo de autenticação.

![BACKEND](https://github.com/SilvioCavalcantiBonfim/angular-blog/assets/89864715/e749d6da-d714-48d5-a4ba-917bfa1f28e5)

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
