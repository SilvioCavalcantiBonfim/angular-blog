# Blog em Angular com CMS e Backend em Nest.js (Monorepo)

![Typescript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![nest](https://img.shields.io/badge/-nestJS-white?style=for-the-badge&logo=nestjs&color=E0234E&logoColor=white)
![mysql](https://img.shields.io/badge/-mysql-white?style=for-the-badge&logo=mysql&color=4479A1&logoColor=white)
![prisma](https://img.shields.io/badge/-prisma-white?style=for-the-badge&logo=prisma&color=2D3748&logoColor=white)
![angular](https://img.shields.io/badge/-angular-white?style=for-the-badge&logo=angular&color=DD0031&logoColor=white)
![tailwindcss](https://img.shields.io/badge/-tailwind_css-white?style=for-the-badge&logo=tailwindcss&color=06B6D4&logoColor=white)
![lottie](https://img.shields.io/badge/-Lottie-white?style=for-the-badge&color=08ccbc&logoColor=white)
![docker](https://img.shields.io/badge/-docker-white?style=for-the-badge&logo=docker&color=2496ED&logoColor=white)


Este é um projeto de blog completo desenvolvido em Angular para o frontend, com um CMS (Sistema de Gerenciamento de Conteúdo) integrado, e um backend em Nest.js que se comunica com um banco de dados MySQL usando o Prisma como ORM (Object-Relational Mapping). O projeto é organizado em um monorepo, o que significa que o frontend, o CMS e o backend estão agrupados em um único repositório. Além disso, o projeto possui uma configuração Docker para facilitar a execução da demonstração.

## Configuração do Ambiente

Certifique-se de ter o Docker instalado em sua máquina.

1. Clone este repositório para sua máquina local.
2. Na raiz do projeto, execute o comando `docker compose up` para iniciar os containers do blog, CMS, backend e banco de dados MySQL.

## Acesso à Demo

Após a execução do comando `docker compose up`, a demo estará disponível nos seguintes URLs:

- Blog: [http://localhost:4200](http://localhost:4200)
- CMS: [http://localhost:4100](http://localhost:4100). Email: admin@blog.com e senha: 123456
- Backend: [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

- [Blog](./blog/README.md): Contém o código-fonte e as instruções para o blog em Angular.
- [cms](./CMS/README.md): Contém o código-fonte e as instruções para o CMS em Angular.
- [backend](./backend/README.md): Contém o código-fonte e as instruções para o backend em Nest.js.
- O arquivo `init.db` no diretório `.docker/mysql` é uma base de dados inicial para o sistema.

## Recursos e Funcionalidades

- Blog em Angular:
  - Visualização de artigos do blog em uma interface intuitiva e amigável para o usuário.
  - Comentários e interações sociais integrados para envolvimento dos leitores.
  - Página de detalhes do artigo com conteúdo completo, informações adicionais e seção de comentários.
  - Páginas de pesquisa e filtragem para encontrar posts específicos.

- CMS:
  - Gerenciamento de artigos: criação, edição e exclusão de artigos.
  - Moderação de comentários.
  - Personalização do layout e estilo do blog.

- Backend em Nest.js:
  - API RESTful para comunicação entre o blog, o CMS e o banco de dados MySQL usando Prisma como ORM.
  - Gerenciamento de dados no banco de dados MySQL, incluindo artigos e comentários.

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).